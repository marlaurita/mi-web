import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { SectionLabel } from '../About/About'
import './Blog.css'

const tagClass = {
  career:    'post-tag--career',
  mentoring: 'post-tag--mentoring',
  community: 'post-tag--community',
}

export default function Blog() {
  const navigate = useNavigate()
  const { lang, content } = useLanguage()
  const { blog } = content

  return (
    <section id="blog" className="blog">
      <div className="blog__bg-blob" aria-hidden />

      <div className="blog__inner">
        <div className="blog__header">
          <div className="blog__header-left">
            <SectionLabel>{blog.sectionLabel}</SectionLabel>
            <h2 className="blog__title">{blog.title}</h2>
            <p className="blog__description">{blog.description}</p>
          </div>
          <button className="blog__cta-btn">{blog.ctaLabel} →</button>
        </div>

        <div className="blog__grid">
          {blog.posts.map((post, i) => (
            <article
              key={i}
              className={`post-card${post.content?.length ? ' post-card--linked' : ''}`}
              onClick={() => post.content?.length && navigate(`/${lang}/blog/${post.slug}`)}
              role={post.content?.length ? 'button' : undefined}
              tabIndex={post.content?.length ? 0 : undefined}
              onKeyDown={(e) => e.key === 'Enter' && post.content?.length && navigate(`/${lang}/blog/${post.slug}`)}
            >
              <div className="post-card__meta">
                <span className={`post-tag ${tagClass[post.tagKey] ?? 'post-tag--mentoring'}`}>
                  {post.tag}
                </span>
                <span className="post-card__date">{post.date}</span>
              </div>

              <h3 className="post-card__title">{post.title}</h3>
              <p className="post-card__excerpt">{post.excerpt}</p>

              <div className="post-card__footer">
                <span className="post-card__read-link">{blog.readArticle}</span>
                <span className="post-card__read-time">{post.readTime} {blog.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
