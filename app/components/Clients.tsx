const clients = [
  "Aperture",
  "Blackline",
  "Cornfield",
  "Delta Co.",
  "Echo Works",
  "Foundation",
  "Grandstand",
  "Hemlock",
  "Ironclad",
  "Juniper",
  "Kinfolk",
  "Lumen",
];

export default function Clients() {
  return (
    <section id="clients" className="px-2 md:px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <div className="flex items-baseline gap-6">
            <p className="text-xs tracking-[0.3em] uppercase opacity-50">
              [ Clients ]
            </p>
            <span className="text-lg opacity-40">
              ({clients.length.toString().padStart(2, "0")})
            </span>
          </div>
          <span
            className="hidden md:flex items-center gap-2 text-xs tracking-[0.3em] uppercase opacity-40"
          >
            <span
              className="inline-block w-2 h-2 rounded-full bg-white"
              style={{ animation: "blink 1.5s steps(1) infinite" }}
            />
            2026 · Reel So Far
          </span>
        </div>

        <div className="relative border border-white/25 bg-white/[0.02]">
          <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/40" />
          <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/40" />
          <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/40" />
          <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/40" />

          <div className="flex items-center justify-between px-4 md:px-7 py-3 text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-60 border-b border-white/25">
            <span>Credited Work</span>
            <span>CL / 35MM</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10">
            {clients.map((client, i) => (
              <a
                key={client}
                href="#"
                className="group flex items-center justify-between bg-black px-5 py-6 transition-colors hover:bg-white/[0.04]"
              >
                <span className="font-display text-lg md:text-xl leading-none opacity-70 group-hover:opacity-100 transition-opacity">
                  {client}
                </span>
                <span className="font-mono text-[10px] tracking-widest opacity-30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between px-4 md:px-7 py-3 text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-60 border-t border-white/25">
            <span>And counting…</span>
            <span>[ Full roster on request ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}