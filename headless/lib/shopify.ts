import "server-only";
import { demoProducts } from "./demo-products";
import type { Catalog, Product, ProductVariant, StoreImage } from "./types";

const domain = process.env.SHOPIFY_STORE_DOMAIN?.replace(/^https?:\/\//, "").replace(/\/$/, "");
const storefrontToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const apiVersion = process.env.SHOPIFY_STOREFRONT_API_VERSION || "2026-07";

type ShopifyResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

type ShopifyImage = StoreImage | null;

type ShopifyVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  price: { amount: string; currencyCode: string };
  selectedOptions: Array<{ name: string; value: string }>;
  image?: ShopifyImage;
};

type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  tags: string[];
  featuredImage: ShopifyImage;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  variants: { nodes: ShopifyVariant[] };
};

export function isShopifyConfigured() {
  return Boolean(domain && storefrontToken);
}

export async function shopifyFetch<T>(query: string, variables: Record<string, unknown> = {}) {
  if (!domain || !storefrontToken) {
    throw new Error("Shopify Storefront API is not configured.");
  }

  const response = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontToken,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Shopify request failed with status ${response.status}.`);
  }

  const result = (await response.json()) as ShopifyResponse<T>;
  if (result.errors?.length || !result.data) {
    throw new Error(result.errors?.map((error) => error.message).join("; ") || "Shopify returned no data.");
  }

  return result.data;
}

const productFields = `
  id
  handle
  title
  description
  descriptionHtml
  availableForSale
  tags
  featuredImage { url altText width height }
  priceRange { minVariantPrice { amount currencyCode } }
  variants(first: 20) {
    nodes {
      id
      title
      availableForSale
      price { amount currencyCode }
      selectedOptions { name value }
      image { url altText width height }
    }
  }
`;

function mapProduct(product: ShopifyProduct): Product {
  const fallbackImage: StoreImage = {
    url: "/images/kinrow-axis-kit.webp",
    altText: `${product.title} by KINROW`,
  };

  return {
    id: product.id,
    handle: product.handle,
    title: product.title,
    description: product.description,
    descriptionHtml: product.descriptionHtml,
    availableForSale: product.availableForSale,
    tags: product.tags,
    featuredImage: product.featuredImage || fallbackImage,
    price: product.priceRange.minVariantPrice,
    variants: product.variants.nodes.map(
      (variant): ProductVariant => ({
        id: variant.id,
        title: variant.title,
        availableForSale: variant.availableForSale,
        price: variant.price,
        selectedOptions: variant.selectedOptions,
        image: variant.image,
      }),
    ),
  };
}

export async function getCatalog(): Promise<Catalog> {
  if (!isShopifyConfigured()) {
    return {
      products: demoProducts,
      source: "preview",
      message: "Connect the Shopify Storefront API to enable live inventory and checkout.",
    };
  }

  try {
    const data = await shopifyFetch<{ products: { nodes: ShopifyProduct[] } }>(`
      query StorefrontProducts {
        products(first: 24, sortKey: CREATED_AT, reverse: true) {
          nodes { ${productFields} }
        }
      }
    `);

    if (data.products.nodes.length === 0) {
      return {
        products: demoProducts,
        source: "preview",
        message: "Shopify is connected. Publish approved products to the Headless channel to enable checkout.",
      };
    }

    return { products: data.products.nodes.map(mapProduct), source: "shopify" };
  } catch {
    return {
      products: demoProducts,
      source: "preview",
      message: "The catalog preview is shown while Shopify connectivity is being completed.",
    };
  }
}

export async function getProduct(handle: string): Promise<Product | null> {
  if (isShopifyConfigured()) {
    try {
      const data = await shopifyFetch<{ product: ShopifyProduct | null }>(
        `query ProductByHandle($handle: String!) {
          product(handle: $handle) { ${productFields} }
        }`,
        { handle },
      );
      if (data.product) return mapProduct(data.product);
    } catch {
      // Fall through to the preview product while the backend is being configured.
    }
  }

  return demoProducts.find((product) => product.handle === handle) || null;
}

export async function createCart(lines: Array<{ merchandiseId: string; quantity: number }>) {
  const data = await shopifyFetch<{
    cartCreate: {
      cart: { id: string; checkoutUrl: string } | null;
      userErrors: Array<{ field: string[] | null; message: string }>;
    };
  }>(
    `mutation CreateCart($input: CartInput!) {
      cartCreate(input: $input) {
        cart { id checkoutUrl }
        userErrors { field message }
      }
    }`,
    { input: { lines } },
  );

  const error = data.cartCreate.userErrors[0];
  if (error) throw new Error(error.message);
  if (!data.cartCreate.cart) throw new Error("Shopify could not create the cart.");
  return data.cartCreate.cart;
}
