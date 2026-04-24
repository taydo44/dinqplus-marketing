"use client"
import { Navbar } from "@/components/navbar"
import { GlowCard } from "@/components/glow-card"
import OrbitalTimeline from "@/components/orbital-timeline"
import { useRouter } from "next/navigation"

const activeVerticals = [
  {
    name: "DinqBook",
    tagline: "Salon & beauty management",
    description: "Appointments, style gallery, tips, loyalty programs and client profiles.",
    price: "$29/mo",
    color: "#6B21A8",
    glow: "purple" as const,
    href: "https://app.dinqdigital.com/signup?vertical=dinqbook",
  },
  {
    name: "DinqShop",
    tagline: "Auto repair management",
    description: "Work orders, vehicle profiles, services, booking and invoicing.",
    price: "$29/mo",
    color: "#1D4ED8",
    glow: "blue" as const,
    href: "https://app.dinqdigital.com/signup?vertical=dinqshop",
  },
  {
    name: "DinqFactory",
    tagline: "Manufacturing operations",
    description: "Production, inventory, store and marketing manager roles in one platform.",
    price: "$79/mo",
    color: "#065F46",
    glow: "green" as const,
    href: "https://app.dinqdigital.com/signup?vertical=dinqfactory",
  },
  {
    name: "DinqAgency",
    tagline: "Digital agency toolkit",
    description: "Projects, clients, invoicing and team management for creative studios.",
    price: "$49/mo",
    color: "#4F46E5",
    glow: "indigo" as const,
    href: "https://app.dinqdigital.com/signup?vertical=dinqagency",
  },
  {
    name: "DinqProp",
    tagline: "Property management",
    description: "Properties, tenants, rent payments and maintenance requests.",
    price: "$29/mo",
    color: "#047857",
    glow: "emerald" as const,
    href: "https://app.dinqdigital.com/signup?vertical=dinqprop",
  },
  {
    name: "DinqCare",
    tagline: "Home care operations",
    description: "Care clients, staff, medications, tasks and incident tracking.",
    price: "$49/mo",
    color: "#DB2877",
    glow: "pink" as const,
    href: "https://app.dinqdigital.com/signup?vertical=dinqcare",
  },
]

const comingSoon = [
  "DinqEats", "DinqRide", "DinqFit", "DinqLearn",
  "DinqServe", "DinqMarket", "DinqLogix", "DinqCargo",
  "DinqPay", "DinqLegal", "DinqEvents", "DinqStyle",
  "DinqTravel", "DinqStudio", "DinqGrow", "Dinqify",
]

export default function VerticalsPage() {
  const router = useRouter()

  return (
    <div style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)", minHeight: "100vh" }}>

      {/* Header */}
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="px-8 pt-16 pb-12 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
          <span className="text-white/80 text-sm">6 verticals live — 16 coming soon</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Find your{" "}
          <span style={{ background: "linear-gradient(135deg, #a78bfa, #7F77DD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            vertical
          </span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          One platform, built for every type of Ethiopian business — wherever you are in the world.
        </p>
      </section>

      {/* Section 2 — Active verticals */}
      <section className="px-8 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeVerticals.map((v) => (
            <GlowCard key={v.name} glowColor={v.glow}>
              <div className="flex flex-col h-full gap-4">
                <div className="flex items-center justify-between">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: v.color, boxShadow: `0 0 12px ${v.color}` }}
                  />
                  <span className="text-white/40 text-xs font-mono">{v.price}</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{v.name}</h3>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-3">{v.tagline}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{v.description}</p>
                </div>
                <button
                  onClick={() => window.open(v.href, "_blank")}
                  className="mt-auto w-full py-2.5 rounded-xl text-sm font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                >
                  Start free trial →
                </button>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Section 3 — Coming soon */}
      <section className="px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white/40 text-sm font-medium uppercase tracking-widest mb-6 text-center">Coming soon</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {comingSoon.map((name) => (
              <div
                key={name}
                className="px-3 py-2.5 rounded-xl border border-white/5 bg-white/[0.03] text-center"
              >
                <span className="text-white/30 text-xs font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Orbital Timeline */}
      <section>
        <div className="text-center py-8">
          <h2 className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">The journey</h2>
          <p className="text-white/60 text-sm">Click any node to explore the Dinq+ story</p>
        </div>
        <OrbitalTimeline />
      </section>
    </div>
  )
}

