"use client";
import { Navbar } from "@/components/navbar";
import AuroraPricing from "@/components/aurora-pricing";

export default function PricingPage() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)",
      }}
    >
      <Navbar />
      <AuroraPricing />
    </div>
  );
}
