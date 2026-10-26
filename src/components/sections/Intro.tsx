import React from 'react'
import { motion } from 'framer-motion'
import { revealVariants, staggerContainer } from '../../constants/animations'
import { stats } from '../../data/portfolioData'

export const Intro: React.FC = () => {
  return (
    <section id="intro" className="intro-section section container">
      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="section-kicker"
      >
        <span>01 / A LITTLE ABOUT ME</span>
        <span className="kicker-rule" />
      </motion.div>

      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="intro-grid"
      >
        <h2>
          From mobile interfaces
          <br />
          to <span className="muted-heading">intelligent products.</span>
        </h2>
        <div className="intro-text">
          <p>
            I enjoy taking a product idea from a thoughtful interface to the
            APIs and systems behind it. My foundation is cross-platform mobile
            development; my current focus is bringing AI, voice, and retrieval
            into useful product experiences.
          </p>
          <p>
            I care about the details users feel: responsive interactions,
            dependable integrations, clear architecture, and performance that
            holds up in production.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="stats-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="stat"
            variants={revealVariants}
            whileHover={{
              y: -5,
              scale: 1.02,
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          >
            <strong>
              {stat.value}
              {stat.suffix && <span>{stat.suffix}</span>}
            </strong>
            <small>{stat.label}</small>
          </motion.div>
        ))}
      </motion.div>
      <p className="fine-print">
        *Update these metrics to match the exact experience and impact you want
        to publicly claim.
      </p>
    </section>
  )
}
