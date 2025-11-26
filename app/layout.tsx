import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Slake - World's Largest Online Casino and Sportsbook",
  description:
    "Join the world's largest online casino and sportsbook. Play thousands of games and bet on your favorite sports with Slake.",
  metadataBase: new URL("https://www.slake.site"),
  openGraph: {
    title: "Slake - World's Largest Online Casino and Sportsbook",
    description:
      "Join the world's largest online casino and sportsbook. Play thousands of games and bet on your favorite sports with Slake.",
    url: "https://www.slake.site",
    siteName: "Slake",
    images: [
      {
        url: "/images/og-image-slake.jpg",
        width: 1200,
        height: 630,
        alt: "Slake - Online Casino and Sportsbook",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slake - World's Largest Online Casino and Sportsbook",
    description:
      "Join the world's largest online casino and sportsbook. Play thousands of games and bet on your favorite sports with Slake.",
    images: ["/images/og-image-slake.jpg"],
  },
  icons: {
    icon: "/images/favicon-slake.png",
    shortcut: "/images/favicon-slake.png",
    apple: "/images/favicon-slake.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
