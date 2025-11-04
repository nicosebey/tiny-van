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
		<>
			<style jsx>{`
				@media (max-width: 768px) {
					.process-title {
						text-align: left !important;
						padding-left: 1.5rem !important;
						padding-right: 1.5rem !important;
						font-size: 28px !important;
						padding-bottom: 2rem !important;
					}
					.process-step {
						justify-content: flex-start !important;
						padding-left: 1.5rem !important;
						padding-right: 1.5rem !important;
						gap: 1rem !important;
					}
					.process-circle {
						width: 50px !important;
						height: 50px !important;
					}
					.process-number {
						font-size: 16px !important;
					}
					.process-text {
						font-size: 18px !important;
						text-align: left !important;
					}
				}
			`}</style>
			<section id="requisitos" className="py-20 md:py-32 bg-beige" style={{ marginBottom: "3rem" }}>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div
						className="process-title"
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
						¿Cómo funciona el alquiler?
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
								<div className="flex items-center gap-6 mb-6 process-step" style={{paddingLeft: "2rem"}}>
									<div
										className="rounded-full shadow-lg flex items-center justify-center flex-shrink-0 process-circle"
										style={{ width: 63, height: 63, background: "#2A4E36", }}
									>
										<span
											className="process-number"
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
										className="break-words process-text"
										style={{
											color: "#000",
											fontFamily: "Inter, sans-serif",
											fontSize: 22,
											fontStyle: "normal",
											fontWeight: 400,
											lineHeight: "normal",
										}}
									>
										{step.title}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
