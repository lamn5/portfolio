import { portfolioData } from "@/lib/portfolio-data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-sm text-gray-400">
          © {currentYear} {portfolioData.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
