import { motion } from 'framer-motion'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import SignalLine from './SignalLine'

// ✏️ EDIT ME: replace with your real projects.
// image: put files in /public and reference as "/your-image.png", or use a full URL.
const PROJECTS = [
  {
    title: 'Nimbus — Analytics Dashboard',
    description: 'A real-time analytics dashboard with custom charting, dark mode, and role-based access control.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    live: 'https://example.com',
    github: 'https://github.com/yourusername/nimbus',
  },
  {
    title: 'Marketplace App',
    description: 'A full-stack e-commerce marketplace with Stripe payments, seller dashboards, and search filtering.',
    tech: ['Next.js', 'MongoDB', 'Stripe', 'Redux'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    live: 'https://example.com',
    github: 'https://github.com/yourusername/marketplace',
  },
  {
    title: 'TaskFlow — Project Manager',
    description: 'A Kanban-style project management tool with drag-and-drop boards and team collaboration.',
    tech: ['React', 'Express', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    live: 'https://example.com',
    github: 'https://github.com/yourusername/taskflow',
  },
  {
    title: 'DevBlog — Writing Platform',
    description: 'A minimal blogging platform for developers with markdown support and syntax-highlighted code blocks.',
    tech: ['Next.js', 'TypeScript', 'MDX'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    live: 'https://example.com',
    github: 'https://github.com/yourusername/devblog',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 sm:px-10 py-28 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-eyebrow">Selected Work</p>
        <h2 className="section-heading">Projects</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="group relative bg-surface border border-line rounded-2xl overflow-hidden hover:border-gold/40 transition-colors duration-300"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/10 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="font-display text-xl text-ivory mb-2">{project.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-line text-muted tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gold hover:underline underline-offset-4"
                >
                  Live Site <HiOutlineExternalLink size={14} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ivory transition-colors"
                >
                  <FaGithub size={14} /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <SignalLine />
    </section>
  )
}
