import { useLanguage } from '../../i18n/LanguageContext'
import { SectionLabel } from '../About/About'
import './Community.css'

export default function Community() {
  const { content } = useLanguage()
  const { community } = content

  return (
    <section id="community" className="community">
      <div className="community__inner">
        <div className="community__header">
          <SectionLabel>{community.sectionLabel}</SectionLabel>
          <h2 className="community__title">{community.title}</h2>
          <p className="community__description">{community.description}</p>
        </div>

        <div className="community__grid">
          {community.items.map((item, i) => (
            <div key={i} className="community-card">
              <div className="community-card__icon">{item.icon}</div>

              <div className="community-card__info">
                <h3 className="community-card__name">{item.name}</h3>
                <span className="community-card__role">{item.role}</span>
              </div>

              <p className="community-card__description">{item.description}</p>

              <a href={item.link} className="community-card__link">
                {item.linkLabel} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
