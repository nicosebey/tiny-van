import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export default function Button({ children, variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  const baseStyles = "font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center"

  const variants = {
    primary: "bg-primary text-beige hover:bg-primary-dark shadow-lg hover:shadow-xl",
    secondary: "bg-accent text-beige hover:bg-secondary shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-beige",
  }

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
