"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-400" />
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-xs ${
          language === "en"
            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
            : "border-gray-700 hover:bg-gray-800 text-white hover:text-emerald-400"
        }`}
      >
        EN
      </Button>
      <Button
        variant={language === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("es")}
        className={`px-2 py-1 text-xs ${
          language === "es"
            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
            : "border-gray-700 hover:bg-gray-800 text-white hover:text-emerald-400"
        }`}
      >
        ES
      </Button>
    </div>
  )
}
