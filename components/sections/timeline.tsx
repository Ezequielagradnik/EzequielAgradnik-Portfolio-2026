"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useSpring } from "framer-motion"
import { useLang } from "@/lib/i18n/context"
import { experience } from "@/lib/data"
import { Reveal, SectionLabel, Stagger, StaggerItem } from "@/components/primitives"

export default function Timeline() {
  const { t } = useLang()
  const listRef = useRef<HTMLOListElement>(null)
  // The ink line draws itself as the list scrolls through the viewport.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] })
  const drawn = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 })

  return (
    <section id="experience" className="py-28 md:py-40 border-t border-line">
      <div className="container">
        <Reveal>
          <SectionLabel index="02">{t.timeline.label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
            {t.timeline.heading}
          </h2>
        </Reveal>

        <div className="relative mt-16 ps-7 md:ps-12">
          <div aria-hidden className="absolute start-0 top-0 bottom-0 w-px bg-line" />
          <motion.div
            aria-hidden
            style={{ scaleY: drawn }}
            className="absolute start-0 top-0 bottom-0 w-px bg-ink origin-top"
          />

          <Stagger>
            <ol ref={listRef}>
              {experience.map((item) => {
                const active = item.to === null
                const period = active
                  ? `${item.from} — ${t.timeline.present}`
                  : item.from === item.to
                    ? item.from
                    : `${item.from} — ${item.to}`
                return (
                  <StaggerItem key={item.company}>
                    <li className="group relative grid grid-cols-[1fr_auto] md:grid-cols-[9rem_1fr_auto] gap-x-6 gap-y-1 items-center py-6 border-b border-line">
                      {active && (
                        <span
                          aria-hidden
                          className="absolute top-1/2 -translate-y-1/2 -start-7 md:-start-12 -translate-x-1/2 rtl:translate-x-1/2 h-[5px] w-[5px] rounded-full bg-ink"
                        />
                      )}

                      <p className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground tabular-nums">
                        {period}
                      </p>

                      <div className="transition-transform duration-500 ease-out group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                        <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-[-0.01em]">
                          {item.company}
                        </h3>
                        <p className="mt-1 text-sm md:text-base text-muted-foreground">
                          {[
                            t.timeline.roles[item.role as keyof typeof t.timeline.roles] ?? item.role,
                            item.type ? t.timeline.types[item.type] : null,
                            item.location,
                          ]
                            .filter(Boolean)
                            .map((part, i) => (
                              <span key={i}>
                                {i > 0 && (
                                  <span aria-hidden className="mx-2 opacity-50">
                                    ·
                                  </span>
                                )}
                                {part}
                              </span>
                            ))}
                        </p>
                      </div>

                      <div className="relative h-11 w-11 shrink-0 rounded-md border border-line bg-white p-1.5 flex items-center justify-center">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={item.company}
                            fill
                            sizes="44px"
                            className={`object-contain ${item.company === "Zenda" ? "scale-[1.4]" : "p-1.5"}`}
                          />
                        ) : (
                          <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground">
                            {item.initials}
                          </span>
                        )}
                      </div>
                    </li>
                  </StaggerItem>
                )
              })}
            </ol>
          </Stagger>
        </div>
      </div>
    </section>
  )
}
