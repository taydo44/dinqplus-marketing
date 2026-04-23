"use client"

import React from "react"

const ROW1 = [
  { name: "Stripe", bg: "#635BFF", letter: "S" },
  { name: "Supabase", bg: "#3ECF8E", letter: "SB" },
  { name: "Next.js", bg: "#000000", letter: "N" },
  { name: "Vercel", bg: "#000000", letter: "V" },
  { name: "Tailwind", bg: "#06B6D4", letter: "TW" },
  { name: "Resend", bg: "#000000", letter: "R" },
  { name: "Framer", bg: "#0055FF", letter: "FM" },
]

const ROW2 = [
  { name: "shadcn/ui", bg: "#000000", letter: "UI" },
  { name: "TypeScript", bg: "#3178C6", letter: "TS" },
  { name: "Sentry", bg: "#362D59", letter: "SE" },
  { name: "GitHub", bg: "#181717", letter: "GH" },
  { name: "Docker", bg: "#2496ED", letter: "DO" },
  { name: "PostgreSQL", bg: "#4169E1", letter: "PG" },
  { name: "AWS", bg: "#FF9900", letter: "AW" },
]

const repeated = (arr: typeof ROW1, n = 4) =>
  Array.from({ length: n }).flatMap(() => arr)

export function IntegrationCarousel() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="text-center mb-12">
        <span
          className="inline-flex items-center px-4 py-2 rounded-full text-sm mb-4"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
        >
          ⚡ Integrations
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Built with the best tools
        </h2>
        <p className="text-white/40 text-lg">
          Every vertical runs on a battle-tested modern stack.
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Row 1 — scrolls left */}
        <div className="flex gap-6 mb-6 whitespace-nowrap" style={{ animation: "scrollLeft 30s linear infinite" }}>
          {repeated(ROW1).map((tool, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ background: tool.bg }}
              >
                {tool.letter}
              </div>
              <span className="text-white/60 text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex gap-6 whitespace-nowrap" style={{ animation: "scrollRight 35s linear infinite" }}>
          {repeated(ROW2).map((tool, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ background: tool.bg }}
              >
                {tool.letter}
              </div>
              <span className="text-white/60 text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-32 pointer-events-none" style={{ background: "linear-gradient(to right, #0A0A0F, transparent)" }} />
        <div className="absolute right-0 top-0 h-full w-32 pointer-events-none" style={{ background: "linear-gradient(to left, #0A0A0F, transparent)" }} />
      </div>

      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}