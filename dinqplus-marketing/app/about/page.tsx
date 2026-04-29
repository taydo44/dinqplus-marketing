"use client"
import { Navbar } from "@/components/navbar"
import { Globe } from "@/components/globe"

export default function AboutPage() {
  return (
    <div style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)", minHeight: "100vh" }}>
      <Navbar />

      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-white/30 text-xs font-medium uppercase tracking-widest mb-4">Global reach</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ethiopian entrepreneurs,{" "}
                <span style={{ background: "linear-gradient(135deg, #a78bfa, #7F77DD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  everywhere
                </span>
              </h3>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                From Addis Ababa to Seattle, London, Dubai, Toronto and beyond — Dinq+ serves Ethiopian business owners wherever they have built their lives.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Addis Ababa", "Seattle", "London", "Dubai", "Toronto", "Stockholm", "Melbourne", "Johannesburg"].map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="text-white/50 text-sm">{city}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Globe className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
