"use client";

import FooterCube from "./FooterCube";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 min-h-screen border-t border-white/[0.1]">
      <div className="h-full grid grid-cols-3 grid-rows-[auto_auto_1fr_auto_auto] min-h-screen">
        <div className="border-b border-r border-white/[0.1] p-4 md:p-6 flex flex-col justify-between">
          <span className="text-white/60 text-[9px] tracking-[0.3em] uppercase font-mono">A01</span>
          <div>
            <span className="text-white/75 text-[9px] tracking-[0.2em] uppercase font-mono block mb-1">Location</span>
            <span className="text-white/90 text-xs font-mono">Dubai, AE</span>
          </div>
        </div>

        <div className="border-b border-r border-white/[0.1] p-4 md:p-6 flex flex-col justify-between">
          <span className="text-white/60 text-[9px] tracking-[0.3em] uppercase font-mono">A02</span>
          <div>
            <span className="text-white/75 text-[9px] tracking-[0.2em] uppercase font-mono block mb-1">Email</span>
            <a href="mailto:hello@firstdraft.studio" className="text-white/90 text-xs font-mono hover:text-white transition-colors duration-300">hello@firstdraft.studio</a>
          </div>
        </div>

        <div className="border-b border-white/[0.1] p-4 md:p-6 flex flex-col justify-between">
          <span className="text-white/60 text-[9px] tracking-[0.3em] uppercase font-mono">A03</span>
          <div>
            <span className="text-white/75 text-[9px] tracking-[0.2em] uppercase font-mono block mb-1">Phone</span>
            <span className="text-white/90 text-xs font-mono">+49 30 000 0000</span>
          </div>
        </div>

        <div className="border-b border-r border-white/[0.1] col-span-3 p-4 md:p-6">
          <div className="flex items-center justify-between">
            <span className="text-white/60 text-[9px] tracking-[0.3em] uppercase font-mono">Socials</span>
            <div className="flex items-center gap-6 md:gap-10">
              {["Instagram", "Behance", "Vimeo", "LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white/75 text-[10px] tracking-[0.15em] uppercase font-mono hover:text-white transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <FooterCube />

        <div className="border-t border-r border-white/[0.1] col-span-3 md:col-span-1 p-6 md:p-10 flex flex-col items-center justify-center">
          <span className="text-white/60 text-[9px] tracking-[0.3em] uppercase font-mono mb-6">Services</span>
          <div className="flex flex-col gap-3 text-center">
            {["CGI", "Graphics", "Video", "Campaign"].map((s) => (
              <span key={s} className="text-white/90 text-xs font-mono tracking-wider">{s}</span>
            ))}
          </div>
        </div>

        <div className="border-t border-r border-white/[0.1] col-span-3 md:col-span-1 flex flex-col items-center justify-center py-16 md:py-0">
          <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] text-[12vw] md:text-[8vw] font-sans font-bold leading-none tracking-[-0.06em] select-none">
            LET&apos;S
          </span>
          <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] text-[12vw] md:text-[8vw] font-sans font-bold leading-none tracking-[-0.06em] select-none">
            BUILD
          </span>
          <span className="text-white text-2xl md:text-4xl font-serif italic mt-2 md:mt-4 text-white/90">
            together
          </span>
          <span className="text-white/45 text-[9px] tracking-[0.3em] uppercase font-mono mt-6 md:mt-8">_</span>
        </div>

        <div className="border-t border-white/[0.1] col-span-3 md:col-span-1 p-6 md:p-10 flex flex-col items-center justify-center">
          <span className="text-white/60 text-[9px] tracking-[0.3em] uppercase font-mono mb-6">Availability</span>
          <div className="flex flex-col gap-3 text-center">
            <span className="text-white/90 text-xs font-mono tracking-wider">2024 — Open</span>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-[5px] h-[5px] rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500 text-[10px] font-mono tracking-wider uppercase">Available</span>
            </div>
          </div>
        </div>

        <div className="border-t border-r border-white/[0.1] p-4 md:p-6 flex flex-col justify-between">
          <span className="text-white/60 text-[9px] tracking-[0.3em] uppercase font-mono">B01</span>
          <div>
            <span className="text-white/75 text-[9px] tracking-[0.2em] uppercase font-mono block mb-1">Instagram</span>
            <a href="#" className="text-white/90 text-xs font-mono hover:text-white transition-colors duration-300">@firstdraft.studio</a>
          </div>
        </div>

        <div className="border-t border-r border-white/[0.1] p-4 md:p-6 flex flex-col justify-between">
          <span className="text-white/60 text-[9px] tracking-[0.3em] uppercase font-mono">B02</span>
          <div>
            <span className="text-white/75 text-[9px] tracking-[0.2em] uppercase font-mono block mb-1">Behance</span>
            <a href="#" className="text-white/90 text-xs font-mono hover:text-white transition-colors duration-300">firstdraft</a>
          </div>
        </div>

        <div className="border-t border-white/[0.1] p-4 md:p-6 flex flex-col justify-between">
          <span className="text-white/60 text-[9px] tracking-[0.3em] uppercase font-mono">B03</span>
          <div>
            <span className="text-white/75 text-[9px] tracking-[0.2em] uppercase font-mono block mb-1">Vimeo</span>
            <a href="#" className="text-white/90 text-xs font-mono hover:text-white transition-colors duration-300">firstdraft</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
