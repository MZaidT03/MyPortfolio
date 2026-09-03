import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

const BrandSection = () => {
  return (
    <section
      id="codeinntech"
      className="relative py-28 md:py-36 bg-[#0B0B0B] text-[#F4F1EA] border-t border-[rgba(255,255,255,0.12)] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-12 left-6 md:left-12 text-[18vw] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none">
        04
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 pb-4 border-b border-[rgba(255,255,255,0.12)]">
          <span className="font-mono-editorial text-xs tracking-[0.3em] text-[#E5D9B6] uppercase">
            04 // STUDIO PRACTICE & VENTURE
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#E5D9B6]/40 to-transparent" />
          <span className="font-mono-editorial text-xs tracking-[0.25em] text-[#8E8B82] uppercase hidden sm:inline">
            CODEINN' TECH
          </span>
        </div>

        {/* High-End Studio Card */}
        <div className="relative rounded-3xl border border-[rgba(255,255,255,0.14)] bg-[#121212] p-8 md:p-14 overflow-hidden shadow-2xl">
          {/* Subtle Champagne Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#E5D9B6]/10 blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Studio Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5D9B6]/40 bg-[#1B1B1B] font-mono-editorial text-[10px] tracking-[0.25em] text-[#E5D9B6] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5D9B6] animate-pulse" />
                {portfolioData.brand.badge}
              </div>

              {/* Studio Name */}
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#F4F1EA] leading-[0.95]">
                {portfolioData.brand.name}
              </h3>

              {/* Tagline */}
              <p className="font-editorial text-lg md:text-xl text-[#E5D9B6] font-medium tracking-wide">
                {portfolioData.brand.tagline}
              </p>

              {/* Detailed statement */}
              <p className="font-body text-sm md:text-base text-[#BFBBB0] leading-relaxed">
                {portfolioData.brand.description}
              </p>

              {/* CTA Action */}
              <div className="pt-4">
                <a
                  href={portfolioData.brand.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#E5D9B6] text-[#0B0B0B] font-mono-editorial text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#F4F1EA] transition-all hover:scale-105 shadow-xl"
                  data-cursor-text="STUDIO"
                >
                  <span>EXPLORE CODEINN' TECH STUDIO</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Right Column: Studio Capabilities Matrix */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[rgba(255,255,255,0.12)] pt-8 lg:pt-0 lg:pl-10 space-y-6">
              <div className="font-mono-editorial text-xs uppercase tracking-[0.25em] text-[#8E8B82]">
                CORE STUDIO CAPABILITIES
              </div>

              <div className="space-y-4">
                {portfolioData.brand.services.map((service, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#171717] hover:border-[#E5D9B6]/40 transition-colors flex items-start gap-3"
                  >
                    <span className="font-mono-editorial text-xs text-[#E5D9B6] font-bold">
                      0{i + 1}
                    </span>
                    <span className="font-body text-sm text-[#F4F1EA]">{service}</span>
                  </div>
                ))}
              </div>

              <div className="font-mono-editorial text-[10px] text-[#8E8B82] uppercase tracking-[0.2em]">
                GLOBAL CLIENT ROSTER // DIGITAL TRANSFORMATION
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
