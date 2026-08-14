import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { KINROW_ASSETS } from "@/lib/assets";
import { getCatalog } from "@/lib/shopify";

export default async function HomePage() {
  const catalog = await getCatalog();

  return (
    <>
      <section className="hero">
        <Image src={KINROW_ASSETS.hero} alt="Compact KINROW movement tools arranged in a warm home" fill preload sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-copy shell">
          <p className="eyebrow">Considered movement, made compact</p>
          <h1>Strength that<br />fits your life.</h1>
          <p>Quietly capable movement tools for small spaces, busy days, and routines you can actually keep.</p>
          <div className="hero-actions">
            <Link href="/shop" className="button button-light">Shop the collection</Link>
            <a href="#method" className="text-link text-link-light">See how it works <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-index"><span>01</span><span>Home movement, reconsidered</span></div>
      </section>

      <section className="trust-row" aria-label="Store assurances">
        <div><strong>30 days</strong><span>to move with it</span></div>
        <div><strong>Free US shipping</strong><span>on orders over $75</span></div>
        <div><strong>7–12 business days</strong><span>after dispatch</span></div>
        <div><strong>Secure checkout</strong><span>powered by Shopify</span></div>
      </section>

      {catalog.source === "preview" && (
        <div className="catalog-notice shell" role="status">
          <span>Preview catalog</span><p>{catalog.message}</p>
        </div>
      )}

      <section className="collection-section shell">
        <div className="section-heading">
          <div><p className="eyebrow">Start where you are</p><h2>Our most useful essentials.</h2></div>
          <Link href="/shop" className="text-link">View all six <ArrowIcon /></Link>
        </div>
        <div className="product-grid">
          {catalog.products.slice(0, 3).map((product, index) => <ProductCard product={product} priority={index < 2} key={product.id} />)}
        </div>
      </section>

      <section className="method-section" id="method">
        <div className="shell method-layout">
          <div className="method-intro">
            <p className="eyebrow">No performance theatre</p>
            <h2>A simpler way to stay consistent.</h2>
            <p>Less setup. Less visual noise. More room for the kind of movement that becomes part of a real day.</p>
          </div>
          <div className="method-steps">
            <article><span>01</span><div><h3>Choose your resistance</h3><p>Start with the level that lets you move with control, then progress when the final repetitions feel steady.</p></div></article>
            <article><span>02</span><div><h3>Follow a short session</h3><p>Use straightforward guidance to build a focused fifteen-minute strength or mobility block.</p></div></article>
            <article><span>03</span><div><h3>Pack it away</h3><p>Compact components return to a drawer or carry bag, so your space can return to being your space.</p></div></article>
          </div>
        </div>
      </section>

      <section className="axis-feature shell">
        <div className="axis-image">
          <Image src={KINROW_ASSETS.lifestyle} alt="Controlled resistance training with the Axis Kit in a calm home" fill sizes="(max-width: 800px) 100vw, 50vw" />
          <span className="image-caption">Quietly capable · Home ready</span>
        </div>
        <div className="axis-copy">
          <p className="eyebrow">Meet Axis</p>
          <h2>One kit. Dozens of controlled movements.</h2>
          <p>Axis pairs a segmented, grippy bar with clip-on woven bands so you can train presses, rows, hinges, squats, and mobility patterns without dedicating a room to equipment.</p>
          <ul>
            <li><span>01</span>Breaks down for easy storage and travel</li>
            <li><span>02</span>Comfort-first contact points</li>
            <li><span>03</span>Simple guidance for the first session</li>
          </ul>
          <Link href="/products/axis-resistance-kit" className="button button-dark">Explore the Axis Kit</Link>
        </div>
      </section>

      <section className="manifesto">
        <div className="shell">
          <p className="eyebrow">Designed for the routine, not the reveal</p>
          <blockquote>“A product should earn<br />its space in your home.”</blockquote>
          <div className="manifesto-bottom"><p>Small compatible systems. Clear starting guidance. Honest delivery and returns.</p><Link href="/about" className="text-link text-link-light">Read our approach <ArrowIcon /></Link></div>
        </div>
      </section>

      <section className="proof-section shell">
        <div><p className="eyebrow">Earned, never invented</p><h2>Real notes will live here.</h2></div>
        <div className="proof-card"><span>★★★★★</span><p>We’re new. Real purchase reviews—and only real purchase reviews—will appear after customers have had time to use their gear.</p><Link href="/about" className="text-link">Why we publish this way <ArrowIcon /></Link></div>
      </section>

      <section className="newsletter shell">
        <div><p className="eyebrow">A useful welcome</p><h2>Get the 15-minute reset.</h2><p>A printable mobility session and calm, useful notes. Never daily noise.</p></div>
        <form><label htmlFor="email">Email address</label><div><input id="email" type="email" placeholder="you@example.com" required /><button className="button button-dark" type="submit">Join the list</button></div><small>Newsletter delivery will be connected before launch.</small></form>
      </section>
    </>
  );
}
