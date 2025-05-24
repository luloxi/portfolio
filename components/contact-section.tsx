import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Briefcase } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-center">Contact Me</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center p-6 rounded-lg bg-gray-800/50">
          <Mail className="h-10 w-10 text-emerald-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Email Me</h3>
          <p className="text-gray-400 mb-4">For project inquiries and collaborations</p>
          <Link href="mailto:lulox.eth@protonmail.com" className="text-emerald-400 hover:text-emerald-300">
            lulox.eth@protonmail.com
          </Link>
        </div>
        <div className="flex flex-col items-center p-6 rounded-lg bg-gray-800/50">
          <Briefcase className="h-10 w-10 text-emerald-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Hire Me on Fiverr</h3>
          <p className="text-gray-400 mb-4">For freelance projects and quick tasks</p>
          <Link
            href="https://www.fiverr.com/s/rElgrr7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300"
          >
            View Fiverr Profile
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
