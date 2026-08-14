# KINROW Supplier and Product Standards

These gates apply before any shortlisted product can be activated in Shopify. Product-specific requirements in `products.json` are mandatory in addition to this baseline.

## 1. Supplier qualification

- Compare at least two independent supplier candidates for every product.
- Record the exact product URL, supplier name, business age where available, store rating, order history, recent photo-review pattern, and response time.
- Obtain a written delivered-US quote that separates unit price, shipping, duty/tax assumptions, packaging, and any minimum order quantity.
- Confirm processing time, trackable delivery method, estimated delivery range, cancellation terms, defect policy, and return address.
- Reject unexplained brand-name copies, manipulated reviews, inconsistent product photos, unverifiable test reports, or requests to transact outside the approved platform flow.
- Keep supplier credentials, tokens, invoices containing personal data, and private messages out of GitHub.

## 2. Rights, claims, and compliance

- Use original KINROW copy and properly licensed product images. Do not copy supplier trademarks, competitor marks, packaging artwork, or customer reviews.
- Do not make medical, pain-relief, rehabilitation, therapeutic, weight-loss, or performance claims without substantiation and legal review.
- Ask for test reports and compliance documents applicable to the destination market and exact ordered variant. Verify document scope, laboratory identity, model number, and date rather than relying on badges in a listing.
- Ensure labels and the product page state material composition, quantity, dimensions, weight, care instructions, warnings, country of origin, and responsible-business details where applicable.
- Escalate load-bearing, hydraulic, locking, electrical, children's, or skin-contact products for category-specific compliance and product-liability review.

## 3. Sample acceptance

- Order the exact material, color, size, resistance, weight, and packaging variant intended for sale.
- Photograph the unopened package, shipping label, all components, warnings, and any damage on arrival.
- Measure the product against the listed dimensions and weight. Use the tighter product-specific tolerance when one is specified.
- Inspect finish, odor, sharp edges, loose parts, seams, closures, printed information, and component count.
- Perform every product-specific functional check in `products.json`; keep the result, tester, date, sample lot, and evidence link.
- Fail the sample if a required check fails, the delivered item differs materially from the listing, or the supplier cannot explain a safety-critical inconsistency.
- Re-sample after any supplier, factory, material, construction, or safety-critical variant change.

## 4. Economics and fulfillment

- Treat `landedCostCapUsd` as the ceiling for product, freight, duty, and packaging combined—not merely the listing price.
- Recalculate contribution after payment fees, a returns reserve, discounts, taxes paid by the business, and expected reshipments.
- Confirm package dimensions and billed weight using the packed sample. For heavy or bulky items, prefer a local warehouse and domestic return address.
- Test tracking from dispatch to delivery and confirm that DSers can map every offered Shopify variant to one stable supplier variant.
- Keep `Continue selling when out of stock` disabled unless a separately approved back-order policy exists.

## 5. Shopify release control

- Create products as `draft`, unpublished, with inventory set to zero during sourcing and QA.
- Use original titles and descriptions; disclose the exact contents, material, size, product weight, and key limitations.
- Add only approved images and meaningful alt text. Remove supplier watermarks, badges, delivery promises, and unsupported claims.
- Verify SKU uniqueness, price, compare-at-price legality, tax settings, weight, shipping profile, variant mapping, inventory sync, and returns wording.
- Perform a test order through the intended sales channel before activation.
- Save the approval record with the selected supplier URL, exact variant, sample result, landed cost, reviewer, and review date.

## 6. Decision controls

- **Launch:** eligible for sourcing and sampling; still blocked from publication until all gates pass.
- **Pilot:** eligible only for a limited trial after its named risk is validated and all gates pass.
- **Watch:** not eligible for Shopify activation. Reassess only when the weak logistics, quality, or safety evidence changes.
- **Avoid:** excluded from sourcing and publication under the current specification. A new independently reviewed case is required before reconsideration.

The Foldable Pilates Reformer Board and Adjustable Dumbbell Pair are explicitly blocked by the present safety and fulfillment standards. The Compact Mini Stepper remains blocked pending stronger load-testing, hydraulic, logistics, and returns evidence.
