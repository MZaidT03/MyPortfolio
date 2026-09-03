import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "../data/portfolioData";
import MenuIcon from "../icons/MenuIcon";
import XIcon from "../icons/XIcon";

const navLinks = [
  { label: "WORK", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "JOURNAL", href: "#codeinntech" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "CONTACT", href: "#contact" },
];

const Header = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (onLinkClick) {
      onLinkClick(e, href);
    } else {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.12)] py-4 text-[#F4F1EA]"
          : "bg-transparent py-6 md:py-8 text-[#0B0B0B]"
      }`}
    >
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        {/* Top Left: Signature Script Logo */}
        <a
          href="#home"
          onClick={(e) => handleNav(e, "#home")}
          className="group transition-transform hover:scale-105 inline-block"
          data-cursor-text="ZAID"
        >
          <span
            className={`font-signature text-3xl md:text-4xl font-normal lowercase tracking-tight transition-colors ${
              isScrolled ? "text-[#E5D9B6]" : "text-[#0B0B0B]"
            }`}
          >
            zaid
          </span>
        </a>

        {/* Top Center: Editorial Nav Links */}
        <nav className="hidden md:flex items-center space-x-9 lg:space-x-12">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className={`font-mono-editorial text-[11px] lg:text-xs font-bold tracking-[0.25em] uppercase transition-all py-1 hover:opacity-100 ${
                isScrolled
                  ? "text-[#F4F1EA]/75 hover:text-[#E5D9B6]"
                  : "text-[#0B0B0B] hover:text-[#0B0B0B]/60"
              }`}
              data-cursor-text={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Top Right: Dark Circular Button (Visible only on mobile) */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
              isScrolled
                ? "bg-[#E5D9B6] text-[#0B0B0B] hover:bg-[#F4F1EA]"
                : "bg-[#0B0B0B] text-[#F4F1EA] hover:scale-105"
            }`}
            aria-label="Menu Trigger"
            data-cursor-text="MENU"
          >
            {isMenuOpen ? (
              <XIcon className="w-4 h-4" />
            ) : (
              <div className="flex flex-col gap-1 items-end w-4">
                <span className="w-4 h-[1.5px] bg-current rounded-full" />
                <span className="w-3 h-[1.5px] bg-current rounded-full" />
                <span className="w-2.5 h-[1.5px] bg-current rounded-full" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#0B0B0B] border-b border-[rgba(255,255,255,0.12)] text-[#F4F1EA] px-6 py-8"
          >
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)] font-mono-editorial text-[10px] text-[#8E8B82] uppercase tracking-[0.25em]">
                <span>NAVIGATION</span>
                <span>BASED IN PAKISTAN</span>
              </div>
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-2xl font-display tracking-widest text-[#F4F1EA] hover:text-[#E5D9B6]"
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="pt-4">
                <a
                  href={`mailto:${portfolioData.contact}`}
                  className="block w-full text-center py-3.5 rounded-full bg-[#E5D9B6] text-[#0B0B0B] font-mono-editorial text-xs font-bold tracking-[0.25em] uppercase"
                >
                  LET'S WORK TOGETHER ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
