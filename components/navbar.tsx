"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Calendar } from "lucide-react"
import { useLang } from "@/lib/i18n/context"
import LanguageSwitcher from "@/components/language-switcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLang()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.work, href: "#portfolio" },
    { name: t.nav.contact, href: "#contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5 },
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-3 md:top-5 inset-x-0 z-50 px-3 md:px-4"
    >
      {/* Floating glass pill */}
      <nav
        className={`mx-auto max-w-4xl rounded-full border backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-black/70 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
            : "bg-black/40 border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.12)]"
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-6 py-2.5">
          <Link
            href="#home"
            className="text-xl md:text-2xl font-bold text-white shrink-0"
            onClick={(e) => scrollToSection(e, "#home")}
          >
            Ezequiel<span className="text-red-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="h-5 w-px bg-white/10" aria-hidden />
            <motion.a
              href="https://calendly.com/zenda-websites/30min?back=1&month=2025-04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Schedule a meeting"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <Calendar size={20} />
            </motion.a>
            <motion.a
              href="https://github.com/Ezequielagradnik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ezequiel-agradnik-a6a790331/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <Linkedin size={20} />
            </motion.a>
            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.a
              href="https://calendly.com/zenda-websites/30min?back=1&month=2025-04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Schedule a meeting"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <Calendar size={20} />
            </motion.a>
            <motion.a
              href="https://github.com/Ezequielagradnik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ezequiel-agradnik-a6a790331/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <Linkedin size={20} />
            </motion.a>
            <button className="text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu — floating panel below the pill */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-auto max-w-4xl mt-2 rounded-2xl border border-white/10 bg-black/85 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.2)] overflow-hidden"
          >
            <div className="px-4 py-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.06 }}
                  className="text-center mb-3"
                >
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-white hover:bg-white/5 rounded-xl py-2 transition-colors duration-300 text-lg"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex justify-center mt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
