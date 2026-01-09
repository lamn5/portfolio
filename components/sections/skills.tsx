"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { portfolioData } from "@/lib/portfolio-data"
import { SectionContainer } from "@/components/ui/section-container"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-6"
        >
          {portfolioData.skills.map((category) => (
            <motion.div
              key={category.category}
              variants={item}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 bg-white text-gray-900 rounded-xl text-sm font-medium border border-gray-200 hover:border-gray-900 hover:shadow-md transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
