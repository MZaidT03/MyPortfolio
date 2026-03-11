import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import portfolioData from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const cardVariants = (i) => ({
  hidden: {
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
    rotate: i % 2 === 0 ? -2 : 2,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 80, damping: 18, delay: i * 0.1 },
  },
});

const techTagVariants = {
  rest: { color: "#a78bfa" },
  hover: { color: "#ffffff", backgroundColor: "#2e1065" },
};

const TiltCard = ({ project, i }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative"
      variants={cardVariants(i)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{
        perspective: 800,
        marginTop: i % 2 !== 0 ? "2rem" : 0,
      }}
    >
      <motion.div
        className="relative bg-[#0c0818] rounded-xl border border-violet-900/40 overflow-hidden"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          y: -8,
          boxShadow: "0 20px 40px rgba(124,58,237,0.18)",
          borderColor: "#7c3aed",
          transition: { type: "spring", stiffness: 200, damping: 20 },
        }}
      >
        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-600 to-amber-400" />
        {/* Watermark number */}
        <span className="absolute top-2 right-4 text-6xl font-black text-violet-900/30 select-none pointer-events-none leading-none">
          {String(i + 1).padStart(2, "0")}
        </span>
        <div className="p-6 pl-7">
          <motion.h3
            className="text-xl font-bold text-white mb-2 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {project.title}
          </motion.h3>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
          <motion.div
            className="flex flex-wrap gap-2"
            initial="rest"
            whileHover="hover"
          >
            {project.tech.map((t, j) => (
              <motion.span
                key={j}
                variants={techTagVariants}
                className="bg-violet-950/60 text-sm px-3 py-1 rounded-full transition-colors duration-200"
                transition={{ delay: j * 0.04 }}
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="py-20 bg-[#06030e] text-left">
    <div className="container mx-auto px-6 max-w-5xl">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project, i) => (
          <TiltCard key={i} project={project} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
