import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { revealVariants, staggerContainer } from '../../constants/animations'
import { projects } from '../../data/portfolioData'

export const Work: React.FC = () => {
  return (
    <section id="work" className="section work-section">
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
              <span>02 / SELECTED WORK</span>
              <span className="kicker-rule" />
            </div>
            <h2>
              Ideas turned into <span className="gradient-text">impact.</span>
            </h2>
          </div>
          <p>
            A selection of mobile and AI-focused work, product thinking, and
            experiments.
          </p>
        </motion.div>

        <motion.div
          className="project-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.article
                key={project.n}
                className={`project-card ${project.tone}`}
                variants={revealVariants}
                whileHover={{
                  y: -8,
                  scale: 1.012,
                  boxShadow: '0 25px 70px rgba(0, 0, 0, 0.5)',
                }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              >
                <div className="project-art">
                  <motion.div
                    className="art-glow"
                    animate={{
                      scale: [1, 1.25, 1],
                      opacity: [0.6, 0.95, 0.6],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <motion.div
                    className="art-ring ring-a"
                    animate={{ rotate: [28, 388] }}
                    transition={{
                      duration: 22,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.div
                    className="art-ring ring-b"
                    animate={{ rotate: [-28, -388] }}
                    transition={{
                      duration: 26,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.div
                    className="art-icon"
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Icon size={35} />
                  </motion.div>
                  <span className="art-index">{project.n}</span>
                  <span className="art-label">{project.type}</span>
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.type}</span>
                    <span className="project-status">
                      <i /> FEATURED
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>

                  <div className="tag-row">
                    {project.stack.map((tag) => (
                      <motion.span
                        className="tag"
                        key={tag}
                        whileHover={{
                          scale: 1.08,
                          borderColor: 'rgba(201, 250, 99, 0.4)',
                          color: '#ffffff',
                        }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    Explore project <ArrowUpRight size={16} />
                  </motion.a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
