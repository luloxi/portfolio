"use client";

import Link from "next/link";
import { Hexagon, Github, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { SocialIcon } from "react-social-icons";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-gray-800 py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Hexagon className="h-6 w-6 text-emerald-500" />
            <span className="font-bold">Lulox</span>
          </div>
          <div className="flex gap-4">
            <SocialIcon
              url="https://github.com/luloxi"
              style={{ height: 45, width: 45 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/lulox/"
              style={{ height: 45, width: 45 }}
            />
            <SocialIcon
              url="https://x.com/LuloxDev"
              style={{ height: 45, width: 45 }}
            />
            <SocialIcon
              url="https://t.me/lulox"
              style={{ height: 45, width: 45 }}
            />
            <SocialIcon
              url="https://instagram.com/lulo.bianco"
              style={{ height: 45, width: 45 }}
            />
          </div>
          <div className="flex gap-4 mt-4 md:mt-0"></div>
        </div>
      </div>
    </footer>
  );
}
