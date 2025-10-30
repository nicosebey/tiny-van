"use client"

import { motion } from "framer-motion"
import SectionTitle from "@/components/SectionTitle"
import SpecCard from "@/components/SpecCard"

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
		title: "Conducción y seguridad",
		items: [
			"Sprinter 315 modelo 2025",
			"Velocidad crucero",
			"Ayuda de permanencia en el carril",
			"Asistencia ante vientos cruzados",
			"Camaras 360 de estacionamiento",
			"Caja de transmición con 6 marchas",
			"Pantalla tactil con conexión para smarthphones",
		],
	},
]

export default function SpecsSection() {
	return (
		<section className="py-20 md:py-32 bg-beige justify-items-center mb-20 overflow-hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
				<div className="flex justify-center" style={{marginBottom:'3rem', marginTop:'3rem'}}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-[1246px] max-w-full">
						{specs.map((spec, index) => (
							<SpecCard
								key={index}
								title={spec.title}
								items={spec.items}
								delay={index * 0.1}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
