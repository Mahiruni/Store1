# KINROW — Production Store Specification

Version 1.0 · August 13, 2026

## 1. Stated assumptions

The source brief contained no completed store inputs, so this build proceeds with the following explicit assumptions:

| Input | Assumption |
|---|---|
| Brand | **KINROW** |
| Category | Editorial-minimal home strength and mobility equipment |
| Hero products | Axis Resistance Kit, Form Fabric Loops, Anchor Ankle Weights, Release Mobility Set, Arc Stretch Strap, Ground Foldable Mat |
| Customer | US adults 28–45, household income $70k+, limited space/time, values design and consistency over gym culture; discovers products on Instagram, TikTok, YouTube, Pinterest, and search |
| Market | United States / USD / English |
| Price range | $29–$129 |
| Fulfillment | CJ/private-label manufacturing partner with inventory and tracking synced to Shopify |
| Delivery | 1–2 business days processing plus 7–12 business days standard US delivery |
| Personality | Calm, precise, useful |
| Competition | Bala, P.volve, and TRX as category references—not visual clones |
| Returns/warranty | 30-day Move-With-It Promise; one-year limited workmanship warranty |
| Shipping offer | Free standard US shipping at $75 after discounts, before tax |

Two facts cannot be responsibly assumed: a founder identity and a legal business address. Inventing either would violate the trust rule. The owner must add a real founder biography/photo, legal entity, physical service address, tax nexus, and governing-law state before publication. Products import as **drafts** until samples, specifications, origin, inventory, COGS, media, and fulfillment SLAs are verified.

Trade-off: the build is launch-structured but intentionally not auto-published. It trades a misleading “instant live store” for a controlled activation path with auditable launch gates.

## 2. Brand & design system

### Positioning

**Promise:** KINROW makes compact, considered movement tools that help a real home support a routine you can keep.

**Differentiators**

1. A small compatible system instead of an endless generic catalog.
2. Published delivery, return, material, and origin information before checkout.
3. Home-ready industrial design with plain-language setup and no fitness theatre.

### Naming and taglines

- Primary: **Strength that fits your life.**
- Alternate: **Move well. Live fully.**
- Alternate: **Small tools. Steady progress.**
- Alternate: **Make room for movement.**

The name combines *kin* (human connection and the kinetic root) with *row* (repeatable progress). The wordmark is uppercase **KINROW**, custom geometric grotesk, 14% tracking, with a shallow forward cut through the K and R terminals. The icon is a continuous rounded line forming a compact K inside a soft square. Use one color, never outline plus fill, never a fitness silhouette. Clear space equals the cap-height of the I. Minimum wordmark width: 88px digital, 24mm print.

### Voice

Write like a calm expert at the customer’s side: direct, specific, modest, and human. Prefer “supports” to “transforms,” and instructions to hype.

| Do | Don’t |
|---|---|
| “Processing takes 1–2 business days.” | “Ships instantly!” |
| “Start with the level you can control.” | “Crush your limits.” |
| “Designed to sit flatter than thin bands.” | “Guaranteed never to roll.” |
| “Results vary with consistent use.” | “Get toned in two weeks.” |
| “We’re new; verified reviews will appear here.” | “Loved by thousands” without evidence |

### Color tokens

```css
:root {
  --color-bg: #F7F3ED;
  --color-surface: #FFFDF9;
  --color-ink: #20251F;
  --color-muted: #5D655E;
  --color-accent: #9A3428;
  --color-accent-hover: #7D291F;
  --color-success: #2F6B4F;
  --color-warning: #8A4E00;
  --color-danger: #9E2F2F;
  --color-border: #D5CEC4;
}

[data-theme="dark"] {
  --color-bg: #171A18;
  --color-surface: #20251F;
  --color-ink: #F4EFE7;
  --color-muted: #B5BDB6;
  --color-accent: #E4836E;
  --color-accent-hover: #F19B87;
  --color-success: #87C7A7;
  --color-warning: #E8B871;
  --color-danger: #F09A9A;
  --color-border: #414842;
}
```

Verified contrast ratios:

| Pair | Ratio | Use |
|---|---:|---|
| Light ink / light background | 14.12:1 | Body and headings |
| Light muted / light background | 5.45:1 | Secondary body copy |
| Light accent / light background | 6.56:1 | Links and labels |
| White / light accent | 7.25:1 | Primary buttons |
| Dark ink / dark background | 15.32:1 | Body and headings |
| Dark muted / dark background | 9.12:1 | Secondary copy |
| Dark accent / dark background | 6.49:1 | Links and controls |

All pass WCAG AA for body text. Status colors never carry meaning alone. The shipped storefront fixes the commercial experience to the light scheme; the dark tokens are ready for a future tested toggle. This avoids an untested automatic palette change affecting product color evaluation.

### Typography

- Display: **DM Sans**, 500/600/700.
- Text/UI: **Inter**, 400/500/600/700.
- Both are real Google Fonts. Theme loads them with preconnect and `display=swap`; system fallbacks remain available.
- Scale: 12/16, 14/20, 16/26, 18/28, 20/30, 24/32, 32/38, 40/44, 56/56 px.
- Headings: `letter-spacing: -0.035em`; eyebrow labels: `0.12em` uppercase.
- Body measure: 65–72 characters; never over 75.

### Space, shape, elevation, motion

- Space: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
- Radius: 6px control, 12px card/media, 24px feature, 999px pill.
- Shadows: `0 1px 2px rgba(32,37,31,.08)` and `0 12px 36px rgba(32,37,31,.12)`.
- Motion: 150ms micro, 250ms state, 400ms reveal; standard easing `cubic-bezier(.2,.8,.2,1)`.
- `prefers-reduced-motion: reduce` removes animation and smooth scrolling.

### Photography

Ratios: 16:9 hero, 1:1 catalog grid, 4:5 lifestyle/PDP. Shot list per hero product: clean front, 45-degree form, component flat lay, scale-in-hand, connection detail, storage state, real-home use, 8–15 second silent setup video. Use soft side daylight, warm ivory seamless/limewash, pale oak or travertine, charcoal product with one muted-clay accent.

Supplier-photo normalization: photograph the received sample; do not retouch shape, color, seams, hardware, or included components. Match 5000K white balance, a shared 15% shadow density, 8% grain maximum, and identical crop margins. Remove only dust and background inconsistencies. Concept campaign assets in this repository are direction-setting; replace exact-product PDP media after sample approval.

## 3. Sitemap and information architecture

| Page | URL | Purpose | Section order |
|---|---|---|---|
| Home | `/` | Position, prove, route | Announcement → header → hero → trust → best sellers → process → Axis deep dive → comparison → verified-review slot → consented community wall → FAQ → email → footer |
| All products | `/collections/all` | Browse complete range | H1/intro → filters/sort → grid → editorial copy → FAQ |
| Strength & Mobility | `/collections/strength-mobility` | Commercial category | H1 → use-case chips → grid → guide → FAQ |
| Recovery & Mobility | `/collections/recovery-mobility` | Commercial category | H1 → grid → education → FAQ |
| Product | `/products/{handle}` | Convert with clarity | Breadcrumb → gallery → title/price → variants → benefits → quantity/checkout → assurance → description/spec/shipping/return/FAQ → FBT → verified reviews → related → recent |
| Cart | `/cart` plus drawer | Confirm and advance | Items → quantity → shipping progress → one relevant upsell → total → policies → checkout |
| Search | `/search` | Find products/content | H1/search → results/filter/sort; honest empty state with suggested terms |
| Our Story | `/pages/our-story` | Explain standards | Promise → origin → selection → sourcing → founder → principles |
| Contact | `/pages/contact` | Resolve questions | SLA → channels → form → order links → address |
| FAQ | `/pages/faq` | Remove objections | Product → ordering → shipping → returns → safety |
| Shipping | `/pages/shipping-delivery` | Set timing/cost | Processing → transit → tracking → split parcels → delays |
| Returns | `/pages/returns-refunds` | Explain Move-With-It | Eligibility → steps → costs → refund timing → abuse boundary |
| Track order | `/pages/track-order` | Recover tracking | Explanation → secure support form → status glossary |
| Warranty | `/pages/warranty-guarantee` | Operational promise | 30-day trial → one-year defects → exclusions → claim |
| Fit guide | `/pages/fit-guide` | Safe selection/use | Loops → weights → bar → escalation |
| Blog | `/blogs/move-well` | Organic education | H1 → featured guide → topic filters → articles → email |
| Article | `/blogs/move-well/{handle}` | Answer and route | Breadcrumb → H1/byline → body/TOC → product connection → related guides |
| Policies | `/pages/{privacy-policy,terms-of-service,cookie-policy,accessibility}` or Shopify policy URLs | Compliance | Plain-language H1 → scoped clauses → contact |
| 404 | system | Recover navigation | Human message → search → collection CTA |
| Offline | client state | Explain limitation | Sticky status banner; cached page may remain, checkout requires connection |

Header (five top-level): **Shop, Sets, How to Move, Our Story, Help**. Mega-menu: Shop by goal (Strength, Mobility, Recovery), Shop by format (Kits, Bands, Weights, Mats), Featured (Axis Kit, New arrivals), and Guides (Start light, 15-minute reset, Fit guide). Footer: Shop; Help & policies; contact/SLA; newsletter; payment methods; verified legal business details. Mobile bottom navigation: Home, Shop, Search, Cart.

Collection filters: availability, price, product type, goal, resistance level, material, color. Sort: Featured default, Best selling only after enough orders, Newest, Price low/high. Do not expose supplier/vendor or internal tags. Mobile uses a filter drawer with applied-count badge and persistent “Show N products.”

## 4. Page-by-page wireframes and final copy

### Homepage

| Section | Goal and layout | Final copy |
|---|---|---|
| Announcement | Dismissible single line | **Free US shipping over $75 · 30-day returns** |
| Hero | Wide image, copy left, one primary/one secondary | Eyebrow: “Considered movement, made compact.” H1: **Strength that fits your life.** Body: “Quietly capable mobility tools for small spaces, busy days, and routines you can actually keep.” CTAs: **Shop the collection** / **See how it works** |
| Trust | Four compact facts | “30 days to move with it” · “Free US shipping over $75” · “7–12 business days after dispatch” · “Secure checkout with major payment methods” |
| Best sellers | Three 1:1/4:5 cards | **Our most useful essentials.** Axis: “Full-body strength, packed small.” Form: “Three steady levels. Zero rolling.” Anchor: “Comfortable resistance for walks and mat work.” |
| How | Three numbered columns | **A simpler way to stay consistent.** Choose resistance → follow a short session → pack it away. |
| Deep dive | 4:5 lifestyle + copy | **One kit. Dozens of controlled movements.** Copy and bullets are implemented in `sections/kinrow-home.liquid`. |
| Comparison | Scrollable accessible table | **The useful difference.** Compares compatible system, visual clutter, starting support, delivery disclosure, and return window. Claims are deliberately modest. |
| Reviews | App block/carousel | **Notes from verified customers.** Launch state says: “We’re new. Real purchase reviews—and only real purchase reviews—will appear here…” Do not replace with supplier reviews. |
| Community | Two campaign images until permissioned UGC | **Made to live where you do.** Explicitly labels current assets as campaign—not UGC. |
| FAQ | Six native `details` rows | Beginner fit, delivery, opened returns, band comfort, space, no result guarantees. |
| Email | Split layout, inline form | **Get the 15-minute reset.** “Join for a printable mobility session and 10% off your first order… never daily noise.” CTA: **Send my reset**. |

On 390px: hero copy moves to the bottom over a high-contrast scrim; primary CTA is full width; trust becomes 2×2; grids become two columns or one; comparison scrolls; FAQ remains full width; bottom nav and PDP add-to-cart sit in thumb reach.

### Product page — Axis example

- Title formula: `{descriptive product name} | {primary outcome}` in metadata; customer-facing H1 stays **Axis Resistance Kit**.
- Price: `$129`; compare-at remains empty until a documented earlier selling price makes a discount real. Sale badge derives only from Shopify compare-at data.
- Gallery: 8 media positions—clean kit, components, bar connector, band weave, cuff fit, storage, full-body use, silent setup video. Zoom desktop; thumbnails desktop; swipe and dots mobile.
- Variants: color uses swatches; size/resistance uses buttons. Unavailable combinations remain visible but struck out/disabled with “Unavailable”; sold-out variants show **Sold out** and never accept orders unless a verified replenishment date supports preorder copy.
- Benefits: “Compact design keeps serious resistance easy to store”; “Comfort-first contact points help you focus on controlled form”; “Simple setup gets you moving without a complicated machine”; “Neutral materials belong in a real home”; “Clear care and starting guidance support repeat use.”
- Quantity break: show **Buy 2, save 15%** only after an automatic discount or Shopify Bundle is configured, tested, and the product metafield `custom.bundle_message` is populated. No prechecked bundle.
- Assurance: live date range calculated from today, 30-day promise, secure checkout.
- Accordions: Description, Specifications, Shipping, Returns, Product FAQ.
- Review app block: distribution, photo reviews, sort/filter, verified purchase. Empty state is visible until real submissions exist.
- Frequently bought together: Shopify Search & Discovery complementary recommendations. Related products and local-storage recently viewed are native to the theme.

### Cart and checkout

Drawer stays under 80% viewport width desktop and full height mobile. It shows line item, variants, editable quantity, remove, real discounts, $75 progress, one collection-based upsell, estimated total, “Encrypted checkout · 30-day returns · No hidden fees,” and checkout. The bar uses discounted subtotal; shipping qualification must match the Shopify shipping profile exactly.

Checkout order: express methods above the fold—Shop Pay, Apple Pay, Google Pay where device/region supports them—then cards. US local method: PayPal if business account risk review passes. Never imply a wallet is available when Shopify does not render it. Shipping line names include timing: **Standard · 7–12 business days after dispatch**. No handling fee, insurance toggle, or prechecked marketing.

### Search, informational pages, blog, 404/offline

Search empty copy: “No results found for ‘{term}’. Try ‘resistance,’ ‘mobility,’ or ‘ankle weights,’ or browse the complete collection.” About, FAQ, shipping, return, tracking, warranty, fit, privacy, terms, cookie, and accessibility copy is production-written in `sections/kinrow-info-page.liquid`. Contact promises one-business-day response. Legal entity/address remain a visible launch gate in the internal QA, not a fabricated storefront fact.

Blog hub H1: **Move well, in the life you have.** Intro: “Practical, evidence-aware guides for building a steadier home movement routine—without turning your living room into a gym.” Article CTA format: one contextual collection link after the answer, never a product interruption before the reader’s question is resolved.

404: **This page moved. Your routine hasn’t.** Offline: **You’re offline. Browsing may be limited, and checkout needs a connection.**

## 5. Conversion and trust architecture

### Lifecycle messages

#### Abandoned checkout: three messages

1. **Email · 1 hour** — Subject: **Your KINROW cart is saved.** Preview: “Pick up where you left off—nothing has been reserved.” Body: “You left a considered routine in your cart. Your items are saved for this browser, but inventory is not reserved. Delivery is currently 1–2 business days processing plus 7–12 business days in transit. Questions? Reply and a person will help.” CTA: **Return to my cart**.
2. **SMS · 20 hours, consented profiles only** — “KINROW: Still considering your cart? It’s here: {{ checkout_url }}. Delivery and 30-day return details are shown before payment. Reply STOP to opt out.” No discount.
3. **Email · 48 hours** — Subject: **Still the right fit? Let’s make sure.** Body: “A product should earn its space. Review fit, resistance, delivery, and returns before deciding. If something is unclear, reply—we answer within one business day.” CTA: **Review my items**. Conditional 10% incentive only for first-order subscribers who already received the welcome offer; never stack or invent expiry.

#### Welcome: five emails

1. **Immediately — “Your 15-minute reset is here.”** Deliver PDF/link, unique 10% code, honest terms: one first order, non-stackable, no expiry unless one is configured. CTA **Open the reset**.
2. **Day 2 — “Start lighter than you think.”** Copy: “The best first resistance is the one you can control through every repetition. Use a slower tempo before adding tension.” CTA **Choose your starting point**.
3. **Day 4 — “Why compact gear gets used.”** Copy: “A routine has fewer reasons to disappear when setup takes under a minute and storage takes one shelf.” CTA **Meet the system**.
4. **Day 7 — “What KINROW will always tell you.”** Cover shipping, returns, origin, and no fake proof. CTA **Read our standards**.
5. **Day 10 — “Build your first small routine.”** Three 15-minute paths: strength, mobility, recovery. CTA **Pick a path**.

#### Post-purchase

- **Immediate confirmation:** “We have your order—not your patience.” Restate items, address, charge, 1–2-day processing, 7–12-day transit, cancellation path.
- **Dispatch:** “Your KINROW order is moving.” Carrier, tracking, expected range, split-parcel explanation.
- **Delivered +1 day:** “Did everything arrive as expected?” Setup link, damage/report path, no sales CTA.
- **Review request +14 days:** “How is it fitting into real life?” Ask an honest review through Judge.me; disclose any incentive and award it regardless of rating. CTA **Share an honest review**.
- **Replenishment/care +60 days:** Only for consumable/wear components. “Inspect, clean, and know when to replace.” Never imply unsafe scheduled replacement without evidence.

Exit intent: desktop only, once per 30 days, after 45 seconds or exit gesture—not during checkout. Copy: **Take the 15-minute reset with you.** Offer the same 10% welcome incentive, not a better secret discount. Close is visible and keyboard reachable; no mobile exit popup.

### Prioritized CRO checklist

| Priority | Change | Expected directional impact | Guardrail |
|---:|---|---|---|
| P0 | Verified specs, delivery, returns before checkout | High trust/conversion | Sample and ops sign-off |
| P0 | Wallets + complete payment testing | High checkout completion | Never show unavailable badges |
| P0 | 6–8 accurate media assets per hero product | High PDP confidence | No concept image as exact product |
| P0 | Mobile sticky add-to-cart | Medium–high add-to-cart | Never hide variants/errors |
| P0 | Real review collection | High after first cohort | No imported supplier reviews |
| P1 | Free-shipping bar at margin-safe $75 | Medium AOV | Must match shipping rule |
| P1 | Complementary recommendation | Medium AOV | One relevant item; not prechecked |
| P1 | Welcome/abandonment flows | Medium recovered revenue | Consent, frequency, no false expiry |
| P1 | Fit/starting guidance | Medium lower returns | Avoid medical advice |
| P2 | Test hero vs problem-led alternative | Unknown; test | One variable, 2-week minimum |
| P2 | Test bundle on Axis + loops | Medium AOV | Real inventory/discount only |
| P3 | Personalization/AI recommendations | Low at launch | Add only after traffic supports it |

## 6. Structured data, metadata, and technical SEO

The live theme emits Organization, WebSite/SearchAction, BreadcrumbList, FAQPage, Dawn-native Product, and Dawn-native Article JSON-LD. Do not add a second app-generated Product schema without disabling one source.

### Ready-to-paste Liquid blocks

```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": {{ request.origin | append: '#organization' | json }},
  "name": {{ shop.name | json }},
  "url": {{ request.origin | json }},
  "description": "Considered home mobility tools for stronger, more consistent movement.",
  "contactPoint": [{"@type":"ContactPoint","contactType":"customer support","email":"care@kinrow.co","availableLanguage":["English"]}]
}
</script>
```

```liquid
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"WebSite",
  "@id":{{ request.origin | append: '#website' | json }},
  "url":{{ request.origin | json }},
  "name":{{ shop.name | json }},
  "potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":{{ request.origin | append: routes.search_url | append: '?q={search_term_string}' | json }}},"query-input":"required name=search_term_string"}
}
</script>
```

```liquid
<script type="application/ld+json">{{ product | structured_data }}</script>
```

Shopify’s product filter emits name, description, image, brand, variants/offers, price, currency, availability, SKU, and URL from real catalog data. Aggregate rating and review must be supplied by the review app from genuine records; never hardcode either. Article uses `<script type="application/ld+json">{{ article | structured_data }}</script>`. FAQPage and BreadcrumbList are implemented in `snippets/kinrow-jsonld.liquid` with full questions/answers.

LocalBusiness must remain disabled until a real publicly served location exists. If applicable, add the verified legal name, address, phone, opening hours, geo, and priceRange; do not use a registered-agent address as a retail location.

### Metadata

| Type | Title formula (≤60 ideal, 70 max in Shopify) | Description formula (145–160 ideal) |
|---|---|---|
| Home | `Compact Home Strength & Mobility | KINROW` | `Considered resistance and mobility tools for consistent movement at home. Honest delivery, clear guidance, and 30-day returns.` |
| Collection | `{Goal/Product Type} Equipment for Home | KINROW` | `Shop {category} for {top use cases}. Compact design, clear fit guidance, US delivery in 7–12 business days after dispatch.` |
| Product | `{Product Name} | {Primary Benefit} | KINROW` | `{What it is} for {use case}. {key differentiator}. See specifications, delivery estimate, verified reviews, and 30-day returns.` |
| Blog hub | `Home Strength & Mobility Guides | KINROW` | `Practical, evidence-aware guides for building a consistent movement routine in a real home.` |
| Article | `{Question/Outcome} | KINROW Move Well` | `Learn {specific answer} with a practical, low-friction approach, clear safety boundaries, and relevant KINROW tools.` |

URL rules: lowercase hyphenated handles; one durable product URL; canonical always to `/products/handle`, never `/collections/x/products/y`; internal links use canonical product URLs. Keep Shopify’s self-canonical pagination. Do not canonicalize distinct filtered intent pages to unrelated pages. For ordinary faceted URLs, prevent index bloat with Shopify defaults/robots and avoid linking crawlable combinatorial filters.

Sitemap: Shopify native `/sitemap.xml`; include active products, collections, pages, blogs/articles. Draft products do not belong. Robots: preserve Shopify defaults and block cart, checkout, orders, account, admin, search result pages, internal tag/filter combinations, and preview parameters. Do not block CSS/JS or product/collection assets. `rel=next/prev` is no longer required by Google; use crawlable pagination links and self-canonicals rather than a fragile view-all canonical.

Exactly one H1 per template. H2 marks major sections, H3 card/section children. Image filenames follow `{product}-{view}-{color}.webp`; alt text is `{product + visible distinguishing view/context}` with no keyword stuffing. WebP/AVIF, `srcset`, explicit dimensions, lazy below fold, and eager/fetchpriority on LCP.

Core Web Vitals at the 75th percentile: LCP <2.5s, INP <200ms, CLS <0.1. Tactics: Dawn’s HTML-first base; 40KB WebP hero; explicit image dimensions; no autoplay hero; font preconnect/swap; relevant-template app blocks only; defer third parties; no page builder; reserve app/media space; remove unused pixels; audit after every app. Aim for Lighthouse mobile ≥90 in the controlled pre-launch test, but field CWV—not a one-off lab score—is the decision metric.

### Content cluster

| Topic | Intent/keyword | Funnel | Links to |
|---|---|---|---|
| Resistance bands for beginners: where to start | Informational / resistance bands for beginners | TOFU | Strength & Mobility; Form loops |
| A 15-minute full-body resistance-bar routine | Routine / resistance bar workout | MOFU | Axis |
| Fabric vs latex resistance bands | Comparison / fabric vs latex bands | MOFU | Form loops |
| How heavy should ankle weights be? | Selection / ankle weight guide | MOFU | Anchor; Fit guide |
| Small-apartment home gym essentials | Commercial / small apartment workout equipment | MOFU | All products |
| How to store workout equipment in a small space | Informational / workout equipment storage | TOFU | Axis; Ground mat |
| Mobility before or after strength training? | Informational / when to do mobility | TOFU | Recovery collection |
| How to use a cork massage ball safely | How-to / cork massage ball exercises | MOFU | Release set |
| Why resistance bands roll—and what helps | Problem / resistance band rolling | MOFU | Form loops |
| A low-friction weekly home movement plan | Planning / home workout schedule | TOFU | Blog hub; collections |
| Resistance equipment care and inspection | Ownership / resistance band care | BOFU/post-purchase | Warranty; relevant PDPs |
| Choosing a foldable exercise mat | Comparison / best foldable exercise mat | MOFU | Ground mat |

Hub-and-spoke: each article links to one parent collection, at most two relevant products, the fit/safety page, and two related articles. Collection intros link back to cornerstone guides. Add `hreflang` only when localized URLs exist; use Shopify Markets’ native language/country URLs and reciprocal tags. Never auto-redirect solely by IP; keep visible language/currency selectors.

## 7. Accessibility and mobile

Inherited Dawn behavior plus KINROW requirements: semantic landmarks; skip link; keyboard-operable menus, gallery, filters, accordion, forms, drawer, modal, and review widget; visible 3px focus; no focus trap leaks; native labels and inline text errors; `aria-live` for cart/offline status; 44×44px targets; captions/transcripts; descriptive alt; no color-only state; 200% zoom without loss; reflow at 320px; reduced motion.

Design at 390px, then test 768/1024/1440. Full-width primary actions on small screens, sticky PDP purchase control above bottom nav, one-hand bottom navigation, tap-to-email and—only after a real number exists—tap-to-call/WhatsApp. Test long product names, USD four-digit totals, sold-out labels, and browser text enlargement.

## 8. App stack and rationale

Theme: **Dawn**, free, by Shopify, because its HTML-first/JavaScript-as-needed architecture, OS 2.0 sections, media-forward PDP, accessibility base, and update path are stronger than starting with a heavy page builder. KINROW customizes it rather than hiding it under apps. Source: [official Dawn listing](https://themes.shopify.com/themes/dawn/presets/dawn) and [Shopify’s Dawn repository](https://github.com/Shopify/dawn).

| Need | Choice | Current starting cost | Why / performance rule |
|---|---|---:|---|
| Reviews | Judge.me | Free; Awesome $15/mo | Verified requests, photo/video, widgets, rich snippets. Install PDP/home app blocks only. Never import AliExpress reviews. [Listing](https://apps.shopify.com/judgeme) |
| Email/SMS | Klaviyo | Free up to 250 contacts; SMS credits limited; paid scales | One lifecycle engine avoids duplicate scripts/data. Load one form, not multiple popups. [Listing](https://apps.shopify.com/klaviyo-email-marketing) |
| Search/filter/recs | Shopify Search & Discovery | Free | Native filters, search tuning, related/complementary products. [Listing](https://apps.shopify.com/search-and-discovery) |
| Bundles | Shopify Bundles | Free | Real inventory-aware fixed bundles; no faux “bundle” UI. [Listing](https://apps.shopify.com/shopify-bundles) |
| Consent | Shopify Customer Privacy | Included | Configure regional banner and pixel consent; avoid a second consent layer. |
| Analytics/pixels | Native Shopify + official Google/Meta/TikTok channels | Free to install; media spend separate | Customer Events/pixel manager; no GTM unless a validated gap exists. |
| Page speed | **No app** | $0 | Speed apps often add code while claiming to remove it; fix assets/scripts at source. |

Avoid at launch: page builders, separate upsell engine, chat bubble, heatmap recorder, currency widget, badge app, countdown app, and multiple popups. Rebuy/Loox-style all-page scripts can be useful later but must justify their cost and main-thread impact with an experiment. Prices change; verify App Store billing immediately before installation.

## 9. Analytics and measurement

Install Shopify Analytics, GA4 via the Google channel, Meta Pixel + Conversions API via Facebook/Instagram, and TikTok Pixel only if TikTok receives spend. Deduplicate browser/server purchase events by transaction/event ID. Consent mode must prevent optional events before permission where required.

| Event | Trigger | Required parameters |
|---|---|---|
| `view_item_list` | Product grid viewed | list ID/name, items |
| `select_item` | Product card clicked | list context, item |
| `view_item` | PDP viewed | item_id/SKU, name, variant, price, currency |
| `add_to_cart` | Confirmed add response | item, quantity, value, currency |
| `view_cart` | Drawer/cart viewed | items, value, currency |
| `begin_checkout` | Checkout click | items, value, coupon, currency |
| `add_shipping_info` | Shipping step | shipping tier, value |
| `add_payment_info` | Payment step | payment type, value |
| `purchase` | Thank-you/order status once | transaction_id, items, tax, shipping, value, currency |
| `search` | Search submitted | search_term |
| `sign_up` | Confirmed newsletter success | method=email |
| `refund` | Refund issued | transaction_id, items/value |

UTM: lowercase; `utm_source={platform}`, `utm_medium={paid_social|cpc|email|sms|affiliate|organic_social}`, `utm_campaign={yyyy-mm_launch_goal_audience}`, `utm_content={concept_format_hook}`, `utm_term={keyword_or_audience}`. Never overwrite UTMs inside checkout links.

Dashboard weekly: sessions, conversion, add-to-cart, checkout completion, AOV, gross margin after COGS/fulfillment/returns, CAC, blended MER, channel ROAS, refund rate, delivery SLA, 60/90-day repeat, contribution LTV, email revenue, unsubscribe/spam. Targets for the first 90 days are diagnostic, not guarantees: conversion 1.4% baseline then 2.0–2.5%; add-to-cart ≥4.6%; checkout completion ≥45%, then 55%; AOV $95–$115; cart/checkout abandonment <55%; refund <8%; on-time delivery ≥95%; blended CAC below first-order contribution margin; 90-day repeat 10–15%. Littledata currently reports Shopify averages of 1.4% conversion, 4.6% add-to-cart, 45% checkout completion, and $85 AOV; category/traffic mix matters. [Benchmark](https://www.littledata.io/average-website-performance)

## 10. Legal and compliance

- Configure Shopify Customer Privacy for GDPR/UK GDPR/EEA consent and US state opt-outs, including GPC where supported. Inventory every pixel/app cookie after final installation.
- Publish plain-language privacy, terms, cookie, refund, shipping, warranty, and accessibility pages; have qualified counsel review them for the verified entity and jurisdictions.
- State country of origin on product/packaging/customs data. Do not claim “designed in” as a substitute for origin.
- Fitness claims stay structural and experiential; never diagnose, treat, cure, guarantee weight loss, or use unsupported before/after creative. Keep substantiation files for every performance/material claim.
- Supplier contract must cover spec control, prohibited substitutions, inspection/AQL, labeling, defect remedy, tracking latency, data handling, IP, recall cooperation, and chargeback evidence.
- Long lead time handling: disclose before payment; if a delay moves outside the promised range, notify promptly with updated estimate plus cancel/refund choice.
- Reviews: request after use, disclose incentives, give incentives regardless of sentiment, publish critical feedback that follows content rules, reply with remedy/evidence, never gate negative reviews privately.
- Trust marks are functional only: actual payment marks rendered by Shopify; review verification from the app; SSL/security language only after the domain is secured; no decorative “FDA approved,” “doctor recommended,” or invented sustainability badges.

## 11. Prioritized 30-day launch roadmap

### Days 1–5 — legal, product, and economics (P0)

- Verify legal entity, address, support email/domain, tax setup, governing law, and privacy controller details.
- Order and inspect every production sample. Freeze materials, dimensions, included parts, resistance/stretch/load limits, care, warnings, origin, packaging, and barcodes.
- Model landed COGS, duty, pick/pack, payment, shipping, return, warranty, and acquisition allowance. Confirm $75 threshold and retail prices preserve contribution margin.
- Sign supplier SLA; run tracking and inventory sync tests.

### Days 6–10 — Shopify foundation (P0)

- Connect the repository branch to an unpublished theme or run `shopify theme dev`.
- Set shop name KINROW, USD, US market, domain, sender authentication, taxes, locations, shipping profiles, and checkout branding.
- Import `data/products.csv` as drafts; replace concept media with approved 6–8-image/video sets; enter verified weights, stock, COGS, origin, specifications, warnings, and SKUs.
- Create pages from `data/pages.csv`, menu handles `main-menu`, `footer`, and `policies`; assign contact template.

### Days 11–15 — merchandising and trust (P0/P1)

- Build collections and Search & Discovery filters/recommendations.
- Configure real automatic discounts/bundles; populate bundle metafield only after testing.
- Install Judge.me and Klaviyo; place app blocks only where needed; configure review verification and negative-review response.
- Add real founder biography/portrait and physical business details. Counsel reviews policies.

### Days 16–20 — lifecycle, analytics, and feeds (P1)

- Build welcome, abandoned checkout, transactional, post-purchase, review, and care flows. Test consent, quiet hours, STOP, suppression, coupons, and sender identity.
- Configure GA4, Meta CAPI, and TikTok only if used. Validate event values, currency, item IDs, consent, and purchase deduplication.
- Configure Merchant Center/feed fields only after GTIN/MPN, origin, availability, shipping, and return data match the store.

### Days 21–25 — QA and performance (P0)

- Real-device QA at 390/768/1024/1440, keyboard/screen reader/zoom/reduced motion, long copy, empty/sold-out/error states.
- Place successful, declined, wallet, discounted, taxed, free-shipping, partial-refund, cancellation, and return test orders.
- Run Theme Check, schema validation, structured-data validation, link crawl, PageSpeed/Lighthouse, and pixel debug. Remove or defer failing apps.

### Days 26–30 — controlled release (P0/P1)

- Soft launch to internal/known cohort. Hold paid acquisition until fulfillment and support complete real orders within SLA.
- Collect service feedback; fix confusing copy and support macros. Invite honest reviews only after meaningful use.
- Publish to broader traffic with daily first-week checks: inventory, orders, delivery exceptions, tickets, conversion funnel, spend, refunds, and site errors.

## 12. Launch QA checklist

### Identity, catalog, and truth

- [ ] Verified legal name, founder, photo, physical address, support email, and operating hours are live.
- [ ] Every product has approved sample, exact specs, origin, weight, materials, warnings, SKU/barcode, COGS, and stock.
- [ ] Every hero product has 6–8 accurate images, alt text, zoom, and a captioned setup video.
- [ ] No concept image misrepresents the shipped item; no fake reviews/UGC/scarcity/viewer counts.
- [ ] Compare-at prices and discounts are supported by real selling history/configuration.

### Store and order flow

- [ ] Test order end-to-end on mobile and desktop, including Shop Pay, Apple Pay, Google Pay, cards, and PayPal where enabled.
- [ ] Taxes, shipping, free-shipping bar, discounts, bundles, split shipment, inventory decrement, cancellation, refund, and return label match policy.
- [ ] Actual delivery date range appears on PDP, cart/checkout shipping method, confirmation, and shipping policy without contradiction.
- [ ] Sold-out/unavailable/preorder behavior tested; inventory sync and oversell protection verified.
- [ ] All notifications and every welcome/abandonment/post-purchase/review flow triggered and proofread.

### Content, legal, and navigation

- [ ] Header ≤5 top-level items; mega-menu, footer columns, bottom nav, search, filters, and sorting work.
- [ ] About, contact, FAQ, shipping, returns, tracking, warranty, fit, privacy, terms, cookies, accessibility, blog, 404 are live and linked.
- [ ] Counsel reviewed legal text; cookie banner reflects final app/pixel inventory; unsubscribe and STOP work.
- [ ] All claims have a substantiation record; origin and long lead time are accurate.
- [ ] Link crawl has no accidental 404s; intentional 404 and offline messages work.

### Accessibility and responsive QA

- [ ] Keyboard reaches/operates every control in a logical order; focus is always visible.
- [ ] Screen-reader labels/status announcements tested for header, gallery, variants, quantity, cart, errors, forms, filters, reviews, and checkout handoff.
- [ ] 200% zoom and 320px reflow; 44px targets; no color-only meaning; alt/captions complete.
- [ ] Real devices/browsers tested at 390/768/1024/1440, iOS Safari, Android Chrome, desktop Safari/Chrome/Firefox/Edge.
- [ ] Reduced-motion preference removes nonessential movement.

### SEO, speed, analytics, infrastructure

- [ ] One H1, unique title/description, canonical, indexability, breadcrumbs, image dimensions/alt, internal links on each indexable page.
- [ ] Organization, WebSite, Breadcrumb, Product, FAQ, and Article schema validate; only real aggregateRating/review data appears.
- [ ] `/sitemap.xml` and robots rules reviewed; draft/preview/search/cart/checkout/account URLs not indexed.
- [ ] Mobile Lighthouse performance ≥90 in controlled run; field targets LCP <2.5s, INP <200ms, CLS <0.1; hero <200KB (current: ~40KB).
- [ ] GA4/Shopify/Meta/TikTok events fire once with correct IDs/value/currency and respect consent.
- [ ] UTM convention tested through purchase; dashboard and alert owners assigned.
- [ ] Favicon, OG image, domain/DNS, SSL, SPF/DKIM/DMARC, sender domain, backups, and staff permissions verified.

Launch means the checklist is evidence-complete—not merely checked.
