import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-brand">
          <Image src="/images/kinrow-wordmark.svg" alt="KINROW" width={160} height={32} unoptimized style={{ width: 160, height: "auto" }} />
          <p>Considered movement tools for small spaces, busy days, and routines you can actually keep.</p>
        </div>
        <div className="footer-links">
          <div><h2>Explore</h2><Link href="/shop">All products</Link><Link href="/products/axis-resistance-kit">Axis Resistance Kit</Link><Link href="/about">Our approach</Link></div>
          <div><h2>Support</h2><Link href="/help">Shipping & returns</Link><Link href="/help#faq">Product questions</Link><a href="mailto:care@kinrow.co">care@kinrow.co</a></div>
        </div>
      </div>
      <div className="footer-bottom shell"><span>© {new Date().getFullYear()} KINROW</span><span>Move well. Live fully.</span></div>
    </footer>
  );
}
