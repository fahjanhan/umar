import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
