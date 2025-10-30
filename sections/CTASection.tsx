"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function CTASection() {
  const whatsappNumber = "5492284201526";
  const whatsappText = encodeURIComponent(
    "Hola! Quiero reservar Tiny Van 🚐. \nQuiero mas info sobre el alquiler!"
  );

  return (
    <section
      id="contacto"
      className="bg-primary overflow-hidden text-[#F7F4E4]"
    >
      {/* full-width wrapper so background covers entire viewport */}
      <div className="w-full bg-primary relative z-10" style={{ paddingTop: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#F7F4E4] text-center text-balance">
            ¿Listo/a para salir a la ruta?
          </h2>

          <p className="text-xl md:text-2xl text-[#F7F4E4] mb-10 text-pretty text-center">
            Consultá disponibilidad y tarifas. Respuesta en el día.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="mx-auto block text-[#2A4E36]"
              style={{
                width: "350px",
                height: "77px",
                flexShrink: 0,
                borderRadius: "40px",
                background: "#F7F4E4",
                marginBottom: "2rem",
                marginTop: "1rem",
              }}
              onClick={() =>
                window.open(
                  `https://wa.me/${whatsappNumber}?text=${whatsappText}`,
                  "_blank"
                )
              }
            >
              Reservar Ahora
            </Button>
          </div>

          {/* Mini Footer with Instagram */}
          <div className="flex justify-center items-center gap-2 pb-2 pt-4" style={{paddingBottom:'1rem'}}>
            <a
              href="https://instagram.com/tinyvan.argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F7F4E4] hover:text-accent transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
                @tinyvan.arg
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
