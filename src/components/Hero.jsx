import { motion, useReducedMotion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import useMousePosition from "../hooks/useMousePosition";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import MagneticButton from "./MagneticButton";

const Particles = () => {
  const particles = [
    { size: 4, top: "15%", left: "10%", duration: "6s", delay: "0s" },
    { size: 3, top: "30%", left: "85%", duration: "8s", delay: "1s" },
    { size: 5, top: "60%", left: "5%", duration: "7s", delay: "2s" },
    { size: 3, top: "75%", left: "90%", duration: "9s", delay: "0.5s" },
    { size: 4, top: "45%", left: "50%", duration: "5s", delay: "3s" },
    { size: 2, top: "20%", left: "65%", duration: "10s", delay: "1.5s" },
    { size: 3, top: "85%", left: "30%", duration: "7s", delay: "2.5s" },
    { size: 5, top: "10%", left: "40%", duration: "8s", delay: "4s" },
    { size: 2, top: "55%", left: "75%", duration: "11s", delay: "0.8s" },
    { size: 3, top: "40%", left: "20%", duration: "9s", delay: "3.5s" },
  ];
  return (
    <>
      {particles.map((p, i) => (
        <span key={i} aria-hidden="true" className="particle" style={{ width: p.size, height: p.size, top: p.top, left: p.left, animationDuration: p.duration, animationDelay: p.delay }} />
      ))}
    </>
  );
};

const Hero = ({ onLinkClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const { x, y } = useMousePosition();

  const parallaxX = shouldReduceMotion ? 0 : (x / window.innerWidth - 0.5) * 20;
  const parallaxY = shouldReduceMotion ? 0 : (y / window.innerHeight - 0.5) * 20;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const wordVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 },
    }),
  };

  const ctaVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 12, delay: 0.8 },
    },
  };

  const nameWords = portfolioData.name.split(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#050505] text-white text-center overflow-hidden hero-gradient-bg">
      <motion.div
        className="absolute inset-0 hero-gradient-bg"
        animate={{ x: parallaxX * 0.3, y: parallaxY * 0.3 }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      <Particles />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Name with word masking */}
          <div className="flex flex-wrap justify-center gap-x-4 mb-4">
            {nameWords.map((word, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  variants={wordVariants}
                  className="inline-block text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Title */}
          <motion.p
            variants={fadeVariants}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            {portfolioData.title}
          </motion.p>

          {/* Bio */}
          <motion.p variants={fadeVariants} className="text-gray-400 max-w-2xl mx-auto mb-10">
            {portfolioData.bio}
          </motion.p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-10">
            {[
              { href: portfolioData.socials.github, Icon: GithubIcon, label: "GitHub" },
              { href: portfolioData.socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
            ].map(({ href, Icon, label }, i) => (
              <motion.a
                key={label}
                custom={i}
                variants={iconVariants}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                aria-label={label}
                whileHover={{ scale: 1.25, rotate: 5 }}
              >
                <Icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={ctaVariants}>
            <MagneticButton
              href="#contact"
              onClick={(e) => onLinkClick(e, "#contact")}
              className="btn-shimmer inline-block bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 rounded-full font-bold text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 hover:shadow-xl animate-pulse-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
