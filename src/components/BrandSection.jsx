import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";

const BrandSection = () => (
  <section id="codeinntech" className="py-20 bg-[#050505] text-center text-white">
    <div className="container mx-auto px-6">
      <motion.div
        className="glass-card animate-border-glow rounded-2xl p-10 max-w-3xl mx-auto border border-gray-800"
        initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {portfolioData.brand.name}
        </h2>
        <p className="text-cyan-400 mb-4 text-lg">{portfolioData.brand.tagline}</p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          {portfolioData.brand.description}
        </p>
        <MagneticButton
          href={portfolioData.brand.website}
          target="_blank"
          rel="noreferrer"
          className="btn-shimmer inline-block bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 rounded-full font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          Visit CodeInn' Tech
        </MagneticButton>
      </motion.div>
    </div>
  </section>
);

export default BrandSection;
