"use client"
import { useRouter } from "next/navigation"
import { Globe } from "@/components/globe"
import { Gallery } from "@/components/gallery"
import { ServicesGrid } from "@/components/services-grid"
import { TeamSection } from "@/components/team-section"
import { LocationCard } from "@/components/location-card"
import { Navbar } from "@/components/navbar"

export default function StudioPage() {
  const router = useRouter()

  return (
    <div style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)", minHeight: "100vh" }}>
      <Navbar />

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

      <section className="px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white/30 text-xs font-medium uppercase tracking-widest mb-8">Our work</h2>
          <Gallery />
        </div>
      </section>

      <ServicesGrid />

      <TeamSection />

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

      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white/30 text-xs font-medium uppercase tracking-widest mb-8 text-center">Where we are</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LocationCard
              city="Addis Ababa"
              address="Ethiopia — where it all began"
              imageUrl="https://images.unsplash.com/photo-1580746738099-6e8399a75da6?q=80&w=800&auto=format&fit=crop"
              directionsUrl="https://maps.google.com/?q=Addis+Ababa,Ethiopia"
            />
            <LocationCard
              city="Seattle"
              address="Washington, USA — where we build"
              imageUrl="https://images.unsplash.com/photo-1542223616-9de9adb5e3e8?q=80&w=800&auto=format&fit=crop"
              directionsUrl="https://maps.google.com/?q=Space+Needle,Seattle,WA"
            />
          </div>
        </div>
      </section>

      <section className="px-8 py-20" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white/30 text-xs font-medium uppercase tracking-widest mb-4">Work with us</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Want a custom build?</h3>
          <p className="text-white/50 text-lg mb-8">
            We take on select custom projects — websites, SaaS products, mobile apps. Built for Ethiopian businesses and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.open("https://cal.com/dinqdigital", "_blank")}
              className="px-8 py-4 rounded-full font-semibold text-white cursor-pointer border-none transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #6B21A8, #4F46E5)", boxShadow: "0 0 30px rgba(107,33,168,0.4)" }}
            >
              Book a call
            </button>
            
              href="mailto:dinqdigital@gmail.com"
            <a href="mailto:dinqdigital@gmail.com" className="px-8 py-4 rounded-full font-medium transition-all hover:text-white" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>dinqdigital@gmail.com</a>
          </div>
        </div>
      </section>
    </div>
  )
}
