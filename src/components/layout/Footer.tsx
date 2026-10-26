import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Mail } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'

export const Footer: React.FC = () => {
  return (
    <footer className="footer container">
      <motion.a
        className="brand"
        href="#home"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.span
          className="brand-mark"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 350, damping: 15 }}
        >
          {personalInfo.shortName}
        </motion.span>
        <span>
          {personalInfo.name}
          <span className="brand-dot">.</span>
        </span>
      </motion.a>

      <span>Designed with intent. Built with React.</span>

      <div className="footer-links">
        <motion.a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          whileHover={{ y: -3, scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Github size={17} />
        </motion.a>
        <motion.a
          href={`mailto:${personalInfo.email}`}
          aria-label="Email"
          whileHover={{ y: -3, scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Mail size={17} />
        </motion.a>
        <motion.a
          href="#home"
          aria-label="Back to top"
          whileHover={{ y: -3, scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <ArrowUpRight size={17} />
        </motion.a>
      </div>

      <span className="copyright">
        © {new Date().getFullYear()} {personalInfo.name}
      </span>
    </footer>
  )
}
