"use client"
import { Navbar } from "@/components/navbar"
import AuroraPricing from "@/components/aurora-pricing"
import { CountdownBanner } from "@/components/countdown-banner"
import { useRouter } from "next/navigation"

const verticalPricing = [
  { name: "DinqBook", category: "Salon & beauty", price: "$29/mo", plan: "Starter" },
  { name: "DinqShop", category: "Auto repair", price: "$29/mo", plan: "Starter" },
  { name: "DinqProp", category: "Property management", price: "$29/mo", plan: "Starter" },
  { name: "DinqAgency", category: "Digital agency", price: "$49/mo", plan: "Pro" },
  { name: "DinqCare", category: "Home care", price: "$49/mo", plan: "Pro" },
  { name: "DinqFactory", category: "Manufacturing", price: "$79/mo", plan: "Factory" },
]

export default function PricingPage() {
  const router = useRouter()

  return (
    <div style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)", minHeight: "100vh" }}>

      {/* Header */}
      <Navbar />

      {/* Aurora pricing cards */}
      <AuroraPricing />

      {/* Per-vertical breakdown */}
      <section className="px-8 py-16" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-white/40 text-sm font-medium uppercase tracking-widest mb-8 text-center">
            Pricing by vertical
          </h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
            {verticalPricing.map((v, i) => (
              <div
                key={v.name}
                className="flex items-center justify-between px-6 py-4 transition-all hover:bg-white/5"
                style={{ borderBottom: i < verticalPricing.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-white font-semibold">{v.name}</span>
                  <span className="text-white/40 text-sm">{v.category}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(107,33,168,0.2)", color: "#a78bfa", border: "1px solid rgba(107,33,168,0.3)" }}
                  >
                    {v.plan}
                  </span>
                  <span className="text-white font-mono">{v.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown CTA */}
      <CountdownBanner />
    </div>
  )
}