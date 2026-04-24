"use client"
import { Navbar } from "@/components/navbar"
import AuroraPricing from "@/components/aurora-pricing"
import { useRouter } from "next/navigation"

export default function PricingPage() {
  const router = useRouter()

  return (
    <div style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)", minHeight: "100vh" }}>

      {/* Header */}
      <Navbar />

      {/* Aurora pricing cards */}
      <AuroraPricing />
    </div>
  )
}