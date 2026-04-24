"use client"

import React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface LocationCardProps {
  city: string
  address: string
  imageUrl: string
  directionsUrl: string
  className?: string
}

export function LocationCard({ city, address, imageUrl, directionsUrl, className }: LocationCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative w-full h-80 rounded-xl bg-cover bg-center shadow-lg hover:shadow-2xl transition-shadow duration-300 ${className}`}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-4 grid h-[calc(100%-2rem)] w-[calc(100%-2rem)] place-content-end rounded-xl shadow-lg overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div
          style={{ transform: "translateZ(50px)" }}
          className="p-6 text-white flex justify-between items-end w-full relative z-10"
        >
          <div>
            <h3 className="text-2xl font-bold">{city}</h3>
            <p className="text-sm text-white/70">{address}</p>
          </div>
          
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            Get directions
          </a>
        </div>
      </div>
    </motion.div>
  )
}
