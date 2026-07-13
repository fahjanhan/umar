"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="bg-black/90 backdrop-blur-sm fixed top-0 left-0 w-full z-[70] px-4 md:px-8 py-5 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-6">
          <a href="#" className="text-white text-sm tracking-[0.35em] uppercase font-mono">
            FIRST DRAFT<span className="text-white/60">.</span>
          </a>
          <div className="hidden md:block w-[1px] h-3 bg-white/10" />
          <span className="hidden md:block text-white/75 text-[10px] tracking-[0.3em] uppercase font-mono">
            Visual Production
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Work", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group text-white/90 text-[11px] tracking-[0.3em] uppercase font-mono hover:text-white transition-colors duration-500"
            >
              <span className="line-mask">
                <span>{item}</span>
              </span>
            </a>
          ))}
          <div className="w-[1px] h-3 bg-white/10" />
          <a
            href="mailto:hello@firstdraft.studio"
            className="text-[10px] tracking-[0.25em] uppercase font-mono border border-white/20 rounded-full px-5 py-2 hover:bg-white hover:text-black transition-all duration-500"
          >
            Inquire
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] cursor-pointer relative p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block w-5 h-[1px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-5 h-[1px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </header>

      <div
        className={`fixed inset-0 bg-black flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 60 }}
      >
        <nav className="flex flex-col items-center gap-8">
          {["Work", "Services", "Contact"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white text-4xl font-mono font-light tracking-wider hover:text-white/60 transition-colors duration-300"
              style={{ transitionDelay: menuOpen ? `${i * 80}ms` : "0ms" }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
