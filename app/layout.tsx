import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight, Heebo } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n/context"
import SmoothScroll from "@/components/smooth-scroll"

// One sans for everything (display and body), mono for meta.
const sans = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

// Hebrew fallback; Inter Tight has no Hebrew glyphs.
const sansHe = Heebo({
  subsets: ["hebrew"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-he",
  display: "swap",
})

const siteUrl = "https://ezequielagradnik.com"
const title = "Ezequiel Agradnik — Full-Stack & Automation Developer"
const description =
  "19-year-old developer based in Argentina. Automation Developer at Satellites on Fire, Cybersecurity student at Universidad de Palermo. Building websites and automations for 10+ clients across Argentina, Israel, Chile, and the USA."

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
  themeColor: "#f7f6f3",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable} ${sansHe.variable} ${GeistMono.variable}`}>
      <body>
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  )
}
