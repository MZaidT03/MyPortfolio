import { useState, useEffect } from "react";
import portfolioData from "../data/portfolioData";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

const Footer = () => {
  const year = new Date().getFullYear();
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Karachi",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTimeString(new Intl.DateTimeFormat([], options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0B0B] text-[#F4F1EA] pt-16 pb-12 border-t border-[rgba(255,255,255,0.12)] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Top Tier: Colophon & Massive Brand Signature */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b border-[rgba(255,255,255,0.08)]">
          <div>
            <div className="font-mono-editorial text-[10px] uppercase tracking-[0.3em] text-[#8E8B82] mb-2">
              COLOPHON // EDITORIAL ARCHIVE
            </div>
            <div className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[#F4F1EA]">
              MUHAMMAD ZAID TAHIR
            </div>
            <p className="font-mono-editorial text-xs text-[#E5D9B6] uppercase tracking-[0.25em] mt-1">
              CREATIVE DEVELOPER & FOUNDER AT {portfolioData.brand.name}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-[rgba(255,255,255,0.16)] hover:border-[#E5D9B6] hover:text-[#E5D9B6] font-mono-editorial text-xs uppercase tracking-[0.2em] transition-all group"
            data-cursor-text="TOP"
          >
            <span>BACK TO SUMMIT</span>
            <span className="group-hover:-translate-y-1 transition-transform">↑</span>
          </button>
        </div>

        {/* Middle Tier: Metadata Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono-editorial text-xs uppercase tracking-[0.2em] text-[#A39F93]">
          <div>
            <div className="text-[10px] text-[#8E8B82] mb-2">LOCATION</div>
            <div className="text-[#F4F1EA]">{portfolioData.location}</div>
            <div className="text-[10px] text-[#8E8B82] mt-1">PKT {timeString}</div>
          </div>

          <div>
            <div className="text-[10px] text-[#8E8B82] mb-2">COORDINATES</div>
            <div className="text-[#F4F1EA]">{portfolioData.coordinates}</div>
            <div className="text-[10px] text-[#8E8B82] mt-1">ELEVATION 226M</div>
          </div>

          <div>
            <div className="text-[10px] text-[#8E8B82] mb-2">AGENCY</div>
            <a
              href={portfolioData.brand.website}
              target="_blank"
              rel="noreferrer"
              className="text-[#E5D9B6] hover:underline"
            >
              {portfolioData.brand.name} ↗
            </a>
            <div className="text-[10px] text-[#8E8B82] mt-1">SOFTWARE PRACTICE</div>
          </div>

          <div>
            <div className="text-[10px] text-[#8E8B82] mb-2">NETWORK</div>
            <div className="flex gap-4">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E5D9B6] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E5D9B6] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Versioning */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[rgba(255,255,255,0.08)] font-mono-editorial text-[10px] uppercase tracking-[0.25em] text-[#8E8B82]">
          <span>&copy; {year} MUHAMMAD ZAID TAHIR &bull; ALL RIGHTS RESERVED</span>
          <span>EDITORIAL BRUTALIST &bull; DARK LUXURY EDITION</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
