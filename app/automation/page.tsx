import { Header } from "@/components/header"
import { AutomationSection } from "@/components/automation-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { HexBackground } from "@/components/hex-background"
// import { N8nChat } from "@/components/n8n-chat"

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HexBackground />
      <Header />
      <AutomationSection />
      <ContactSection />
      <Footer />
      {/* <N8nChat /> */}
    </div>
  )
}
