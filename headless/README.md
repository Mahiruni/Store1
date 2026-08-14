# KINROW Headless Storefront

Next.js App Router storefront for the KINROW Shopify catalog.

## Local development

Copy `.env.example` to `.env.local`, add the Shopify Headless channel public Storefront token, then run:

```bash
npm install
npm run dev
```

The app uses Shopify products when the Storefront API is configured and has published products. Until then it displays the included preview catalog with checkout disabled.

## Shopify requirements

1. Install the Headless sales channel.
2. Create a storefront and enable product/cart permissions.
3. Import and verify the product catalog.
4. Change approved products to active and publish them to the Headless channel.
5. Configure payments, shipping, taxes, policies, inventory, and an active Shopify plan before accepting orders.

Never commit an Admin API token or private Storefront token.
