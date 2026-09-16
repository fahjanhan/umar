const columns = [
  { heading: "[ Studio ]", links: ["About", "Projects", "Contact"] },
  { heading: "[ Contact ]", links: ["hello@firstdraft.studio", "+1 (234) 567-890"] },
  { heading: "[ Socials ]", links: ["Instagram", "Behance", "LinkedIn"] },
];

export default function Footer() {
  return (
    <footer className="px-2 md:px-4 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-xl">First Draft®</p>
            <p className="text-xs opacity-40 mt-2 tracking-widest uppercase">
              Visual Production Studio
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs tracking-widest uppercase opacity-40 mb-6">
                {col.heading}
              </p>
              <div className="space-y-3">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 mb-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs opacity-40">
          <p>© {new Date().getFullYear()} First Draft. All rights reserved.</p>
          <p>[ Privacy Policy ] · [ Terms of Service ]</p>
        </div>
      </div>

      <div className="relative overflow-hidden h-[24vw] min-h-[180px]">
        <div
          className="absolute bottom-[-0.12em] left-1/2 -translate-x-1/2 font-display font-light text-[18vw] leading-none tracking-tighter text-center whitespace-nowrap"
          style={{
            maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          }}
        >
          First Draft
        </div>
      </div>
    </footer>
  );
}