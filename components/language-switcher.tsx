"use client"

import { useLang } from "@/lib/i18n/context"
import type { Locale } from "@/lib/i18n/translations"

const options: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "he", label: "HE" },
]

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLang()

  return (
    <div className="inline-flex items-center gap-0.5 rounded-full bg-gray-900/60 border border-gray-700 p-0.5 backdrop-blur-sm">
      {options.map((option) => {
        const active = locale === option.code
        return (
          <button
            key={option.code}
            onClick={() => setLocale(option.code)}
            aria-label={`Switch language to ${option.label}`}
            aria-pressed={active}
            className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors ${
              active
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
