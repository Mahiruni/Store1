# KINROW Product Sourcing Catalog

This directory is the source-controlled handoff for the KINROW product shortlist researched on 2026-08-14. It contains all ten evaluated concepts, their sourcing decisions, DSers/AliExpress search phrases, target economics, product-specific specifications, and supplier acceptance checks.

Nothing in this directory is a supplier mapping or permission to publish a product. Every product must remain a Shopify draft until the relevant quality gates in [SUPPLIER_STANDARDS.md](./SUPPLIER_STANDARDS.md) pass.

## Portfolio

| Product | Decision | Score / 5 | Target retail | Landed-cost cap |
| --- | --- | ---: | ---: | ---: |
| Release Cork Mobility Duo | Launch | 5.00 | $34.00 | $9.00 |
| Form Fabric Loop Set | Launch | 4.85 | $39.00 | $11.00 |
| Halo Pilates Starter Kit | Launch | 4.70 | $49.00 | $15.00 |
| Arc Multi-Loop Stretch Strap | Launch | 4.60 | $29.00 | $8.00 |
| Quiet Core Sliders | Launch | 4.60 | $24.00 | $6.00 |
| Studio Grip Socks — 2 Pack | Pilot | 4.20 | $29.00 | $8.50 |
| Anchor Soft Wrist & Ankle Weights | Pilot | 4.05 | $59.00 | $20.00 |
| Compact Mini Stepper with Bands | Watch | 3.20 | $119.00 | $52.00 |
| Foldable Pilates Reformer Board | Avoid | 3.25 | $149.00 | $60.00 |
| Adjustable Dumbbell Pair | Avoid | 2.40 | $329.00 | $160.00 |

Decision meanings:

- **Launch:** source at least two candidates, order a sample, and prepare a Shopify draft only after the sample passes.
- **Pilot:** validate the named risk, then test a small assortment before wider launch.
- **Watch:** keep out of the active catalog until logistics, safety, and quality evidence improve.
- **Avoid:** do not source or publish under the present risk profile.

## Files

- `products.json` — machine-readable records for all ten products, including specifications and supplier checks.
- `SUPPLIER_STANDARDS.md` — mandatory portfolio-wide and decision-specific quality gates.
- `kinrow_shopify_product_shortlist.xlsx` — working workbook with unit economics, editable scoring assumptions, Shopify draft rows for Launch/Pilot items, import instructions, and sources.

## Safe operating sequence

1. Search the exact `supplierSearchPhrase` in `products.json` using DSers/AliExpress.
2. Compare at least two suppliers and record the supplier URL, delivered cost, delivery estimate, return terms, and available test evidence in the workbook.
3. Order the exact variant intended for sale and inspect it against every `requiredSpecs` and `supplierChecks` item.
4. Reject the sample if any mandatory check fails. Do not weaken a safety standard to meet a price target.
5. For an approved Launch/Pilot product, import through DSers and map every Shopify variant to its exact supplier variant.
6. Keep inventory at zero and Shopify status at `draft` until copy, images, pricing, shipping, tax, returns, and channel publishing are reviewed.
7. Publish only approved products to the Headless sales channel, then verify the product page and checkout flow on the Vercel preview.

Supplier trademarks, certification claims, medical claims, reviews, and images must not be copied without permission and supporting evidence. The trend sources are directional research, not supplier-level proof.
