import Image from "next/image";
import Link from "next/link";
import { formatMoney } from "@/lib/money";
import type { Product } from "@/lib/types";
import { ArrowIcon } from "./icons";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.handle}`} className="product-card-media" aria-label={`View ${product.title}`}>
        <Image
          src={product.featuredImage.url}
          alt={product.featuredImage.altText || product.title}
          fill
          sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 31vw"
          preload={priority}
        />
        <span className="product-card-arrow"><ArrowIcon /></span>
        {product.isDemo && <span className="preview-pill">Preview</span>}
      </Link>
      <div className="product-card-copy">
        <div><h3><Link href={`/products/${product.handle}`}>{product.title}</Link></h3><p>{product.tags.slice(0, 2).join(" · ")}</p></div>
        <strong>{formatMoney(product.price.amount, product.price.currencyCode)}</strong>
      </div>
    </article>
  );
}
