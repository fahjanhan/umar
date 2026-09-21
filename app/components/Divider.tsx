export default function Divider() {
  return (
    <div className="px-2 md:px-4" aria-hidden="true">
      <div className="max-w-7xl mx-auto flex items-center gap-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
        <span className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase opacity-30 whitespace-nowrap">
          <span
            className="inline-block w-1.5 h-1.5 bg-red-800"
            style={{ animation: "blink 1.5s steps(1) infinite" }}
          />
          35mm · next frame
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
      </div>
    </div>
  );
}