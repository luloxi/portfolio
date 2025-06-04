"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center relative z-10">
      {/* <Badge className="mb-4 bg-emerald-900 text-emerald-400 hover:bg-emerald-900">{t("hero.badge")}</Badge> */}
      <h1 className="text-4xl pb-3 md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
        {t("hero.title")}
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
        {t("hero.subtitle")}
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="#projects">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            {t("hero.viewProjects")}
          </Button>
        </Link>
        <Link href="#contact">
          <Button
            variant="outline"
            className="border-gray-700 hover:bg-gray-800 text-white hover:text-emerald-400"
          >
            <Mail className="mr-2 h-4 w-4" /> {t("hero.contactMe")}
          </Button>
        </Link>
      </div>
      <div className="flex gap-4 mt-12">
        <Link
          href="https://github.com/luloxi"
          className="text-gray-400 hover:text-white transition-colors"
          target="_blank"
        >
          <Github className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/lulox/"
          className="text-gray-400 hover:text-white transition-colors"
          target="_blank"
        >
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link
          href="https://x.com/LuloxDev"
          className="text-gray-400 hover:text-white transition-colors"
          target="_blank"
        >
          <Telegram className="h-6 w-6" />
        </Link>
        <Link
          href="https://x.com/LuloxDev"
          className="text-gray-400 hover:text-white transition-colors"
          target="_blank"
        >
          <Twitter className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
}
