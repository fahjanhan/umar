export default function Portfolio() {
  return (
    <section id="portfolio" className="border border-dashed border-white/20 p-6">
      <h2>[ PORTFOLIO HEADING ]</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="aspect-[4/5] border border-dashed border-white/20">[ Project 1 ]</div>
        <div className="aspect-[4/5] border border-dashed border-white/20">[ Project 2 ]</div>
        <div className="aspect-[4/5] border border-dashed border-white/20">[ Project 3 ]</div>
        <div className="aspect-[4/5] border border-dashed border-white/20">[ Project 4 ]</div>
        <div className="aspect-[4/5] border border-dashed border-white/20">[ Project 5 ]</div>
        <div className="aspect-[4/5] border border-dashed border-white/20">[ Project 6 ]</div>
      </div>
    </section>
  );
}