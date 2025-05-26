import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

export const metadata: Metadata = {
  title: "Lulox's Portfolio",
  description:
    "Web3 developer & blockchain engineer offering smart contract development, DApps, and AI-powered automation services",
  generator: "v0.dev",
  keywords: ["Web3", "Blockchain", "Smart Contracts", "DApps", "Automation", "n8n", "AI"],
  authors: [{ name: "Lulox" }],
  creator: "Lulox",
  publisher: "Lulox",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lulox.dev",
    title: "Lulox's Portfolio - Web3 Developer & Blockchain Engineer",
    description:
      "Web3 developer & blockchain engineer offering smart contract development, DApps, and AI-powered automation services",
    siteName: "Lulox's Portfolio",
    images: [
      {
        url: "/social-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Lulox's Portfolio - Web3 Developer & Blockchain Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lulox's Portfolio - Web3 Developer & Blockchain Engineer",
    description:
      "Web3 developer & blockchain engineer offering smart contract development, DApps, and AI-powered automation services",
    images: ["/social-thumbnail.jpg"],
    creator: "@lulox",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
