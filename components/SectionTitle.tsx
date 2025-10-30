import type { ReactNode } from "react"

interface SectionTitleProps {
  children: ReactNode
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionTitle({ children, subtitle, centered = false, light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance ${
          light ? "text-beige" : "text-primary"
        }`}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-beige/90" : "text-secondary"} text-pretty`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
