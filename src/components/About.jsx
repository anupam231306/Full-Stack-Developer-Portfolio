import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import profileImg from '../assets/profile.jpg'
import SignalLine from './SignalLine'

// ✏️ EDIT ME: your stats
const STATS = [
  { label: 'Current CGPA', value: 8 },
  { label: 'Projects Built', value: 8 },
  { label: 'Certifications', value: 17 },
  { label: 'DSA Problems Solved', value: 100 },
]

function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1400
    const startTime = performance.now()

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl text-gold">
      {count}
      <span className="text-gold">+</span>
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-10 pt-10 pb-20 lg:pt-16 lg:pb-24 max-w-6xl mx-auto" >
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto md:mx-0"
        >
          {/* 🖼️ Uses the same photo as Hero — swap src/assets/profile.jpg to change both */}
          <div className="relative w-60 h-[24rem] sm:w-72 sm:h-[28rem]">
            <div className="absolute inset-0 border border-gold/40 rounded-2xl translate-x-4 translate-y-4" />
            <img
              src={profileImg}
              alt="Anupam Upadhyay at work"
              className="relative w-full h-full object-cover object-top rounded-2xl grayscale-[15%] ring-1 ring-gold/20"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-heading mb-6">
            I build software with <span className="italic text-gold">intention.</span>
          </h2>

          {/* ✏️ EDIT ME: your detailed bio */}
          <p className="text-muted leading-relaxed mb-4">
            I'm a B.Tech(3rd Year) student passionate about full stack web
            development. I enjoy turning ideas into working products - from
            designing clean UIs to building the backend logic that powers them.
            I care as much about how code reads as how it runs
          </p>
          <p className="text-muted leading-relaxed mb-10">
            Alongside my coursework, I've built several personal and academic
            projects to sharpen my skills in React, Node.js, and databases.
            I'm curretly looking for internship opportunity where I can
            learn from real-world teams and contribute meaningfully. When I'm 
            not coding,I'n exploring new frameworks or solving DSA problems. 
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-l border-line pl-4">
                <Counter value={stat.value} />
                <p className="text-xs text-muted mt-1 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <SignalLine />
    </section>
  )
}
