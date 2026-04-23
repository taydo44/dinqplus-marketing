import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Dinq+ — Software for Ethiopian entrepreneurs worldwide",
    template: "%s | Dinq+",
  },
  description:
    "One platform built for Ethiopian businesses — wherever you are in the world. Pick your vertical, start free for 7 days, go live in minutes.",
  keywords: [
    "Ethiopian SaaS",
    "Ethiopian business software",
    "diaspora business",
    "salon software",
    "auto repair software",
    "manufacturing software",
    "DinqBook",
    "DinqShop",
    "DinqFactory",
  ],
  authors: [{ name: "Dinq Digital", url: "https://dinqdigital.com" }],
  creator: "Dinq Digital",
  metadataBase: new URL("https://dinqdigital.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dinqdigital.com",
    siteName: "Dinq+",
    title: "Dinq+ — Software for Ethiopian entrepreneurs worldwide",
    description:
      "One platform built for Ethiopian businesses — wherever you are in the world. Pick your vertical, start free for 7 days.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dinq+ — Software for Ethiopian entrepreneurs worldwide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinq+ — Software for Ethiopian entrepreneurs worldwide",
    description:
      "One platform built for Ethiopian businesses — wherever you are in the world.",
    images: ["/opengraph-image"],
    creator: "@dinqdigital",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}