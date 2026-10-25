"use client"

import { useEffect, type ReactNode } from "react"
import Lenis from "lenis"

let lenis: Lenis | null = null

// Scrolls to an element through Lenis when it's running, so programmatic jumps
// get the same inertia as the wheel; falls back to native smooth scroll.
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenis) lenis.scrollTo(el, { duration: 1.4 })
  else el.scrollIntoView({ behavior: "smooth" })
}

export function lockScroll(locked: boolean) {
  if (!lenis) {
    document.documentElement.style.overflow = locked ? "hidden" : ""
    return
  }
  if (locked) lenis.stop()
  else lenis.start()
}

// Inertia scroll. Skipped entirely when the user prefers reduced motion.
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis?.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis?.destroy()
      lenis = null
    }
  }, [])

  return <>{children}</>
}
