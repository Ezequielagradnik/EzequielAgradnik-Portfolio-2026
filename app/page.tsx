"use client"

import { useState, useEffect } from "react"
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
      <section id="services" className="py-20 bg-black">
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
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Ping Me
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Let's Connect!</h3>
                  <p className="text-gray-400 max-w-lg mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                    vision.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <a
                    href="https://calendly.com/zenda-websites/30min?back=1&month=2025-04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 border border-gray-700 hover:border-purple-500"
                  >
                    <Calendar className="w-12 h-12 text-purple-500 mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">Schedule a Meeting</h4>
                    <p className="text-gray-400 text-sm text-center">Book a time slot that works for you</p>
                  </a>

                  <a
                    href="https://wa.me/5491133750973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 border border-gray-700 hover:border-purple-500"
                  >
                    <Phone className="w-12 h-12 text-green-500 mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">WhatsApp</h4>
                    <p className="text-gray-400 text-sm text-center">Send me a direct message</p>
                  </a>

                  <a
                    href="https://github.com/Ezequielagradnik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 border border-gray-700 hover:border-purple-500"
                  >
                    <Github className="w-12 h-12 text-white mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">GitHub</h4>
                    <p className="text-gray-400 text-sm text-center">Check out my code and projects</p>
                  </a>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-400 mb-2">Or send me an email directly:</p>
                  <a
                    href="mailto:eagradnik@gmail.com"
                    className="text-xl font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    eagradnik@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
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

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:eagradnik@gmail.com" className="text-purple-400 hover:text-purple-300">
        eagradnik@gmail.com
      </a>
    </div>
  )
}
