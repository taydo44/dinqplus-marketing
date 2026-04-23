"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface Marker {
  id: string
  location: [number, number]
  label: string
}

interface Arc {
  id: string
  from: [number, number]
  to: [number, number]
}

interface GlobeProps {
  className?: string
}

const ADDIS: [number, number] = [9.032, 38.7469]

const markers: Marker[] = [
  { id: "addis", location: ADDIS, label: "Addis Ababa" },
  { id: "seattle", location: [47.6062, -122.3321], label: "Seattle" },
  { id: "dc", location: [38.9072, -77.0369], label: "Washington DC" },
  { id: "london", location: [51.5074, -0.1278], label: "London" },
  { id: "dubai", location: [25.2048, 55.2708], label: "Dubai" },
  { id: "toronto", location: [43.6532, -79.3832], label: "Toronto" },
  { id: "stockholm", location: [59.3293, 18.0686], label: "Stockholm" },
  { id: "melbourne", location: [-37.8136, 144.9631], label: "Melbourne" },
  { id: "joburg", location: [-26.2041, 28.0473], label: "Johannesburg" },
]

const arcs: Arc[] = [
  { id: "arc-seattle", from: [47.6062, -122.3321], to: ADDIS },
  { id: "arc-dc", from: [38.9072, -77.0369], to: ADDIS },
  { id: "arc-london", from: [51.5074, -0.1278], to: ADDIS },
  { id: "arc-dubai", from: [25.2048, 55.2708], to: ADDIS },
  { id: "arc-toronto", from: [43.6532, -79.3832], to: ADDIS },
  { id: "arc-stockholm", from: [59.3293, 18.0686], to: ADDIS },
  { id: "arc-melbourne", from: [-37.8136, 144.9631], to: ADDIS },
  { id: "arc-joburg", from: [-26.2041, 28.0473], to: ADDIS },
]

export function Globe({ className = "" }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const lastPointer = useRef<{ x: number; y: number; t: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const velocity = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (pointerInteracting.current !== null) {
      const deltaX = e.clientX - pointerInteracting.current.x
      const deltaY = e.clientY - pointerInteracting.current.y
      dragOffset.current = { phi: deltaX / 300, theta: deltaY / 1000 }
      const now = Date.now()
      if (lastPointer.current) {
        const dt = Math.max(now - lastPointer.current.t, 1)
        velocity.current = {
          phi: Math.max(-0.15, Math.min(0.15, ((e.clientX - lastPointer.current.x) / dt) * 0.3)),
          theta: Math.max(-0.15, Math.min(0.15, ((e.clientY - lastPointer.current.y) / dt) * 0.08)),
        }
      }
      lastPointer.current = { x: e.clientX, y: e.clientY, t: now }
    }
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
      lastPointer.current = null
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerMove, handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: 1,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 10,
        baseColor: [0.1, 0.1, 0.15],
        markerColor: [0.6, 0.4, 1.0],
        glowColor: [0.4, 0.2, 0.8],
        markerElevation: 0.01,
        markers: markers.map((m) => ({ location: m.location, size: 0.05 })),
        arcs: arcs.map((a) => ({ from: a.from, to: a.to, id: a.id })),
        arcColor: [0.5, 0.3, 0.9],
        arcWidth: 0.5,
        arcHeight: 0.3,
        opacity: 0.9,
      })

      function animate() {
        if (!isPausedRef.current) {
          phi += 0.003
          if (Math.abs(velocity.current.phi) > 0.0001 || Math.abs(velocity.current.theta) > 0.0001) {
            phiOffsetRef.current += velocity.current.phi
            thetaOffsetRef.current += velocity.current.theta
            velocity.current.phi *= 0.95
            velocity.current.theta *= 0.95
          }
          const thetaMin = -0.4, thetaMax = 0.4
          if (thetaOffsetRef.current < thetaMin) {
            thetaOffsetRef.current += (thetaMin - thetaOffsetRef.current) * 0.1
          } else if (thetaOffsetRef.current > thetaMax) {
            thetaOffsetRef.current += (thetaMax - thetaOffsetRef.current) * 0.1
          }
        }
        globe!.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        })
        animationId = requestAnimationFrame(animate)
      }
      animate()
      setTimeout(() => canvas && (canvas.style.opacity = "1"))
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
    </div>
  )
}