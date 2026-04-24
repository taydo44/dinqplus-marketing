"use client"
import { Navbar } from "@/components/navbar"
import { useRouter } from "next/navigation"
import { Globe } from "@/components/globe"
import { Gallery } from "@/components/gallery"

export default function StudioPage() {
  const router = useRouter()

  return (
    <div style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)", minHeight: "100vh" }}>

      {/* Header */}
      <Navbar />

      {/* Hero */}
      <section className="px-8 pt-16 pb-12 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
          <span className="text-white/60 text-sm">Dinq Digital — the studio behind Dinq+</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          We build{" "}
          <span style={{ background: "linear-gradient(135deg, #a78bfa, #7F77DD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            what we sell
          </span>
        </h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          Ethiopian-founded, Seattle-based. We design and build software for Ethiopian entrepreneurs everywhere.
        </p>
      </section>

      {/* Gallery */}
      <section className="px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white/30 text-xs font-medium uppercase tracking-widest mb-8">Our work</h2>
          <Gallery />
        </div>
      </section>

      {/* Globe */}
      <section className="px-8 py-20" style={{ background: "rgba(0,0,0,0.3)" }}>
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
                From Addis Ababa to Seattle, London, Dubai, Toronto and beyond — Dinq+ serves Ethiopian business owners wherever they've built their lives.
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

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-white/30 text-sm">© 2025 Dinq Digital. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="/" className="text-white/30 hover:text-white/60 text-sm transition-colors">Home</a>
            <a href="/verticals" className="text-white/30 hover:text-white/60 text-sm transition-colors">Verticals</a>
            <a href="/pricing" className="text-white/30 hover:text-white/60 text-sm transition-colors">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  )
}