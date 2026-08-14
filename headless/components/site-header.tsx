"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BagIcon, CloseIcon, MenuIcon } from "./icons";
import { useCart } from "./cart-provider";

const links = [
  ["Shop", "/shop"],
  ["The Axis Kit", "/products/axis-resistance-kit"],
  ["Our approach", "/about"],
  ["Help", "/help"],
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, setOpen } = useCart();

  return (
    <>
      <div className="announcement">Free US shipping over $75 <span /> 30-day returns</div>
      <header className="site-header">
        <Link href="/" className="wordmark" aria-label="KINROW home">
          <Image src="/images/kinrow-wordmark.svg" alt="KINROW" width={143} height={29} preload unoptimized style={{ width: 143, height: "auto" }} />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <button className="bag-button" onClick={() => setOpen(true)} aria-label={`Open bag with ${count} items`}>
            <BagIcon /><span>Bag</span>{count > 0 && <b>{count}</b>}
          </button>
          <button className="mobile-menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><MenuIcon /></button>
        </div>
      </header>
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-top">
          <Image src="/images/kinrow-wordmark.svg" alt="KINROW" width={143} height={29} unoptimized style={{ width: 143, height: "auto" }} />
          <button className="icon-button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><CloseIcon /></button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <Link href={href} key={href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</Link>
          ))}
        </nav>
        <p>Small tools. Steady progress.<br />Designed for real homes.</p>
      </div>
    </>
  );
}
