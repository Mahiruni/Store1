# KINROW Shopify Store

A production-structured Shopify Online Store 2.0 theme and launch system for a premium, editorial-minimal home strength and mobility brand.

The repository contains:

- a customized Shopify Dawn 16.0.0 foundation;
- an original responsive KINROW homepage and design system;
- conversion-focused PDP, cart drawer, mobile bottom navigation, sticky add-to-cart, verified-review slots, related and recently viewed products;
- customer-care, legal, tracking, warranty, fit, 404, and offline states;
- draft product catalog and page setup matrix;
- the complete brand, CRO, SEO, lifecycle, analytics, compliance, roadmap, and QA specification.

Read [docs/STORE_SPEC.md](docs/STORE_SPEC.md) before configuring Shopify. It records every assumption and the non-negotiable pre-launch gates.

## Preview and validate

Install the current Shopify CLI, authenticate to a development store, then run from this directory:

```bash
shopify theme check
shopify theme dev --store your-store.myshopify.com
```

To upload as an unpublished theme:

```bash
shopify theme push --unpublished --store your-store.myshopify.com
```

You can alternatively connect this repository branch through Shopify’s GitHub theme integration. Never test material changes against the published theme.

## Shopify setup order

1. Set shop name to **KINROW**, USD, English, US primary market, sender domain, taxes, locations, shipping profile, and checkout branding.
2. Import [data/products.csv](data/products.csv). Products intentionally remain drafts. The image URLs work after the branch is merged to `main`.
3. Replace every concept/campaign product image with photography of the approved production sample. Add 6–8 images and a captioned setup video per hero product.
4. Enter verified specifications, weights, origin, care, warnings, COGS, barcodes, inventory, and fulfillment location before activation.
5. Create the pages listed in [data/pages.csv](data/pages.csv). Shopify does not natively import that file; it is a setup matrix. The default page template selects final copy by handle. Assign the `contact` template to Contact.
6. Create navigation handles `main-menu`, `footer`, and `policies`. Keep the header to five top-level links as specified.
7. Create `Strength & Mobility` and `Recovery & Mobility` collections; configure Search & Discovery filters and complementary products. Select the upsell collection in Theme settings → Cart.
8. Define `custom.bundle_message` as a product single-line text metafield. Populate it only after a real automatic discount or Shopify Bundle passes checkout testing.
9. Install Judge.me and place its app blocks in the homepage/PDP review slots. Do not import supplier or AliExpress reviews.
10. Configure Klaviyo, consent, payments, pixels, policies, notifications, and the full QA checklist before publishing.

## Truth gates

The build does not invent a founder, physical address, reviews, scarcity, certifications, materials, resistance/load ratings, exact dimensions, country of origin, inventory, costs, or supplier performance. Those require owner/supplier evidence and are listed as P0 launch gates. Do not change draft products to active until that evidence exists.

## Image assets

Original concept/campaign assets are in `assets/kinrow-*.webp`; WebP production versions are 40–100KB. PNG source renders are excluded from the final theme package to protect page weight. These images establish art direction and may be used as clearly identified campaign imagery, but must not misrepresent the exact shipped product.

## Architecture and license

KINROW custom files use the `kinrow-` prefix. The base is Shopify’s source-available Dawn theme; see [LICENSE.md](LICENSE.md). Keep the upstream license and attribution intact.

References: [Shopify CLI](https://shopify.dev/docs/storefronts/themes/tools/cli), [Theme Check](https://shopify.dev/docs/storefronts/themes/tools/theme-check/commands), and [GitHub theme integration](https://shopify.dev/docs/storefronts/themes/tools/github).
