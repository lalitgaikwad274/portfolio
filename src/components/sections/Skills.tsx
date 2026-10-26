import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Layers3 } from 'lucide-react'
import { revealVariants, staggerContainer } from '../../constants/animations'
import { skills } from '../../data/portfolioData'

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section container">
      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="section-heading"
      >
        <div>
          <div className="section-kicker">
            <span>03 / EXPERTISE</span>
            <span className="kicker-rule" />
          </div>
          <h2>
            My toolkit for <span className="muted-heading">building well.</span>
          </h2>
        </div>
        <p>
          The right tool for the problem — with a focus on maintainability, user
          experience, and measurable outcomes.
        </p>
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill) => {
          const Icon = skill.icon
          return (
            <motion.article
              key={skill.title}
              className="skill-card"
              variants={revealVariants}
              whileHover={{
                y: -7,
                scale: 1.018,
                borderColor: 'rgba(183, 162, 255, 0.45)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
              }}
              transition={{ type: 'spring', stiffness: 320, damping: 20 }}
            >
              <motion.div
                className="skill-icon"
                whileHover={{ rotate: 12, scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Icon size={21} />
              </motion.div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
              <div className="tag-row">
                {skill.tags.map((tag) => (
                  <motion.span
                    className="tag"
                    key={tag}
                    whileHover={{
                      scale: 1.08,
                      color: '#c9fa63',
                      borderColor: 'rgba(201, 250, 99, 0.35)',
                    }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </motion.div>

      <motion.div
        className="architecture-strip"
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        whileHover={{
          y: -4,
          borderColor: 'rgba(201, 250, 99, 0.35)',
          backgroundColor: 'rgba(255, 255, 255, 0.035)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="architecture-icon"
          whileHover={{ scale: 1.12, rotate: -8 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Layers3 size={20} />
        </motion.div>
        <div>
          <b>Deep mobile engineering</b>
          <p>
            Fabric · TurboModules · JSI · Hermes · Native modules · Performance
            profiling
          </p>
        </div>
        <motion.div
          whileHover={{ x: 3, y: -3 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <ArrowUpRight className="strip-arrow" size={19} />
        </motion.div>
      </motion.div>
    </section>
  )
}
