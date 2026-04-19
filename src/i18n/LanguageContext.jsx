import { createContext, useContext, useState } from 'react'
import es from './es'
import en from './en'

const translations = { es, en }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('ml-lang') || 'es'
  )

  const setLang = (l) => {
    localStorage.setItem('ml-lang', l)
    setLangState(l)
  }

  const toggleLang = () =>
    setLang(lang === 'es' ? 'en' : 'es')

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, content: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
