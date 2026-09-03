import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [phaseText, setPhaseText] = useState("INITIALIZING ENGINE...");

  useEffect(() => {
    // Non-linear realistic loader counter
    let current = 0;
    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 8) + 3;
      current = Math.min(100, current + step);
      setCount(current);

      if (current < 30) {
        setPhaseText("PARSING EDITORIAL ASSETS...");
      } else if (current < 65) {
        setPhaseText("COMPILING SHADER KERNELS...");
      } else if (current < 95) {
        setPhaseText("ESTABLISHING SCENE GRAPH...");
      } else {
        setPhaseText("EXPERIENCE READY // LAUNCHING");
      }

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 850);
        }, 300);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (count / 100) * circumference;

  return (
    <AnimatePresence>
      {!isFinished ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] bg-[#0B0B0B] text-[#F4F1EA] flex flex-col justify-between p-6 md:p-12 select-none"
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
            transition: { duration: 0.9, ease: [0.87, 0, 0.13, 1] },
          }}
        >
          {/* Top Micro-Metadata */}
          <div className="flex justify-between items-start font-mono-editorial text-[10px] md:text-xs text-[#8E8B82] uppercase tracking-[0.25em]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5D9B6] animate-ping" />
              <span>ARCHIVE // SYSTEM 2026</span>
            </div>
            <span>[ GUJRANWALA, PK — 32.18° N ]</span>
          </div>

          {/* Center Stage: Circular Ring + Massive Number */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="relative flex items-center justify-center w-40 h-40 md:w-56 md:h-56">
              {/* Circular SVG Ring */}
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="2"
                  fill="transparent"
                />
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  stroke="#E5D9B6"
                  strokeWidth="2.5"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-75 ease-out"
                />
              </svg>

              {/* Massive Counter */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-5xl md:text-7xl font-bold tracking-tight text-[#F4F1EA]">
                  {count.toString().padStart(2, "0")}
                </span>
                <span className="text-[10px] font-mono-editorial uppercase tracking-[0.3em] text-[#E5D9B6] mt-[-6px]">
                  PERCENT
                </span>
              </div>
            </div>

            {/* Brutalist status pill */}
            <div className="mt-8 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.12)] bg-[#121212]/80 backdrop-blur">
              <p className="font-mono-editorial text-[11px] md:text-xs tracking-[0.25em] text-[#E5D9B6] uppercase">
                {phaseText}
              </p>
            </div>
          </div>

          {/* Bottom Micro-Metadata */}
          <div className="flex justify-between items-end font-mono-editorial text-[10px] md:text-xs text-[#8E8B82] uppercase tracking-[0.25em]">
            <span>MUHAMMAD ZAID TAHIR</span>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">DARK LUXURY / BRUTALIST</span>
              <span className="text-[#E5D9B6]">VOL. 26</span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;
