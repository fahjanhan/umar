"use client";

import { useEffect, useRef } from "react";

const HEADLINE =
  "A digital design practice crafting brands with substance. We merge interactive physics with strategic identity to build websites that feel real.";

const words = HEADLINE.split(" ");

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const wordEls = Array.from(
      section.querySelectorAll<HTMLElement>("[data-word]")
    );

    let raf = 0;

    const update = () => {
      const travel = section.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(-section.getBoundingClientRect().top / travel, 0), 1);
      const threshold = progress * wordEls.length;

      wordEls.forEach((word, i) => {
        const t = Math.min(Math.max(threshold - i, 0), 1);
        word.style.opacity = String(t);
        word.style.transform = `translateY(${(1 - t) * 110}%)`;
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
    <section ref={sectionRef} id="hero" className="relative h-[220vh]">
      <div className="sticky top-0 h-screen p-2 md:p-4">
        <div className="absolute inset-2 md:inset-4 z-0 flex items-center justify-center rounded-2xl md:rounded-3xl bg-emerald-950">
          <span className="text-xs tracking-[0.3em] uppercase opacity-40">
            [ Background Image ]
          </span>
        </div>
        <div className="absolute inset-2 md:inset-4 z-[1] rounded-2xl md:rounded-3xl bg-gradient-to-t from-black via-emerald-950/40 to-emerald-950/50" />

        <nav className="absolute z-20 top-6 md:top-8 left-1/2 -translate-x-1/2 flex h-9 items-center gap-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-6 text-xs md:text-sm">
          <span className="tracking-[0.2em] uppercase">First Draft®</span>
          <span className="w-px h-4 bg-white/20" />
          <span className="opacity-50">[ MENU ]</span>
        </nav>

        <div className="absolute z-10 inset-2 md:inset-4 flex items-end">
				<h1 className="px-6 md:px-10 pb-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
					{words.map((word, i) => (
						<span key={i} className="inline-block overflow-hidden align-bottom">
							<span
								data-word
								className="inline-block will-change-transform transition-[opacity,transform] duration-700 ease-out"
								style={{
									opacity: 0,
									transform: "translateY(110%)",
								}}
							>
								{word}
							</span>
							{i < words.length - 1 ? "\u00A0" : ""}
						</span>
					))}
				</h1>
			</div>
      </div>
    </section>
  );
}