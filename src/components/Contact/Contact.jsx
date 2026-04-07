import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { SectionLabel } from '../About/About'
import './Contact.css'

const SocialIcon = ({ icon }) => {
  const icons = {
    linkedin: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    github: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
    twitter: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    instagram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  }
  return icons[icon] || null
}

export default function Contact() {
  const { content } = useLanguage()
  const { contact } = content
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Conectar con Formspree, EmailJS u otro servicio aquí
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__bg-blob" aria-hidden />

      <div className="contact__inner">
        <div className="contact__header">
          <SectionLabel>{contact.sectionLabel}</SectionLabel>
          <h2 className="contact__title">{contact.title}</h2>
          <p className="contact__description">{contact.description}</p>
        </div>

        <div className="contact__grid">
          {/* Sidebar */}
          <div className="contact__sidebar">
            <div className="contact__email-box">
              <p className="contact__info-label">{contact.emailLabel}</p>
              <a href={`mailto:${contact.email}`} className="contact__email-link">
                {contact.email}
              </a>
              <p className="contact__availability">{contact.availability}</p>
            </div>

            <div>
              <p className="contact__info-label">{contact.socialLabel}</p>
              <div className="contact__social-list">
                {contact.social.map((s) => (
                  <a key={s.name} href={s.href} className="contact__social-link">
                    <SocialIcon icon={s.icon} />
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="contact__form-box">
            {sent ? (
              <div className="contact__success">
                <div className="contact__success-icon">✓</div>
                <h3 className="contact__success-title">{contact.success.title}</h3>
                <p className="contact__success-text">{contact.success.text}</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">{contact.form.nameLabel}</label>
                    <input
                      className="form-input"
                      name="name"
                      type="text"
                      placeholder={contact.form.namePlaceholder}
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{contact.form.emailLabel}</label>
                    <input
                      className="form-input"
                      name="email"
                      type="email"
                      placeholder={contact.form.emailPlaceholder}
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{contact.form.subjectLabel}</label>
                  <input
                    className="form-input"
                    name="subject"
                    type="text"
                    placeholder={contact.form.subjectPlaceholder}
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{contact.form.messageLabel}</label>
                  <textarea
                    className="form-textarea"
                    name="message"
                    placeholder={contact.form.messagePlaceholder}
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <button type="submit" className="contact__submit">
                  {contact.form.submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
