"use client"

import { useLang } from "@/lib/i18n/context"
import { useLocalTime, useCopy } from "@/lib/hooks"
import { useBase } from "@/lib/base"
import { links } from "@/lib/data"
import { ArrowUpRight, Reveal, SectionLabel, Stagger, StaggerItem } from "@/components/primitives"

// The one inverted block on the page: ink canvas, bone text.
export default function Contact() {
  const { t } = useLang()
  const { copied, copy } = useCopy()
  const base = useBase()
  const { time } = useLocalTime(base.timeZone)

  const rows = [
    { label: t.contact.links.call, href: links.calendly },
    { label: t.contact.links.whatsapp, href: links.whatsapp },
    { label: t.contact.links.github, href: links.github },
    { label: t.contact.links.linkedin, href: links.linkedin },
  ]

  return (
    <section id="contact" className="bg-ink text-bone py-28 md:py-40">
      <div className="container">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/50">
            <span className="me-3">05</span>
            <span aria-hidden className="me-3">
              —
            </span>
            {t.contact.label}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.92] tracking-[-0.03em]">
            {t.contact.heading}
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl text-bone/70 max-w-xl text-balance">{t.contact.copy}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <button
                onClick={() => copy(links.email)}
                className="group mt-12 block text-start"
                aria-live="polite"
              >
                <span className="block font-display text-[clamp(1.6rem,4.5vw,3.5rem)] leading-tight tracking-[-0.02em] break-all transition-opacity duration-300 group-hover:opacity-80">
                  {links.email}
                </span>
                <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.18em] text-bone/50 transition-colors duration-300 group-hover:text-bone">
                  {copied ? t.contact.copied : t.contact.copyEmail}
                </span>
              </button>
            </Reveal>
          </div>

          <Stagger className="md:col-span-5">
            <ul className="border-t border-bone/15">
              {rows.map((row) => (
                <StaggerItem key={row.href}>
                  <li>
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 py-5 border-b border-bone/15 text-base md:text-lg transition-colors duration-300 hover:text-bone/70"
                    >
                      {row.label}
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
                    </a>
                  </li>
                </StaggerItem>
              ))}
            </ul>

            <Reveal delay={0.3}>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/40 flex items-center gap-3">
                <span>{t.contact.localTime}</span>
                <span aria-hidden>·</span>
                <span className="tabular-nums">{time || "--:--"}</span>
                <span aria-hidden>·</span>
                <span>{t.places[base.key].city}</span>
              </p>
            </Reveal>
          </Stagger>
        </div>
      </div>
    </section>
  )
}
