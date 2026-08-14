import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartDrawer } from "@/components/cart-drawer";
import { CartProvider } from "@/components/cart-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { KINROW_ASSETS } from "@/lib/assets";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://kinrow.vercel.app"),
  title: { default: "KINROW — Strength that fits your life", template: "%s | KINROW" },
  description: "Quietly capable strength and mobility tools for small spaces, busy days, and routines you can actually keep.",
  openGraph: {
    title: "KINROW — Strength that fits your life",
    description: "Considered movement tools, made compact.",
    images: [KINROW_ASSETS.hero],
  },
};

export const viewport: Viewport = { themeColor: "#f4efe6", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
