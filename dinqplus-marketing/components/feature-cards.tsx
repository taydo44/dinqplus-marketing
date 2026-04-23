"use client"

import React, { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

const features = [
  {
    icon: "◈",
    title: "Industry-specific",
    description: "Every vertical has its own sidebar, dashboard metrics, and workflows — built for that business type, not adapted from a generic template.",
    link: "/verticals",
    linkText: "See all verticals",
    glowColor: { base: 280, spread: 300 },
  },
  {
    icon: "◉",
    title: "Billing handled",
    description: "Stripe payments built in from day one. Invoices, subscriptions, trial management — your clients pay inside the platform, not through a third-party link.",
    link: "/pricing",
    linkText: "See pricing",
    glowColor: { base: 245, spread: 200 },
  },
  {
    icon: "◍",
    title: "Your whole team",
    description: "Multi-role access across every vertical. Admin, manager, staff — each role sees exactly what they need. No extra seats, no per-user pricing.",
    link: "/verticals",
    linkText: "Explore verticals",
    glowColor: { base: 160, spread: 200 },
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e
      if (cardRef.current) {
        cardRef.current.style.setProperty("--x", x.toFixed(2))
        cardRef.current.style.setProperty("--xp", (x / window.innerWidth).toFixed(2))
        cardRef.current.style.setProperty("--y", y.toFixed(2))
        cardRef.current.style.setProperty("--yp", (y / window.innerHeight).toFixed(2))
      }
    }
    document.addEventListener("pointermove", syncPointer)
    return () => document.removeEventListener("pointermove", syncPointer)
  }, [])

  const beforeAfterStyles = `
    [data-glow-feature]::before,
    [data-glow-feature]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    [data-glow-feature]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) 100% 50% / 1), transparent 100%
      );
      filter: brightness(2);
    }
    [data-glow-feature]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
        hsl(0 100% 100% / 1), transparent 100%
      );
    }
    [data-glow-feature] [data-glow-feature] {
      position: absolute;
      inset: 0;
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
  `

  return (
    <>
      {index === 0 && <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />}
      <div
        ref={cardRef}
        data-glow-feature
        style={{
          "--base": feature.glowColor.base,
          "--spread": feature.glowColor.spread,
          "--radius": "16",
          "--border": "2",
          "--backdrop": "rgba(255,255,255,0.03)",
          "--backup-border": "rgba(255,255,255,0.08)",
          "--size": "200",
          "--border-size": "calc(var(--border, 2) * 1px)",
          "--spotlight-size": "calc(var(--size, 150) * 1px)",
          "--hue": `calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))`,
          backgroundImage: `radial-gradient(
            var(--spotlight-size) var(--spotlight-size) at
            calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
            hsl(var(--hue, 210) 100% 70% / 0.08), transparent
          )`,
          backgroundColor: "var(--backdrop)",
          backgroundAttachment: "fixed",
          border: "var(--border-size) solid var(--backup-border)",
          position: "relative",
          borderRadius: "16px",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          cursor: "default",
        } as React.CSSProperties}
      >
        <div data-glow-feature />
        <div style={{ fontSize: "28px", color: "rgba(167,139,250,0.8)" }}>{feature.icon}</div>
        <div>
          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "white", marginBottom: "8px" }}>
            {feature.title}
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            {feature.description}
          </p>
        </div>
        <button
          onClick={() => router.push(feature.link)}
          style={{
            marginTop: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "rgba(167,139,250,0.8)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontWeight: 500,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "white" }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(167,139,250,0.8)" }}
        >
          {feature.linkText} →
        </button>
      </div>
    </>
  )
}

export function FeatureCards() {
  return (
    <section className="px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Everything your business needs
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            One platform, built right. No duct tape, no workarounds.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}