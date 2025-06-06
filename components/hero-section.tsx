"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { SocialIcon } from "react-social-icons"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center relative z-10">
      {/* <Badge className="mb-4 bg-emerald-900 text-emerald-400 hover:bg-emerald-900">{t("hero.badge")}</Badge> */}
      <h1 className="text-4xl pb-3 md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
        {t("hero.title")}
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">{t("hero.subtitle")}</p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="#projects">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">{t("hero.viewProjects")}</Button>
        </Link>
        <Link href="#calendly">
          <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-white hover:text-emerald-400">
            <Mail className="mr-2 h-4 w-4" /> {t("hero.contactMe")}
          </Button>
        </Link>
      </div>
      <div className="flex gap-4 mt-12">
        <SocialIcon url="https://github.com/luloxi" style={{ height: 45, width: 45 }} />
        <SocialIcon url="https://www.linkedin.com/in/lulox/" style={{ height: 45, width: 45 }} />
        <SocialIcon url="https://x.com/LuloxDev" style={{ height: 45, width: 45 }} />
        <SocialIcon url="https://t.me/lulox" style={{ height: 45, width: 45 }} />
        <SocialIcon url="https://instagram.com/lulo.bianco" style={{ height: 45, width: 45 }} />
      </div>
    </section>
  )
}
