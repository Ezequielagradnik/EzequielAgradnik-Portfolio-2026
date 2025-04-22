import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ezequiel Agradnik - Full Stack Developer & Tech Explorer",
  description:
    "Portfolio of Ezequiel Agradnik, a Full Stack Developer and Tech Explorer specializing in modern web technologies.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
