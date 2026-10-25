"use client"

import Image from "next/image"
import type { ReactNode } from "react"
import { useLang } from "@/lib/i18n/context"
import { useLocalTime } from "@/lib/hooks"
import { useBase } from "@/lib/base"
import { experience, now } from "@/lib/data"
import { Reveal, RichText, SectionLabel, Stagger, StaggerItem } from "@/components/primitives"

const card =
  "h-full rounded-xl border border-line bg-paper transition-shadow duration-200 hover:shadow-hairline"

// Asymmetric bento: a wide intro card, the photo beside it, four fact cards underneath.
export default function About() {
  const { t } = useLang()
  const base = useBase()
  const { time, gmt } = useLocalTime(base.timeZone)
  const current = now.flatMap((name) => experience.filter((item) => item.company === name))

  return (
    <section id="about" className="py-28 md:py-40">
      <div className="container">
        <Reveal>
          <SectionLabel index="01">{t.about.label}</SectionLabel>
        </Reveal>

        <Stagger className="mt-10 grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Intro */}
          <StaggerItem className="md:col-span-4 md:row-span-2">
            <div className={`${card} flex flex-col justify-between gap-12 p-8 md:p-12`}>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-balance max-w-[20ch]">
                {t.about.heading}
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground max-w-prose">
                <p>
                  <RichText text={t.about.p1} />
                </p>
                <p>
                  <RichText text={t.about.p2} />
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Photo */}
          <StaggerItem className="md:col-span-2 md:row-span-2">
            <div className="relative h-full aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden border border-line bg-white">
              <Image
                src="/images/ezequiel-profile.png"
                alt="Ezequiel Agradnik"
                fill
                sizes="(min-width: 768px) 33vw, 90vw"
                className="object-cover object-[50%_30%]"
                priority
              />
            </div>
          </StaggerItem>

          {/* Now */}
          <StaggerItem className="md:col-span-3">
            <div className={`${card} p-6 md:p-8`}>
              <CardLabel>{t.about.now}</CardLabel>
              <ul className="mt-4 divide-y divide-line">
                {current.map((item) => (
                  <li key={item.company} className="flex items-center justify-between gap-4 py-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink truncate">{item.company}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {t.timeline.roles[item.role as keyof typeof t.timeline.roles] ?? item.role}
                      </p>
                    </div>
                    <Tag tone="green">{t.about.active}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Education */}
          <StaggerItem className="md:col-span-3">
            <div className={`${card} flex flex-col p-6 md:p-8`}>
              <CardLabel>{t.about.study}</CardLabel>
              <p className="mt-4 font-display text-2xl md:text-3xl leading-tight">{t.about.degree}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{t.about.degreeFrom}</p>

              <dl className="mt-auto pt-8 grid grid-cols-2 divide-x rtl:divide-x-reverse divide-line border-t border-line">
                <div className="pt-5 pe-6">
                  <dd className="flex items-baseline gap-1.5">
                    <span className="font-display text-3xl md:text-4xl leading-none tabular-nums">{t.about.gpa}</span>
                    <span className="text-sm text-muted-foreground">{t.about.gpaLabel}</span>
                  </dd>
                  <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {t.about.honors}
                  </dt>
                </div>
                <div className="pt-5 ps-6">
                  <dd className="flex items-baseline gap-1.5">
                    <span className="font-display text-3xl md:text-4xl leading-none tabular-nums">{t.about.certs}</span>
                    <span className="text-sm text-muted-foreground">{t.about.certsLabel}</span>
                  </dd>
                  <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {t.about.certsCaption}
                  </dt>
                </div>
              </dl>
            </div>
          </StaggerItem>

          {/* Base */}
          <StaggerItem className="md:col-span-3">
            <div className={`${card} flex flex-col p-6 md:p-8`}>
              <CardLabel>{t.about.base}</CardLabel>
              <p className="mt-4 font-display text-2xl md:text-3xl leading-tight">{t.places[base.key].full}</p>
              <p className="mt-auto pt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-3">
                <span>{t.about.localTime}</span>
                <span aria-hidden>·</span>
                <span className="tabular-nums text-ink">{time || "--:--"}</span>
                <span aria-hidden>·</span>
                <span>{gmt || "GMT"}</span>
              </p>
            </div>
          </StaggerItem>

          {/* Off the keyboard */}
          <StaggerItem className="md:col-span-3">
            <div className={`${card} p-6 md:p-8`}>
              <CardLabel>{t.about.offline}</CardLabel>
              <ul className="mt-4 divide-y divide-line">
                {t.about.offlineItems.map((item, i) => (
                  <li key={item} className="flex items-center gap-4 py-3">
                    <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}

function CardLabel({ children }: { children: ReactNode }) {
  return <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{children}</p>
}

const tones = {
  green: "bg-[#EDF3EC] text-[#346538]",
  blue: "bg-[#E1F3FE] text-[#1F6C9F]",
  yellow: "bg-[#FBF3DB] text-[#956400]",
} as const

function Tag({ tone, children }: { tone: keyof typeof tones; children: ReactNode }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.05em] ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
