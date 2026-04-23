"use client"
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
      <header className="flex items-center justify-between p-6">
        <span
          onClick={() => router.push("/")}
          className="text-2xl font-black text-white cursor-pointer tracking-tight"
        >
          Dinq<sup className="text-base" style={{ background: "linear-gradient(135deg, #a78bfa, #ffffff, #7F77DD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>+</sup>
        </span>
        <nav className="flex items-center gap-1">
          <a href="/" className="text-white/70 hover:text-white text-xs px-3 py-2 rounded-full hover:bg-white/10 transition-all">Home</a>
          <a href="/verticals" className="text-white/70 hover:text-white text-xs px-3 py-2 rounded-full hover:bg-white/10 transition-all">Verticals</a>
          <a href="/studio" className="text-white/70 hover:text-white text-xs px-3 py-2 rounded-full hover:bg-white/10 transition-all">Studio</a>
        </nav>
        <button
          onClick={() => window.open("https://app.dinqdigital.com/login", "_blank")}
          className="px-5 py-2 rounded-full bg-white text-black text-xs font-medium cursor-pointer border-none"
        >
          Login
        </button>
      </header>

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