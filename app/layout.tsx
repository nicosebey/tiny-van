import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tiny Van Argentina | Alquiler de Motorhomes",
  description: "Descubrí la libertad de viajar con Tiny Van Argentina. Todo lo que necesitás, ya está a bordo.",
  keywords: ["motorhome", "alquiler", "argentina", "van", "viajes", "aventura"],
  openGraph: {
    title: "Tiny Van Argentina | Alquiler de Motorhomes",
    description: "Descubrí la libertad de viajar con Tiny Van Argentina. Todo lo que necesitás, ya está a bordo.",
    type: "website",
    locale: "es_AR",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${outfit.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
