"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function HeroSection() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          src="/12218024_1920_1080_30fps.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left max-w-4xl mt-32 ml-4 sm:ml-0"
        >
          <h1 style={{marginLeft:isMobile ? '1rem' : '0'}} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F7F4E4] mb-6 text-balance">
            Una van. Mil planes. <br />

          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{marginLeft:isMobile ? '1rem' : '0'}}
            className="text-xl md:text-2xl lg:text-3xl text-[#F7F4E4] mb-10 max-w-3xl text-pretty"
          >
            Alquilá tu Tiny Van y descubrí otra forma de moverte.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
