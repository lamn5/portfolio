"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { portfolioData } from "@/lib/portfolio-data"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects showcasing my skills and experience
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-900 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform flex-shrink-0">
                  {project.id.split("-")[1]}
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="sm" className="w-full sm:w-auto">
                  {project.linkText} →
                </Button>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
