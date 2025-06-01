import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
// import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { HexBackground } from "@/components/hex-background"
// import { N8nChat } from "@/components/n8n-chat"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HexBackground />
      <Header />
      <HeroSection />
      <ProjectsSection />
      {/* <SkillsSection /> */}
      <AboutSection />
      <ContactSection />
      <Footer />
      {/* <N8nChat /> */}
    </div>
  )
}
