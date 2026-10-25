"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { EASE } from "@/components/primitives"
import { lockScroll } from "@/components/smooth-scroll"

const KEY = "ea-intro-seen"

// True once the curtain has played this session (or motion is reduced), so the hero
// can start its own entrance without waiting for it.
export function introWasSeen() {
  if (typeof window === "undefined") return false
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true
  try {
    return sessionStorage.getItem(KEY) === "1"
  } catch {
    return false
  }
}

// One-second curtain on the first visit of the session: the name rises, the curtain lifts.
export default function Intro() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (introWasSeen()) {
      setShow(false)
      return
    }
    lockScroll(true)
    const id = setTimeout(() => {
      setShow(false)
      lockScroll(false)
      try {
        sessionStorage.setItem(KEY, "1")
      } catch {}
    }, 1250)
    return () => {
      clearTimeout(id)
      lockScroll(false)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="fixed inset-0 z-[100] bg-bone flex items-center justify-center"
          aria-hidden
        >
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="block font-display text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-tight"
            >
              Ezequiel Agradnik
            </motion.span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
