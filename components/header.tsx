"use client"

import Link from "next/link"
import { Hexagon } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const { t } = useLanguage()
  return (
    <header className="container mx-auto py-6 px-4 flex justify-between items-center relative z-10">
      <div className="flex items-center gap-2">
        <Hexagon className="h-8 w-8 text-emerald-500" />
        <span className="font-bold text-xl">Lulox</span>
      </div>
      <nav className="hidden md:flex gap-6">
        <Link href="/#projects" className="hover:text-emerald-400 transition-colors">
          {t("nav.projects")}
        </Link>
        <Link href="/#skills" className="hover:text-emerald-400 transition-colors">
          {t("nav.skills")}
        </Link>
        <Link href="/automation" className="hover:text-purple-400 transition-colors">
          {t("nav.automation")}
        </Link>
        {/* <Link
          href="#about"
          className="hover:text-emerald-400 transition-colors"
        >
          About
        </Link> */}
        <Link href="/#contact" className="hover:text-emerald-400 transition-colors">
          {t("nav.contact")}
        </Link>
      </nav>
      <LanguageSwitcher />
      {/* <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-950 hover:text-white">
        Connect Wallet
      </Button> */}
    </header>
  )
}
