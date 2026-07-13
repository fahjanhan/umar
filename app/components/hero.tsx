"use client";

import { useEffect, useRef } from "react";
import ParticleText from "./ParticleText";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const subtext = section.querySelectorAll(".reveal-sub");

    subtext.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.transition = `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.8 + i * 0.1}s, opacity 0.8s ease ${0.8 + i * 0.1}s`;
      requestAnimationFrame(() => {
        htmlEl.style.transform = "translateY(0)";
        htmlEl.style.opacity = "1";
      });
    });
  }, []);

  const subtitleWords = ["CGI", "·", "Graphics", "·", "Video", "·", "Visual Campaign"];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end px-4 md:px-8 pb-12 bg-transparent z-10"
    >
      <div className="mb-6 reveal-sub" style={{ opacity: 0, transform: "translateY(20px)" }}>
        <div className="w-8 h-[1px] bg-white/40 mb-6" />
      </div>

      <div className="mb-8">
        <ParticleText text="WE CRAFT WORLDS" className="h-[45vw] md:h-[35vw]" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {subtitleWords.map((word, i) => (
            <span
              key={i}
              className="reveal-sub text-white/90 text-[11px] tracking-[0.25em] uppercase font-mono"
              style={{ opacity: 0, transform: "translateY(15px)" }}
            >
              {word}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 reveal-sub" style={{ opacity: 0, transform: "translateY(15px)" }}>
          <div className="flex gap-1">
            <div className="w-[3px] h-[3px] rounded-full bg-white/40 animate-[blink_2s_ease-in-out_infinite]" />
            <div className="w-[3px] h-[3px] rounded-full bg-white/40 animate-[blink-delay_2s_ease-in-out_infinite]" />
            <div className="w-[3px] h-[3px] rounded-full bg-white/40 animate-[blink_2s_ease-in-out_infinite_0.3s]" />
          </div>
          <span className="text-white/75 text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</span>
        </div>
      </div>
    </section>
  );
}
