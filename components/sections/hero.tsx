"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { SocialLinks } from "@/components/ui/social-links"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
          {portfolioData.personal.name}
        </h1>
        <p className="text-2xl sm:text-3xl text-gray-700 mb-6 font-medium">
          {portfolioData.personal.title}
        </p>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          {portfolioData.personal.tagline}
        </p>
        <SocialLinks links={portfolioData.social} className="justify-center" />
      </motion.div>
    </section>
  )
}
