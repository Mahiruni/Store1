export type Money = {
  amount: string;
  currencyCode: string;
};

export type StoreImage = {
  url: string;
  altText: string;
  width?: number | null;
  height?: number | null;
};

export type ProductVariant = {
  id: string | null;
  title: string;
  availableForSale: boolean;
  price: Money;
  selectedOptions: Array<{ name: string; value: string }>;
  image?: StoreImage | null;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml?: string;
  availableForSale: boolean;
  tags: string[];
  featuredImage: StoreImage;
  price: Money;
  variants: ProductVariant[];
  isDemo?: boolean;
};

export type Catalog = {
  products: Product[];
  source: "shopify" | "preview";
  message?: string;
};
