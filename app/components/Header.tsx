"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#portfolio" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setMenuOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linksWrap = scrolled
    ? "lg:max-w-0 lg:opacity-0 lg:ml-0 lg:group-hover:max-w-[34rem] lg:group-hover:opacity-100 lg:group-hover:ml-7"
    : "lg:max-w-[34rem] lg:opacity-100 lg:ml-7";

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-6 md:pt-8">
      <div
        className={`group flex items-center overflow-hidden rounded-full border border-white/20 bg-black/60 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "h-9 px-4 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            : "h-12 px-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
        }`}
      >
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-sm whitespace-nowrap"
        >
          <span className="inline-block w-2.5 h-2.5 bg-red-800" />
          <span className="font-display font-semibold tracking-tight">
            First Draft®
          </span>
        </a>

        <div
          className={`hidden lg:block overflow-hidden transition-[max-width,opacity,margin] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${linksWrap}`}
        >
          <nav className="flex items-center gap-6 whitespace-nowrap text-xs tracking-[0.3em] uppercase">
            {LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="opacity-60 hover:opacity-100 hover:text-white transition-all"
              >
                <span className="font-mono opacity-40 mr-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex items-center gap-2 ml-4 text-xs tracking-[0.3em] uppercase whitespace-nowrap"
          aria-label="Toggle menu"
        >
          <span
            className="inline-block w-1.5 h-1.5 bg-red-800"
            style={{ animation: "blink 1.5s steps(1) infinite" }}
          />
          [{menuOpen ? "Close" : "Menu"}]
        </button>
      </div>

      <div
          className={`absolute left-3 right-3 top-[4.75rem] md:top-[5.25rem] rounded-2xl border border-white/25 bg-black/95 backdrop-blur-md px-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${
            menuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible"
          }`}
        >
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-4 text-sm tracking-[0.3em] uppercase opacity-80 hover:opacity-100 transition-opacity"
            >
              <span>
                <span className="font-mono opacity-40 mr-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </span>
              <span className="text-white/30">→</span>
            </a>
          ))}
        </div>
    </header>
  );
}