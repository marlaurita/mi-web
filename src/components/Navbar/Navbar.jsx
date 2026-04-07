import { useState, useEffect } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggleLang, content } = useLanguage()
  const { site, nav } = content

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.getElementById(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <nav className="navbar__inner">
        <button className="navbar__logo" onClick={() => handleNav('hero')}>
          {site.name}
        </button>

        <ul className="navbar__links">
          {nav.links.map((link) => (
            <li key={link.href}>
              <button className="navbar__link-btn" onClick={() => handleNav(link.href)}>
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button className="navbar__lang-toggle" onClick={toggleLang} aria-label="Cambiar idioma">
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </li>
          <li>
            <button className="navbar__cta" onClick={() => handleNav('contact')}>
              {nav.ctaLabel}
            </button>
          </li>
        </ul>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </nav>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          {nav.links.map((link) => (
            <button key={link.href} className="navbar__mobile-link" onClick={() => handleNav(link.href)}>
              {link.label}
            </button>
          ))}
          <button className="navbar__mobile-cta" onClick={() => handleNav('contact')}>
            {nav.ctaLabel}
          </button>
        </div>
      )}
    </header>
  )
}
