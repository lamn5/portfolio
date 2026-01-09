"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-gray-900 shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("home")}
            className={`text-sm font-semibold transition-colors ${
              isScrolled
                ? "text-gray-900 hover:text-gray-600"
                : "text-white hover:text-gray-300"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-sm font-semibold transition-colors ${
              isScrolled
                ? "text-gray-900 hover:text-gray-600"
                : "text-white hover:text-gray-300"
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
