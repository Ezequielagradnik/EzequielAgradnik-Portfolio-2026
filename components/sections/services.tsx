"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { useLang } from "@/lib/i18n/context"
import { serviceKeys } from "@/lib/data"
import { EASE, SectionLabel } from "@/components/primitives"

const STEP_VH = 30 // scroll distance per service; keeps the pin short

// Pinned list: scrolling opens each service in turn. A click overrides the scroll until
// the next step, and clicking the open one closes it.
export default function Services() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const [auto, setAuto] = useState(0)
  const [manual, setManual] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(serviceKeys.length - 1, Math.floor(v * serviceKeys.length))
    if (next !== auto) {
      setAuto(next)
      setManual(null)
    }
  })

  const open = manual ?? auto

  return (
    <section
      id="services"
      ref={ref}
      className="relative border-t border-line"
      style={{ height: `${serviceKeys.length * STEP_VH + 100}vh` }}
    >
      <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden">
        <div className="container grid md:grid-cols-12 gap-8 md:gap-14 items-start">
          <div className="md:col-span-4">
            <SectionLabel index="04">{t.services.label}</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">{t.services.heading}</h2>
          </div>

          <div className="md:col-span-8 border-t border-line">
            {serviceKeys.map((key, i) => {
              const item = t.services.items[key]
              const isOpen = open === i
              const number = String(i + 1).padStart(2, "0")
              return (
                <div key={key} className="relative border-b border-line">
                  {/* Watermark number */}
                  <span
                    aria-hidden
                    className={`pointer-events-none select-none absolute end-0 top-1/2 -translate-y-1/2 font-display text-[5rem] md:text-[7rem] leading-none text-ink transition-opacity duration-500 ${
                      isOpen ? "opacity-[0.05]" : "opacity-0"
                    }`}
                  >
                    {number}
                  </span>

                  <button
                    onClick={() => setManual(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`service-${key}`}
                    className={`relative w-full grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[3.5rem_1fr_auto] items-center gap-4 py-3 md:py-5 text-start transition-colors duration-300 ${
                      isOpen ? "text-ink" : "text-ink/40 hover:text-ink"
                    }`}
                  >
                    <span className="font-mono text-[11px] tracking-[0.14em] tabular-nums">{number}</span>
                    <span className="font-display text-lg md:text-2xl lg:text-3xl leading-tight">{item.title}</span>
                    <PlusMinus open={isOpen} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`service-${key}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="ps-[2.5rem] md:ps-[3.5rem] pb-4 md:pb-6 pe-6 md:pe-10 max-w-xl text-sm md:text-base text-muted-foreground">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        {/* Step counter */}
        <div className="absolute bottom-0 inset-x-0">
          <div className="container flex items-center justify-between pb-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="tabular-nums">
              {String(auto + 1).padStart(2, "0")} / {String(serviceKeys.length).padStart(2, "0")}
            </span>
            <span>{t.skills.hint}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span aria-hidden className="relative block h-4 w-4 shrink-0">
      <span className="absolute top-1/2 inset-x-0 h-px -translate-y-1/2 bg-current" />
      <span
        className={`absolute left-1/2 inset-y-0 w-px -translate-x-1/2 bg-current transition-transform duration-300 ease-out ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  )
}
