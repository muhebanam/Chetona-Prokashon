"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "হোম" },
  { href: "/books", label: "বইসমূহ" },
  { href: "/listed-books", label: "আমার পাঠতালিকা" },
  { href: "/read-books", label: "পাঠের অগ্রগতি" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--brand-border)] bg-[rgba(255,253,248,.94)] backdrop-blur-xl">
      <div className="container-shell flex min-h-20 items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="চেতনা প্রকাশনী হোম">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-mark-page brand-mark-page-left" />
            <span className="brand-mark-page brand-mark-page-right" />
          </span>
          <span>
            <span className="block text-xl font-black leading-none text-[var(--brand)] md:text-2xl">
              চেতনা প্রকাশনী
            </span>
            <span className="mt-1 block text-[11px] font-bold tracking-wide text-[var(--muted)]">
              পাঠে জাগুক চেতনা
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="প্রধান নেভিগেশন">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2.5 text-sm font-bold transition ${
                active(item.href)
                  ? "bg-[var(--brand)] text-white shadow-sm"
                  : "text-slate-600 hover:bg-[var(--brand-soft)] hover:text-[var(--brand)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--brand-border)] bg-white text-[var(--brand)] lg:hidden"
          aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          aria-expanded={open}
        >
          <span className="text-xl" aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="container-shell grid gap-2 border-t border-[var(--brand-border)] py-3 lg:hidden" aria-label="মোবাইল নেভিগেশন">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 font-bold ${
                active(item.href)
                  ? "bg-[var(--brand)] text-white"
                  : "bg-white text-slate-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
