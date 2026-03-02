import React, { useState, useEffect, useRef } from "react";
import imgProfile from "./assets/img.jpg";
import "./App.css";

const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className={className}
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const portfolioData = {
  name: "Muhammad Zaid Tahir",
  title: "React & React Native Developer",
  bio: "I build beautiful, responsive, and user-friendly web and mobile applications with React and React Native.",
  contact: "muhammadzaidtahir90@gmail.com",
  socials: {
    github: "https://github.com/MZaidT03",
    linkedin: "https://www.linkedin.com/in/zaid-tahir-0b0933159/",
  },
  about: {
    paragraph1:
      "Hello! I'm Muhammad Zaid Tahir, a Web and App Developer based in Gujranwala, Pakistan. I’m passionate about crafting seamless digital experiences that are both visually appealing and highly functional. My goal is to build modern, scalable, and pixel-perfect solutions that bring real value to clients and users alike.",
    paragraph2:
      "I specialize in the React ecosystem — using React.js to build fast, dynamic web applications and React Native for cross-platform mobile apps. When I’m not coding, I love exploring new technologies, improving my design workflow, and helping local businesses grow their digital presence through CodeInn’ Tech.",
  },
  brand: {
    name: "CodeInn’ Tech",
    tagline: "Digital Solutions for Every Business",
    description:
      "CodeInn’ Tech is a creative software development studio passionate about building modern, user-friendly digital solutions. We specialize in web and mobile app development, UI/UX design, and backend engineering, delivering scalable, high-performance products tailored to your business needs. Whether you need a stunning website, a powerful mobile app, or a complete digital transformation — CodeInn’ Tech turns your ideas into reality with innovation, precision, and care.",
    website: "https://codeinntech.netlify.app/",
  },
  skills: [
    "React",
    "React Native",
    "JavaScript (ES6+)",
    "TypeScript",
    "Node.js",
    "Next.js",
    "GraphQL",
    "Expo",
    "Firebase",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
    "Git & GitHub",
    "Figma",
  ],
  projects: [
    {
      title: "Construction Management System",
      description:
        "A web platform for contractors to manage projects, payments, and inventory efficiently. Built with modern UI and secure Supabase backend.",
      tech: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    },
    {
      title: "E-Commerce Storefront",
      description:
        "A fully responsive online store with features like product filtering, a shopping cart, and a secure checkout process powered by Stripe.",
      tech: ["Next.js", "Stripe", "GraphQL", "Tailwind CSS"],
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A cross-platform mobile chat app where users can join rooms and exchange messages in real-time, built with Firebase.",
      tech: ["React Native", "Firebase", "Expo"],
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "An analytics dashboard for visualizing complex business data with interactive charts and graphs using D3.js.",
      tech: ["React", "D3.js", "Node.js", "CSS-in-JS"],
    },
    {
      title: "Mobile Fitness Tracker",
      description:
        "An iOS and Android app to track workouts, set fitness goals, and visualize progress over time with native device integration.",
      tech: ["React Native", "Expo", "SQLite"],
    },
  ],
};

/* ==============================
   HOOKS
============================== */

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const optionsRef = useRef(options);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, ...optionsRef.current }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState("");
  const idsRef = useRef(sectionIds);

  useEffect(() => {
    const observers = idsRef.current.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return activeSection;
};

/* ==============================
   COMPONENTS
============================== */

const Header = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = ["home", "about", "codeinntech", "skills", "projects", "contact"];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "CodeInn’ Tech", "Skills", "Projects", "Contact"];

  const getLinkId = (link) =>
    link.toLowerCase().replace(/['’]/g, "").replace(/ /g, "");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => onLinkClick(e, "#home")}
          className="flex items-center gap-2 text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
        >
          <span className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-sm font-black">
            Z
          </span>
          {portfolioData.name}
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const id = getLinkId(link);
            const isActive = activeSection === id;
            return (
              <a
                key={link}
                href={`#${id}`}
                onClick={(e) => onLinkClick(e, `#${id}`)}
                className={`relative py-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:transition-all after:duration-300 ${
                  isActive
                    ? "text-cyan-400 after:w-full"
                    : "text-gray-300 hover:text-cyan-400 after:w-0 hover:after:w-full"
                }`}
              >
                {link}
              </a>
            );
          })}
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500 to-cyan-400 opacity-60" />
      )}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 text-center animate-slide-down">
          {navLinks.map((link) => {
            const id = getLinkId(link);
            const isActive = activeSection === id;
            return (
              <a
                key={link}
                href={`#${id}`}
                onClick={(e) => {
                  onLinkClick(e, `#${id}`);
                  setIsMenuOpen(false);
                }}
                className={`block py-3 transition-colors duration-300 ${
                  isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
const Particles = () => {
  const particles = [
    { size: 4, top: "15%", left: "10%", duration: "6s", delay: "0s" },
    { size: 3, top: "30%", left: "85%", duration: "8s", delay: "1s" },
    { size: 5, top: "60%", left: "5%", duration: "7s", delay: "2s" },
    { size: 3, top: "75%", left: "90%", duration: "9s", delay: "0.5s" },
    { size: 4, top: "45%", left: "50%", duration: "5s", delay: "3s" },
    { size: 2, top: "20%", left: "65%", duration: "10s", delay: "1.5s" },
    { size: 3, top: "85%", left: "30%", duration: "7s", delay: "2.5s" },
    { size: 5, top: "10%", left: "40%", duration: "8s", delay: "4s" },
  ];
  return (
    <>
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </>
  );
};

const Hero = ({ onLinkClick }) => (
  <section
    id="home"
    className="relative min-h-screen flex items-center bg-black text-white text-center overflow-hidden hero-gradient-bg"
  >
    <Particles />
    <div className="container mx-auto px-6 relative z-10">
      <h1
        className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 animate-fade-in-up"
        style={{ animationFillMode: "both" }}
      >
        {portfolioData.name}
      </h1>
      <p
        className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-up delay-200"
        style={{ animationFillMode: "both" }}
      >
        {portfolioData.title}
      </p>
      <p
        className="text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-300"
        style={{ animationFillMode: "both" }}
      >
        {portfolioData.bio}
      </p>
      <div
        className="flex justify-center gap-6 mb-10 animate-fade-in-up delay-400"
        style={{ animationFillMode: "both" }}
      >
        <a
          href={portfolioData.socials.github}
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-cyan-400 hover:scale-125 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          aria-label="GitHub"
        >
          <GithubIcon className="w-8 h-8" />
        </a>
        <a
          href={portfolioData.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-cyan-400 hover:scale-125 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="w-8 h-8" />
        </a>
      </div>
      <a
        href="#contact"
        onClick={(e) => onLinkClick(e, "#contact")}
        className="btn-shimmer inline-block bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 rounded-full font-bold text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 hover:shadow-xl animate-fade-in-up delay-500 animate-pulse-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        style={{ animationFillMode: "both" }}
      >
        Get In Touch
      </a>
    </div>
  </section>
);

const About = () => {
  const [imgRef, imgVisible] = useScrollReveal();
  const [textRef, textVisible] = useScrollReveal();
  return (
    <section id="about" className="py-20 bg-gray-950 text-gray-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div
            ref={imgRef}
            className={`flex-shrink-0 transition-all duration-700 ${
              imgVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="p-1 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full animate-pulse-glow">
              <img
                src={imgProfile}
                alt="Muhammad Zaid Tahir"
                className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-gray-950 object-cover animate-float"
              />
            </div>
          </div>
          <div
            ref={textRef}
            className={`space-y-6 text-center md:text-left mt-6 md:mt-0 transition-all duration-700 ${
              textVisible ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
                Who am I?
              </span>
            </div>
            <p className="text-lg leading-relaxed">
              {portfolioData.about.paragraph1}
            </p>
            <p className="text-lg leading-relaxed">
              {portfolioData.about.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const BrandSection = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section id="codeinntech" className="py-20 bg-black text-center text-white">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`glass-card animate-border-glow rounded-2xl p-10 max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4">{portfolioData.brand.name}</h2>
          <p className="text-cyan-400 mb-4 text-lg">{portfolioData.brand.tagline}</p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            {portfolioData.brand.description}
          </p>
          <a
            href={portfolioData.brand.website}
            target="_blank"
            rel="noreferrer"
            className="btn-shimmer inline-block bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 rounded-full font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Visit CodeInn’ Tech
          </a>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section id="skills" className="py-20 bg-gray-950 text-center">
      <h2 className="text-4xl font-bold text-white mb-10">My Tech Stack</h2>
      <div
        ref={ref}
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-6"
      >
        {portfolioData.skills.map((skill, i) => (
          <div
            key={i}
            className={`bg-gray-900 border border-gray-700 text-cyan-300 px-5 py-2 rounded-lg cursor-default
              hover:border-cyan-400 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20
              transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            style={
              isVisible
                ? { animationDelay: `${i * 60}ms`, animationFillMode: "both" }
                : {}
            }
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section id="projects" className="py-20 bg-black text-left">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          My Projects
        </h2>
        <ul ref={ref} className="space-y-8">
          {portfolioData.projects.map((project, i) => (
            <li
              key={i}
              className={`relative bg-gray-950 rounded-lg border border-gray-800 overflow-hidden
                hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-800
                transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={
                isVisible
                  ? {
                      animationDelay: `${i * 120}ms`,
                      animationFillMode: "both",
                    }
                  : {}
              }
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400" />
              <div className="p-6 pl-7">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span className="text-3xl font-black text-gray-800 select-none ml-4 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-start">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="bg-gray-800 text-cyan-300 text-sm px-3 py-1 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const EnvelopeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    width="48"
    height="48"
    className="mx-auto mb-6 text-cyan-400"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </svg>
);

const Contact = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section
      id="contact"
      className="relative py-20 bg-gray-950 text-center overflow-hidden"
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #22d3ee 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        ref={ref}
        className={`relative z-10 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <EnvelopeIcon />
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Get In Touch
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 px-6">
          I’m open to collaborations and freelance projects! Let’s bring your
          ideas to life.
        </p>
        <a
          href={`mailto:${portfolioData.contact}`}
          className="btn-shimmer inline-block bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 rounded-full font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black pt-8 pb-6 text-center text-gray-500">
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />
      <div className="flex justify-center gap-6 mb-4">
        <a
          href={portfolioData.socials.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          aria-label="GitHub"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href={portfolioData.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm">
        &copy; {year} {portfolioData.name} — Founder at{" "}
        <span className="text-cyan-400">{portfolioData.brand.name}</span>.
      </p>
    </footer>
  );
};

export default function App() {
  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-gray-300 scroll-smooth">
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
