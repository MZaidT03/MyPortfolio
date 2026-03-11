import { motion, useReducedMotion } from "framer-motion";
import imgProfile from "../assets/img.jpg";
import portfolioData from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: shouldReduceMotion ? 0 : -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <section id="about" className="py-20 bg-[#f5f3ff] text-gray-700">
      <div className="container mx-auto px-6">
        <SectionHeading>About Me</SectionHeading>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <motion.div
            className="flex-shrink-0"
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="p-1 bg-gradient-to-br from-violet-600 to-amber-400 rounded-full animate-pulse-glow">
              <img
                src={imgProfile}
                alt="Muhammad Zaid Tahir"
                className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-[#f5f3ff] object-cover animate-float"
              />
            </div>
          </motion.div>
          <motion.div
            className="space-y-6 text-center md:text-left mt-6 md:mt-0"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={paragraphVariants} className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-amber-400" />
              <span className="text-violet-600 text-sm font-semibold uppercase tracking-widest">
                Who am I?
              </span>
            </motion.div>
            <motion.p variants={paragraphVariants} className="text-lg leading-relaxed">
              {portfolioData.about.paragraph1}
            </motion.p>
            <motion.p variants={paragraphVariants} className="text-lg leading-relaxed">
              {portfolioData.about.paragraph2}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
