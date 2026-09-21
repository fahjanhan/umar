import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Reveal from "./components/Reveal";
import Divider from "./components/Divider";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Divider />
        <Reveal>
          <Portfolio />
        </Reveal>
        <Divider />
        <Reveal>
          <Clients />
        </Reveal>
        <Divider />
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
