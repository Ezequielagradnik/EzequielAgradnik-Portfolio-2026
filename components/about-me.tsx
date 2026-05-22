"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"
import { useLang } from "@/lib/i18n/context"

const timelineData = [
  {
    id: 1,
    company: "Satellites on Fire",
    role: "Automation Developer",
    period: "2026 - Present",
    location: "Argentina",
    type: "Part-time",
    logo: "/images/satellites-on-fire-logo.png",
    active: true,
  },
  {
    id: 2,
    company: "PADI",
    role: "Web Developer & Process Automation",
    period: "2026 - Present",
    location: "Argentina",
    type: "Freelance",
    logo: "/images/padi-logo.png",
    active: true,
  },
  {
    id: 3,
    company: "Ladder Propiedades",
    role: "Process Automation",
    period: "2026 - Present",
    location: "Argentina",
    type: "Freelance",
    logo: "/images/ladder.png",
    active: true,
  },
  {
    id: 4,
    company: "Zenda",
    role: "Co-founder & CTO",
    period: "2025",
    location: "Argentina",
    type: "Co-founder",
    logo: "/images/zenda-logo.png",
    active: false,
  },
  {
    id: 5,
    company: "LinkUp",
    role: "Full Stack Developer",
    period: "2025",
    location: "Argentina",
    type: "Freelance",
    logo: "/images/linkup-logo.png",
    active: false,
  },
]

const skillsData: Record<string, string[]> = {
  Languages: ["JavaScript", "TypeScript", "Python", "C#"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  "Backend & Databases": ["Node.js", "Express.js", "PostgreSQL", "MongoDB"],
  Automation: ["n8n", "REST APIs", "Web Scraping", "Python Scripting"],
  Cybersecurity: ["Network Security", "Linux", "Cisco Networking"],
  Tools: ["Git", "GitHub", "Vercel"],
}

export default function AboutMe() {
  const { t } = useLang()
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              {t.about.title}
            </span>
            <span className="ml-2">💻</span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16">
            {/* Photo with effects */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-72 h-72">
                {/* Pulsing glow behind */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.5, 0.25] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl pointer-events-none"
                />

                {/* Rotating conic gradient ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #a855f7, #ec4899, #f43f5e, #ec4899, #a855f7)",
                  }}
                />

                {/* Photo */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden group">
                  <Image
                    src="/images/ezequiel-profile.png"
                    alt="Ezequiel Agradnik"
                    fill
                    className="rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>
            </div>

            {/* Text column */}
            <div className="md:w-2/3 w-full">
              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-gray-800"
              >
                <Stat number="18" label={t.about.stats.yearsOld} />
                <Stat number="2+" label={t.about.stats.yrsFreelancing} />
                <Stat number="3" label={t.about.stats.countries} />
                <Stat number="10+" label={t.about.stats.clients} />
              </motion.div>

              {/* Mobile description */}
              <p className="text-lg leading-relaxed text-center md:hidden text-gray-200">
                {t.about.mobileDescription}
              </p>

              {/* Desktop description with stagger */}
              <div className="hidden md:block prose prose-invert max-w-none text-left">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl mb-4"
                >
                  🚀 <strong>{t.about.greeting}</strong>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  {t.about.paragraph1Intro} <strong>{t.about.paragraph1Role}</strong>
                  {t.about.paragraph1End}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  {t.about.paragraph2Intro} <strong>{t.about.paragraph2University}</strong>{" "}
                  {t.about.paragraph2Middle} <strong>{t.about.paragraph2Cert}</strong>
                  {t.about.paragraph2End}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  {t.about.paragraph3Intro} <strong>{t.about.paragraph3Freelance}</strong>
                  {t.about.paragraph3Middle} <strong>{t.about.paragraph3Projects}</strong>{" "}
                  {t.about.paragraph3And} <strong>{t.about.paragraph3Linkup}</strong> {t.about.paragraph3For}{" "}
                  <strong>{t.about.paragraph3Countries}</strong>
                  {t.about.paragraph3End}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {t.about.paragraph4Intro} <strong>{t.about.paragraph4Solutions}</strong>
                  {t.about.paragraph4Middle} <strong>{t.about.paragraph4Hobbies}</strong>
                  {t.about.paragraph4End}
                </motion.p>
              </div>

              {/* Currently pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start"
              >
                <span className="text-xs text-gray-500 uppercase tracking-widest self-center mr-1">{t.about.currently}</span>
                <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/40 text-purple-200 text-xs font-medium">
                  🛰️ Satellites on Fire
                </span>
                <span className="px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/40 text-pink-200 text-xs font-medium">
                  🎓 Universidad de Palermo
                </span>
                <span className="px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/40 text-sky-200 text-xs font-medium">
                  🛡️ Cisco Cybersecurity
                </span>
                <span className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-200 text-xs font-medium">
                  💡 PADI
                </span>
                <span className="px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/40 text-red-200 text-xs font-medium">
                  🏘️ Ladder Propiedades
                </span>
              </motion.div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                {t.timeline.title}
              </span>
              <span className="ml-2 text-white">🛤️</span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    {/* Content */}
                    <div
                      className={`md:w-1/2 p-6 rounded-xl backdrop-blur-sm border transition-colors ${
                        item.active
                          ? "bg-gray-900/70 border-purple-500/40 shadow-lg shadow-purple-500/10"
                          : "bg-gray-900/50 border-gray-800"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0 shrink-0">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={56}
                            height={56}
                            className="rounded-full object-contain"
                          />
                        </div>
                        <div className="text-center md:text-left flex-1">
                          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
                            <h3 className="text-xl font-bold text-white">
                              {t.timeline.roles[item.role as keyof typeof t.timeline.roles] ?? item.role}
                            </h3>
                            {item.active && (
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium">
                                <span className="relative flex h-2 w-2">
                                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                {t.timeline.active}
                              </span>
                            )}
                          </div>
                          <h4 className="text-lg text-purple-400">{item.company}</h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium">
                              <Building2 className="w-3 h-3" />
                              {t.timeline.types[item.type as keyof typeof t.timeline.types] ?? item.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                {t.skills.title}
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div
                  key={category}
                  className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-purple-500/40 transition-colors"
                >
                  <h4 className="text-lg font-bold mb-4 text-purple-400 text-center md:text-left">
                    {t.skills.categories[category as keyof typeof t.skills.categories] ?? category}
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-gray-800/80 border border-gray-700 text-gray-200 hover:border-purple-500 hover:text-purple-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-pink-500">
        {number}
      </div>
      <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{label}</div>
    </div>
  )
}
