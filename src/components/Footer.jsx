import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      className="bg-white pt-8 pb-6 text-center text-gray-500 border-t border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent mb-8" />
      <div className="flex justify-center gap-6 mb-4">
        <a
          href={portfolioData.socials.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-violet-600 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"
          aria-label="GitHub"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href={portfolioData.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-violet-600 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm">
        &copy; {year} {portfolioData.name} &mdash; Founder at{" "}
        <span className="text-violet-600">{portfolioData.brand.name}</span>.
      </p>
    </motion.footer>
  );
};

export default Footer;
