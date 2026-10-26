import React from 'react'
import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import { revealVariants, staggerContainer } from '../../constants/animations'
import { experience } from '../../data/portfolioData'

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section journey-section">
      <div className="container">
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="section-heading"
        >
          <div>
            <div className="section-kicker">
              <span>04 / THE JOURNEY</span>
              <span className="kicker-rule" />
            </div>
            <h2>
              Built on curiosity.
              <br />
              <span className="muted-heading">Driven by craft.</span>
            </h2>
          </div>
          <p>
            Growing from shipping mobile features to designing complete,
            AI-enabled experiences.
          </p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {experience.map((item) => (
            <motion.div
              key={item.title}
              className="timeline-item"
              variants={revealVariants}
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            >
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-marker">
                <motion.span
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <div className="timeline-company">{item.company}</div>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="learning-note"
          variants={revealVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{
            y: -3,
            scale: 1.012,
            borderColor: 'rgba(183, 162, 255, 0.3)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <motion.div
            whileHover={{ rotate: 20, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Terminal size={18} />
          </motion.div>
          <span>Currently exploring:</span>
          <b>
            RAG systems, agentic workflows, FastAPI architecture, and
            production AI patterns.
          </b>
        </motion.div>
      </div>
    </section>
  )
}
