import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Zap,
} from 'lucide-react'
import { revealVariants } from '../../constants/animations'
import { personalInfo } from '../../data/portfolioData'

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${personalInfo.email}`
    }
  }

  return (
    <section id="home" className="hero container">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="show"
        variants={revealVariants}
      >
        <motion.div
          className="availability"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="pulse" /> {personalInfo.status}{' '}
          <span className="availability-line" /> {personalInfo.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Building mobile<br />experiences.{' '}
          <span className="gradient-text">Making AI</span>
          <br />
          <span className="gradient-text">useful.</span>
        </motion.h1>

        <motion.p
          className="hero-lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          I'm Lalit — a React Native developer expanding into AI engineering. I
          build fast, reliable apps and connect them to intelligent experiences
          that solve real problems.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.a
            className="button button-primary"
            href="#work"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 350 }}
          >
            Explore my work <ArrowDownRight size={17} />
          </motion.a>
          <motion.a
            className="button button-ghost"
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 350 }}
          >
            Let's talk <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>

        <motion.div
          className="social-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={17} /> GitHub
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={17} /> LinkedIn
          </motion.a>
          <motion.button
            onClick={copyEmail}
            type="button"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={17} />
            {copied ? 'Email copied' : 'Email'}{' '}
            {copied && <Check size={14} />}
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="visual-grid" />

        {/* Ambient slowly rotating orbits */}
        <motion.div
          className="orbit orbit-one"
          animate={{ rotate: [-28, 332] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="orbit orbit-two"
          animate={{ rotate: [45, -315] }}
          transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
        />

        {/* Core Card with interactive hover and glow */}
        <motion.div
          className="core-card"
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: '0 35px 110px rgba(201, 250, 99, 0.18)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="core-top">
            <span className="live-dot" /> DEV MODE <span className="mono">v.2026</span>
          </div>
          <div className="code-window">
            <div className="window-controls">
              <i />
              <i />
              <i />
              <span>assistant.ts</span>
            </div>
            <pre>
              <code>
                <span className="code-purple">const</span>{' '}
                <span className="code-blue">builder</span> = {'{'}{'\n'}
                {'  '}focus: <span className="code-green">'mobile'</span>,{'\n'}
                {'  '}curiosity: <span className="code-green">'AI'</span>,{'\n'}
                {'  '}mindset: <span className="code-green">'ship it'</span>{'\n'}
                {'}'};{'\n\n'}
                <span className="code-purple">await</span> builder.
                <span className="code-blue">create</span>();
                <span className="cursor">▍</span>
              </code>
            </pre>
          </div>
          <div className="visual-footer">
            <span>
              <Zap size={15} /> Performance-minded
            </span>
            <span>
              <Sparkles size={15} /> AI curious
            </span>
          </div>
        </motion.div>

        {/* Floating animated chips with interactive hover */}
        <motion.div
          className="float-chip chip-top"
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.08, y: -14 }}
        >
          <span className="chip-icon chip-lime">
            <Code2 size={16} />
          </span>
          <span>
            <b>React Native</b>
            <small>Mobile experiences</small>
          </span>
        </motion.div>

        <motion.div
          className="float-chip chip-bottom"
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.08, y: 14 }}
        >
          <span className="chip-icon chip-violet">
            <BrainCircuit size={16} />
          </span>
          <span>
            <b>Generative AI</b>
            <small>Intelligent workflows</small>
          </span>
        </motion.div>

        <div className="visual-caption">
          CRAFTED WITH INTENT <span>✳</span>
        </div>
      </motion.div>

      <motion.a
        className="scroll-cue"
        href="#intro"
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <span className="scroll-line" /> SCROLL TO EXPLORE
      </motion.a>
    </section>
  )
}
