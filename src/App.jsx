import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar    from './components/Navbar/Navbar'
import Hero      from './components/Hero/Hero'
import About     from './components/About/About'
import Mentoring from './components/Mentoring/Mentoring'
import Blog      from './components/Blog/Blog'
import Community from './components/Community/Community'
import Contact   from './components/Contact/Contact'
import Footer    from './components/Footer/Footer'
import BlogPost  from './pages/BlogPost/BlogPost'

function Home() {
  return (
    <>
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/blog/:slug"  element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}
