"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { siteConfig } from "@/data/profile";
import { cn, isPlaceholderValue } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const cvIsReady = !isPlaceholderValue(siteConfig.cvUrl);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "glass" : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#home"
          className="font-mono text-lg font-medium tracking-tight text-ink"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="text-cyan">&lt;</span>
          {siteConfig.initials}
          <span className="text-cyan">/&gt;</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-dim transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          {cvIsReady ? (
            <a
              href={siteConfig.cvUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-cyan/30 hover:text-cyan"
            >
              <FileText size={15} aria-hidden="true" />
              View CV
            </a>
          ) : (
            <span
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-line-soft px-4 py-2 text-sm text-ink-faint"
              title="CV link not yet added — update siteConfig.cvUrl in src/data/profile.ts"
            >
              <FileText size={15} aria-hidden="true" />
              View CV
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="glass mx-4 mb-4 rounded-2xl px-6 py-6 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-ink-dim transition-colors hover:bg-ink/[0.04] hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 border-t border-line pt-4">
            {cvIsReady ? (
              <a
                href={siteConfig.cvUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-cyan"
              >
                <FileText size={15} aria-hidden="true" />
                View CV
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm text-ink-faint">
                <FileText size={15} aria-hidden="true" />
                View CV (link coming soon)
              </span>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
