"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Briefcase, Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { submitContactForm } from "@/app/actions/contact"
import { useActionState } from "react"

export function ContactSection() {
  const { t } = useLanguage()
  const [state, action, isPending] = useActionState(submitContactForm, null)

  return (
    <section id="contact" className="container mx-auto px-4 py-20 relative z-10">
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-center">{t("contact.title")}</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="flex flex-col items-center p-6 rounded-lg bg-gray-800/50">
                <Mail className="h-10 w-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{t("contact.email.title")}</h3>
                <p className="text-gray-400 mb-4 text-center">{t("contact.email.description")}</p>
                <Link href="mailto:lulox.eth@protonmail.com" className="text-emerald-400 hover:text-emerald-300">
                  lulox.eth@protonmail.com
                </Link>
              </div>
              <div className="flex flex-col items-center p-6 rounded-lg bg-gray-800/50">
                <Briefcase className="h-10 w-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{t("contact.fiverr.title")}</h3>
                <p className="text-gray-400 mb-4 text-center">{t("contact.fiverr.description")}</p>
                <Link
                  href="https://www.fiverr.com/s/rElgrr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  {t("contact.fiverr.link")}
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 rounded-lg p-6 relative">
              <h3 className="text-xl font-bold mb-4 text-center">{t("contact.form.title")}</h3>
              <form action={action} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isPending || state?.success}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    disabled={isPending || state?.success}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50 resize-none"
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending || state?.success}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isPending ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t("contact.form.send")}
                    </>
                  )}
                </button>
              </form>

              {/* Success Overlay */}
              {state?.success && (
                <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm rounded-lg flex items-center justify-center p-6">
                  <div className="text-center">
                    <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-emerald-400 mb-2">{t("contact.form.successTitle")}</h4>
                    <p className="text-emerald-200 text-lg">{state.message}</p>
                  </div>
                </div>
              )}

              {/* Error Messages */}
              {state && !state.success && (
                <div className="mt-4 p-4 rounded-lg bg-red-900/50 border border-red-500 text-red-200">
                  {state.error}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
