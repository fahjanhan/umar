"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const ABOUT_TEXT =
  "[ About text that fills one word at a time as you scroll through. Replace this with real copy about the studio. ]";

const words = ABOUT_TEXT.split(" ");

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const wordEls = Array.from(el.querySelectorAll<HTMLElement>("[data-word]"));

    let raf = 0;

    const update = () => {
      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();
      const start = vh;
      const end = vh * 0.2;
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
      const threshold = progress * wordEls.length;

      wordEls.forEach((word, i) => {
        const t = Math.min(Math.max(threshold - i, 0), 1);
        word.style.setProperty("--fill", `${t * 100}%`);
      });

      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="about" className="px-2 md:px-4 py-32 md:py-44">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase opacity-40 mb-12">
          [ About Us ]
        </p>

        <p
          ref={textRef}
          className="font-display text-3xl md:text-4xl lg:text-5xl leading-snug max-w-4xl mb-20"
        >
          {words.map((word, i) => (
            <span
              key={i}
              data-word
              className="inline-block will-change-transform transition-[background] duration-300"
              style={
                {
                  color: "#525252",
                  background: "linear-gradient(to right, #ffffff var(--fill), #525252 var(--fill))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  "--fill": "0%",
                } as CSSProperties
              }
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`bg-neutral-900 min-h-[280px] ${
                i % 2 === 0 ? "rounded-[40px]" : "rounded-none"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}