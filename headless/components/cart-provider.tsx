"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Product, ProductVariant } from "@/lib/types";

export type CartItem = {
  merchandiseId: string;
  handle: string;
  title: string;
  variantTitle: string;
  price: string;
  currencyCode: string;
  image: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  addItem: (product: Product, variant: ProductVariant) => void;
  updateQuantity: (merchandiseId: string, quantity: number) => void;
  removeItem: (merchandiseId: string) => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "kinrow-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [isHydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) setItems(JSON.parse(stored) as CartItem[]);
    } catch {
      window.localStorage.removeItem(storageKey);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(storageKey, JSON.stringify(items));
  }, [isHydrated, items]);

  const addItem = useCallback((product: Product, variant: ProductVariant) => {
    if (!variant.id) return;
    const merchandiseId = variant.id;
    setItems((current) => {
      const existing = current.find((item) => item.merchandiseId === merchandiseId);
      if (existing) {
        return current.map((item) =>
          item.merchandiseId === merchandiseId ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [
        ...current,
        {
          merchandiseId,
          handle: product.handle,
          title: product.title,
          variantTitle: variant.title,
          price: variant.price.amount,
          currencyCode: variant.price.currencyCode,
          image: variant.image?.url || product.featuredImage.url,
          quantity: 1,
        },
      ];
    });
    setOpen(true);
  }, []);

  const updateQuantity = useCallback((merchandiseId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.merchandiseId !== merchandiseId));
      return;
    }
    setItems((current) => current.map((item) => (item.merchandiseId === merchandiseId ? { ...item, quantity } : item)));
  }, []);

  const removeItem = useCallback((merchandiseId: string) => {
    setItems((current) => current.filter((item) => item.merchandiseId !== merchandiseId));
  }, []);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      setOpen,
      addItem,
      updateQuantity,
      removeItem,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0),
    }),
    [addItem, isOpen, items, removeItem, updateQuantity],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider.");
  return context;
}
