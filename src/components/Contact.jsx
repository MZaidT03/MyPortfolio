import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import MagneticButton from "./MagneticButton";

const Contact = () => (
  <section id="contact" className="relative py-20 bg-[#0d0d0d] text-center overflow-hidden">
    {/* Dot texture */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: "radial-gradient(circle, #22d3ee 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
    <motion.div
      className="relative z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* SVG path draw animation */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        width="64"
        height="64"
        className="mx-auto mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.rect
          x="2" y="4" width="20" height="16" rx="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.path
          d="m22 7-10 7L2 7"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        />
      </motion.svg>
      <h2
        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 tracking-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Get In Touch
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8 px-6">
        I'm open to collaborations and freelance projects! Let's bring your ideas to life.
      </p>
      <MagneticButton
        href={`mailto:${portfolioData.contact}`}
        className="btn-shimmer inline-block bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 rounded-full font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        Say Hello
      </MagneticButton>
    </motion.div>
  </section>
);

export default Contact;
