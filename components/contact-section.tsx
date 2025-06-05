"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import CalendlyEmbed from "./CalendlyEmbed"

export function ContactSection() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)
  const email = "lulox.eth@protonmail.com"

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <section id="calendly" className="px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center">{t("contact.title")}</h2>
        <p className="text-center text-gray-400 mt-2">{t("contact.scheduleDescription")}</p>

        <div className="mt-6 flex justify-center">
          <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 max-w-fit">
            <span className="text-gray-300 mr-3">{email}</span>
            <Button onClick={copyEmail} variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-700">
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-gray-400" />}
            </Button>
          </div>
        </div>

        <div className="w-full mt-8" style={{ height: "700px" }}>
          <CalendlyEmbed url="https://calendly.com/lulox-eth/30min" />
        </div>
      </div>
    </section>
  )
}
