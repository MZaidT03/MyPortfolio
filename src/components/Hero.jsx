import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

const Hero = ({ onLinkClick }) => {
  const containerRef = useRef(null);
  const dispRef = useRef(null);
  const turbRef = useRef(null);

  const currentScale = useRef(0);
  const targetScale = useRef(0);
  const frameId = useRef(null);
  const phase = useRef(0);

  useEffect(() => {
    const animate = () => {
      currentScale.current += (targetScale.current - currentScale.current) * 0.12;
      phase.current += 0.02;

      if (dispRef.current) {
        dispRef.current.setAttribute("scale", currentScale.current.toFixed(2));
      }
      if (turbRef.current) {
        const freqX = 0.012 + Math.sin(phase.current) * 0.005;
        const freqY = 0.035 + Math.cos(phase.current * 0.8) * 0.008;
        turbRef.current.setAttribute("baseFrequency", `${freqX.toFixed(4)} ${freqY.toFixed(4)}`);
      }

      frameId.current = requestAnimationFrame(animate);
    };

    frameId.current = requestAnimationFrame(animate);
    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, []);

  const handlePointerMove = (e) => {
    const velocity = Math.hypot(e.movementX || 0, e.movementY || 0);
    const boost = Math.min(36, velocity * 2);
    targetScale.current = Math.max(16, boost);
  };

  const handlePointerEnter = () => {
    targetScale.current = 22;
  };

  const handlePointerLeave = () => {
    targetScale.current = 0;
  };

  const scrollTo = (e, id) => {
    e.preventDefault();
    if (onLinkClick) {
      onLinkClick(e, id);
    } else {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className="relative h-screen min-h-[720px] max-h-[1080px] bg-[#F4F1EA] text-[#0B0B0B] flex flex-col justify-between pt-24 md:pt-28 pb-8 md:pb-10 px-6 md:px-12 select-none overflow-hidden"
    >
      {/* Dynamic SVG Liquid Distortion Shader */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="liquid-warp" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              ref={turbRef}
              type="fractalNoise"
              baseFrequency="0.015 0.04"
              numOctaves="3"
              result="warpNoise"
            />
            <feDisplacementMap
              ref={dispRef}
              in="SourceGraphic"
              in2="warpNoise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Top Spacer to account for fixed Header */}
      <div className="w-full h-2" />

      {/* Main Hero Center Stage */}
      <div className="flex flex-col items-center justify-center my-auto w-full text-center">
        {/* Massive CREATIVE + DEVELOPER Headline with Liquid Shader */}
        <div
          className="relative w-full cursor-pointer flex flex-col items-center transition-transform"
          data-cursor-text="EXPLORE"
        >
          {/* CREATIVE - Monumental Height & Width */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ filter: "url(#liquid-warp)" }}
            className="font-display font-black text-[#0B0B0B] text-[20vw] sm:text-[19vw] md:text-[18.5vw] lg:text-[17.5vw] leading-[0.78] tracking-tight uppercase select-none scale-y-110 sm:scale-y-115 origin-bottom"
          >
            CREATIVE
          </motion.h1>

          {/* DEVELOPER - Perfectly Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ filter: "url(#liquid-warp)" }}
            className="font-display font-black text-[#0B0B0B] text-[7.5vw] sm:text-[6.5vw] md:text-[5.5vw] lg:text-[4.8vw] leading-none tracking-tight uppercase mt-2 sm:mt-3 md:mt-4 scale-y-110 origin-top"
          >
            DEVELOPER
          </motion.div>
        </div>

        {/* Sub-navigation Tagline: VISUALS • CODE • EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 font-mono-editorial text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#0B0B0B] mt-5 sm:mt-7 md:mt-8"
        >
          <span className="hover:opacity-60 transition-opacity">VISUALS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0B]" />
          <span className="hover:opacity-60 transition-opacity">CODE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0B]" />
          <span className="hover:opacity-60 transition-opacity">EXPERIENCE</span>
        </motion.div>
      </div>

      {/* Bottom Pinned Micro-Metadata Grid */}
      <div className="w-full flex justify-between items-end relative z-10 pt-4">
        {/* Bottom Left: ©2026 zaid */}
        <div className="flex items-center gap-1 font-mono-editorial text-xs sm:text-sm font-bold text-[#0B0B0B] tracking-wider">
          <span>&copy;2026</span>
          <span className="font-signature text-2xl sm:text-3xl lowercase ml-1.5 font-normal">
            zaid
          </span>
        </div>

        {/* Bottom Center: SCROLL TO EXPLORE with Down Arrow */}
        <a
          href="#about"
          onClick={(e) => scrollTo(e, "#about")}
          className="flex flex-col items-center gap-1 group cursor-pointer"
          data-cursor-text="DOWN"
        >
          <span className="font-mono-editorial text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#0B0B0B] group-hover:opacity-60 transition-opacity">
            SCROLL TO EXPLORE
          </span>
          <span className="text-base text-[#0B0B0B] animate-bounce">
            ↓
          </span>
        </a>

        {/* Bottom Right: Circular Rotating Stamp + BASED IN PAKISTAN */}
        <div className="flex flex-col items-center md:items-end">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center group cursor-pointer"
            data-cursor-text="CONNECT"
          >
            {/* Outer Circular SVG Rotating Stamp */}
            <svg
              className="w-full h-full animate-spin-slow"
              viewBox="0 0 200 200"
            >
              <defs>
                <path
                  id="stampCirclePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>
              <circle
                cx="100"
                cy="100"
                r="78"
                fill="none"
                stroke="#0B0B0B"
                strokeWidth="1.5"
                opacity="0.35"
              />
              <text className="font-mono-editorial text-[11px] uppercase tracking-[0.28em] fill-[#0B0B0B] font-bold">
                <textPath href="#stampCirclePath" startOffset="0%">
                  LET'S WORK TOGETHER • LET'S WORK TOGETHER •
                </textPath>
              </text>
            </svg>

            {/* Center Arrow Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-xl sm:text-2xl text-[#0B0B0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </div>
          </a>

          {/* Underneath the circular stamp: BASED IN PAKISTAN */}
          <span className="font-mono-editorial text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B0B0B] mt-1.5 text-right">
            BASED IN PAKISTAN
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
