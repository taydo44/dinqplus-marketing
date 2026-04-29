"use client"
import { Navbar } from "@/components/navbar"
import Pricing from "@/components/pricing"
import { FAQ } from "@/components/faq"

export default function PricingPage() {
  return (
    <>
      <div className="relative z-50">
        <Navbar />
      </div>
      <Pricing />
      <FAQ />
    </>
  )
}
