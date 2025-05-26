"use client"

import { Bot, Workflow, Zap, BarChart3, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function AutomationSection() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-4 py-20 relative z-10">
      {/* Back to home link */}
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-emerald-400 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("automation.backToHome")}
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          {t("automation.title")}
        </h1>
        <p className="text-xl text-gray-400 mb-8">{t("automation.subtitle")}</p>

        {/* n8n Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">n8n</span>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg">Powered by n8n</h3>
              <p className="text-gray-400 text-sm">Open Source Automation Platform</p>
            </div>
          </div>
        </div>

        <p className="text-gray-300 max-w-4xl mx-auto mb-12 text-lg leading-relaxed">{t("automation.description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card className="bg-gray-900 border-gray-800 text-center hover:border-purple-800 transition-colors">
          <CardContent className="pt-6">
            <div className="rounded-full bg-purple-900/30 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Workflow className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="font-bold mb-3 text-lg">{t("automation.features.workflows")}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Visual workflow builder for complex business processes with drag-and-drop simplicity
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 text-center hover:border-blue-800 transition-colors">
          <CardContent className="pt-6">
            <div className="rounded-full bg-blue-900/30 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Bot className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="font-bold mb-3 text-lg">{t("automation.features.ai")}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Integrate OpenAI, Claude, and other AI models for intelligent data processing and decision making
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 text-center hover:border-emerald-800 transition-colors">
          <CardContent className="pt-6">
            <div className="rounded-full bg-emerald-900/30 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Zap className="h-8 w-8 text-emerald-400" />
            </div>
            <h3 className="font-bold mb-3 text-lg">{t("automation.features.apis")}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connect 400+ services including Slack, Google Sheets, CRM systems, and custom APIs
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 text-center hover:border-orange-800 transition-colors">
          <CardContent className="pt-6">
            <div className="rounded-full bg-orange-900/30 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <BarChart3 className="h-8 w-8 text-orange-400" />
            </div>
            <h3 className="font-bold mb-3 text-lg">{t("automation.features.monitoring")}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Real-time monitoring, error handling, and performance optimization for reliable automation
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Use Cases Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Common Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3">Lead Processing</h3>
              <p className="text-gray-400 text-sm">
                Automatically capture leads from forms, enrich with AI, and distribute to sales teams
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3">Content Generation</h3>
              <p className="text-gray-400 text-sm">
                AI-powered content creation, social media posting, and email marketing automation
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3">Data Synchronization</h3>
              <p className="text-gray-400 text-sm">
                Keep your CRM, spreadsheets, and databases in sync across multiple platforms
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center">
        <Link href="#contact">
          <Button className="bg-pink-700 hover:bg-pink-600 text-white text-lg px-8 py-3">
            {t("automation.cta")}
          </Button>
        </Link>
      </div>
    </section>
  )
}
