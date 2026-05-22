import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n/context"

const siteUrl = "https://ezequielagradnik.com"
const title = "Ezequiel Agradnik — Full-Stack & Automation Developer"
const description =
  "18-year-old developer based in Argentina. Automation Developer at Satellites on Fire, Cybersecurity student at Universidad de Palermo. Building websites and automations for 10+ clients across Argentina, Dubai, and Israel."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Ezequiel Agradnik",
  },
  description,
  keywords: [
    "Ezequiel Agradnik",
    "Full Stack Developer",
    "Automation Developer",
    "Next.js Developer",
    "React Developer",
    "n8n",
    "Argentina Developer",
    "Cybersecurity",
    "Freelance Developer",
    "Satellites on Fire",
  ],
  authors: [{ name: "Ezequiel Agradnik", url: siteUrl }],
  creator: "Ezequiel Agradnik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ezequiel Agradnik",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@ezequielagradnik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
