import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { getCatalog } from "@/lib/shopify";

export const metadata: Metadata = {
  title: "Shop considered movement tools",
  description: "Explore the complete KINROW strength and mobility collection.",
};

export default async function ShopPage() {
  const catalog = await getCatalog();
  return (
    <div className="shop-page shell">
      <header className="page-hero">
        <div><p className="eyebrow">The complete system</p><h1>Useful tools.<br />Nothing extra.</h1></div>
        <p>Six considered pieces for strength, mobility, and recovery—designed to work together and live quietly at home.</p>
      </header>
      {catalog.source === "preview" && <div className="catalog-notice" role="status"><span>Preview catalog</span><p>{catalog.message}</p></div>}
      <div className="shop-toolbar"><span>{catalog.products.length} pieces</span><span>Strength · Mobility · Recovery</span></div>
      <div className="product-grid shop-grid">{catalog.products.map((product) => <ProductCard product={product} key={product.id} />)}</div>
    </div>
  );
}
