import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'
import { HiOutlineArrowDown, HiOutlineDownload, HiOutlineMail, HiOutlineBriefcase } from 'react-icons/hi'
import profileImg from '../assets/profile.jpg'

// ✏️ EDIT ME: rotating titles for the typing animation
const TITLES = ['Full Stack Web Developer', 'Bckend Developer', 'Open Source Contributor', 'Problem Solver']

// ✏️ EDIT ME: social links
const SOCIALS = [
  { icon: FaGithub, href: 'https://github.com/anupam231306', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/anupamupadhyay', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://www.instagram.com/upadhyay__anupam/', label: 'Instagram' },
]

function useTypingEffect(words, speed = 90, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypingEffect(TITLES)

  return (
    <section
      id="home"
     className="relative flex items-center justify-center px-6 sm:px-10 py-16 lg:py-16 overflow-hidden"
    >
      {/* ambient background glow — quiet, not the whole show */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[140px]" />

      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center relative z-10">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-3 bg-surface/80 backdrop-blur-md border border-gold/20 rounded-full pl-3 pr-5 py-2 mb-6 shadow-lg hover:border-gold/40 transition-all duration-300">
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-500 animate-ping opacity-75"></span>
    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
  </span>

  <HiOutlineBriefcase size={16} className="text-gold" />

  <span className="text-sm font-semibold text-ivory tracking-wide">
    Open to Full-Stack Developer Internship
  </span>
</div>

          {/* ✏️ EDIT ME: your name */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] text-ivory">
            Anupam Upadhyay
          </h1>

          <div className="mt-4 h-8 flex items-center">
            <span className="font-display italic text-xl sm:text-2xl text-gold">{typed}</span>
            <span className="w-[2px] h-6 bg-gold ml-1 animate-blink" />
          </div>

          {/* ✏️ EDIT ME: short intro */}
          <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-lg">
           B.Tech (3rd Year) student building full stack web applications.
           Currently focused on React, Node.js, and crafting interfaces that
           feel considered, not generic — actively looking for internship
           opportunities.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            {/* ✏️ EDIT ME: point this to your actual resume file in /public */}
            <a
              href="/myresume.pdf"
              download
              className="inline-flex items-center gap-2 bg-gold text-base font-semibold px-6 py-3 rounded-full text-sm tracking-wide hover:bg-gold/90 transition-colors"
            >
              <HiOutlineDownload size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-line text-ivory px-6 py-3 rounded-full text-sm tracking-wide hover:border-gold hover:text-gold transition-colors"
            >
              <HiOutlineMail size={16} />
              Contact Me
            </a>
          </div>

          <div className="mt-7 flex items-center gap-5">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-line text-muted hover:text-gold hover:border-gold transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full border border-gold/30 animate-pulse" />
            <div className="absolute -inset-6 rounded-full border border-teal/30" />
            {/* 🖼️ REPLACE: put your photo at src/assets/profile.jpg */}
            <img
              src={profileImg}
              alt="Aditya Sharma — portrait"
              className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover border-2 border-gold/50 shadow-[0_0_60px_rgba(201,161,90,0.15)]"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-gold transition-colors animate-bounce"
      >
        <HiOutlineArrowDown size={20} />
      </a>
    </section>
  )
}
