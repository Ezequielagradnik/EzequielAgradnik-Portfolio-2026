"use client"

import { useState, useEffect, type ReactNode } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Calendar,
  Braces,
  Code,
  Rocket,
  Workflow,
  Database,
  FlaskRoundIcon as Flask,
  Phone,
  ChevronDown,
  Mail,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"
import PortfolioCarousel from "@/components/portfolio-carousel"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 leading-tight py-2">
              Hey! It's Ezequiel Agradnik
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">🚀 Full-Stack Developer | Automation Developer</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="portfolio" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  View Portfolio
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>

        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
          aria-label="Scroll to about section"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 1.2 },
              y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </ScrollLink>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                index={0}
                icon={<Braces className="w-7 h-7 text-purple-400" />}
                title="🧑‍💻 Full Stack Development"
                description="End-to-end web application development with modern frameworks like React, Next.js, and Node.js. Experienced in building responsive UIs, RESTful APIs, database design, and server-side architecture. Specialized in creating seamless user experiences with optimized performance and scalability."
              />
              <ServiceCard
                index={1}
                icon={<Code className="w-7 h-7 text-pink-400" />}
                title="🗃️ API Design & Integration"
                description="Robust design and integration of RESTful and GraphQL APIs. Focused on scalability, security, and performance, enabling seamless data exchange between front-end and back-end systems."
              />
              <ServiceCard
                index={2}
                icon={<Rocket className="w-7 h-7 text-purple-400" />}
                title="🛠️ DevOps & Deployment"
                description="Setup and automation of CI/CD pipelines using tools like Docker, GitHub Actions, and Vercel. Skilled in deploying scalable apps to cloud platforms like AWS, GCP, and DigitalOcean with zero-downtime strategies."
              />
              <ServiceCard
                index={3}
                icon={<Workflow className="w-7 h-7 text-pink-400" />}
                title="🤖 AI & Process Automation"
                description="Building end-to-end automations with n8n, ManyChat, and AI APIs like Claude and OpenAI. From chatbot flows and lead capture to internal workflows that connect tools and eliminate repetitive work."
              />
              <ServiceCard
                index={4}
                icon={<Database className="w-7 h-7 text-purple-400" />}
                title="🧾 Database Architecture"
                description="Design and management of relational and non-relational databases (PostgreSQL, MongoDB, etc.). Optimized data models for performance, integrity, and scalability in high-traffic applications."
              />
              <ServiceCard
                index={5}
                icon={<Flask className="w-7 h-7 text-pink-400" />}
                title="🧪 Testing & Code Quality"
                description="Implementation of automated testing (unit, integration, e2e) using Jest, Cypress, and other tools. Committed to maintaining high code quality and preventing regressions through best practices."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Featured Projects
              </span>
              <span className="ml-2 text-white">🎨</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              A showcase of websites and applications I've built for clients around the world, from Dubai to Argentina.
            </p>
            <PortfolioCarousel />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-black overflow-hidden">
        {/* Ambient background blobs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Ping Me
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">
              Always open to new projects, creative ideas, and good conversations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            {/* Left: Email CTA + tagline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Let's build something together.</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Got an idea, a project, or just want to say hi? Drop me a line — I usually reply within a day.
              </p>

              <a
                href="mailto:eagradnik@gmail.com"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-500/70 transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email me directly</p>
                  <p className="text-white font-medium text-lg truncate">eagradnik@gmail.com</p>
                </div>
              </a>
            </motion.div>

            {/* Right: 3D floating phone */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
              style={{ perspective: "1500px" }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  transform: "rotateY(-14deg) rotateX(6deg)",
                  transformStyle: "preserve-3d",
                }}
                className="relative w-72 md:w-80"
              >
                {/* Glow underneath */}
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-[3.5rem] blur-3xl opacity-30 -z-10" />

                {/* Phone frame */}
                <div className="relative bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-700/50">
                  {/* Side buttons */}
                  <div className="absolute -left-[3px] top-24 w-[3px] h-10 bg-gray-700 rounded-l-sm" />
                  <div className="absolute -left-[3px] top-40 w-[3px] h-16 bg-gray-700 rounded-l-sm" />
                  <div className="absolute -right-[3px] top-32 w-[3px] h-20 bg-gray-700 rounded-r-sm" />

                  {/* Screen */}
                  <div className="relative bg-gradient-to-br from-gray-950 to-black rounded-[2.4rem] aspect-[9/19] overflow-hidden">
                    {/* Glass reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none z-30" />

                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 border border-gray-800" />

                    {/* Status bar */}
                    <div className="flex justify-between items-center px-7 pt-3 text-[11px] text-gray-300 relative z-10">
                      <span className="font-semibold">9:41</span>
                      <span className="font-medium">5G</span>
                    </div>

                    {/* Content */}
                    <div className="px-5 pt-14 pb-6 relative z-10">
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Contact Hub</p>
                      <h4 className="text-white text-xl font-bold mb-1">Reach Ezequiel</h4>
                      <p className="text-gray-500 text-xs mb-7">Tap to connect</p>

                      <div className="grid grid-cols-2 gap-4">
                        <PhoneApp
                          href="https://calendly.com/zenda-websites/30min?back=1&month=2025-04"
                          icon={<Calendar className="w-7 h-7 text-white" />}
                          label="Schedule"
                          gradient="from-purple-500 to-pink-500"
                        />
                        <PhoneApp
                          href="https://wa.me/5491133750973"
                          icon={<Phone className="w-7 h-7 text-white" />}
                          label="WhatsApp"
                          gradient="from-green-500 to-emerald-600"
                        />
                        <PhoneApp
                          href="https://github.com/Ezequielagradnik"
                          icon={<Github className="w-7 h-7 text-white" />}
                          label="GitHub"
                          gradient="from-gray-600 to-gray-800"
                        />
                        <PhoneApp
                          href="https://www.linkedin.com/in/ezequiel-agradnik-a6a790331/"
                          icon={<Linkedin className="w-7 h-7 text-white" />}
                          label="LinkedIn"
                          gradient="from-sky-500 to-blue-600"
                        />
                      </div>
                    </div>

                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full z-20" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/Ezequielagradnik" label="GitHub" />
            <SocialIcon
              icon={<Linkedin />}
              href="https://www.linkedin.com/in/ezequiel-agradnik-a6a790331/"
              label="LinkedIn"
            />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Ezequiel Agradnik. All rights reserved.</p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description, index = 0 }) {
  const isPurple = index % 2 === 0
  const glowColor = isPurple
    ? "from-purple-600 via-purple-500 to-pink-500"
    : "from-pink-600 via-pink-500 to-purple-500"
  const iconBg = isPurple
    ? "bg-purple-500/10 border-purple-500/30 group-hover:border-purple-500/70 group-hover:bg-purple-500/20"
    : "bg-pink-500/10 border-pink-500/30 group-hover:border-pink-500/70 group-hover:bg-pink-500/20"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative h-full"
    >
      {/* Glow behind on hover */}
      <div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${glowColor} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 group-hover:border-gray-700 group-hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center md:text-left">
        {/* Faded number watermark */}
        <span className="absolute top-2 right-3 text-7xl font-black text-white/[0.04] select-none pointer-events-none leading-none">
          0{index + 1}
        </span>

        {/* Diagonal shine sweep on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

        {/* Icon container */}
        <div
          className={`relative w-14 h-14 rounded-xl border ${iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 mx-auto md:mx-0`}
        >
          {icon}
        </div>

        <h3 className="text-xl font-bold mb-3 text-white relative">{title}</h3>
        <p className="text-gray-400 relative leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

function PhoneApp({
  href,
  icon,
  label,
  gradient,
}: {
  href: string
  icon: ReactNode
  label: string
  gradient: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2"
    >
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-active:scale-95 transition-transform duration-200`}
      >
        {icon}
      </div>
      <span className="text-xs text-gray-200 font-medium">{label}</span>
    </a>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:eagradnik@gmail.com" className="text-purple-400 hover:text-purple-300">
        eagradnik@gmail.com
      </a>
    </div>
  )
}
