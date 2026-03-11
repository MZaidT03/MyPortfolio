import { useRef, useState } from "react";
import { motion } from "framer-motion";

const MagneticButton = ({ children, className = "", onClick, href, target, rel, strength = 0.4 }) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setOffset({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const props = {
    ref,
    className,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: { x: offset.x, y: offset.y },
    transition: { type: "spring", stiffness: 200, damping: 20 },
    onClick,
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...props}>
        {children}
      </motion.a>
    );
  }

  return <motion.button {...props}>{children}</motion.button>;
};

export default MagneticButton;
