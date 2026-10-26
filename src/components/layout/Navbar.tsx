import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems, personalInfo } from '../../data/portfolioData'

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.header
      className="nav-wrap"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav container">
        <motion.a
          className="brand"
          href="#home"
          onClick={closeMenu}
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

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            className="nav-cta"
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            GitHub <ArrowUpRight size={15} />
          </motion.a>
        </div>
      </nav>
    </motion.header>
  )
}
