"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Clock, GraduationCap, ChevronRight, ChevronLeft, ExternalLink, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

// Move testimonials array outside the component
const testimonials = [
  {
    quote: "Without Firedrop I might have never completed my final year project and I would still be at 0% progress.",
    author: {
      name: <span>Anagha <span className="blur-[5px] select-none opacity-70">Kumar</span></span>,
      role: "AI/ML Student, Class of '24",
      avatar: "/avatars/avatar.svg"
    },
    stats: {
      metric: "96.11%",
      label: "Project Accuracy",
      increase: "+48.9%",
      previousValue: "65% average class score",
      chartImage: "/testimonials/about.png"
    }
  },
  {
    quote: "The documentation and support were exceptional. My professor was impressed with the quality and depth of my project implementation.",
    author: {
      name: <span>Priya <span className="blur-[5px] select-none opacity-70">Singh</span></span>,
      role: "Data Science, Class of '23",
      avatar: "/avatars/bitmoji-2.svg"
    },
    stats: {
      metric: "A+",
      label: "Project Grade",
      increase: "Top 5%",
      previousValue: "Class average: B-",
      chartImage: "/testimonials/audiobook.jpg"
    }
  }
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length)
    }, 10000) // Switch every 5 seconds

    return () => clearInterval(timer)
  }, [])

  // Handle image click
  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  // Handle click outside modal
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal()
    }
  }

  // Handle navigation
  const handlePrev = () => {
    setCurrentIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const handleNext = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <section className="py-8 md:py-12 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Testimonials with Metrics Card on Left, Quote on Right */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
          >
            {/* Left side - Metrics Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-4 md:p-5"
            >
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                      {testimonials[currentIndex].stats.label}
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      {testimonials[currentIndex].stats.increase}
                    </span>
                  </div>
                  <div className="mt-1 flex items-baseline">
                    <p className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].stats.metric}
                    </p>
                    <p className="ml-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                      from {testimonials[currentIndex].stats.previousValue}
                    </p>
                  </div>
                </div>
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-green-600 dark:text-green-400" />
                </div>
              </div>

              <div className="mt-4 relative">
                <div 
                  className="relative w-full rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(testimonials[currentIndex].stats.chartImage)}
                >
                  <div className="relative aspect-video w-full">
                    <Image
                      src={testimonials[currentIndex].stats.chartImage}
                      alt="Project metrics"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                    />
                  </div>
                </div>
                <div className="mt-3 text-xs md:text-sm text-gray-500 dark:text-gray-400 flex justify-between">
                  <span>View more</span>
                  <span>Updated recently</span>
                </div>
              </div>
            </motion.div>

            {/* Right side - Quote */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="text-green-500 dark:text-green-400 mb-3">
                <svg className="h-8 w-8 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white leading-relaxed mb-6">
                {testimonials[currentIndex].quote}
              </p>
              
              <div className="flex items-center">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden relative mr-3">
                  <Image 
                    src={testimonials[currentIndex].author.avatar}
                    alt={`${testimonials[currentIndex].author.name} avatar`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                    {testimonials[currentIndex].author.name}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].author.role}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-2 justify-center lg:justify-start">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentIndex ? 'bg-blue-600 dark:bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={handleOutsideClick}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Enlarged testimonial image"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}