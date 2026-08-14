import Link from "next/link";

export default function NotFound() {
  return <div className="not-found shell"><p className="eyebrow">404</p><h1>This page moved.<br />Your routine hasn’t.</h1><p>Return to the collection and choose where to begin.</p><Link href="/shop" className="button button-dark">Shop the collection</Link></div>;
}
