import { motion } from "framer-motion";

const SectionHeading = ({ children, className = "" }) => (
  <motion.div
    className={`text-center mb-12 ${className}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h2
      className="text-4xl md:text-5xl font-bold text-white tracking-tight"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {children}
    </h2>
    <motion.div
      className="h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: "4rem" }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    />
  </motion.div>
);

export default SectionHeading;
