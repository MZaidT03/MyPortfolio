import "./App.css";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import BrandSection from "./components/BrandSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const headerOffset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#050505] text-gray-300">
      <ScrollProgress />
      <CustomCursor />
      <Header onLinkClick={handleNavLinkClick} />
      <main>
        <Hero onLinkClick={handleNavLinkClick} />
        <About />
        <BrandSection />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
