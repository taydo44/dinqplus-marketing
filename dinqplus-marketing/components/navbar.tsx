"use client"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

const links = [
  { label: "Home", href: "/" },
  { label: "Verticals", href: "/verticals" },
  { label: "Pricing", href: "/pricing" },
  { label: "Studio", href: "/studio" },
]

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <header className="relative z-50 flex items-center justify-between p-6">
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="gooey-nav" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow-nav" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        className="cursor-pointer select-none"
        style={{ filter: "url(#logo-glow-nav)" }}
      >
        <span className="text-2xl font-black tracking-tight text-white">
          Dinq
          <sup
            style={{
              background: "linear-gradient(135deg, #a78bfa, #ffffff, #7F77DD)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "14px",
              fontWeight: 900,
            }}
          >
            +
          </sup>
        </span>
      </div>

      {/* Nav links */}
      <nav className="flex items-center gap-1">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "12px",
                fontWeight: isActive ? 500 : 300,
                padding: "8px 14px",
                borderRadius: "999px",
                textDecoration: "none",
                color: isActive ? "white" : "rgba(255,255,255,0.6)",
                background: isActive ? "rgba(107,33,168,0.2)" : "transparent",
                border: isActive ? "1px solid rgba(107,33,168,0.3)" : "1px solid transparent",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "white"
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)"
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)"
                  e.currentTarget.style.background = "transparent"
                }
              }}
            >
              {link.label}
            </a>
          )
        })}
      </nav>

      {/* Login button — gooey */}
      <div
        className="relative flex items-center group"
        style={{ filter: "url(#gooey-nav)" }}
      >
        <button
          onClick={() => window.open("https://app.dinqdigital.com/login", "_blank")}
          style={{
            position: "absolute",
            right: 0,
            padding: "0 10px",
            borderRadius: "999px",
            background: "white",
            color: "black",
            fontSize: "12px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "translateX(-40px)",
            zIndex: 0,
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          className="group-hover:-translate-x-20"
        >
          <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <button
          onClick={() => window.open("https://app.dinqdigital.com/login", "_blank")}
          style={{
            padding: "0 24px",
            borderRadius: "999px",
            background: "white",
            color: "black",
            fontSize: "12px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            zIndex: 10,
            border: "none",
            cursor: "pointer",
            position: "relative",
            fontWeight: 500,
          }}
        >
          Login
        </button>
      </div>
    </header>
  )
}