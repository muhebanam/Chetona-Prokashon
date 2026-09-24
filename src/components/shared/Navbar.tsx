"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "@/assets/book.ico";

const links = [
  { href: "/", label: "হোম" },
  { href: "/books", label: "বইসমূহ" },
  { href: "/listed-books", label: "তালিকাভুক্ত বই" },
  { href: "/read-books", label: "পাঠের অগ্রগতি" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="figma-container navbar-row">
        <Link href="/" className="brand" aria-label="চেতনা প্রকাশনী হোম">
          <Image src={logo} alt="" className="brand-icon" priority />
          <span>চেতনা প্রকাশনী</span>
        </Link>

        <nav className="desktop-nav" aria-label="প্রধান নেভিগেশন">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="auth-actions">
          <button type="button" className="figma-btn figma-btn-green">
            সাইন ইন
          </button>
          <button type="button" className="figma-btn figma-btn-cyan">
            সাইন আপ
          </button>
        </div>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="figma-container mobile-nav" aria-label="মোবাইল নেভিগেশন">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={isActive(item.href) ? "mobile-link active" : "mobile-link"}
            >
              {item.label}
            </Link>
          ))}
          <div className="mobile-auth">
            <button type="button" className="figma-btn figma-btn-green">সাইন ইন</button>
            <button type="button" className="figma-btn figma-btn-cyan">সাইন আপ</button>
          </div>
        </nav>
      )}
    </header>
  );
}
