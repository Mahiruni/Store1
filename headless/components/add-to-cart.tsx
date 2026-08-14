"use client";

import { useState } from "react";
import { formatMoney } from "@/lib/money";
import type { Product } from "@/lib/types";
import { useCart } from "./cart-provider";

export function AddToCart({ product }: { product: Product }) {
  const initialVariant = product.variants.find((variant) => variant.availableForSale) || product.variants[0];
  const [variantId, setVariantId] = useState(initialVariant?.id || "");
  const { addItem } = useCart();
  const selectedVariant = product.variants.find((variant) => variant.id === variantId) || initialVariant;
  const canAdd = Boolean(selectedVariant?.id && selectedVariant.availableForSale && !product.isDemo);

  return (
    <div className="buy-box">
      {product.variants.length > 1 && (
        <fieldset className="variant-picker">
          <legend>Choose an option</legend>
          <div>
            {product.variants.map((variant) => (
              <label key={variant.id || variant.title} className={!variant.availableForSale ? "is-unavailable" : ""}>
                <input type="radio" name="variant" value={variant.id || ""} checked={variant.id === variantId} disabled={!variant.availableForSale} onChange={() => setVariantId(variant.id || "")} />
                <span>{variant.title}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <button className="button button-dark button-wide" disabled={!canAdd} onClick={() => selectedVariant && addItem(product, selectedVariant)}>
        {product.isDemo
          ? "Publish in Shopify to purchase"
          : selectedVariant?.availableForSale
            ? `Add to bag · ${formatMoney(selectedVariant.price.amount, selectedVariant.price.currencyCode)}`
            : "Sold out"}
      </button>
      <div className="buy-assurances"><span>30-day returns</span><span>Secure Shopify checkout</span><span>Ships in 1–2 business days</span></div>
    </div>
  );
}
