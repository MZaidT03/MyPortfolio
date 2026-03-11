import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";
import MenuIcon from "../icons/MenuIcon";
import XIcon from "../icons/XIcon";

const navLinks = ["About", "CodeInn' Tech", "Skills", "Projects", "Contact"];

const getLinkId = (link) =>
  link.toLowerCase().replace(/['']/g, "").replace(/ /g, "");

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

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.07, delayChildren: 0.05 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.25, ease: "easeIn", staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => onLinkClick(e, "#home")}
          className="flex items-center gap-2 text-2xl font-bold text-gray-900 hover:text-violet-600 transition-colors duration-300"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-600 to-amber-400 flex items-center justify-center text-sm font-black">
            Z
          </span>
          Muhammad Zaid Tahir
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
                className={`relative py-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-violet-500 after:to-amber-400 after:transition-all after:duration-300 ${
                  isActive
                    ? "text-violet-600 after:w-full"
                    : "text-gray-700 hover:text-violet-600 after:w-0 hover:after:w-full"
                }`}
              >
                {link}
              </a>
            );
          })}
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded text-gray-700"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <XIcon className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <MenuIcon className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
      {isScrolled && (
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-violet-600 to-amber-400 opacity-60" />
      )}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 text-center overflow-hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link) => {
              const id = getLinkId(link);
              const isActive = activeSection === id;
              return (
                <motion.a
                  key={link}
                  href={`#${id}`}
                  variants={linkVariants}
                  onClick={(e) => {
                    onLinkClick(e, `#${id}`);
                    setIsMenuOpen(false);
                  }}
                  className={`block py-3 transition-colors duration-300 ${
                    isActive ? "text-violet-600" : "text-gray-700 hover:text-violet-600"
                  }`}
                >
                  {link}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
