const projects = [
  { num: "01", category: "3D / CGI", title: "Ethereal" },
  { num: "02", category: "Motion Design", title: "Pulse" },
  { num: "03", category: "Video", title: "Canvas" },
  { num: "04", category: "Graphics", title: "Nexus" },
  { num: "05", category: "Campaign", title: "Summit" },
  { num: "06", category: "3D / CGI", title: "Vault" },
  { num: "07", category: "Video", title: "Velocity" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-2 md:px-4 py-32 md:py-44">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-20">
          <div className="flex items-baseline gap-6">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl">
              Projects.
            </h2>
            <span className="text-lg opacity-40">
              ({projects.length.toString().padStart(2, "0")})
            </span>
          </div>
          <a
            href="#"
            className="hidden md:inline-block text-sm opacity-50 hover:opacity-100 transition-opacity"
          >
            [ All Projects → ]
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20">
          {projects.map((project) => (
            <a
              key={project.num}
              href={`/projects/${project.title.toLowerCase()}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[25px] bg-emerald-950">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-800/50 via-emerald-950 to-black grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700">
                  <span className="text-xs tracking-[0.3em] uppercase opacity-40">
                    [ Image ]
                  </span>
                </div>
                <span className="absolute top-5 left-5 rounded-full bg-[#FEBE00] px-4 py-2 text-xs font-medium text-black">
                  {project.category}
                </span>
              </div>

              <div className="flex items-baseline justify-between mt-6">
                <h3 className="font-display text-3xl md:text-4xl">
                  {project.title}
                </h3>
                <span className="text-sm opacity-30">({project.num})</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}