import { createContext, useContext, useState } from 'react'
import es from './es'
import en from './en'

const translations = { es, en }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem('ml-lang') || 'es'
  )

  const toggleLang = () =>
    setLang((current) => {
      const next = current === 'es' ? 'en' : 'es'
      localStorage.setItem('ml-lang', next)
      return next
    })

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, content: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
