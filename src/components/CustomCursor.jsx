import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const dotX = useSpring(x, { damping: 50, stiffness: 400 });
  const dotY = useSpring(y, { damping: 50, stiffness: 400 });
  const ringX = useSpring(x, springConfig);
  const ringY = useSpring(y, springConfig);

  useEffect(() => {
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, [data-cursor='pointer'], [role='button'], [role='link']");
      setIsPointer(!!target);
    };

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-violet-400"
          animate={{
            width: isPointer ? 8 : 6,
            height: isPointer ? 8 : 6,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Ring */}
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
          className="rounded-full border border-violet-400"
          style={{ mixBlendMode: "difference" }}
          animate={{
            width: isPointer ? 48 : 32,
            height: isPointer ? 48 : 32,
            opacity: isVisible ? 0.7 : 0,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
