import React from 'react'
import { motion } from 'framer-motion'

export const AmbientGlow: React.FC = () => {
  return (
    <>
      <motion.div
        className="ambient ambient-one"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="ambient ambient-two"
        animate={{
          scale: [1.2, 0.95, 1.2],
          opacity: [0.14, 0.24, 0.14],
          x: [0, -40, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </>
  )
}
