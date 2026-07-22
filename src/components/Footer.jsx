import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'
import { HiOutlineArrowUp } from 'react-icons/hi'

const SOCIALS = [
  { icon: FaGithub, href: 'https://github.com/anupam231306' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/anupamupadhyay' },
  { icon: FaTwitter, href: 'https://twitter.com/yourusername' },
  { icon: FaInstagram, href: 'https://instagram.com/upadhyay__anupam/' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 sm:px-10 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-muted tracking-wide">
          © {new Date().getFullYear()} Anupam Upadhyay. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-gold transition-colors"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

        <a
          href="#home"
          aria-label="Back to top"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-line text-muted hover:text-gold hover:border-gold transition-colors"
        >
          <HiOutlineArrowUp size={14} />
        </a>
      </div>
    </footer>
  )
}
