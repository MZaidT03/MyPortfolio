import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Trailing ring with smooth damping
  const ringConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const ringX = useSpring(cursorX, ringConfig);
  const ringY = useSpring(cursorY, ringConfig);

  useEffect(() => {
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, [data-cursor], [role='button'], input, textarea, .interactive-card");
      if (target) {
        setIsPointer(true);
        const customText = target.getAttribute("data-cursor-text") || "";
        setCursorText(customText);
      } else {
        setIsPointer(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Precision Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-[#E5D9B6]"
          animate={{
            width: isPointer ? (cursorText ? 0 : 4) : 6,
            height: isPointer ? (cursorText ? 0 : 4) : 6,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Trailing Luxury Ring / Badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full flex items-center justify-center border border-[#E5D9B6] backdrop-blur-[1px]"
          style={{
            mixBlendMode: "difference",
          }}
          animate={{
            width: cursorText ? 80 : isPointer ? 54 : 32,
            height: cursorText ? 80 : isPointer ? 54 : 32,
            backgroundColor: cursorText ? "rgba(229, 217, 182, 0.95)" : isPointer ? "rgba(229, 217, 182, 0.15)" : "transparent",
            borderColor: cursorText ? "#0B0B0B" : "#E5D9B6",
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.5,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {cursorText && (
            <span className="text-[10px] font-mono-editorial font-bold tracking-widest text-[#0B0B0B] uppercase text-center px-1">
              {cursorText}
            </span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
