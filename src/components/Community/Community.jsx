import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { SectionLabel } from '../About/About'
import { talks, events, mentorship } from '../../data/community'
import './Community.css'

function formatDate(dateStr, lang) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString(lang === 'es' ? 'es-CL' : 'en-US', {
    year: 'numeric',
    month: 'long',
  })
}

function ActivityCard({ item, lang }) {
  const t = item[lang]
  return (
    <div className="comm-card">
      <div className="comm-card__img-wrap">
        <img src={item.image} alt={t.title} className="comm-card__img" loading="lazy" />
      </div>
      <div className="comm-card__body">
        <span className="comm-card__date">{formatDate(item.date, lang)}</span>
        <h3 className="comm-card__title">{t.title}</h3>
        <p className="comm-card__desc">{t.description}</p>
        {item.link && t.linkLabel && (
          <a
            href={item.link}
            className="comm-card__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.linkLabel} →
          </a>
        )}
      </div>
    </div>
  )
}

const PAGE_SIZE = 6

export default function Community() {
  const { content, lang } = useLanguage()
  const { community } = content
  const [activeTab, setActiveTab] = useState('talks')
  const [page, setPage] = useState(0)

  const tabs = [
    { id: 'talks',      label: community.tabTalks,      items: talks },
    { id: 'events',     label: community.tabEvents,     items: events },
    { id: 'mentorship', label: community.tabMentorship, items: mentorship },
  ]

  const activeItems = tabs.find(t => t.id === activeTab).items
  const totalPages  = Math.ceil(activeItems.length / PAGE_SIZE)
  const pageItems   = activeItems.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  function switchTab(id) {
    setActiveTab(id)
    setPage(0)
  }

  return (
    <section id="community" className="community">
      <div className="community__inner">

        <div className="community__header">
          <SectionLabel>{community.sectionLabel}</SectionLabel>
          <h2 className="community__title">{community.title}</h2>
          <p className="community__description">{community.description}</p>
        </div>

        {/* Tabs */}
        <div className="community__tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`comm-tab${activeTab === tab.id ? ' comm-tab--active' : ''}`}
              onClick={() => switchTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="community__grid">
          {pageItems.map(item => (
            <ActivityCard key={item.id} item={item} lang={lang} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="community__pagination">
            <button
              className="comm-page-btn"
              onClick={() => setPage(p => p - 1)}
              disabled={page === 0}
              aria-label="Página anterior"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`comm-page-dot${page === i ? ' comm-page-dot--active' : ''}`}
                onClick={() => setPage(i)}
                aria-label={`Página ${i + 1}`}
              />
            ))}

            <button
              className="comm-page-btn"
              onClick={() => setPage(p => p + 1)}
              disabled={page === totalPages - 1}
              aria-label="Página siguiente"
            >
              →
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
