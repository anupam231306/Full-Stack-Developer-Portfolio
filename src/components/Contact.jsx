import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

/**
 * ============================================================
 *  EMAILJS SETUP — do this once before the form will send mail
 * ============================================================
 * 1. Go to https://www.emailjs.com/ and create a free account.
 * 2. Add an Email Service (Gmail, Outlook, etc.)
 *    → Dashboard → "Email Services" → "Add New Service"
 *    → Copy the generated SERVICE ID and paste below.
 * 3. Create an Email Template
 *    → Dashboard → "Email Templates" → "Create New Template"
 *    → Use variables like {{name}}, {{email}}, {{subject}}, {{message}}
 *      in the template body — these match the keys sent below.
 *    → Copy the generated TEMPLATE ID and paste below.
 * 4. Get your Public Key
 *    → Dashboard → "Account" → "General" → copy the "Public Key".
 * 5. Paste all three values into the constants below.
 * 6. That's it — form submissions will now land in your inbox.
 * ============================================================
 */
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;   // ✏️ e.g. "service_ab12cd3"
const EMAILJS_TEMPLATE_ID =  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;  // ✏️ e.g. "template_xy98zt6"
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;     // ✏️ e.g. "AbCdEfGhIjKlMnOp"

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  function validate(values) {
    const errs = {}
    if (!values.name.trim()) errs.name = 'Please enter your name.'
    if (!values.email.trim()) {
      errs.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!values.subject.trim()) errs.subject = 'Please enter a subject.'
    if (!values.message.trim()) errs.message = 'Please write a message.'
    return errs
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('loading')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setForm(initialForm)
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="px-6 sm:px-10 py-28 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-eyebrow">Get In Touch</p>
        <h2 className="section-heading">Let's Work Together</h2>
        <p className="text-muted mt-4 max-w-xl mx-auto">
          Have a project in mind, or just want to say hello? My inbox is
          always open.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10">
        {/* Contact info column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* ✏️ EDIT ME: your real contact details */}
          <ContactInfoRow icon={HiOutlineMail} label="Email" value="anupamupadhyay1122@gmail.com" />
          <ContactInfoRow icon={HiOutlinePhone} label="Phone" value="+91 95988 59975" />
          <ContactInfoRow icon={HiOutlineLocationMarker} label="Location" value="📍 Mirzapur, Uttar Pradesh, India" />

          <div className="flex items-center gap-4 pt-4">
            {[FaGithub, FaLinkedinIn, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-line text-muted hover:text-gold hover:border-gold transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form column */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="bg-surface border border-line rounded-2xl p-7 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Your name"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="you@example.com"
            />
          </div>

          <Field
            label="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            error={errors.subject}
            placeholder="What's this about?"
          />

          <div>
            <label className="text-xs tracking-wide text-muted mb-1.5 block">Message</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className={`w-full bg-surface2 border rounded-xl px-4 py-3 text-sm text-ivory placeholder:text-muted/60 outline-none transition-colors resize-none ${
                errors.message ? 'border-red-400/60' : 'border-line focus:border-gold/60'
              }`}
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-base font-semibold px-8 py-3 rounded-full text-sm tracking-wide hover:bg-gold/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'loading' ? (
              <>
                <span className="w-4 h-4 border-2 border-base/40 border-t-base rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>

          {/* Toast messages */}
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-emerald-700 dark:text-emerald-300 bg-teal/10 dark:bg-teal/20 border border-teal/40 rounded-lg px-4 py-2.5"
            >
              ✓ Message sent successfully — I'll get back to you soon!
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-600 dark:text-red-300 bg-red-400/10 border border-red-400/30 rounded-lg px-4 py-2.5"
            >
              ✗ Something went wrong. Please check your EmailJS setup or try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

function ContactInfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 flex items-center justify-center rounded-full bg-surface border border-line text-gold shrink-0">
        <Icon size={17} />
      </div>
      <div>
        <p className="text-xs text-muted tracking-wide">{label}</p>
        <p className="text-sm text-ivory">{value}</p>
      </div>
    </div>
  )
}

function Field({ label, name, value, onChange, error, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="text-xs tracking-wide text-muted mb-1.5 block">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-surface2 border rounded-xl px-4 py-3 text-sm text-ivory placeholder:text-muted/60 outline-none transition-colors ${
          error ? 'border-red-400/60' : 'border-line focus:border-gold/60'
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  )
}
