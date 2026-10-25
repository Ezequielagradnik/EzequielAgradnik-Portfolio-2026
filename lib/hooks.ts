"use client"

import { useEffect, useState } from "react"

// "14:32" and "GMT-3" for a time zone, refreshed every 15s. Empty until mounted so SSR and client match.
export function useLocalTime(timeZone: string) {
  const [state, setState] = useState({ time: "", gmt: "" })

  useEffect(() => {
    const clock = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false })
    const offset = new Intl.DateTimeFormat("en-GB", { timeZone, timeZoneName: "shortOffset" })
    const tick = () => {
      const now = new Date()
      const gmt = offset.formatToParts(now).find((p) => p.type === "timeZoneName")?.value ?? ""
      setState({ time: clock.format(now), gmt })
    }
    tick()
    const id = setInterval(tick, 15_000)
    return () => clearInterval(id)
  }, [timeZone])

  return state
}

// Counts from 0 to `target` over `duration` ms once `start` flips to true.
export function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target)
      return
    }
    let frame = 0
    const t0 = performance.now()
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 4)
      setValue(Math.round(target * eased))
      if (p < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [start, target, duration])

  return value
}

// Copies text; `copied` stays true for `resetMs`.
export function useCopy(resetMs = 1600) {
  const [copied, setCopied] = useState(false)

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), resetMs)
    } catch {
      // Clipboard unavailable (insecure context): fall through, the mailto link still works.
    }
  }

  return { copied, copy }
}
