"use client"
import Link from "next/link"

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Verticals", href: "/verticals" },
  { title: "Pricing", href: "/pricing" },
  { title: "Studio", href: "/studio" },
]

const socialLinks = [
  { label: "GitHub", href: "https://github.com/techwteddy", icon: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com/company/dinqdigital", icon: "LI" },
  { label: "Instagram", href: "https://instagram.com/dinqdigital", icon: "IG" },
  { label: "X", href: "https://x.com/dinqdigital", icon: "X" },
]

export function Footer() {
  return (
    <footer className="py-12 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-8">
        <Link href="/" className="select-none">
          <span className="text-2xl font-black tracking-tight text-white">
            Dinq
            <sup style={{ background: "linear-gradient(135deg, #a78bfa, #ffffff, #7F77DD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontSize: "14px", fontWeight: 900 }}>+</sup>
          </span>
        </Link>
        <div className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
              {s.icon}
            </a>
          ))}
        </div>
        <span className="text-sm text-center" style={{ color: "rgba(255,255,255,0.2)" }}>
          {new Date().getFullYear()} Dinq Digital. All rights reserved.
        </span>
      </div>
    </footer>
  )
}