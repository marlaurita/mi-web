import { useLanguage } from '../../i18n/LanguageContext'
import './Hero.css'

export default function Hero() {
  const { content } = useLanguage()
  const { hero } = content

  const handleNav = (href) => {
    const el = document.getElementById(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Background decorativo */}
      <div className="hero__bg" aria-hidden>
        <div className="hero__blob hero__blob--cyan" />
        <div className="hero__blob hero__blob--purple" />
        <div className="hero__grid-overlay" />
      </div>

      <div className="hero__content">
        {/* Texto */}
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            {hero.badge}
          </div>

          <p className="hero__greeting">{hero.greeting}</p>

          <h1 className="hero__title">
            <span className="hero__title-highlight">{hero.highlight}</span>
          </h1>

          <p className="hero__role">{hero.role}</p>
          <p className="hero__description">{hero.description}</p>

          <div className="hero__actions">
            <button className="hero__btn-primary" onClick={() => handleNav('mentoring')}>
              {hero.cta1}
            </button>
            <button className="hero__btn-secondary" onClick={() => handleNav('about')}>
              {hero.cta2}
            </button>
          </div>
        </div>

        {/* Avatar */}
        <div className="hero__visual">
          {/* Anillos y dots fuera del avatar para no ser recortados por overflow:hidden */}
          <div className="hero__avatar-ring" aria-hidden />
          <div className="hero__avatar-ring hero__avatar-ring--outer" aria-hidden />

          <span className="hero__dot hero__dot--gold" aria-hidden />
          <span className="hero__dot hero__dot--purple" aria-hidden />
          <span className="hero__dot hero__dot--cyan" aria-hidden />

          <div className="hero__avatar">
            <img
              src="/profile.png"
              alt="María Laura"
              className="hero__avatar-img"
            />
            <div className="hero__avatar-vignette" aria-hidden />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden>
        <span className="hero__scroll-label">SCROLL</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
