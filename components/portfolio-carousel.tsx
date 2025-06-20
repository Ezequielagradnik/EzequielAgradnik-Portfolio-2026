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
]

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

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
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl bg-gray-900 border border-gray-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image Section */}
              <div className="relative h-full">
                <Image
                  src={portfolioItems[currentIndex].image || "/placeholder.svg"}
                  alt={portfolioItems[currentIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/50 lg:to-gray-900/80" />
              </div>

              {/* Content Section */}
              <div className="absolute bottom-0 left-0 right-0 lg:relative lg:bottom-auto p-6 lg:p-8 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent lg:bg-gray-900 lg:from-transparent lg:via-transparent lg:to-transparent flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {portfolioItems[currentIndex].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                    {portfolioItems[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {portfolioItems[currentIndex].tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {portfolioItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="text-center mt-4">
        <span className="text-gray-400 text-sm">
          {currentIndex + 1} / {portfolioItems.length}
        </span>
      </div>
    </div>
  )
}
