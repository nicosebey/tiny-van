"use client"

import { motion } from "framer-motion"
import IconCard from "@/components/IconCard"
import { BedIcon, LicenseIcon, MapIcon, PetIcon, SeatIcon, WifiIcon } from "@/components/FeatureIcons"


const features = [
  { icon: <img src="/bed.png" alt="Cama doble" className="w-12 h-12 object-contain" />, title: "Cama doble" },
  { icon:<img src="/seatbelt.png" alt="Cinturón de seguridad" className="w-12 h-12 object-contain" />, title: "2 plazas con cinturón" },
  { icon: <img src="/travel.png" alt="Viajes por Argentina" className="w-12 h-12 object-contain" />, title: "Viajes por Argentina" },
  { icon: <img src="/wifi.png" alt="Wifi satelital" className="w-12 h-12 object-contain" />, title: "Wifi satelital" },
  { icon: <img src="/license.svg" alt="Carnet B1" className="w-12 h-12 object-contain" />, title: "Carnet B1" },
  { icon: <img src="/pet.png" alt="Apto mascotas" className="w-12 h-12 object-contain" />, title: "Apto mascotas" },
]

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#F7F4E4]">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto" style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <div className="flex justify-center">
          <div className="flex items-center gap-8 w-full max-w-full justify-center overflow-x-auto py-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex-shrink-0 w-[204px] h-[189px] text-[#2A4E36] flex items-center justify-center"
              >
                <IconCard icon={feature.icon} title={feature.title} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
