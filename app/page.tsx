import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { Hero } from "@/components/sections/hero"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
