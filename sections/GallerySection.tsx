"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionTitle from "@/components/SectionTitle"

const images = [
  "/carousel5.png",
  "/carousel3.png",
  "/carousel4.png",
  "/carousel6.png",
  "/carousel8.png",
  "/carousel7.png",
]

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

   const [isMobile, setIsMobile] = useState(false)
      
        useEffect(() => {
          const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768)
          }
          
          checkIsMobile()
          window.addEventListener('resize', checkIsMobile)
          
          return () => window.removeEventListener('resize', checkIsMobile)
        }, [])

  return (
    <>

    <section className="py-20 md:py-32 bg-primary" style={{textAlign:'center',}}>
      <div className="w-full bg-[#F7F4E4]" style={{textAlign:'center'}}>
      <div className="gallery-container">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8" style={{textAlign:'center', paddingLeft:isMobile ? '1rem' : '0', paddingRight:isMobile ? '1rem' : '0'}}>

          <div className="relative w-full mx-auto" style={{textAlign:'center'}}>
          
          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl" style={{textAlign:'center' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Tiny Van imagen ${currentIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                />
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-beige/90 hover:bg-beige text-primary rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Imagen anterior"
              >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-beige/90 hover:bg-beige text-primary rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Imagen siguiente"
              >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="flex justify-center gap-3 mt-8" style={{textAlign:'center'}}>
            {images.map((_, index) => (
              <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-12 bg-accent" : "w-3 bg-beige/50 hover:bg-beige/70"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </div>
            </div>
      </div>
    </section>
    </>
  )
}
