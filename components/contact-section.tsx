"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import CalendlyEmbed from "./CalendlyEmbed"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="container mx-auto px-4 py-20 relative z-10">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-center">{t("contact.title")}</CardTitle>
          <p className="text-center text-gray-400 mt-2">{t("contact.scheduleDescription")}</p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="w-full rounded-lg overflow-hidden bg-gray-800/50">
            <div className="aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] w-full">
              <CalendlyEmbed url="https://calendly.com/lulox-eth/30min" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
