import { Variants } from 'framer-motion'

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const floatMotion = {
  animate: {
    y: [-5, 6, -5],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const floatMotionReverse = {
  animate: {
    y: [6, -5, 6],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const slowRotate = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 25,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

export const slowRotateReverse = {
  animate: {
    rotate: [360, 0],
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}
