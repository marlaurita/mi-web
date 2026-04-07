import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './BlogPost.css'

const tagClass = {
  career:    'post-page__tag--career',
  mentoring: 'post-page__tag--mentoring',
  community: 'post-page__tag--community',
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
  const { slug } = useParams()
  const navigate = useNavigate()
  const { content } = useLanguage()
  const { blog } = content

  const post = blog.posts.find((p) => p.slug === slug)

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
                <span className="post-page__share">{blog.shareLabel}</span>
              </footer>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
