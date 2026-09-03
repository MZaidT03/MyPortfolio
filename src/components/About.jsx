import { motion } from "framer-motion";
import imgProfile from "../assets/pic.jpeg";
import portfolioData from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#0B0B0B] text-[#F4F1EA] border-t border-[rgba(255,255,255,0.12)] overflow-hidden">
      {/* Editorial Watermark */}
      <div className="absolute top-10 right-6 md:right-16 text-[18vw] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none">
        01
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 pb-4 border-b border-[rgba(255,255,255,0.12)]">
          <span className="font-mono-editorial text-xs tracking-[0.3em] text-[#E5D9B6] uppercase">
            01 // PROFILE & MANIFESTO
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#E5D9B6]/40 to-transparent" />
          <span className="font-mono-editorial text-xs tracking-[0.25em] text-[#8E8B82] uppercase hidden sm:inline">
            ARCHIVE ENTRY: MZT-BIO
          </span>
        </div>

        {/* Clean Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Rounded Portrait Imagery & Brutalist Framing */}
          <div className="lg:col-span-5 relative group">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Corner Registration Crosshairs */}
              <div className="absolute -top-3 -left-3 text-[#E5D9B6] font-mono-editorial text-sm pointer-events-none select-none">
                +
              </div>
              <div className="absolute -top-3 -right-3 text-[#E5D9B6] font-mono-editorial text-sm pointer-events-none select-none">
                +
              </div>
              <div className="absolute -bottom-3 -left-3 text-[#E5D9B6] font-mono-editorial text-sm pointer-events-none select-none">
                +
              </div>
              <div className="absolute -bottom-3 -right-3 text-[#E5D9B6] font-mono-editorial text-sm pointer-events-none select-none">
                +
              </div>

              {/* Portrait Container with Rounded Corners & Luxury Border */}
              <div className="relative overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.16)] bg-[#141414] p-2.5 shadow-2xl transition-all duration-500 group-hover:border-[#E5D9B6]/50">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] sm:aspect-[4/5]">
                  <img
                    src={imgProfile}
                    alt={portfolioData.name}
                    className="w-full h-full object-cover object-[center_15%] grayscale contrast-110 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  {/* Luxury gradient tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />

                  {/* Corner Status Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-[#0B0B0B]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[rgba(255,255,255,0.12)]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E5D9B6] animate-ping" />
                      <span className="font-mono-editorial text-[10px] tracking-[0.2em] text-[#F4F1EA] uppercase">
                        FOUNDER // CODEINN' TECH
                      </span>
                    </div>
                    <span className="font-mono-editorial text-[9px] tracking-[0.2em] text-[#8E8B82] uppercase">
                      VERIFIED
                    </span>
                  </div>
                </div>
              </div>

              {/* Pinned Micro-Badge */}
              <div className="mt-4 flex justify-between items-center font-mono-editorial text-[11px] tracking-[0.25em] text-[#8E8B82] uppercase px-1">
                <span>COORD: {portfolioData.coordinates}</span>
                <span className="text-[#E5D9B6]">FIG. 01 — ARCHIVE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio, Highlighted Inline Spans & Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#F4F1EA] mb-6 leading-[0.95]">
                ENGINEERING WITH RIGOR.{" "}
                <span className="text-stroke-champagne hover:text-[#E5D9B6] transition-colors">
                  CRAFTING WITH OBSESSION.
                </span>
              </h2>

              <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#D2CEBE] font-body">
                <p>
                  I am{" "}
                  <span className="text-[#F4F1EA] font-semibold border-b border-[#E5D9B6] pb-0.5">
                    Muhammad Zaid Tahir
                  </span>
                  , a Web and Mobile Application Architect based in{" "}
                  <span className="px-2 py-0.5 rounded bg-[#E5D9B6]/10 text-[#E5D9B6] border border-[#E5D9B6]/30 font-mono-editorial text-sm">
                    Gujranwala, Pakistan
                  </span>
                  . I operate where architectural precision meets avant-garde editorial aesthetics. Rather than building mundane interfaces, I design high-impact digital experiences that evoke emotion, establish brand authority, and scale without friction.
                </p>

                <p>
                  I specialize in the modern{" "}
                  <span className="px-2 py-0.5 rounded bg-[#E5D9B6]/15 text-[#E5D9B6] border-b border-[#E5D9B6]/50 font-mono-editorial text-sm font-semibold">
                    React & React Native ecosystems
                  </span>{" "}
                  — constructing dynamic, reactive web environments with Next.js and cross-platform native applications with Expo and SQLite. As founder of{" "}
                  <a
                    href={portfolioData.brand.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#E5D9B6] underline decoration-[#E5D9B6]/60 underline-offset-4 hover:text-[#F4F1EA] transition-colors"
                  >
                    CodeInn' Tech
                  </a>
                  , I collaborate with forward-thinking businesses to ship software built to endure.
                </p>
              </div>
            </div>

            {/* Key Metrics Board (Editorial Brutalist Grid) */}
            <div className="pt-6 border-t border-[rgba(255,255,255,0.12)]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {portfolioData.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#121212] hover:border-[#E5D9B6]/40 transition-colors group"
                  >
                    <div className="font-display text-3xl md:text-4xl text-[#E5D9B6] tracking-tight group-hover:scale-105 transition-transform origin-left">
                      {metric.value}
                    </div>
                    <div className="font-mono-editorial text-[10px] uppercase tracking-[0.2em] text-[#F4F1EA] mt-1 font-semibold">
                      {metric.label}
                    </div>
                    <div className="font-body text-[11px] text-[#8E8B82] mt-1 leading-snug hidden sm:block">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4 font-mono-editorial text-xs tracking-[0.2em] uppercase">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full border border-[rgba(255,255,255,0.2)] text-[#F4F1EA] hover:border-[#E5D9B6] hover:text-[#E5D9B6] transition-colors"
                data-cursor-text="GITHUB"
              >
                GITHUB PROFILE ↗
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full border border-[rgba(255,255,255,0.2)] text-[#F4F1EA] hover:border-[#E5D9B6] hover:text-[#E5D9B6] transition-colors"
                data-cursor-text="LINKEDIN"
              >
                LINKEDIN NETWORK ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
