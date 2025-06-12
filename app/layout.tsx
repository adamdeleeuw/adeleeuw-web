import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "de Leeuw Digital - Web Dev Agency",
  description:
    "Professional web development services including landing pages, full websites, SEO optimization, and website upgrades. Fast delivery and modern design.",
  keywords: "web development, landing pages, websites, SEO, optimization, responsive design",
  authors: [{ name: "Adam de Leeuw" }],
  viewport: "width=device-width, initial-scale=1"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/logoDL.png" />
        {/* Other head tags */}
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
