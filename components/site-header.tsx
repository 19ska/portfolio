"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { identity, navLinks } from "@/lib/data";
import { Container } from "@/components/ui/container";

/**
 * Thin, always-present wayfinding for a single scrolling page. Every link
 * jumps to a section anchor — there's nothing to navigate "back" from.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-sm">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/#top"
            className="font-mono text-sm font-medium tracking-tight text-ink"
            aria-label={`${identity.name} — back to top`}
          >
            {identity.monogram}
            <span className="text-accent">.</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="kicker text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="kicker rounded-full border border-ink px-4 py-1.5 text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-hairline bg-paper md:hidden">
          <Container size="wide" className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-4 text-base text-muted last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)} className="py-4 text-base text-accent">
              Contact
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
