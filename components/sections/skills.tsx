"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { useLang } from "@/lib/i18n/context"
import { skills } from "@/lib/data"
import { EASE, SectionLabel } from "@/components/primitives"

const categories = Object.keys(skills)
const STEP_VH = 30 // scroll distance per category; keeps the pin short

// Pinned section: the viewport locks while the scroll steps through each category.
export default function Skills() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(categories.length - 1, Math.floor(v * categories.length))
    if (next !== active) setActive(next)
  })

  const category = categories[active]
  const label = t.skills.categories[category as keyof typeof t.skills.categories] ?? category

  return (
    <section
      id="stack"
      ref={ref}
      className="relative border-t border-line"
      style={{ height: `${categories.length * STEP_VH + 100}vh` }}
    >
      <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden">
        <div className="container">
          <SectionLabel index="03">{t.skills.label}</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">{t.skills.heading}</h2>

          <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-14 items-start">
            {/* Category index: desktop */}
            <ol className="hidden md:block md:col-span-4 border-t border-line">
              {categories.map((cat, i) => {
                const on = i === active
                return (
                  <li
                    key={cat}
                    onMouseEnter={() => setActive(i)}
                    className={`flex items-center justify-between gap-4 py-3.5 border-b border-line transition-colors duration-300 cursor-default ${
                      on ? "text-ink" : "text-ink/30"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`h-[5px] w-[5px] rounded-full bg-ink transition-opacity duration-300 ${on ? "opacity-100" : "opacity-0"}`}
                      />
                      {t.skills.categories[cat as keyof typeof t.skills.categories] ?? cat}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.14em] tabular-nums">
                      {String(skills[cat].length).padStart(2, "0")}
                    </span>
                  </li>
                )
              })}
            </ol>

            {/* Active category */}
            <div className="md:col-span-8 min-h-[22rem] md:min-h-[26rem]">
              <p className="md:hidden font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-4">
                <span className="tabular-nums">{String(active + 1).padStart(2, "0")}</span>
                <span aria-hidden className="mx-2">
                  /
                </span>
                <span className="tabular-nums">{String(categories.length).padStart(2, "0")}</span>
                <span aria-hidden className="mx-3">
                  —
                </span>
                {label}
              </p>

              <AnimatePresence mode="wait">
                <motion.ul
                  key={category}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.05 } },
                    exit: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
                  }}
                  className="font-display text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.15]"
                  dir="ltr"
                >
                  {skills[category].map((name) => (
                    <motion.li
                      key={name}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                        exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: EASE } },
                      }}
                    >
                      {name}
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Step counter */}
        <div className="absolute bottom-0 inset-x-0">
          <div className="container flex items-center justify-between pb-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
            </span>
            <span>{t.skills.hint}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
