"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { translations, locales, type Locale, type Translation } from "./translations"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translation
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "portfolio-locale"

function isValidLocale(value: string | null): value is Locale {
  return value !== null && (locales as string[]).includes(value)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isValidLocale(stored)) {
      setLocaleState(stored)
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    document.documentElement.lang = locale
    document.documentElement.dir = locale === "he" ? "rtl" : "ltr"
  }, [locale, hydrated])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: translations[locale],
    isRTL: locale === "he",
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider")
  return ctx
}
