"use client"

import Link from "next/link"
import { Hexagon, Github, Twitter, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-gray-800 py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Hexagon className="h-6 w-6 text-emerald-500" />
            <span className="font-bold">Lulox</span>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
             <Link
              href="https://github.com/luloxi"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/LuloxDev"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/lulox/"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
          
          </div>
        </div>
      </div>
    </footer>
  )
}
