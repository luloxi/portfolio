"use client"

import { Code, Zap, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="container mx-auto px-4 py-20 relative z-10">
      <h2 className="text-3xl font-bold mb-2">{t("skills.title")}</h2>
      <p className="text-gray-400 mb-12">{t("skills.subtitle")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="rounded-full bg-emerald-900/30 w-12 h-12 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t("skills.smartContracts.title")}</h3>
            <p className="text-gray-400 mb-4">{t("skills.smartContracts.description")}</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-gray-700">
                Solidity
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Foundry
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Hardhat
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Chainlink
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="rounded-full bg-emerald-900/30 w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t("skills.frontend.title")}</h3>
            <p className="text-gray-400 mb-4">{t("skills.frontend.description")}</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-gray-700">
                React
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Next.js
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Tailwind CSS
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                TypeScript
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Scaffold-ETH 2
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Wagmi
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Viem
              </Badge>
            </div>
          </CardContent>
        </Card>

        
      </div>
    </section>
  )
}
