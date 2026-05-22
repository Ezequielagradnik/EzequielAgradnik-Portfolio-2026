"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const portfolioItems = [
  {
    id: 1,
    title: "Kurtis Conner",
    description: "Personal website for comedian and content creator",
    image: "/images/portfolio/kurtis-website.png",
    tags: ["React", "Next.js", "Animation"],
  },
  {
    id: 2,
    title: "Energy Humanities",
    description: "Academic platform for energy and culture research",
    image: "/images/portfolio/energy-humanities.png",
    tags: ["WordPress", "Custom Theme", "Responsive"],
  },
  {
    id: 3,
    title: "OLB Motors",
    description: "Luxury automotive dealership in Dubai",
    image: "/images/portfolio/olb-motors.png",
    tags: ["Next.js", "Luxury Design", "E-commerce"],
  },
  {
    id: 4,
    title: "LinkUp",
    description: "Co-pilot platform for early-stage startups",
    image: "/images/portfolio/linkup.png",
    tags: ["React", "SaaS", "Dashboard"],
  },
  {
    id: 5,
    title: "Tarjeta Control",
    description: "Card payment control service platform",
    image: "/images/portfolio/tarjeta-control.png",
    tags: ["Spanish", "Fintech", "Business"],
  },
  {
    id: 6,
    title: "PADI Clases",
    description:
      "Tutoring marketplace with over 2,500 students where Argentine university students learn from top-scoring peers via live classes, co-studying groups, and AI tutors trained per subject. Used by students from Di Tella, UDESA and more.",
    image: "/images/portfolio/padi-clases.png",
    tags: ["Next.js", "WordPress", "n8n", "Supabase", "EdTech", "AI Tutoring"],
  },
]

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioItems.length) % portfolioItems.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div
      className="relative w-full max-w-7xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Carousel */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Single Layout for Both Mobile and Desktop */}
            <div className="h-full relative">
              {/* Image Section - Takes up most of the height */}
              <div className="relative h-full">
                <Image
                  src={portfolioItems[currentIndex].image || "/placeholder.svg"}
                  alt={portfolioItems[currentIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/95" />
              </div>

              {/* Content Section - Positioned at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 bg-gradient-to-t from-gray-900 via-gray-900/98 to-transparent">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="max-w-4xl"
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    {portfolioItems[currentIndex].title}
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-4 md:mb-6 leading-relaxed max-w-3xl">
                    {portfolioItems[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-4 lg:mb-0">
                    {portfolioItems[currentIndex].tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 hover:border-purple-500/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Counter - Hidden on mobile, shown on desktop */}
                  <div className="hidden lg:block pt-4 border-t border-gray-700/50">
                    <span className="text-gray-400 text-sm font-medium">
                      Project {currentIndex + 1} of {portfolioItems.length}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 group"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 group"
          aria-label="Next project"
        >
          <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {portfolioItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125 shadow-lg shadow-purple-500/30"
                : "bg-gray-600 hover:bg-gray-500 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Counter - Only visible on mobile */}
      <div className="text-center mt-4 lg:hidden">
        <span className="text-gray-400 text-sm">
          {currentIndex + 1} / {portfolioItems.length}
        </span>
      </div>
    </div>
  )
}
