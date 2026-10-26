import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Globe } from 'lucide-react'
import { revealVariants } from '../../constants/animations'
import { personalInfo } from '../../data/portfolioData'

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section section container">
      <motion.div
        className="contact-card"
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{
          borderColor: 'rgba(201, 250, 99, 0.38)',
          boxShadow: '0 30px 90px rgba(0, 0, 0, 0.55)',
        }}
        transition={{ duration: 0.35 }}
      >
        <motion.div
          className="contact-orb orb-one"
          animate={{
            scale: [1, 1.25, 1],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="contact-orb orb-two"
          animate={{
            scale: [1.15, 0.95, 1.15],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="contact-inner">
          <div className="section-kicker">
            <span>05 / YOUR TURN</span>
            <span className="kicker-rule" />
          </div>
          <h2>
            Have a good problem?
            <br />
            <span className="gradient-text">Let's build the answer.</span>
          </h2>
          <p>
            I'm open to opportunities where mobile engineering, product
            thinking, and AI come together.
          </p>
          <div className="contact-actions">
            <motion.a
              className="button button-primary"
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 350 }}
            >
              Start a conversation <ArrowUpRight size={17} />
            </motion.a>
            <motion.a
              className="button button-ghost"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 350 }}
            >
              View GitHub <Github size={16} />
            </motion.a>
          </div>
        </div>

        <motion.div
          className="contact-decoration"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            className="deco-square"
            animate={{ rotate: [-8, 4, -8] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.15, rotate: 0 }}
          >
            <Globe size={38} />
          </motion.div>
          <span>IDEAS → REALITY</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
