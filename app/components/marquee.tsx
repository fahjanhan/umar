"use client";

import { useEffect, useRef } from "react";

const brands = [
  "NIKE", "APPLE", "TESLA", "SPOTIFY", "ADOBE", "STRIPE", "NOTION", "FIGMA",
  "NIKE", "APPLE", "TESLA", "SPOTIFY", "ADOBE", "STRIPE", "NOTION", "FIGMA",
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let pos = 0;
    let animId: number;

    const animate = () => {
      pos -= 0.5;

      if (trackRef.current) {
        if (Math.abs(pos) > trackRef.current.scrollWidth / 2) pos = 0;
        trackRef.current.style.transform = `translateX(${pos}px)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative z-10 py-12 md:py-16 overflow-hidden border-y border-white/[0.12]">
      <div className="overflow-hidden">
        <div ref={trackRef} className="whitespace-nowrap flex items-center">
          {brands.map((brand, i) => (
            <span key={i} className="flex items-center mx-5 md:mx-8">
              <span className="text-white/[0.4] text-[2.5vw] md:text-[1.8vw] font-sans font-bold tracking-[0.04em] uppercase select-none hover:text-white/80 transition-colors duration-500">
                {brand}
              </span>
              <span className="text-white/[0.2] text-[2vw] md:text-[1.4vw] mx-5 md:mx-8 select-none">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
