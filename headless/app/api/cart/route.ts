import { NextResponse } from "next/server";
import { createCart } from "@/lib/shopify";

type CartLine = { merchandiseId: string; quantity: number };

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { lines?: CartLine[] };
    const lines = body.lines?.filter(
      (line) => typeof line.merchandiseId === "string" && line.merchandiseId.startsWith("gid://shopify/ProductVariant/") && Number.isInteger(line.quantity) && line.quantity > 0,
    );
    if (!lines?.length) return NextResponse.json({ error: "Your bag is empty." }, { status: 400 });
    const cart = await createCart(lines);
    return NextResponse.json({ checkoutUrl: cart.checkoutUrl });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Checkout is temporarily unavailable." },
      { status: 502 },
    );
  }
}
