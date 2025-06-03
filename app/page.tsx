import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { HexBackground } from "@/components/hex-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HexBackground />
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
