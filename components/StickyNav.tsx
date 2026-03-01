"use client";

import Link from "next/link";
import { useState } from "react";
import type { StickyNav as StickyNavSpec } from "@/lib/spec";
import { cn } from "@/lib/utils";

type StickyNavProps = {
  nav: StickyNavSpec;
};

const kindStyles: Record<string, string> = {
  logo: "text-xl font-semibold tracking-tight text-[#1f2937]",
  link: "text-sm font-medium text-[#6b7280] hover:text-[#f59e0b] transition-colors",
  ctaSecondary:
    "rounded-full border border-[#ffd966] px-4 py-2 text-sm font-semibold text-[#1f2937] hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors",
  ctaPrimary:
    "rounded-full bg-[#f59e0b] px-4 py-2 text-sm font-semibold text-[#1f2937] hover:bg-[#d97706] transition-colors shadow-sm"
};

export function StickyNav({ nav }: StickyNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoItem = nav.items.find((item) => item.kind === "logo");
  const rightItems = nav.items.filter((item) => item.kind !== "logo");
  const logoLabel = logoItem?.label ?? "";

  return (
    <header
      className={cn(
        "z-50 w-full border-b border-[#ffd966] bg-white/95 backdrop-blur-sm",
        nav.sticky ? "sticky top-0" : "relative"
      )}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        {logoItem ? (
          <Link
            key={`${logoItem.href}-${logoItem.label}`}
            href={logoItem.href}
            className={cn("transition", kindStyles[logoItem.kind] ?? kindStyles.link)}
          >
            {logoLabel === "OneProsper" ? (
  <div className="flex flex-col items-start">
    <div className="text-xl font-semibold tracking-tight">
      <span>One</span>
      <span className="text-[#f59e0b]">Prosper</span>
    </div>
    <div className="text-sm text-black-500 mt-1">read & rise</div>
  </div>
) : (
  logoItem.label
)}
          </Link>
        ) : null}
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {rightItems.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className={cn("transition", kindStyles[item.kind] ?? kindStyles.link)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#1f2937] hover:text-[#f59e0b] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#ffd966] bg-white">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4">
            {rightItems.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={cn(
                  "transition py-2",
                  kindStyles[item.kind] ?? kindStyles.link
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
