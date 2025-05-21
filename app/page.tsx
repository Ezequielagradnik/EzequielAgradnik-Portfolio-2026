"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Braces,
  Code,
  Rocket,
  Palette,
  Database,
  FlaskRoundIcon as Flask,
  MessageSquare,
  Smartphone,
  PenTool,
  Phone,
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
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">🚀 Full-Stack Developer | Tech Explorer</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="services" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  View Expertise
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-purple-500" />}
                title="🧑‍💻 Full Stack Development"
                description="End-to-end web application development with modern frameworks like React, Next.js, and Node.js. Experienced in building responsive UIs, RESTful APIs, database design, and server-side architecture. Specialized in creating seamless user experiences with optimized performance and scalability."
              />
              <ServiceCard
                icon={<Code className="w-10 h-10 text-pink-500" />}
                title="🗃️ API Design & Integration"
                description="Robust design and integration of RESTful and GraphQL APIs. Focused on scalability, security, and performance, enabling seamless data exchange between front-end and back-end systems."
              />
              <ServiceCard
                icon={<Rocket className="w-10 h-10 text-purple-500" />}
                title="🛠️ DevOps & Deployment"
                description="Setup and automation of CI/CD pipelines using tools like Docker, GitHub Actions, and Vercel. Skilled in deploying scalable apps to cloud platforms like AWS, GCP, and DigitalOcean with zero-downtime strategies."
              />
              <ServiceCard
                icon={<Palette className="w-10 h-10 text-pink-500" />}
                title="🎨 UI/UX Development"
                description="Crafting intuitive, accessible, and pixel-perfect user interfaces with technologies like Tailwind CSS, Figma, and component libraries. Focused on creating smooth user journeys across devices."
              />
              <ServiceCard
                icon={<Database className="w-10 h-10 text-purple-500" />}
                title="🧾 Database Architecture"
                description="Design and management of relational and non-relational databases (PostgreSQL, MongoDB, etc.). Optimized data models for performance, integrity, and scalability in high-traffic applications."
              />
              <ServiceCard
                icon={<Flask className="w-10 h-10 text-pink-500" />}
                title="🧪 Testing & Code Quality"
                description="Implementation of automated testing (unit, integration, e2e) using Jest, Cypress, and other tools. Committed to maintaining high code quality and preventing regressions through best practices."
              />
            </div>
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
            <SocialIcon icon={<Twitter />} href="https://twitter.com/aakash4dev" label="Twitter" />
            <SocialIcon icon={<MessageSquare />} href="https://discord.com/users/aakash4dev" label="Discord" />
            <SocialIcon icon={<PenTool />} href="https://medium.com/@aakash4dev" label="Medium" />
            <SocialIcon
              icon={<Smartphone />}
              href="#"
              label="Mobile Apps"
              className="opacity-50 cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault()
                // You can add a console.log here if you want to verify it's working
                console.log("Mobile icon click prevented")
              }}
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

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
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
