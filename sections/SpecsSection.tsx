"use client"

import SpecCard from "@/components/SpecCard"
import { useState, useEffect } from "react"

const specs = [
	{
		title: "Vida a bordo",
		items: [
			"Calefacción central en el habitáculo",
			"Proyector smart (Netflix, Youtube, etc)",
			"Set de ropa de cama y baño de cama premium",
		],
	},
	{
		title: "Baño",
		items: ["Ducha interior", "Lavabo", "WC", "Agua caliente por calefón"],
	},
	{
		title: "Cocina / Comedor",
		items: [
			"Anafe de cocina a gas",
			"Heladera y congelador (220 V / 12 V)",
			"Fregadero + lavabo",
			"Mesa interior + 4 plazas para comer",
			"Kit de vajilla completo (2 sets)",
			"Utensilios de cocina",
		],
	},
	{
		title: "Exterior",
		items: ["Mesa y 2 sillas de exterior", "Bodega de guardado", "Parrilla "],
	},
	{
		title: "Autonomía",
		items: [
			"Batería auxiliar",
			"Cable de electricidad y adaptador",
			"2 tipos de enchufe (220 V y 12 V)",
			"Tanque de agua de 150 litros",
			"Calefon de ultima generación",
			"Gas por garrafa",
		],
	},
	{
		title: "Conducción",
		items: [
			"Sprinter 315 modelo 2025",
			"Velocidad crucero",
			"Caja de transmición con 6 marchas",
			"Pantalla tactil con conexión para smarthphones",
		],
	},
	{
		title: "Seguridad",
		items: [
			"Ayuda de permanencia en el carril",
			"Asistencia ante vientos cruzados",
			"Camaras 360 de estacionamiento",
		],
	},
]

export default function SpecsSection() {
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
			<style jsx>{`
				@media (max-width: 768px) {
					.specs-container {
						display: flex !important;
						overflow-x: auto !important;
						scroll-snap-type: x mandatory !important;
						-webkit-overflow-scrolling: touch !important;
						gap: 1rem !important;
						padding-left: 1.5rem !important;
						padding-right: 1.5rem !important;
					}
					.specs-container > div {
						flex: 0 0 85% !important;
						scroll-snap-align: start !important;
					}
					.specs-container::-webkit-scrollbar {
						display: none;
					}
				}
			`}</style>
			<section className="py-20 md:py-32 bg-beige justify-items-center mb-20 overflow-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
					<div className="flex justify-center" style={{marginBottom:'3rem', marginTop:'3rem', paddingLeft:isMobile ? '0' : '0', paddingRight:isMobile ? '0' : '0' }}>
						<div className="specs-container grid md:grid-cols-2 gap-8 w-full md:w-[1246px] max-w-full">
							{specs.map((spec, index) => (
								<div key={index}>
									<SpecCard
										title={spec.title}
										items={spec.items}
										delay={index * 0.1}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
