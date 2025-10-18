import React, { useState, useEffect } from "react";
import imgProfile from "./assets/img.jpg";

/* ==============================
   SVG ICON COMPONENTS
============================== */
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
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 
    6v-3.87a3.37 3.37 0 0 
    0-.94-2.61c3.14-.35 6.44-1.54 
    6.44-7A5.44 5.44 0 0 0 20 
    4.77 5.07 5.07 0 0 0 19.91 
    1S18.73.65 16 2.48a13.38 13.38 
    0 0 0-7 0C6.27.65 5.09 1 
    5.09 1A5.07 5.07 0 0 0 5 
    4.77a5.44 5.44 0 0 0-1.5 
    3.78c0 5.42 3.3 6.61 6.44 
    7A3.37 3.37 0 0 0 9 18.13V22"
    />
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
    <path
      d="M16 8a6 6 0 0 1 6 
    6v7h-4v-7a2 2 0 0 0-2-2 
    2 2 0 0 0-2 2v7h-4v-7a6 
    6 0 0 1 6-6z"
    />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    className={className}
  >
    <path
      d="M18 13v6a2 2 0 0 1-2 
    2H5a2 2 0 0 1-2-2V8a2 2 
    0 0 1 2-2h6"
    />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
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

/* ==============================
   PORTFOLIO DATA
============================== */
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
      "CodeInn’ Tech is my independent Web & App Development Studio — helping businesses and startups build modern, scalable, and high-performance digital products. We specialize in React.js, React Native, and full-stack web solutions tailored to your goals.",
    website: "#",
  },
  skills: [
    "React",
    "React Native",
    "JavaScript (ES6+)",
    "Node.js",
    "Tailwind CSS",
    "Next.js",
    "Expo",
    "Firebase",
    "PostgreSQL",
    "Git & GitHub",
    "Figma",
  ],
  projects: [
    {
      title: "Construction Management System",
      description:
        "A web platform for contractors to manage projects, payments, and inventory efficiently. Built with modern UI and secure Supabase backend.",
      tech: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
      imageUrl:
        "https://placehold.co/600x400/0f172a/14b8a6?text=Construction+Management+System",
      liveUrl: "https://eagleconstruction.netlify.app/",
      repoUrl: "https://github.com/MZaidT03/Construction_Management.git",
    },
    {
      title: "SmartTask — Cross-Platform To-Do App",
      description:
        "A sleek to-do app for iOS and Android that helps users organize tasks and collaborate in real time using Firebase.",
      tech: ["React Native", "Expo", "Firebase", "JavaScript"],
      imageUrl: "https://placehold.co/600x400/0f172a/14b8a6?text=SmartTask+App",
      liveUrl: "#",
      repoUrl: "#",
    },
  ],
};

/* ==============================
   COMPONENTS
============================== */

// HEADER
const Header = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "CodeInn’ Tech", "Skills", "Projects", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => onLinkClick(e, "#home")}
          className="text-2xl font-bold text-white hover:text-teal-400 transition"
        >
          {portfolioData.name}
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              onClick={(e) =>
                onLinkClick(e, `#${link.toLowerCase().replace(" ", "")}`)
              }
              className="text-slate-300 hover:text-teal-400 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden"
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700 text-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              onClick={(e) => {
                onLinkClick(e, `#${link.toLowerCase().replace(" ", "")}`);
                setIsMenuOpen(false);
              }}
              className="block py-3 text-slate-300 hover:text-teal-400 transition"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

// HERO
const Hero = ({ onLinkClick }) => (
  <section
    id="home"
    className="min-h-screen flex items-center bg-slate-900 text-white text-center"
  >
    <div className="container mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
        {portfolioData.name}
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 mb-4">
        {portfolioData.title}
      </p>
      <p className="text-slate-400 max-w-2xl mx-auto mb-10">
        {portfolioData.bio}
      </p>

      <div className="flex justify-center gap-6 mb-10">
        <a href={portfolioData.socials.github} target="_blank" rel="noreferrer">
          <GithubIcon className="w-8 h-8 hover:text-teal-400 transition" />
        </a>
        <a
          href={portfolioData.socials.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon className="w-8 h-8 hover:text-teal-400 transition" />
        </a>
      </div>

      <a
        href="#contact"
        onClick={(e) => onLinkClick(e, "#contact")}
        className="bg-teal-500 px-8 py-3 rounded-full font-bold hover:bg-teal-600 transition shadow-lg"
      >
        Get In Touch
      </a>
    </div>
  </section>
);

// ABOUT
const About = () => (
  <section
    id="about"
    className="py-20 bg-slate-800 text-slate-300 text-center md:text-left"
  >
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <img
          src={imgProfile}
          alt="Muhammad Zaid Tahir"
          className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-teal-500 shadow-xl object-cover mx-auto md:mx-0"
        />

        <div className="space-y-6 mt-6 md:mt-0 text-center md:text-left">
          <p>{portfolioData.about.paragraph1}</p>
          <p>{portfolioData.about.paragraph2}</p>
        </div>
      </div>
    </div>
  </section>
);

// BRAND SECTION
const BrandSection = () => (
  <section
    id="codeinn’tech"
    className="py-20 bg-slate-900 text-center text-white"
  >
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-4">{portfolioData.brand.name}</h2>
      <p className="text-teal-400 mb-4 text-lg">
        {portfolioData.brand.tagline}
      </p>
      <p className="text-slate-400 max-w-2xl mx-auto mb-8">
        {portfolioData.brand.description}
      </p>
      <a
        href={portfolioData.brand.website}
        className="bg-teal-500 px-8 py-3 rounded-full font-bold hover:bg-teal-600 transition shadow-lg"
      >
        Visit CodeInn’ Tech
      </a>
    </div>
  </section>
);

// SKILLS
const Skills = () => (
  <section id="skills" className="py-20 bg-slate-800 text-center">
    <h2 className="text-4xl font-bold text-white mb-10">My Tech Stack</h2>
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-6">
      {portfolioData.skills.map((skill, i) => (
        <div
          key={i}
          className="bg-slate-900 text-teal-300 px-5 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition"
        >
          {skill}
        </div>
      ))}
    </div>
  </section>
);

// PROJECTS
const ProjectCard = ({ project }) => (
  <div className="bg-slate-900 rounded-lg overflow-hidden shadow-xl hover:shadow-teal-500/30 transition transform hover:scale-105">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-slate-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="bg-teal-900/40 text-teal-300 text-sm px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="text-teal-400 hover:text-white flex items-center gap-1"
        >
          View Live <ExternalLinkIcon />
        </a>
        <a href={project.repoUrl} target="_blank" rel="noreferrer">
          <GithubIcon className="w-6 h-6 hover:text-white transition" />
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-slate-900 text-center">
    <h2 className="text-4xl font-bold text-white mb-10">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
      {portfolioData.projects.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  </section>
);

// CONTACT
const Contact = () => (
  <section id="contact" className="py-20 bg-slate-800 text-center">
    <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
      I’m open to collaborations and freelance projects! Let’s bring your ideas
      to life.
    </p>
    <a
      href={`mailto:${portfolioData.contact}`}
      className="bg-teal-500 px-8 py-3 rounded-full font-bold hover:bg-teal-600 transition shadow-lg"
    >
      Say Hello
    </a>
  </section>
);

// FOOTER
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 py-6 text-center text-slate-400">
      <p>
        &copy; {year} {portfolioData.name} — Founder at{" "}
        <span className="text-teal-400">{portfolioData.brand.name}</span>.
      </p>
    </footer>
  );
};

/* ==============================
   MAIN APP
============================== */
export default function App() {
  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-slate-900 scroll-smooth">
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
