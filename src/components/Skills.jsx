import { FaServer } from 'react-icons/fa'
import { color, motion } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDocker, FaAws,
  FaHtml5,
} from 'react-icons/fa'
import {
  SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql,
  SiExpress, SiNextdotjs, SiRedux, SiFramer, SiVite,
} from 'react-icons/si'
import SignalLine from './SignalLine'

// ✏️ EDIT ME: your actual skills, grouped by category.
// `color` = real brand color (hex). Leave color as null for
// monochrome logos (Express, Next.js) so they adapt to the theme.
const CATEGORIES = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#83CD29' },
      { name: 'Express', icon: SiExpress, color: null },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Rest API',icon: FaServer, color:'#FF6C37'}
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'Framer Motion', icon: SiFramer, color: '#EF008F' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-10 py-28 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-eyebrow">What I Work With</p>
        <h2 className="section-heading">Skills &amp; Tools</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className="bg-surface border border-line rounded-2xl p-7 backdrop-blur-sm"
          >
            <h3 className="font-display text-xl text-gold mb-6">{cat.title}</h3>
            <div className="grid grid-cols-3 gap-5">
             {cat.skills.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 group cursor-default"
                  title={name}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface2 border border-line group-hover:border-gold/50 group-hover:-translate-y-1 transition-all duration-200">
                    <Icon
                      size={20}
                      style={color ? { color } : undefined}
                      className={`transition-transform group-hover:scale-110 ${color ? '' : 'text-ivory'}`}
                    />
                  </div>
                  <span className="text-[11px] text-muted text-center leading-tight">{name}</span>
                </div>
              ))} 
            </div>
          </motion.div>
        ))}
      </div>

      <SignalLine />
    </section>
  )
}
