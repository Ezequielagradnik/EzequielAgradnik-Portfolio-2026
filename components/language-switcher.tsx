"use client"

import { useLang } from "@/lib/i18n/context"
import type { Locale } from "@/lib/i18n/translations"

const options: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "he", label: "HE" },
]

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLang()

  return (
    <div className={`inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] ${className}`}>
      {options.map((option, i) => {
        const active = locale === option.code
        return (
          <span key={option.code} className="inline-flex items-center gap-3">
            {i > 0 && (
              <span aria-hidden className="opacity-30">
                /
              </span>
            )}
            <button
              onClick={() => setLocale(option.code)}
              aria-label={`Switch language to ${option.label}`}
              aria-pressed={active}
              className={`transition-opacity duration-300 ${active ? "opacity-100" : "opacity-40 hover:opacity-100"}`}
            >
              {option.label}
            </button>
          </span>
        )
      })}
    </div>
  )
}
