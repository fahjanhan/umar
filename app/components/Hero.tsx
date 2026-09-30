"use client";

import { useEffect, useRef } from "react";

const HEADLINE =
  "A digital design practice crafting brands with substance. We merge interactive physics with strategic identity to build websites that feel real.";

const words = HEADLINE.split(" ");

const REVEAL_AT = 0.32;
const DAMPING = 0.1;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section) return;

    const wordEls = Array.from(
      section.querySelectorAll<HTMLElement>("[data-word]")
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wordEls.forEach((word) => {
        word.style.opacity = "1";
        word.style.transform = "none";
      });
      video?.pause();
      return;
    }

    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }

    let raf = 0;
    let raw = 0;
    let current = 0;
    let target = 0;

    const render = () => {
      const threshold = current * wordEls.length;

      wordEls.forEach((word, i) => {
        const t = Math.min(Math.max(threshold - i, 0), 1);
        const eased = t * t * (3 - 2 * t);
        word.style.opacity = String(eased);
        word.style.transform = `translateY(${(1 - eased) * 105}%)`;
      });

      if (video) video.style.transform = `scale(${1.08 - 0.08 * raw})`;
    };

    const tick = () => {
      const delta = target - current;

      if (Math.abs(delta) < 0.0004) {
        current = target;
        render();
        raf = 0;
        return;
      }

      current += delta * DAMPING;
      render();
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const scrolled = Math.min(
        Math.max(-section.getBoundingClientRect().top, 0),
        travel
      );

      raw = scrolled / travel;
      target = Math.min(raw / REVEAL_AT, 1);
      if (!raf) raf = requestAnimationFrame(tick);
    };

    onScroll();
    current = target;
    render();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative h-[150vh]">
      <div className="sticky top-0 h-screen p-2 md:p-4">
        <div className="absolute inset-2 md:inset-4 z-0 overflow-hidden rounded-2xl md:rounded-3xl bg-red-950">
          <video
            ref={videoRef}
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
            tabIndex={-1}
            className="h-full w-full origin-center object-cover will-change-transform"
          >
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-red-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />
        </div>

        <div className="absolute z-10 inset-2 md:inset-4 flex items-end">
          <h1 className="px-6 md:px-10 pb-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            {words.map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-bottom"
              >
                <span
                  data-word
                  className="inline-block pt-[0.12em] pb-[0.2em] will-change-[opacity,transform]"
                  style={{ opacity: 0, transform: "translateY(105%)" }}
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
