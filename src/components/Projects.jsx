import { motion } from "framer-motion";
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
  rest: { color: "#67e8f9" },
  hover: { color: "#ffffff", backgroundColor: "#1e3a4a" },
};

const Projects = () => (
  <section id="projects" className="py-20 bg-[#050505] text-left">
    <div className="container mx-auto px-6 max-w-5xl">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project, i) => (
          <motion.div
            key={i}
            className="relative bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden"
            variants={cardVariants(i)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px rgba(34,211,238,0.12)",
              borderColor: "#22d3ee",
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            style={{ marginTop: i % 2 !== 0 ? "2rem" : 0 }}
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400" />
            {/* Watermark number */}
            <span className="absolute top-2 right-4 text-6xl font-black text-gray-800/40 select-none pointer-events-none leading-none">
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
                    className="bg-gray-800 text-sm px-3 py-1 rounded-full transition-colors duration-200"
                    transition={{ delay: j * 0.04 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
