import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

// Hero skills that get larger bento cells
const heroSkills = ["React", "React Native", "JavaScript (ES6+)"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const Skills = () => (
  <section id="skills" className="py-20 bg-[#0d0d0d] text-center">
    <div className="container mx-auto px-6">
      <SectionHeading>My Tech Stack</SectionHeading>
      <motion.div
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {portfolioData.skills.map((skill, i) => {
          const isHero = heroSkills.includes(skill);
          return (
            <motion.div
              key={i}
              variants={skillVariants}
              className={`bg-[#0a0a0a] border border-gray-700 text-cyan-300 rounded-lg cursor-default
                hover:border-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400/20
                transition-colors duration-300 ${isHero ? "px-7 py-4 text-lg font-semibold" : "px-5 py-2"}`}
              whileHover={{ scale: 1.08, borderColor: "#22d3ee" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {skill}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Skills;
