import { useState } from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 bg-[#0B0B0B] text-[#F4F1EA] border-t border-[rgba(255,255,255,0.12)] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-12 right-6 md:right-16 text-[18vw] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none">
        05
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 pb-4 border-b border-[rgba(255,255,255,0.12)]">
          <span className="font-mono-editorial text-xs tracking-[0.3em] text-[#E5D9B6] uppercase">
            05 // INITIATE ENGAGEMENT
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#E5D9B6]/40 to-transparent" />
          <span className="font-mono-editorial text-xs tracking-[0.25em] text-[#8E8B82] uppercase hidden sm:inline">
            COMMISSION INQUIRIES
          </span>
        </div>

        {/* Clean Editorial Layout without Form */}
        <div className="max-w-4xl mx-auto space-y-12 text-center md:text-left">
          {/* Headline Stage */}
          <div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-[#F4F1EA] leading-[0.92]">
              LET'S FORGE SOMETHING{" "}
              <span className="text-stroke-champagne hover:text-[#E5D9B6] transition-colors">
                EXTRAORDINARY.
              </span>
            </h2>
            <p className="font-body text-base md:text-lg text-[#BFBBB0] mt-6 max-w-2xl leading-relaxed">
              Have an ambitious web application, cross-platform mobile ecosystem, or architectural challenge in mind? My calendar is open for select freelance commissions and technical leadership through CodeInn' Tech.
            </p>
          </div>

          {/* Primary Transmission Board (Direct Email & CTAs) */}
          <div className="p-8 md:p-12 rounded-3xl border border-[rgba(255,255,255,0.14)] bg-[#121212] shadow-2xl relative overflow-hidden group hover:border-[#E5D9B6]/40 transition-colors duration-500">
            {/* Ambient Gold Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#E5D9B6]/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="font-mono-editorial text-[10px] uppercase tracking-[0.25em] text-[#8E8B82] block mb-2">
                  DIRECT TRANSMISSION INBOX
                </span>
                <a
                  href={`mailto:${portfolioData.contact}`}
                  className="font-display text-2xl sm:text-3xl md:text-4xl text-[#E5D9B6] hover:text-[#F4F1EA] transition-colors tracking-wide break-all"
                  data-cursor-text="EMAIL"
                >
                  {portfolioData.contact}
                </a>
                <p className="font-mono-editorial text-xs text-[#8E8B82] tracking-wider mt-2">
                  TYPICALLY RESPONDS WITHIN 24 HOURS
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <a
                  href={`mailto:${portfolioData.contact}`}
                  className="px-8 py-3.5 rounded-full bg-[#E5D9B6] text-[#0B0B0B] font-mono-editorial text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#F4F1EA] transition-all hover:scale-105 shadow-xl"
                  data-cursor-text="COMPOSE"
                >
                  SAY HELLO ↗
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-6 py-3.5 rounded-full border border-[rgba(255,255,255,0.2)] hover:border-[#E5D9B6] text-xs font-mono-editorial tracking-wider text-[#F4F1EA] hover:text-[#E5D9B6] transition-colors"
                  data-cursor-text="COPY"
                >
                  {copied ? "COPIED ✓" : "COPY EMAIL"}
                </button>
              </div>
            </div>
          </div>

          {/* Network Nodes & Social Channels Grid */}
          <div className="space-y-4">
            <span className="font-mono-editorial text-[10px] uppercase tracking-[0.25em] text-[#8E8B82] block text-left">
              NETWORK NODES & REPOSITORIES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* GitHub Card */}
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#141414] hover:border-[#E5D9B6]/50 hover:bg-[#1A1A1A] transition-all flex items-center justify-between group text-left"
                data-cursor-text="GITHUB"
              >
                <div className="flex items-center gap-4">
                  <GithubIcon className="w-6 h-6 text-[#E5D9B6]" />
                  <div>
                    <div className="font-mono-editorial text-xs font-bold text-[#F4F1EA] group-hover:text-[#E5D9B6] transition-colors">
                      GITHUB
                    </div>
                    <div className="font-mono-editorial text-[11px] text-[#8E8B82]">
                      @MZaidT03
                    </div>
                  </div>
                </div>
                <span className="text-[#8E8B82] group-hover:text-[#E5D9B6] group-hover:translate-x-1 transition-all">
                  ↗
                </span>
              </a>

              {/* LinkedIn Card */}
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#141414] hover:border-[#E5D9B6]/50 hover:bg-[#1A1A1A] transition-all flex items-center justify-between group text-left"
                data-cursor-text="LINKEDIN"
              >
                <div className="flex items-center gap-4">
                  <LinkedinIcon className="w-6 h-6 text-[#E5D9B6]" />
                  <div>
                    <div className="font-mono-editorial text-xs font-bold text-[#F4F1EA] group-hover:text-[#E5D9B6] transition-colors">
                      LINKEDIN
                    </div>
                    <div className="font-mono-editorial text-[11px] text-[#8E8B82]">
                      /in/zaid-tahir
                    </div>
                  </div>
                </div>
                <span className="text-[#8E8B82] group-hover:text-[#E5D9B6] group-hover:translate-x-1 transition-all">
                  ↗
                </span>
              </a>

              {/* CodeInn' Tech Studio Card */}
              <a
                href={portfolioData.brand.website}
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#141414] hover:border-[#E5D9B6]/50 hover:bg-[#1A1A1A] transition-all flex items-center justify-between group text-left"
                data-cursor-text="STUDIO"
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-md bg-[#E5D9B6] text-[#0B0B0B] flex items-center justify-center font-display text-sm font-black">
                    CI
                  </div>
                  <div>
                    <div className="font-mono-editorial text-xs font-bold text-[#F4F1EA] group-hover:text-[#E5D9B6] transition-colors">
                      STUDIO
                    </div>
                    <div className="font-mono-editorial text-[11px] text-[#8E8B82]">
                      CodeInn' Tech
                    </div>
                  </div>
                </div>
                <span className="text-[#8E8B82] group-hover:text-[#E5D9B6] group-hover:translate-x-1 transition-all">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Bottom Availability Status Bar */}
          <div className="pt-6 border-t border-[rgba(255,255,255,0.1)] flex flex-wrap items-center justify-between gap-4 font-mono-editorial text-xs tracking-[0.2em] text-[#8E8B82] uppercase">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>STATUS: OPEN FOR WORK // Q2-Q3 2026</span>
            </div>
            <span>BASED IN GUJRANWALA, PAKISTAN [32.18° N]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
