export default function Contact() {
  return (
    <section id="contact" className="border border-dashed border-white/20 p-6">
      <h2>[ CONTACT HEADING ]</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-dashed border-white/20 p-4">
        <div className="border border-dashed border-white/20 p-4">
          <p>[ CONTACT INFO ]</p>
          <p>[ EMAIL ]</p>
          <p>[ PHONE ]</p>
        </div>
        <div className="border border-dashed border-white/20 p-4">
          <p>[ FORM PLACEHOLDER ]</p>
          <p>[ NAME INPUT ]</p>
          <p>[ EMAIL INPUT ]</p>
          <p>[ MESSAGE INPUT ]</p>
          <p>[ SUBMIT BUTTON ]</p>
        </div>
      </div>
    </section>
  );
}