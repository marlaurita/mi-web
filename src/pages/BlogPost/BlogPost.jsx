import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'

const SITE_URL = 'https://marilau.tech'
const VALID_LANGS = ['es', 'en']
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './BlogPost.css'

const tagClass = {
  career:     'post-page__tag--career',
  mentoring:  'post-page__tag--mentoring',
  community:  'post-page__tag--community',
  softskills: 'post-page__tag--mentoring',
}

function ShareButtons({ url, title }) {
  const encoded = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const links = [
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
      label: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
      ),
    },
    {
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
      label: 'X',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: `https://wa.me/?text=${encodedTitle}%20${encoded}`,
      label: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      ),
    },
  ]

  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="post-page__share-buttons">
      {links.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`post-page__share-btn post-page__share-btn--${label.toLowerCase()}`}
          aria-label={label}
        >
          {icon}
        </a>
      ))}
      <button
        onClick={handleCopy}
        className={`post-page__share-btn post-page__share-btn--copy ${copied ? 'post-page__share-btn--copied' : ''}`}
        aria-label="Copiar enlace"
      >
        {copied ? (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
          </svg>
        )}
      </button>
    </div>
  )
}

function CommentsInvite({ url, blog }) {
  if (!url) return null
  return (
    <div className="post-page__comments">
      <div className="post-page__comments-icon" aria-hidden>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 6.5A2.5 2.5 0 0 0 18.5 4h-13A2.5 2.5 0 0 0 3 6.5v9A2.5 2.5 0 0 0 5.5 18H7v2.5a.5.5 0 0 0 .8.4L12 18h6.5A2.5 2.5 0 0 0 21 15.5v-9z" />
        </svg>
      </div>
      <div className="post-page__comments-body">
        <p className="post-page__comments-title">{blog.commentTitle}</p>
        <p className="post-page__comments-text">{blog.commentText}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="post-page__comments-cta"
        >
          {blog.commentCta}
        </a>
      </div>
    </div>
  )
}

function ContentBlock({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="post-page__h2">{block.text}</h2>
    case 'h3':
      return <h3 className="post-page__h3">{block.text}</h3>
    case 'paragraph':
      return <p className="post-page__paragraph">{block.text}</p>
    case 'list':
      return (
        <ul className="post-page__list">
          {block.items.map((item, i) => (
            <li key={i} className="post-page__list-item">
              <span className="post-page__list-bullet">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    default:
      return null
  }
}

export default function BlogPost() {
  const { lang: urlLang, slug } = useParams()
  const navigate = useNavigate()
  const { lang, setLang, content } = useLanguage()
  const { blog } = content

  const post = blog.posts.find((p) => p.slug === slug)

  // Sync language from URL param
  useEffect(() => {
    if (VALID_LANGS.includes(urlLang) && urlLang !== lang) {
      setLang(urlLang)
    }
  }, [urlLang])

  // When lang changes (e.g. via Navbar toggle), update the URL
  useEffect(() => {
    if (VALID_LANGS.includes(urlLang) && lang !== urlLang) {
      navigate(`/${lang}/blog/${slug}`, { replace: true })
    }
  }, [lang])

  // Canonical + hreflang tags
  useEffect(() => {
    const upsert = (sel, attrs) => {
      let el = document.querySelector(sel)
      if (!el) {
        el = document.createElement('link')
        document.head.appendChild(el)
      }
      Object.assign(el, attrs)
      return el
    }

    upsert('link[rel="canonical"]', {
      rel: 'canonical',
      href: `${SITE_URL}/${urlLang}/blog/${slug}`,
    })
    VALID_LANGS.forEach((l) =>
      upsert(`link[rel="alternate"][hreflang="${l}"]`, {
        rel: 'alternate',
        hreflang: l,
        href: `${SITE_URL}/${l}/blog/${slug}`,
      })
    )

    return () => {
      document.querySelector('link[rel="canonical"]')?.remove()
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())
    }
  }, [urlLang, slug])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  return (
    <>
      <Navbar />
      <main className="post-page">
        <div className="post-page__bg-blob" aria-hidden />
        <div className="post-page__inner">

          {/* Back */}
          <button className="post-page__back" onClick={() => navigate(-1)}>
            <span className="post-page__back-arrow">←</span>
            {blog.backLabel}
          </button>

          {!post ? (
            <div className="post-page__not-found">
              <p className="post-page__not-found-title">Artículo no encontrado</p>
              <p className="post-page__not-found-text">El artículo que buscas no existe o fue movido.</p>
              <button className="post-page__not-found-btn" onClick={() => navigate('/')}>
                Volver al inicio
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <header className="post-page__header">
                <div className="post-page__meta">
                  <span className={`post-page__tag ${tagClass[post.tagKey] ?? ''}`}>
                    {post.tag}
                  </span>
                  <span className="post-page__date">{post.date}</span>
                  <span className="post-page__read-time">{post.readTime} {blog.readTime}</span>
                </div>
                <h1 className="post-page__title">{post.title}</h1>
                <p className="post-page__excerpt">{post.excerpt}</p>
              </header>

              {/* Body */}
              {post.content && post.content.length > 0 ? (
                <div className="post-page__content">
                  {post.content.map((block, i) => (
                    <ContentBlock key={i} block={block} />
                  ))}
                </div>
              ) : (
                <div className="post-page__empty">
                  <div className="post-page__empty-icon">✍️</div>
                  <p className="post-page__empty-text">{blog.comingSoon}</p>
                </div>
              )}

              {/* Comentarios dev.to */}
              <CommentsInvite url={post.devToUrl} blog={blog} />

              {/* Footer del post */}
              <footer className="post-page__footer">
                <div className="post-page__author">
                  <div className="post-page__author-avatar">
                    <img src="/profile.png" alt="María Laura" />
                  </div>
                  <div>
                    <p className="post-page__author-name">María Laura</p>
                    <p className="post-page__author-role">marilau.tech</p>
                  </div>
                </div>
                <div className="post-page__share">
                  <span className="post-page__share-label">{blog.shareLabel}</span>
                  <ShareButtons
                    url={`${SITE_URL}/${urlLang}/blog/${slug}`}
                    title={post.title}
                  />
                </div>
              </footer>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
