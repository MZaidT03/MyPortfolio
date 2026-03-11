import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const CONTAINER_HEIGHT = 560;

// Assign sizes: hero skills are larger
const heroSkills = new Set(["React", "React Native", "JavaScript (ES6+)"]);
const mediumSkills = new Set(["TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Firebase"]);

function getBubbleSize(skill) {
  if (heroSkills.has(skill)) return { r: 56, fontSize: 13 };
  if (mediumSkills.has(skill)) return { r: 46, fontSize: 12 };
  return { r: 38, fontSize: 11 };
}

// Distinct violet/amber hues for light background
const bubbleColors = [
  { bg: "rgba(124,58,237,0.10)",  border: "rgba(124,58,237,0.55)", text: "#5b21b6" },
  { bg: "rgba(251,191,36,0.12)",  border: "rgba(217,119,6,0.55)",  text: "#92400e" },
  { bg: "rgba(167,139,250,0.12)", border: "rgba(124,58,237,0.45)", text: "#4c1d95" },
  { bg: "rgba(109,40,217,0.10)",  border: "rgba(109,40,217,0.55)", text: "#4c1d95" },
  { bg: "rgba(245,158,11,0.10)",  border: "rgba(217,119,6,0.50)",  text: "#78350f" },
  { bg: "rgba(196,181,253,0.15)", border: "rgba(139,92,246,0.50)", text: "#4c1d95" },
  { bg: "rgba(253,230,138,0.15)", border: "rgba(245,158,11,0.55)", text: "#78350f" },
];

function initBubbles(skills, containerWidth) {
  const w = containerWidth || 800;
  const placed = [];

  return skills.map((skill, idx) => {
    const { r } = getBubbleSize(skill);
    const color = bubbleColors[idx % bubbleColors.length];

    // Try random positions, avoid overlaps
    let x, y, attempts = 0;
    do {
      x = r + 8 + Math.random() * (w - r * 2 - 16);
      y = r + 8 + Math.random() * (CONTAINER_HEIGHT - r * 2 - 16);
      attempts++;
      const overlapping = placed.some(p => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.r + r + 8;
      });
      if (!overlapping || attempts > 60) break;
    } while (true);

    placed.push({ x, y, r });

    const vx = (Math.random() - 0.5) * 0.3;
    const vy = (Math.random() - 0.5) * 0.2 - 0.1;
    return { id: idx, skill, r, color, x, y, vx, vy, phase: Math.random() * Math.PI * 2 };
  });
}

function Bubble({ bubble, onHover, hovered }) {
  const { r, color, skill } = bubble;
  const { fontSize } = getBubbleSize(skill);
  const isHovered = hovered === bubble.id;

  return (
    <motion.g
      style={{ cursor: "default" }}
      onHoverStart={() => onHover(bubble.id)}
      onHoverEnd={() => onHover(null)}
      animate={{
        scale: isHovered ? 1.18 : 1,
        filter: isHovered
          ? `drop-shadow(0 0 12px ${color.border}) drop-shadow(0 0 24px ${color.border})`
          : "none",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      transformOrigin={`${bubble.x}px ${bubble.y}px`}
    >
      <circle
        cx={bubble.x}
        cy={bubble.y}
        r={r}
        fill={isHovered ? color.border.replace(/[\d.]+\)$/, "0.25)") : color.bg}
        stroke={color.border}
        strokeWidth={isHovered ? 1.5 : 1}
        style={{ transition: "fill 0.25s, stroke-width 0.2s" }}
      />
      <text
        x={bubble.x}
        y={bubble.y + fontSize * 0.36}
        textAnchor="middle"
        fill={isHovered ? "#4c1d95" : color.text}
        fontSize={fontSize}
        fontWeight={isHovered ? "700" : "600"}
        fontFamily="'Inter', sans-serif"
        pointerEvents="none"
        style={{ transition: "fill 0.2s, font-weight 0.2s", userSelect: "none" }}
      >
        {skill.length > 14 ? skill.replace(" (ES6+)", "+").replace(" & ", "/") : skill}
      </text>
    </motion.g>
  );
}

const Skills = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const bubblesRef = useRef([]);
  const animFrameRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const [renderBubbles, setRenderBubbles] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Initialise bubbles once container is measured
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const w = el.getBoundingClientRect().width || 800;
    bubblesRef.current = initBubbles(portfolioData.skills, w);
    setRenderBubbles(bubblesRef.current.map(b => ({ ...b })));
  }, []);

  // Intersection observer to start animation when in view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Track mouse relative to SVG
  const handleMouseMove = useCallback((e) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 };
  }, []);

  // Physics loop
  useEffect(() => {
    if (!isVisible || shouldReduceMotion) return;
    let w = containerRef.current?.getBoundingClientRect().width || 800;

    const tick = (t) => {
      const time = t * 0.001;
      const { x: mx, y: my } = mouseRef.current;
      const bs = bubblesRef.current;

      for (let i = 0; i < bs.length; i++) {
        const b = bs[i];
        // Gentle floating via sine wave
        const floatY = Math.sin(time * 0.5 + b.phase) * 0.18;
        const floatX = Math.cos(time * 0.35 + b.phase) * 0.10;

        // Mouse repulsion
        const dx = b.x - mx;
        const dy = b.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = b.r * 3.5;
        if (dist < repelRadius && dist > 0) {
          const force = (1 - dist / repelRadius) * 1.2;
          b.vx += (dx / dist) * force;
          b.vy += (dy / dist) * force;
        }

        // Apply damping
        b.vx *= 0.92;
        b.vy *= 0.92;

        b.x += b.vx + floatX;
        b.y += b.vy + floatY;

        // Wall bounce
        if (b.x < b.r + 4) { b.x = b.r + 4; b.vx *= -0.5; }
        if (b.x > w - b.r - 4) { b.x = w - b.r - 4; b.vx *= -0.5; }
        if (b.y < b.r + 4) { b.y = b.r + 4; b.vy *= -0.5; }
        if (b.y > CONTAINER_HEIGHT - b.r - 4) { b.y = CONTAINER_HEIGHT - b.r - 4; b.vy *= -0.5; }

        // Bubble-bubble collision
        for (let j = i + 1; j < bs.length; j++) {
          const b2 = bs[j];
          const ddx = b.x - b2.x;
          const ddy = b.y - b2.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          const minDist = b.r + b2.r + 4;
          if (d < minDist && d > 0) {
            const overlap = (minDist - d) * 0.5;
            b.x += (ddx / d) * overlap;
            b.y += (ddy / d) * overlap;
            b2.x -= (ddx / d) * overlap;
            b2.y -= (ddy / d) * overlap;
          }
        }
      }

      setRenderBubbles(bs.map(b => ({ ...b })));
      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isVisible, shouldReduceMotion]);

  // Entrance animation variants for SVG container
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-20 bg-[#f5f3ff] text-center">
      <div className="container mx-auto px-6">
        <SectionHeading>My Tech Stack</SectionHeading>
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden"
          style={{
            height: CONTAINER_HEIGHT,
            background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          <svg
            ref={svgRef}
            width="100%"
            height={CONTAINER_HEIGHT}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ display: "block" }}
          >
            {renderBubbles.map((bubble) => (
              <Bubble
                key={bubble.id}
                bubble={bubble}
                onHover={setHovered}
                hovered={hovered}
              />
            ))}
          </svg>
          {/* Static fallback for reduced-motion users */}
          {shouldReduceMotion && (
            <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-3 p-6">
              {portfolioData.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium text-violet-700 border border-violet-300 bg-violet-50"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </motion.div>
        <p className="mt-4 text-xs text-gray-400 select-none">Move your cursor over the bubbles</p>
      </div>
    </section>
  );
};

export default Skills;
