const projects = [
  { num: "01", category: "3D / CGI", title: "Ethereal" },
  { num: "02", category: "Motion Design", title: "Pulse" },
  { num: "03", category: "Video", title: "Canvas" },
  { num: "04", category: "Graphics", title: "Nexus" },
  { num: "05", category: "Campaign", title: "Summit" },
  { num: "06", category: "3D / CGI", title: "Vault" },
  { num: "07", category: "Video", title: "Velocity" },
];

const GRID_LINES = {
  backgroundImage:
    "linear-gradient(to right, rgba(220, 38, 38, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(220, 38, 38, 0.12) 1px, transparent 1px)",
  backgroundSize: "20px 20px",
};

const SPANS = [
  "row-span-2",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-1",
  "row-span-1",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-2 md:px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 border border-white/25 bg-white/[0.02]">
          <div className="flex items-center justify-between px-4 md:px-7 py-5 md:py-6">
            <div>
              <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-50 mb-2">
                Feature Selection
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-none">
                Projects.
              </h2>
            </div>
            <div className="text-right">
              <span
                className="inline-block w-2 h-2 rounded-full bg-white mb-2"
                style={{ animation: "blink 1.5s steps(1) infinite" }}
              />
              <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-50">
                Projecting
              </p>
              <p className="font-display text-2xl md:text-3xl text-white">
                {projects.length.toString().padStart(2, "0")}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-white/25 px-4 md:px-7 py-2 text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-60">
            <span>35mm · Colour · Sound</span>
            <a href="#" className="hover:text-white transition-colors">
              [ All Projects → ]
            </a>
          </div>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] lg:auto-rows-[340px] border-t border-l border-white/25 bg-black">
          {projects.map((project, i) => (
            <a
              key={project.num}
              href={`/projects/${project.title.toLowerCase()}`}
              className={`group relative overflow-hidden border-r border-b border-white/25 bg-neutral-950 ${SPANS[i % SPANS.length]}`}
            >
              <div
                className="absolute inset-0 opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"
                style={GRID_LINES}
              />

              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-900/60 via-red-950 to-black grayscale group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-700">
                <span className="text-xs tracking-[0.3em] uppercase opacity-40">
                  [ Frame ]
                </span>
              </div>

              <div className="film-scanline" />

              <span className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-white/40 group-hover:border-white transition-colors duration-300" />
              <span className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-white/40 group-hover:border-white transition-colors duration-300" />
              <span className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-white/40 group-hover:border-white transition-colors duration-300" />
              <span className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-white/40 group-hover:border-white transition-colors duration-300" />

              <span className="absolute top-4 left-4 bg-white px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-black">
                {project.category}
              </span>

              <span className="absolute top-3 right-3 font-mono text-[10px] tracking-widest opacity-40">
                UC {project.num}
              </span>

              <div className="absolute inset-x-0 bottom-0 bg-black/85 border-t border-white/25 px-4 py-3 flex items-center justify-between">
                <h3 className="font-display text-xl md:text-2xl leading-none">
                  {project.title}
                </h3>
                <span className="font-mono text-[10px] tracking-widest opacity-50">
                  {project.num} / 35MM
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}