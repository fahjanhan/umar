const columns = [
  { heading: "[ Studio ]", links: ["About", "Projects", "Contact"] },
  { heading: "[ Contact ]", links: ["hello@firstdraft.studio", "+1 (234) 567-890"] },
  { heading: "[ Socials ]", links: ["Instagram", "Behance", "LinkedIn"] },
];

export default function Footer() {
  return (
    <footer className="px-2 md:px-4 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative border border-white/25 bg-white/[0.02]">
          <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/40" />
          <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/40" />
          <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/40" />
          <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/40" />

          <div className="flex items-center justify-between px-4 md:px-7 py-3 text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-60">
            <span className="flex items-center gap-2">
              <span
                className="inline-block w-2 h-2 rounded-full bg-white"
                style={{ animation: "blink 1.5s steps(1) infinite" }}
              />
              End of Reel
            </span>
            <span>35MM · Final Frame</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-6 md:px-10 py-12">
            <div className="col-span-2 md:col-span-1">
              <p className="flex items-center gap-3 font-display text-2xl">
                <span className="inline-block w-2.5 h-2.5 bg-red-800" />
                First Draft®
              </p>
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mt-3">
                Visual Production Studio
              </p>
            </div>

            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-6">
                  {col.heading}
                </p>
                <div className="space-y-3">
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-sm opacity-70 hover:text-white hover:opacity-100 transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-3 border-t border-white/25 px-6 md:px-10 py-5 text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-60">
            <p>© {new Date().getFullYear()} First Draft · All rights reserved</p>
            <p>[ Privacy Policy ] · [ Terms of Service ]</p>
          </div>
        </div>

        <div
          className="relative mt-6 h-[15vw] min-h-[120px] overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, black 65%, transparent 98%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 98%)",
          }}
        >
          <p className="absolute inset-x-0 bottom-[-0.06em] text-center font-display font-black text-[12.5vw] leading-none tracking-tighter whitespace-nowrap select-none opacity-90 text-red-900">
            First Draft
          </p>
        </div>
      </div>
    </footer>
  );
}