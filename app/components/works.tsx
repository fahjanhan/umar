"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "NEBULA",
    subtitle: "Immersive CGI Experience",
    category: "CGI · Product Visualization",
    color: "#1a1a2e",
  },
  {
    id: "02",
    title: "FRACTURE",
    subtitle: "Cinematic Motion Film",
    category: "Motion Design · Film",
    color: "#16213e",
  },
  {
    id: "03",
    title: "PRISM",
    subtitle: "Visual Marketing Campaign",
    category: "Visual Campaign · Brand",
    color: "#0f3460",
  },
  {
    id: "04",
    title: "ABYSS",
    subtitle: "Interactive World Building",
    category: "CGI · Interactive Experience",
    color: "#1a1a2e",
  },
  {
    id: "05",
    title: "SOLARIS",
    subtitle: "Brand Film & Identity",
    category: "Video · Brand Identity",
    color: "#16213e",
  },
];

// How many index-widths one card's full transition spans. Smaller = snappier,
// less scroll needed, and — critically — less overlap with neighboring cards.
const SPREAD = 1.15;

export default function Works() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const track = scrollTrackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const trackHeight = track.offsetHeight;
      const vh = window.innerHeight;
      const scrolled = vh - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (trackHeight + vh)));
      setScrollProgress(progress);
    };

    const handleResize = () => setIsMobile(window.innerWidth < 640);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalCards = projects.length;

  return (
    <section id="work" className="relative z-10">
      <div className="px-4 md:px-8 py-16 md:py-24">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <span className="text-white/75 text-[10px] tracking-[0.4em] uppercase font-mono">Selected</span>
            <div className="w-16 h-[1px] bg-white/20" />
          </div>
          <span className="text-white/60 text-[10px] tracking-[0.4em] uppercase font-mono">
            {String(totalCards).padStart(2, "0")} Projects
          </span>
        </div>
      </div>

      {/* Track height: enough scroll room for a clean transition per card, no more. */}
      <div
        ref={scrollTrackRef}
        className="relative"
        style={{ height: `${totalCards * 60 + 40}vh` }}
      >
        <div
          ref={containerRef}
          className="sticky top-0 h-screen w-full overflow-hidden"
          style={{ perspective: isMobile ? "900px" : "1200px" }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {projects.map((project, i) => {
              const cardProgress = (scrollProgress * totalCards - i) / SPREAD;
              // Clamp well under the perspective value so cards never cross
              // the camera plane and flip/invert.
              const clamped = Math.max(-1, Math.min(1, cardProgress));
              const dist = Math.abs(clamped);

              const z = clamped * (isMobile ? 260 : 400);
              const scale = 1 - dist * 0.55;
              const opacity = Math.max(0, 1 - dist * 1.15);
              // Higher z-index for the card closest to center, so stacking
              // order is explicit instead of relying on 3D paint order.
              const zIndex = Math.round((1 - dist) * 100);

              const xUnits = (i % 3) - 1; // -1, 0, 1
              const yBase = (i % 2) === 0 ? -30 : 30;
              const y = yBase + Math.sin(clamped * 2) * (isMobile ? 8 : 20);
              const rotateY = isMobile ? 0 : xUnits * 5;

              return (
                <div
                  key={project.id}
                  className="absolute cursor-pointer group"
                  style={{
                    transform: `translateX(calc(${xUnits} * ${isMobile ? "6vw" : "120px"})) translateY(${y}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    width: isMobile ? "82vw" : "min(500px, 70vw)",
                    pointerEvents: opacity > 0.6 ? "auto" : "none",
                    transition: "opacity 0.1s ease",
                    willChange: "transform, opacity",
                  }}
                >
                  <div className="relative bg-white/[0.04] border border-white/[0.1] overflow-hidden aspect-video">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{ background: `radial-gradient(ellipse at center, ${project.color}80, transparent 70%)` }}
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                      <div className="w-14 h-14 border border-white/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:border-white/60 transition-all duration-500 backdrop-blur-sm bg-white/[0.05]">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-white/70 ml-1.5 group-hover:border-l-white transition-colors duration-500" />
                      </div>
                      <div className="text-center">
                        <div className="text-white/90 text-xs font-mono tracking-[0.2em] uppercase mb-1">{project.id}</div>
                        <div className="text-white text-xl md:text-2xl font-sans font-bold tracking-[-0.03em]">{project.title}</div>
                        <div className="text-white/75 text-[10px] font-mono mt-1">{project.category}</div>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                      <div className="w-[5px] h-[5px] rounded-full bg-white/40" />
                      <span className="text-white/60 text-[9px] font-mono tracking-wider uppercase">{project.id}/{String(totalCards).padStart(2, "0")}</span>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-10">
                      <div className="h-full bg-white/50 w-0 group-hover:w-full transition-all duration-700" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
            <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full bg-white/60 transition-all duration-100"
                style={{ height: `${scrollProgress * 100}%` }}
              />
            </div>
            <span className="text-white/60 text-[9px] tracking-[0.3em] uppercase font-mono">
              {String(Math.min(Math.floor(scrollProgress * totalCards) + 1, totalCards)).padStart(2, "0")} / {String(totalCards).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}