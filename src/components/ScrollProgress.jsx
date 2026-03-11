import { useScroll, useSpring, motion } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[9999]"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
      }}
    />
  );
};

export default ScrollProgress;
