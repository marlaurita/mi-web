import { useLanguage } from '../../i18n/LanguageContext'
import { SectionLabel } from '../About/About'
import './Mentoring.css'

export default function Mentoring() {
  const { content } = useLanguage()
  const { mentoring } = content

  const handleContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="mentoring" className="mentoring">
      <div className="mentoring__inner">
        <div className="mentoring__header">
          <SectionLabel>{mentoring.sectionLabel}</SectionLabel>
          <h2 className="mentoring__title">{mentoring.title}</h2>
          <p className="mentoring__description">{mentoring.description}</p>
        </div>

        <div className="mentoring__plans">
          {mentoring.plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} onCta={handleContact} popularBadge={mentoring.popularBadge} />
          ))}
        </div>

        <div className="mentoring__note">
          <span className="mentoring__note-text">{mentoring.note} </span>
          <button className="mentoring__note-cta" onClick={handleContact}>
            {mentoring.noteCta}
          </button>
        </div>
      </div>
    </section>
  )
}

function PlanCard({ plan, onCta, popularBadge }) {
  return (
    <div className={`plan-card${plan.highlighted ? ' plan-card--highlighted' : ''}`}>
      {plan.highlighted && (
        <div className="plan-card__badge">{popularBadge.toUpperCase()}</div>
      )}

      <h3 className="plan-card__name">{plan.name}</h3>

      <div className="plan-card__price">
        <span className="plan-card__price-value">{plan.price}</span>
        {plan.period && (
          <span className="plan-card__price-period">{plan.period}</span>
        )}
      </div>

      <p className="plan-card__description">{plan.description}</p>

      <ul className="plan-card__features">
        {plan.features.map((f, i) => (
          <li key={i} className="plan-card__feature">
            <span className="plan-card__feature-check">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button className="plan-card__cta" onClick={onCta}>
        {plan.cta}
      </button>
    </div>
  )
}
