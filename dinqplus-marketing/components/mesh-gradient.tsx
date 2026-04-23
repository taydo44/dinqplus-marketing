"use client"
import dynamic from "next/dynamic"

const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => ({ default: m.MeshGradient })),
  { ssr: false }
)

const PulsingBorder = dynamic(
  () => import("@paper-design/shaders-react").then((m) => ({ default: m.PulsingBorder })),
  { ssr: false }
)

export { MeshGradient, PulsingBorder }