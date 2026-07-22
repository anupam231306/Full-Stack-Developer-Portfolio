import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'

// ✏️ EDIT ME: nav links (id must match each section's `id` attribute below)
const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about'  },
  { label: 'Education', href:'#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience'},
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base/80 dark:bg-base/80 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* ✏️ EDIT ME: your name / logo mark */}
        <a href="#home" className="font-display text-xl tracking-wide text-ivory">
          A<span className="text-gold">.</span>Upadhyay
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-gold transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full border border-line text-gold hover:border-gold transition-colors"
          >
            {theme === 'dark' ? <BsSunFill size={14} /> : <BsMoonStarsFill size={14} />}
          </button>

          <button
            className="md:hidden text-ivory text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-base border-b border-line"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-base text-muted hover:text-gold py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
