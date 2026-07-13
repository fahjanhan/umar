import Starfield from "./components/starfield";
import Header from "./components/header";
import Hero from "./components/hero";
import Marquee from "./components/marquee";
import Works from "./components/works";
import About from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Starfield />
      <div className="noise-overlay" />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Works />
        <About />
      </main>
      <Footer />
    </>
  );
}
