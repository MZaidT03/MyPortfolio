import { useRef, useState } from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

const Skills = () => {
  const sandboxRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("01");

  return (
    <section id="expertise" className="relative py-28 md:py-36 bg-[#0B0B0B] text-[#F4F1EA] border-t border-[rgba(255,255,255,0.12)] overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-12 left-6 md:left-12 text-[18vw] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none">
        02
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title Header */}
        <div className="flex items-center gap-4 mb-16 pb-4 border-b border-[rgba(255,255,255,0.12)]">
          <span className="font-mono-editorial text-xs tracking-[0.3em] text-[#E5D9B6] uppercase">
            02 // TECHNICAL STACK & EXPERTISE
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#E5D9B6]/40 to-transparent" />
          <span className="font-mono-editorial text-xs tracking-[0.25em] text-[#8E8B82] uppercase hidden sm:inline">
            SYSTEM ENGINE SPECS
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#F4F1EA] max-w-3xl leading-[0.95]">
            TECHNICAL ARCHITECTURE &{" "}
            <span className="text-stroke-champagne hover:text-[#E5D9B6] transition-colors">
              ENGINEERING RIGOR.
            </span>
          </h2>
          <p className="font-mono-editorial text-xs md:text-sm text-[#8E8B82] uppercase tracking-[0.25em] mt-3">
            [ INTERACTIVE DRAGGABLE LAB & NUMBERED CATEGORICAL COMPENDIUM ]
          </p>
        </div>

        {/* Part 1: Interactive Physics-based Draggable Playground */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-4 px-2 font-mono-editorial text-xs tracking-[0.2em] uppercase text-[#8E8B82]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5D9B6] animate-ping" />
              PHYSICS PLAYGROUND // GRAB & TOSS PILLS
            </span>
            <span className="hidden sm:inline">DRAG WITHIN BOUNDARIES</span>
          </div>

          <div
            ref={sandboxRef}
            className="relative h-[280px] md:h-[340px] w-full rounded-2xl border border-[rgba(255,255,255,0.14)] bg-[#121212]/80 backdrop-blur p-6 overflow-hidden flex flex-wrap content-center justify-center gap-3 select-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(229, 217, 182, 0.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          >
            {portfolioData.allSkills.map((item, idx) => (
              <motion.div
                key={idx}
                drag
                dragConstraints={sandboxRef}
                dragElastic={0.25}
                whileDrag={{
                  scale: 1.15,
                  zIndex: 40,
                  cursor: "grabbing",
                  boxShadow: "0 20px 30px rgba(0,0,0,0.8), 0 0 20px rgba(229,217,182,0.4)",
                }}
                whileHover={{
                  scale: 1.08,
                  borderColor: "#E5D9B6",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
                }}
                initial={{
                  x: (Math.random() - 0.5) * 40,
                  y: (Math.random() - 0.5) * 40,
                }}
                className={`cursor-grab active:cursor-grabbing px-4 py-2 rounded-full border transition-colors flex items-center gap-2 font-mono-editorial text-xs uppercase tracking-wider backdrop-blur-md ${
                  item.level === "Primary"
                    ? "bg-[#1B1B1B] text-[#F4F1EA] border-[#E5D9B6]/40 hover:bg-[#242424]"
                    : "bg-[#141414] text-[#A6A296] border-white/10 hover:text-[#F4F1EA]"
                }`}
                data-cursor-text="DRAG"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.level === "Primary" ? "bg-[#E5D9B6]" : "bg-[#8E8B82]"
                  }`}
                />
                <span className="font-semibold">{item.name}</span>
                <span className="text-[9px] text-[#8E8B82] opacity-75 hidden sm:inline">
                  [{item.category}]
                </span>
              </motion.div>
            ))}

            {/* Corner Metadata in sandbox */}
            <div className="absolute bottom-3 left-4 font-mono-editorial text-[10px] text-[#8E8B82]/60 uppercase tracking-[0.2em] pointer-events-none">
              PHYSICS: MOMENTUM & RESTITUTION ENABLED
            </div>
            <div className="absolute top-3 right-4 font-mono-editorial text-[10px] text-[#E5D9B6]/80 uppercase tracking-[0.2em] pointer-events-none">
              SYSTEM REPOSITORY: 17 MODULES
            </div>
          </div>
        </div>

        {/* Part 2: Numbered Index Items (01, 02, 03, 04) with Editorial Hierarchy */}
        <div>
          <div className="border-t border-[rgba(255,255,255,0.12)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.12)]">
              {portfolioData.skillCategories.map((category) => (
                <div
                  key={category.index}
                  className="p-6 md:p-8 hover:bg-[#141414] transition-colors group relative"
                  data-cursor-text="INSPECT"
                >
                  {/* Category Index Number */}
                  <div className="flex justify-between items-baseline mb-6">
                    <span className="font-display text-4xl text-[#E5D9B6] tracking-tight group-hover:translate-x-1 transition-transform">
                      {category.index}
                    </span>
                    <span className="font-mono-editorial text-[10px] uppercase tracking-[0.25em] text-[#8E8B82]">
                      INDEX
                    </span>
                  </div>

                  {/* Category Title */}
                  <h3 className="font-editorial text-lg md:text-xl font-bold uppercase tracking-wide text-[#F4F1EA] mb-6 group-hover:text-[#E5D9B6] transition-colors">
                    {category.title}
                  </h3>

                  {/* Skills Pill List */}
                  <ul className="space-y-3 font-mono-editorial text-xs tracking-wider text-[#C2BEB2]">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 group/item">
                        <span className="w-1 h-1 rounded-full bg-[#E5D9B6] transition-transform group-hover/item:scale-150" />
                        <span className="group-hover/item:text-[#F4F1EA] transition-colors">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Hairline Highlight */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E5D9B6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
