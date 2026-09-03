import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

const ProjectCard = ({ project, index, total }) => {
  // Sticky top offset increments slightly so stacked card tops remain visible like an editorial index tab
  const stickyTop = 100 + index * 26;

  return (
    <div
      className="sticky-card w-full mb-16 md:mb-24"
      style={{
        top: `${stickyTop}px`,
        zIndex: 10 + index,
      }}
    >
      <div className="relative rounded-3xl border border-[rgba(255,255,255,0.14)] bg-[#121212] p-6 md:p-10 shadow-2xl overflow-hidden group hover:border-[#E5D9B6]/40 transition-colors duration-500">
        {/* Editorial Watermark Index */}
        <div className="absolute top-4 right-6 md:right-10 font-display text-7xl md:text-9xl font-black text-[#E5D9B6]/10 select-none pointer-events-none leading-none">
          {project.index}
        </div>

        {/* Corner Registration Markers */}
        <div className="absolute top-3 left-3 text-[#E5D9B6]/40 font-mono-editorial text-xs select-none pointer-events-none">
          +
        </div>
        <div className="absolute bottom-3 right-3 text-[#E5D9B6]/40 font-mono-editorial text-xs select-none pointer-events-none">
          +
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column: Case Information & Architecture */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Year Tag */}
              <div className="flex items-center gap-3 font-mono-editorial text-xs uppercase tracking-[0.25em] text-[#E5D9B6] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5D9B6]" />
                <span>{project.category}</span>
                <span className="text-[#8E8B82]">// {project.year}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F4F1EA] leading-[0.95] group-hover:text-[#E5D9B6] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm md:text-base text-[#C4C0B3] mt-4 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Performance / Architectural Highlight Pill */}
            {project.stats && (
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] w-fit">
                <span className="font-display text-2xl text-[#E5D9B6]">
                  {project.stats.metric}
                </span>
                <span className="font-mono-editorial text-[10px] uppercase tracking-[0.2em] text-[#A8A498]">
                  {project.stats.label}
                </span>
              </div>
            )}

            {/* Technology Stack Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono-editorial uppercase tracking-wider bg-[#1B1B1B] text-[#E5D9B6] border border-[#E5D9B6]/20"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Interactive Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)] font-mono-editorial text-xs uppercase tracking-[0.2em]">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 rounded-full bg-[#E5D9B6] text-[#0B0B0B] font-bold hover:bg-[#F4F1EA] transition-all hover:scale-105 shadow-lg"
                data-cursor-text="VISIT"
              >
                LIVE SITE ↗
              </a>
            </div>
          </div>

          {/* Right Column: High-Res Mockup Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.12)] bg-[#0B0B0B] aspect-[16/10] group-hover:border-[#E5D9B6]/40 transition-colors shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

              {/* Status pill on image */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-[#0B0B0B]/85 backdrop-blur font-mono-editorial text-[9px] text-[#E5D9B6] uppercase tracking-[0.2em] border border-[rgba(255,255,255,0.12)]">
                PRODUCTION READY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 md:py-36 bg-[#0B0B0B] text-[#F4F1EA] border-t border-[rgba(255,255,255,0.12)]">
      {/* Background Watermark */}
      <div className="absolute top-10 right-6 md:right-16 text-[18vw] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none">
        03
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 pb-4 border-b border-[rgba(255,255,255,0.12)]">
          <span className="font-mono-editorial text-xs tracking-[0.3em] text-[#E5D9B6] uppercase">
            03 // CURATED WORKS & CASE ARCHIVE
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#E5D9B6]/40 to-transparent" />
          <span className="font-mono-editorial text-xs tracking-[0.25em] text-[#8E8B82] uppercase hidden sm:inline">
            STICKY CARD DECK ANIMATION
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-20">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#F4F1EA] max-w-3xl leading-[0.95]">
            SELECTED PROJECTS &{" "}
            <span className="text-stroke-champagne hover:text-[#E5D9B6] transition-colors">
              SYSTEM DELIVERABLES.
            </span>
          </h2>
          <p className="font-mono-editorial text-xs md:text-sm text-[#8E8B82] uppercase tracking-[0.25em] mt-3">
            [ SCROLL TO DISCOVER STACKING ARCHIVES 01 &mdash; 07 ]
          </p>
        </div>

        {/* Stacking Card Deck Container */}
        <div className="relative pb-16">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard
              key={project.index}
              project={project}
              index={index}
              total={portfolioData.projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
