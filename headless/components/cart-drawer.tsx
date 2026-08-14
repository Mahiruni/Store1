"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatMoney } from "@/lib/money";
import { CloseIcon } from "./icons";
import { useCart } from "./cart-provider";

export function CartDrawer() {
  const { items, isOpen, setOpen, subtotal, updateQuantity, removeItem } = useCart();
  const [isCheckingOut, setCheckingOut] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  async function checkout() {
    setCheckingOut(true);
    setError("");
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lines: items.map((item) => ({ merchandiseId: item.merchandiseId, quantity: item.quantity })),
        }),
      });
      const result = (await response.json()) as { checkoutUrl?: string; error?: string };
      if (!response.ok || !result.checkoutUrl) throw new Error(result.error || "Checkout is not available yet.");
      window.location.assign(result.checkoutUrl);
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "Checkout is not available yet.");
      setCheckingOut(false);
    }
  }

  return (
    <div className={`cart-layer ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
      <button className="cart-scrim" aria-label="Close bag" onClick={() => setOpen(false)} tabIndex={isOpen ? 0 : -1} />
      <aside className="cart-drawer" aria-label="Shopping bag" role="dialog" aria-modal="true">
        <div className="cart-heading">
          <div>
            <p className="eyebrow">Your selection</p>
            <h2>Shopping bag</h2>
          </div>
          <button className="icon-button" aria-label="Close bag" onClick={() => setOpen(false)}><CloseIcon /></button>
        </div>

        {items.length === 0 ? (
          <div className="empty-cart">
            <span className="empty-cart-mark">K</span>
            <h3>Your bag is quiet.</h3>
            <p>Choose one useful piece and start with the routine you can repeat.</p>
            <Link href="/shop" className="button button-dark" onClick={() => setOpen(false)}>Explore the collection</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.merchandiseId}>
                  <Link href={`/products/${item.handle}`} onClick={() => setOpen(false)} className="cart-item-image">
                    <Image src={item.image} alt="" fill sizes="112px" />
                  </Link>
                  <div className="cart-item-copy">
                    <div>
                      <Link href={`/products/${item.handle}`} onClick={() => setOpen(false)}>{item.title}</Link>
                      {item.variantTitle !== "Default Title" && <p>{item.variantTitle}</p>}
                    </div>
                    <strong>{formatMoney(item.price, item.currencyCode)}</strong>
                    <div className="cart-item-actions">
                      <div className="quantity-control" aria-label={`Quantity for ${item.title}`}>
                        <button aria-label="Decrease quantity" onClick={() => updateQuantity(item.merchandiseId, item.quantity - 1)}>−</button>
                        <span>{item.quantity}</span>
                        <button aria-label="Increase quantity" onClick={() => updateQuantity(item.merchandiseId, item.quantity + 1)}>+</button>
                      </div>
                      <button className="text-button" onClick={() => removeItem(item.merchandiseId)}>Remove</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="cart-footer">
              <div className="shipping-progress">
                <div><span>{subtotal >= 75 ? "You unlocked free US shipping" : `${formatMoney(String(75 - subtotal), "USD")} from free US shipping`}</span><span>{Math.min(100, (subtotal / 75) * 100).toFixed(0)}%</span></div>
                <div className="shipping-track"><span style={{ width: `${Math.min(100, (subtotal / 75) * 100)}%` }} /></div>
              </div>
              <div className="cart-total"><span>Estimated subtotal</span><strong>{formatMoney(String(subtotal), items[0]?.currencyCode || "USD")}</strong></div>
              <p className="cart-note">Shipping and taxes are calculated securely by Shopify at checkout.</p>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="button button-dark button-wide" disabled={isCheckingOut} onClick={checkout}>
                {isCheckingOut ? "Opening secure checkout…" : "Continue to checkout"}
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
