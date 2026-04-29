"use client"

import dynamic from "next/dynamic"
import { Suspense, useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { useFrame, useThree } from "@react-three/fiber"

const Canvas = dynamic(() => import("@react-three/fiber").then((m) => m.Canvas), { ssr: false })
const ParticleSphere = dynamic(
  () => import("@/components/ui/cosmos-3d-orbit-gallery").then((m) => m.ParticleSphere),
  { ssr: false }
)

const CLIENT_IMAGES = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&q=80",
]

function CameraController() {
  const { camera } = useThree()
  const scrollRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useFrame(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const progress = maxScroll > 0 ? scrollRef.current / maxScroll : 0
    const targetZ = 20 - progress * 14
    camera.position.z += (targetZ - camera.position.z) * 0.05
    camera.position.y = -5
  })

  return null
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, -5, 20], fov: 75 }}
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1} />
      <CameraController />
      <Suspense fallback={null}>
        <ParticleSphere images={CLIENT_IMAGES} />
      </Suspense>
    </Canvas>
  )
}

export default function StudioPage() {
  return (
    <div style={{ background: "#000", minHeight: "300vh" }}>
      <Scene />

      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50 }}>
        <Navbar />
      </div>

      <div
        style={{
          position: "fixed",
          top: "28%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          textAlign: "center",
          pointerEvents: "none",
          padding: "0 24px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 300,
            color: "white",
            lineHeight: 1.2,
            fontFamily: "serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.8)",
          }}
        >
          We build what we sell.
          <br />
          Ethiopian-founded,
          <br />
          Seattle-based.
        </h1>
      </div>
    </div>
  )
}
