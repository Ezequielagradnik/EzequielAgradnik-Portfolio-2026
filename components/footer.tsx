"use client"

import { useLang } from "@/lib/i18n/context"
import { useBase } from "@/lib/base"

const intlLocale = { en: "en-GB", es: "es-AR", he: "he-IL" } as const

export default function Footer() {
  const { t, locale } = useLang()
  const base = useBase()
  const built = process.env.NEXT_PUBLIC_BUILD_DATE
  const updated = built
    ? new Intl.DateTimeFormat(intlLocale[locale], { day: "numeric", month: "short", year: "numeric" }).format(
        new Date(built),
      )
    : null

  return (
    <footer className="bg-ink text-bone/40 border-t border-bone/10">
      <div className="container py-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em]">
        <p className="flex items-center gap-3">
          <span>{t.footer.made.replace("{city}", t.places[base.key].city)}</span>
          <span aria-hidden>·</span>
          <span>{new Date().getFullYear()}</span>
        </p>
        {updated && (
          <p>
            {t.footer.updated} {updated}
          </p>
        )}
      </div>
    </footer>
  )
}
