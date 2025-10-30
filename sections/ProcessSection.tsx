"use client"

import { motion } from "framer-motion"

const steps = [
	{
		number: 1,
		title: "Consultá disponibilidad y tarifas por WhatsApp",
		
	},
	{
		number: 2,
		title: "Confirmá la reserva con nuestro equipo",
		
	},
	{
		number: 3,
		title: "Retirá la van y disfrutá tu viaje.",
	},
]

export default function ProcessSection() {
	return (
		<section id="requisitos" className="py-20 md:py-32 bg-beige" style={{ marginBottom: "3rem" }}>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div
					style={{
						color: "#2A4E36",
						fontFamily: "Inter, sans-serif",
						fontSize: "33px",
						fontStyle: "normal",
						fontWeight: 600,
						lineHeight: "normal",
						paddingLeft: "2rem",
						paddingBottom: "2rem",
						paddingTop: "2rem",
					}}
				>
					Cómo funciona el alquiler
				</div>

				<div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
					{steps.map((step, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="text-left"
						>
							{/* fila: circulo a la izquierda y título a la derecha */}
							<div className="flex items-center gap-6 mb-6" style={{paddingLeft: "2rem"}}>
								<div
									className="rounded-full shadow-lg flex items-center justify-center flex-shrink-0"
									style={{ width: 63, height: 63, background: "#2A4E36", }}
								>
									<span
										style={{
											color: "#FFFFFF",
											fontFamily: "Inter, sans-serif",
											fontSize: 20,
											fontWeight: 700,
											lineHeight: "normal",
										}}
									>
										{step.number}
									</span>
								</div>

								<div
									style={{
										color: "#000",
										fontFamily: "Inter, sans-serif",
										fontSize: 22,
										fontStyle: "normal",
										fontWeight: 400,
										lineHeight: "normal",
									}}
									className="break-words"
								>
									{step.title}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
