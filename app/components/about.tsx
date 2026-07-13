"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    number: "01",
    title: "CGI",
    titleItalic: "Reality",
    desc: "Photorealistic 3D worlds and digital assets.",
  },
  {
    number: "02",
    title: "Graphics",
    titleItalic: "Identity",
    desc: "Visual identity and design systems.",
  },
  {
    number: "03",
    title: "Video",
    titleItalic: "Motion",
    desc: "Cinematic production and motion design.",
  },
  {
    number: "04",
    title: "Campaign",
    titleItalic: "Vision",
    desc: "Creative direction and campaign strategy.",
  },
];

const stats = [
  { value: "48+", label: "Projects" },
  { value: "12", label: "Awards" },
  { value: "5", label: "Years" },
  { value: "∞", label: "Possibilities" },
];

export default function About() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative z-10 py-20 md:py-28 px-4 md:px-8">
      <div className="mb-20 md:mb-28 flex flex-col items-center text-center">
        <h2 className="text-white text-4xl md:text-[5vw] font-sans font-bold leading-[0.9] tracking-[-0.05em] mb-4">
          WE DON&apos;T
          <br />
          <span className="text-white/[0.53]">DO ORDINARY</span>
          <span className="font-serif italic text-white/30 text-[0.7em] ml-2">.</span>
        </h2>
        <p className="text-white/[0.65] text-sm font-mono leading-relaxed max-w-md">
          Visual production at the edge of what&apos;s possible.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/[0.1] pt-8 w-full max-w-3xl">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-white text-3xl md:text-4xl font-sans font-bold tracking-tight">{stat.value}</div>
              <div className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-mono mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[1px] bg-white/[0.06]">
        {services.map((service, i) => (
          <div
            key={service.number}
            ref={(el) => { cardsRef.current[i] = el; }}
            className="group bg-black p-6 md:p-10 opacity-0 translate-y-6 transition-all duration-700 cursor-pointer hover:bg-white/[0.02]"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
              <div className="flex items-baseline gap-4 md:w-1/4">
                <span className="text-white/45 text-[10px] font-mono">{service.number}</span>
                <h3 className="text-white text-2xl md:text-3xl font-sans font-bold tracking-[-0.03em] group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>

              <div className="md:w-1/4">
                <span className="text-white/[0.38] text-lg font-serif italic">{service.titleItalic}</span>
              </div>

              <div className="md:w-2/4">
                <p className="text-white/75 text-sm font-mono leading-relaxed md:pl-8">
                  {service.desc}
                </p>
              </div>
            </div>

            <div className="mt-4 md:mt-6 md:ml-[calc(25%+1rem)]">
              <div className="w-0 group-hover:w-full h-[1px] bg-white/[0.12] transition-all duration-700" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
