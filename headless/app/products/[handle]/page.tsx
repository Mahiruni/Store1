import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/add-to-cart";
import { ArrowIcon } from "@/components/icons";
import { formatMoney } from "@/lib/money";
import { getProduct } from "@/lib/shopify";

type ProductPageProps = { params: Promise<{ handle: string }> };

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) return {};
  return { title: product.title, description: product.description, openGraph: { images: [product.featuredImage.url] } };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) notFound();

  return (
    <div className="product-page shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/shop">Shop</Link><span>/</span><span>{product.title}</span></nav>
      <div className="product-layout">
        <div className="product-gallery">
          <div className="product-main-image"><Image src={product.featuredImage.url} alt={product.featuredImage.altText || product.title} fill preload sizes="(max-width: 900px) 100vw, 58vw" />{product.isDemo && <span className="preview-pill">Preview</span>}</div>
          <div className="product-detail-tile"><span>Designed to store small</span><strong>K</strong><span>Built for repeat use</span></div>
        </div>
        <section className="product-info">
          <p className="eyebrow">KINROW movement system</p>
          <h1>{product.title}</h1>
          <div className="product-price"><strong>{formatMoney(product.price.amount, product.price.currencyCode)}</strong><span>Taxes calculated at checkout</span></div>
          <p className="product-description">{product.description}</p>
          <div className="product-highlights">
            {product.tags.slice(0, 3).map((tag, index) => <span key={tag}><b>0{index + 1}</b>{tag}</span>)}
          </div>
          <AddToCart product={product} />
          <div className="product-accordions">
            <details open><summary>Why it earns its space</summary><p>Designed for straightforward setup, compact storage, and controlled progression without turning a room into a gym.</p></details>
            <details><summary>Shipping & delivery</summary><p>Allow 1–2 business days for processing, then 7–12 business days for standard US delivery after dispatch.</p></details>
            <details><summary>Returns</summary><p>Request a return within 30 days of delivery. All components must be included and free from damage beyond careful trial use.</p></details>
            <details><summary>Before first use</summary><p>Inspect every component, begin with the lightest manageable resistance, and stop if movement causes sharp pain. Product specifications must be verified before commercial launch.</p></details>
          </div>
        </section>
      </div>
      <section className="product-quote"><p className="eyebrow">A steadier starting point</p><h2>Choose control before intensity.</h2><p>The right first resistance is the one you can move through smoothly, with enough attention left to notice your form.</p><Link href="/help#faq" className="text-link">Read the starting guide <ArrowIcon /></Link></section>
    </div>
  );
}
