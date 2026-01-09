"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { SectionContainer } from "@/components/ui/section-container"
import { SocialLinks } from "@/components/ui/social-links"

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-center shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to collaborate.
          </p>
          <SocialLinks
            links={portfolioData.social}
            className="justify-center gap-6"
            variant="dark"
          />
        </motion.div>
      </div>
    </section>
  )
}
