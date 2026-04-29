"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Navbar } from "@/components/navbar"

const Canvas = dynamic(() => import("@react-three/fiber").then((m) => m.Canvas), { ssr: false })
const ParticleSphere = dynamic(() => import("@/components/particle-sphere").then((m) => m.ParticleSphere), { ssr: false })

const CLIENT_IMAGES = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
]

export default function StudioPage() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <section className="flex-1 flex flex-col items-center justify-center px-8 pt-8 pb-4 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-4">
          <span className="text-white/60 text-sm">Dinq Digital — the studio behind Dinq+</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          We build{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa, #7F77DD)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            what we sell
          </span>
        </h1>
        <p className="text-white/40 text-sm max-w-md">
          Ethiopian-founded, Seattle-based. Hover over the sphere to explore our work.
        </p>
      </section>

      <section style={{ flex: 1, minHeight: "60vh", position: "relative" }}>
        <Suspense fallback={
          <div className="flex items-center justify-center h-full">
            <p className="text-white/30 text-sm">Loading...</p>
          </div>
        }>
          <Canvas
            camera={{ position: [0, 0, 20], fov: 60 }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={1} />
            <ParticleSphere images={CLIENT_IMAGES} />
          </Canvas>
        </Suspense>
      </section>
    </div>
  )
}
