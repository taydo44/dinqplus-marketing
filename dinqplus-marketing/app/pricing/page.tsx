"use client"
import { Navbar } from "@/components/navbar"

export default function PricingPage() {
  return (
    <div style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)", minHeight: "100vh" }}>
      <Navbar />
      <div className="flex flex-col items-center justify-center" style={{ minHeight: "80vh" }}>
        <p className="text-white/40 text-sm uppercase tracking-widest">Coming soon</p>
      </div>
    </div>
  )
}
