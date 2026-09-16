export default function Footer() {
  return (
    <footer className="border border-dashed border-white/20 p-6">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p>[ LOGO ]</p>
          <p>[ STUDIO NAME ]</p>
        </div>
        <nav>
          <p>[ SOCIAL LINKS ]</p>
          <p>[ INSTAGRAM ] [ BEHANCE ] [ LINKEDIN ] [ VIMEO ]</p>
        </nav>
      </div>
      <p className="mt-6">[ COPYRIGHT ]</p>
    </footer>
  );
}