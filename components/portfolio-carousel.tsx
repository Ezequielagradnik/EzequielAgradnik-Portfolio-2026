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
    <div className="relative w-full max-w-7xl mx-auto">
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
            {/* Mobile Layout */}
            <div className="block lg:hidden h-full">
              <div className="relative h-2/3">
                <Image
                  src={portfolioItems[currentIndex].image || "/placeholder.svg"}
                  alt={portfolioItems[currentIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-900">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{portfolioItems[currentIndex].title}</h3>
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">
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

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-5 h-full">
              {/* Image Section - Takes up 3/5 of the width */}
              <div className="col-span-3 relative">
                <Image
                  src={portfolioItems[currentIndex].image || "/placeholder.svg"}
                  alt={portfolioItems[currentIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/20" />
              </div>

              {/* Content Section - Takes up 2/5 of the width */}
              <div className="col-span-2 bg-gray-900 p-8 xl:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight">
                      {portfolioItems[currentIndex].title}
                    </h3>
                    <p className="text-gray-300 text-lg xl:text-xl leading-relaxed">
                      {portfolioItems[currentIndex].description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {portfolioItems[currentIndex].tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 hover:border-purple-500/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Number Indicator */}
                  <div className="pt-4 border-t border-gray-700">
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
