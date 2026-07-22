import { motion } from 'framer-motion'

// ✏️ EDIT ME: keep this in sync with your name in Navbar.jsx / Hero.jsx
const NAME = 'Anupam Upadhyay'

const letterVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.35 + i * 0.045, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function LoadingScreen() {
  return (
    <motion.div
      exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base"
    >
      <div className="flex overflow-hidden">
        {NAME.split('').map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            className="font-display text-3xl sm:text-4xl text-ivory inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 160, opacity: 1 }}
        transition={{ delay: 0.9, duration: 1.1, ease: 'easeInOut' }}
        className="h-[2px] bg-gold mt-6 rounded-full"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="text-[11px] tracking-[0.3em] uppercase text-muted mt-4"
      >
        Loading Portfolio
      </motion.p>
    </motion.div>
  )
}