"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useLang } from "@/lib/i18n/context"
import { useLocalTime, useCountUp } from "@/lib/hooks"
import { useBase } from "@/lib/base"
import { ArrowDown, EASE, MaskedLines } from "@/components/primitives"
import { introWasSeen } from "@/components/intro"
import { scrollToId } from "@/components/smooth-scroll"

const MAX_NAME_PX = 240
const MIN_NAME_PX = 34
const NAME_FILL = 0.88 // share of the available width the name takes

export default function Hero() {
  const { t } = useLang()
  const base = useBase()
  const { time } = useLocalTime(base.timeZone)
  // Wait for the intro curtain on first visit; start right away afterwards.
  const [delay, setDelay] = useState<number | null>(null)
  const [count, setCount] = useState(false)

  useEffect(() => {
    const d = introWasSeen() ? 0.1 : 1.3
    setDelay(d)
    const id = setTimeout(() => setCount(true), (d + 0.7) * 1000)
    return () => clearTimeout(id)
  }, [])

  // Name on one line: size it to the width available, re-measured on resize and font load.
  const nameRef = useRef<HTMLHeadingElement>(null)
  const probeRef = useRef<HTMLSpanElement>(null)
  const [nameSize, setNameSize] = useState<number | null>(null)

  useEffect(() => {
    const h1 = nameRef.current
    const probe = probeRef.current
    if (!h1 || !probe) return 
    
    const fit = () => {
      const widthAt100 = probe.offsetWidth // probe renders the name at 100px
      if (!widthAt100) return
      // h1.clientWidth is the content width inside the frame's padding
      const px = (h1.clientWidth / widthAt100) * 100 * NAME_FILL
      setNameSize(Math.max(MIN_NAME_PX, Math.min(MAX_NAME_PX, px)))
    }

    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(h1)
    const fonts = document.fonts
    fonts?.ready.then(fit)
    fonts?.addEventListener("loadingdone", fit)
    return () => {
      ro.disconnect()
      fonts?.removeEventListener("loadingdone", fit)
    }
  }, [t.hero.name])

  const play = delay !== null && nameSize !== null
  const d = delay ?? 0
  const fade = (extra: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: play ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    transition: { duration: 0.8, ease: EASE, delay: d + extra },
  })

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-24">
      {/* Place and live time, above the name */}
      <motion.p
        {...fade(0.5)}
        className="container font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground flex justify-center items-center gap-x-3"
      >
        <span>{t.places[base.key].city}</span>
        <span aria-hidden>·</span>
        <span className="tabular-nums min-w-[5ch]">{time || "--:--"}</span>
      </motion.p>

      {/* Full-bleed so the name can use the whole viewport width */}
      <div className="mt-6 md:mt-8 px-6 md:px-12 text-center">
        <span
          ref={probeRef}
          aria-hidden
          className="absolute invisible whitespace-nowrap font-display leading-none"
          style={{ fontSize: 100 }}
        >
          {t.hero.name}
        </span>
        <h1
          ref={nameRef}
          className="font-display leading-[0.9] text-ink whitespace-nowrap"
          style={{ fontSize: nameSize ?? MIN_NAME_PX }}
        >
          <MaskedLines lines={[t.hero.name]} delay={d} play={play} />
        </h1>
      </div>

      <motion.p
        {...fade(0.35)}
        className="container mt-6 md:mt-8 text-center text-lg md:text-2xl text-ink-soft tracking-[-0.01em]"
      >
        {t.hero.role}
      </motion.p>

      {/* Stat blocks */}
      <motion.div {...fade(0.6)} className="container mt-16 md:mt-24">
        <dl className="grid grid-cols-1 sm:grid-cols-3 border-y border-line divide-y sm:divide-y-0 sm:divide-x rtl:divide-x-reverse divide-line">
          {t.hero.stats.map((stat) => (
            <Stat key={stat.caption} {...stat} start={count} />
          ))}
        </dl>
      </motion.div>

      <motion.button
        {...fade(1)}
        onClick={() => scrollToId("about")}
        className="absolute bottom-8 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-ink transition-colors"
        aria-label={t.hero.scroll}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{t.hero.scroll}</span>
        <ArrowDown className="w-3.5 h-3.5 breathe" />
      </motion.button>
    </section>
  )
}

function Stat({
  value,
  prefix,
  unit,
  caption,
  start,
}: {
  value: number
  prefix: string
  unit: string
  caption: string
  start: boolean
}) {
  const n = useCountUp(value, start)
  return (
    <div className="px-2 sm:px-8 md:px-10 py-7 md:py-9 text-start">
      <dd className="flex items-baseline gap-2">
        <span className="font-display text-4xl md:text-5xl leading-none tabular-nums">
          {prefix}
          {n}
        </span>
        {unit && <span className="text-lg md:text-xl text-muted-foreground">{unit}</span>}
      </dd>
      <dt className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{caption}</dt>
    </div>
  )
}
