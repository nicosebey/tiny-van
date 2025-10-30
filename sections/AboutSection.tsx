"use client"

import { motion } from "framer-motion"
import Button from "@/components/Button"

export default function AboutSection() {
  return (
    <section id="sobre-la-van" className="py-20 md:py-32 bg-primary text-[#F7F4E4] lg:h-[1440px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid md:grid-cols-2 gap-12 items-center h-full">
          {/* Image column - centered vertically */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[1100px] overflow-hidden flex items-center justify-center md:ml-16 md:pr-4 w-full md:max-w-[1000px]"
            style={{ background: 'transparent' }}
          >
            <img src="/arcoImg.png" alt="Interior de Tiny Van" className="w-full h-full object-cover" style={{ background: 'transparent' }} />
          </motion.div>

          {/* Content column - centered vertically */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full flex flex-col justify-center md:pl-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#F7F4E4] text-balance">
              Una van. <br />
              <span className="text-[#F7F4E4]">Mil planes.</span>
            </h2>

            <p className="text-lg md:text-xl text-[#F7F4E4] mb-8 leading-relaxed text-pretty">
              Todo lo que necesitás, ya está a bordo. La Tiny Van está equipada hasta el último detalle para que
              disfrutes la ruta con total autonomía, comodidad y seguridad.
            </p>

            <p className="text-lg md:text-xl text-[#F7F4E4] mb-10 leading-relaxed text-pretty">
              Desde la cocina completa hasta el baño con ducha, pasando por calefacción y wifi satelital. Diseñada para
              que tu única preocupación sea disfrutar del viaje.
            </p>

            <div className="flex justify-center">
              <Button
              variant="secondary"
              size="lg"
              className="w-[350px] h-[77px] bg-[#F7F4E4] text-[#2A4E36] !shadow-none pb-2 md:pb-0"
              style={{ width: 350, height: 77, backgroundColor: "#F7F4E4", color: "#2A4E36", marginTop: '2rem' }}
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              >
              Reservar Ahora
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
