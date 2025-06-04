"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import CalendlyEmbed from "./CalendlyEmbed";
import Link from "next/link";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="calendly" className="px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center">{t("contact.title")}</h2>
        <p className="text-center text-gray-400 mt-2">
          {t("contact.scheduleDescription")}
        </p>
        <p className="mt-2 flex flex-row justify-center items-center">
          <Link
            className="text-blue-600 hover:text-blue-700 underline"
            href="mailto:lulox.eth@protonmail.com"
          >
            lulox.eth@protonmail.com
          </Link>
        </p>
        <div className="w-full" style={{ height: "700px" }}>
          <CalendlyEmbed url="https://calendly.com/lulox-eth/30min" />
        </div>
      </div>
    </section>
  );
}
