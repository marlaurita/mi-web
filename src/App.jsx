import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useLanguage } from './i18n/LanguageContext'
import Navbar    from './components/Navbar/Navbar'
import Hero      from './components/Hero/Hero'
import About     from './components/About/About'
import Mentoring from './components/Mentoring/Mentoring'
import Blog      from './components/Blog/Blog'
import Community from './components/Community/Community'
import Contact   from './components/Contact/Contact'
import Footer    from './components/Footer/Footer'
import BlogPost  from './pages/BlogPost/BlogPost'
import Links     from './pages/Links/Links'

function ScrollToHash() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 100)
      }
    }
    tryScroll()
  }, [hash])
  return null
}

function Home() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mentoring />
        <Blog />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function BlogPostRedirect() {
  const { slug } = useParams()
  const { lang } = useLanguage()
  return <Navigate to={`/${lang}/blog/${slug}`} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                    element={<Home />} />
        <Route path="/:lang/blog/:slug"    element={<BlogPost />} />
        <Route path="/blog/:slug"          element={<BlogPostRedirect />} />
        <Route path="/links"               element={<Links />} />
      </Routes>
    </BrowserRouter>
  )
}
