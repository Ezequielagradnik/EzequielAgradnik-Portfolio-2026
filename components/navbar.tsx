"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { useLang } from "@/lib/i18n/context"
import LanguageSwitcher from "@/components/language-switcher"
import { EASE } from "@/components/primitives"
import { lockScroll, scrollToId } from "@/components/smooth-scroll"

// Small floating pill: name, links, language. Frosted bone so it reads over both the
// light canvas and the inverted contact section.
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useLang()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  const links = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.contact, href: "#contact" },
  ]

  useEffect(() => {
    lockScroll(open)
    return () => lockScroll(false)
  }, [open])

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    scrollToId(href.slice(1))
  }

  return (
    <>
      {/* Scroll progress hairline */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed top-0 inset-x-0 z-50 h-px bg-ink origin-left rtl:origin-right"
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 1.2 }}
        className="fixed top-3 md:top-4 inset-x-0 z-50 px-4 pointer-events-none"
      >
        <nav className="pointer-events-auto mx-auto flex h-12 max-w-3xl items-center justify-between gap-4 rounded-full border border-line bg-white ps-5 pe-3 shadow-hairline">
          <a
            href="#top"
            onClick={(e) => go(e, "#top")}
            className="text-[15px] font-medium tracking-[-0.01em] text-ink"
            aria-label="Back to top"
          >
            Ezequiel<span className="text-muted-foreground">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-0.5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className="block rounded-full px-3.5 py-2 text-[14px] text-muted-foreground transition-colors duration-200 hover:bg-ink/[0.05] hover:text-ink"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center pe-2">
            <LanguageSwitcher className="!text-[12px]" />
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-full px-3.5 py-2 text-[14px] text-ink transition-colors hover:bg-ink/[0.05]"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 bg-bone md:hidden"
          >
            <div className="container pt-24 pb-10 h-full flex flex-col justify-between">
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.05 + i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => go(e, link.href)}
                      className="block py-3 font-display text-5xl border-b border-line"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
