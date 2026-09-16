export default function Services() {
  return (
    <section id="services" className="border border-dashed border-white/20 p-6">
      <h2>[ SERVICES HEADING ]</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-dashed border-white/20 p-4">
        <div className="border border-dashed border-white/20 p-4">[ Service 1 ]</div>
        <div className="border border-dashed border-white/20 p-4">[ Service 2 ]</div>
        <div className="border border-dashed border-white/20 p-4">[ Service 3 ]</div>
        <div className="border border-dashed border-white/20 p-4">[ Service 4 ]</div>
      </div>
    </section>
  );
}