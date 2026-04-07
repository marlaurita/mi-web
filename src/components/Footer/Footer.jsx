import { useLanguage } from '../../i18n/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { content } = useLanguage()
  const { site, footer, nav } = content

  const handleNav = (href) => {
    const el = document.getElementById(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Marca */}
          <div>
            <span className="footer__brand-name">{site.name}</span>
            <p className="footer__tagline">{footer.tagline}</p>
            <div className="footer__status">
              <span className="footer__status-dot" />
              <span className="footer__status-text">{footer.availabilityLabel}</span>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <p className="footer__col-title">{footer.navTitle}</p>
            <ul className="footer__nav-list">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <button className="footer__nav-btn" onClick={() => handleNav(link.href)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="footer__col-title">{footer.legalTitle}</p>
            <ul className="footer__legal-list">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__legal-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
