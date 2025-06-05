import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HexBackground } from "@/components/hex-background"
import { ProjectsSection } from "@/components/projects-section"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HexBackground />
      <Header />
      <div className="pt-20">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  )
}
