import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { KINROW_ASSETS } from "@/lib/assets";

export const metadata: Metadata = { title: "Our approach", description: "Why KINROW makes fewer, more considered movement tools." };

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero shell"><div><p className="eyebrow">Our approach</p><h1>Movement should fit into life—not take it over.</h1></div><p>KINROW is building a small, compatible system of strength and mobility tools for people who value consistency over performance theatre.</p></section>
      <section className="about-image"><Image src={KINROW_ASSETS.lifestyle} alt="A calm home movement routine with KINROW" fill preload sizes="100vw" /></section>
      <section className="principles shell">
        <div><p className="eyebrow">What guides us</p><h2>Calm. Precise. Useful.</h2></div>
        <div className="principle-list">
          <article><span>01</span><h3>Fewer, compatible pieces</h3><p>A considered system instead of an endless catalog of isolated equipment.</p></article>
          <article><span>02</span><h3>Plain-language guidance</h3><p>Clear setup and starting points, without inflated promises or invented expertise.</p></article>
          <article><span>03</span><h3>Truth before urgency</h3><p>Real specifications, delivery timing, inventory, and reviews—or an honest empty state.</p></article>
        </div>
      </section>
      <section className="about-cta"><div className="shell"><p className="eyebrow">Make room for movement</p><h2>Start with one useful piece.</h2><Link href="/shop" className="button button-light">Explore the collection</Link></div></section>
    </div>
  );
}
