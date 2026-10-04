import { Link } from 'react-router-dom'
import { ArrowLeft, Play, ExternalLink } from 'lucide-react'
import './NerdearlaFavorites.css'

const TALKS = [
  {
    id: 'ZlOj81626oU',
    title: 'Diseñar con datos disminuir la incertidumbre',
    speaker: 'Fernanda Lobo',
    info: 'https://nerdearla.com/argentina/schedule/disenar-con-datos-disminuir-la-incertidumbre/',
  },
  {
    id: 'EoGl6PSLCvQ',
    title: 'La cultura se come a la estrategia en el desayuno (y hoy se queda con hambre)',
    speaker: 'Maximiliano Ferreyra',
    info: 'https://nerdearla.com/argentina/schedule/la-cultura-se-come-a-la-estrategia-en-el-desayuno-y-hoy-se-queda-con-hambre/',
  },
  {
    id: 'jjheLyrTG4Y',
    title: 'El futuro para los devs',
    speaker: 'Midu',
    info: 'https://nerdearla.com/argentina/schedule/el-futuro-para-los-devs/',
  },
  {
    id: 'yoLLCQ8sB7k',
    title: 'Todo para ayer, nada para mañana',
    speaker: 'José Ignacio Ramirez',
    info: 'https://nerdearla.com/argentina/schedule/todo-para-ayer-nada-para-manana/',
  },
  {
    id: '8ZaSS6NPct4',
    title: 'From prompt hell to SKILL.md',
    speaker: 'Frédéric Harper',
    info: 'https://nerdearla.com/speakers/frederic-harper/',
  },
  {
    id: 'vbvpVEBnt8s',
    title: 'Agent Ontology 101: Enseñándole contexto a la IA mediante una capa semántica.',
    speaker: 'Aylin Diaz, Mateo Garcia',
    info: 'https://nerdearla.com/argentina/schedule/agent-ontology-101-ensenandole-contexto-a-la-ia-mediante-una-capa-semantica/',
  },
  {
    id: '0d3eHIWLGr0',
    title: 'En tiempos de IA: ¿Alguien quiere pensar en los Tech Leads?',
    speaker: 'Maximiliano Britez',
    info: 'https://nerdearla.com/argentina/schedule/en-tiempos-de-ia-alguien-quiere-pensar-en-los-tech-leads/',
  },
  {
    id: 'RNMzyrnfNV0',
    title: 'La deuda técnica de las conversaciones que no se tienen',
    speaker: 'Miriam Frias',
    info: 'https://nerdearla.com/argentina/schedule/la-deuda-tecnica-de-las-conversaciones-que-no-se-tienen/',
  },
]

export default function NerdearlaFavorites() {
  return (
    <div className="links-page nf-page">
      <div className="links-bg-blob links-bg-blob--1" />
      <div className="links-bg-blob links-bg-blob--2" />

      <main className="nf-container">
        <Link to="/links" className="nf-back">
          <ArrowLeft size={16} />
          Links
        </Link>

        {/* Header */}
        <header className="nf-header">
          <span className="nf-eyebrow">Nerdearla 2026</span>
          <h1 className="nf-title gradient-text">Mis favoritos</h1>
          <p className="nf-intro">
            Las {TALKS.length} charlas que más me gustaron de esta edición.
          </p>
        </header>

        {/* Talk cards */}
        <ol className="nf-list">
          {TALKS.map((talk, i) => (
            <li key={talk.id} className="nf-card">
              <div className="nf-thumb">
                <img
                  src={`https://i.ytimg.com/vi/${talk.id}/mqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  width="320"
                  height="180"
                />
                <span className="nf-play" aria-hidden="true">
                  <Play size={14} fill="currentColor" />
                </span>
              </div>

              <div className="nf-body">
                <span className="nf-number" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="nf-talk-title">
                  <a
                    href={`https://www.youtube.com/watch?v=${talk.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nf-talk-link"
                  >
                    {talk.title}
                  </a>
                </h2>
                <p className="nf-speaker">{talk.speaker}</p>
                <a
                  href={talk.info}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nf-info"
                  aria-label={`${talk.title} en nerdearla.com`}
                >
                  nerdearla.com
                  <ExternalLink size={12} />
                </a>
              </div>
            </li>
          ))}
        </ol>

        {/* Footer */}
        <p className="links-footer">
          <a href="https://marilau.tech" className="links-footer-brand">
            marilau.tech
          </a>
        </p>
      </main>
    </div>
  )
}
