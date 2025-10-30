"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#sobre-la-van", label: "Sobre la Van" },
    // { href: "#requisitos", label: "Requisitos" },
    { href: "#contacto", label: "Contacto" },
  ]

  const linkStyle: React.CSSProperties = {
    color: "#F7F4E4",
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    textTransform: "uppercase",
  }

  const desktopLinkStyle: React.CSSProperties = {
    ...linkStyle,
    fontSize: 21,
  }

  const mobileLinkStyle: React.CSSProperties = {
    ...linkStyle,
    fontSize: 16,
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex items-center justify-between h-16 md:h-20 max-w-full">
         
          <Link href="/" className="flex items-center flex-shrink-0 min-w-0">
            <img src="/logo.png" alt="Tiny Van Argentina" className="h-8 md:h-10 w-auto object-contain max-w-full" />
          </Link>

         
          <nav className="hidden md:flex space-x-8 lg:space-x-12 mr-4 flex-shrink-0">
            {navLinks.map((link) => (
            <div key={link.href} style={{marginRight:'1rem'}}>
              <Link
                href={link.href}
                style={desktopLinkStyle}
                className="transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {link.label}
              </Link>
            </div>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-beige hover:text-accent transition-colors flex-shrink-0"
            aria-label="Toggle menu"
            >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - positioned absolutely to overlay content */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 w-full bg-primary border-t border-accent/30 shadow-lg" style={{zIndex: 40}}>
          <nav className="w-full py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={mobileLinkStyle}
                className="block py-3 transition-colors duration-200 font-medium text-center hover:bg-accent/20 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
