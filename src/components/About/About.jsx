import { useLanguage } from '../../i18n/LanguageContext'
import './About.css'

/* Componente compartido — importar desde otros componentes */
export function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span className="section-label__line" />
      <span className="section-label__text">{children}</span>
    </div>
  )
}

export default function About() {
  const { content } = useLanguage()
  const { about } = content

  return (
    <section id="about" className="about">
      <div className="about__bg-blob" aria-hidden />

      <div className="about__inner">
        <SectionLabel>{about.sectionLabel}</SectionLabel>

        <div className="about__grid">
          {/* Texto */}
          <div>
            <h2 className="about__title">{about.title}</h2>

            {about.paragraphs.map((p, i) => (
              <p key={i} className="about__paragraph">{p}</p>
            ))}

            <p className="about__skills-label">{about.skillsLabel.toUpperCase()}</p>
            <div className="about__skills-list">
              {about.skills.map((skill) => (
                <span key={skill} className="about__skill-chip">{skill}</span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="about__stats">
            {about.stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <span className={`stat-card__value stat-card__value--${i + 1}`}>
                  {stat.value}
                </span>
                <span className="stat-card__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
