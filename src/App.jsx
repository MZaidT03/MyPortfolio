import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "./App.css";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import BrandSection from "./components/BrandSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    if (lenisRef.current) {
      lenisRef.current.scrollTo(id, {
        offset: -60,
        duration: 1.2,
      });
    } else {
      const el = document.querySelector(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-[#0B0B0B] text-[#F4F1EA] min-h-screen relative font-body selection:bg-[#E5D9B6] selection:text-[#0B0B0B]">
      {/* Editorial Brutalist Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Luxury Trailing Custom Cursor */}
      <CustomCursor />

      {/* Sticky Minimal Editorial Header */}
      <Header onLinkClick={handleNavLinkClick} />

      <main>
        {/* Bone-White Hero with SVG Liquid Distortion Shader */}
        <Hero onLinkClick={handleNavLinkClick} isLoaded={preloaderDone} />

        {/* Split Editorial About Section */}
        <About />

        {/* Dark Luxury Expertise & Physics Sandbox */}
        <Skills />

        {/* Sticky Stacking Card Deck Project Archive */}
        <Projects />

        {/* CodeInn' Tech Creative Venture Spotlight */}
        <BrandSection />

        {/* High-Contrast Split Contact Form */}
        <Contact />
      </main>

      {/* Matte Obsidian Colophon Footer */}
      <Footer />
    </div>
  );
}
