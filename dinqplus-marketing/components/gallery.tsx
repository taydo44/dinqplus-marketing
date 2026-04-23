"use client"

import React, { useState } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef } from "react"

const GenerativeCanvas = ({ isHovered }: { isHovered: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let animationFrameId: number
    canvas.width = 400
    canvas.height = 400

    const lines = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 0.5 + 0.1,
      angle: Math.random() * Math.PI * 2,
      length: Math.random() * 20 + 5,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (isHovered) {
        lines.forEach((line) => {
          line.x += Math.cos(line.angle) * line.speed
          line.y += Math.sin(line.angle) * line.speed
          if (line.x < 0 || line.x > canvas.width) line.x = Math.random() * canvas.width
          if (line.y < 0 || line.y > canvas.height) line.y = Math.random() * canvas.height
          ctx.beginPath()
          ctx.moveTo(line.x, line.y)
          ctx.lineTo(line.x - Math.cos(line.angle) * line.length, line.y - Math.sin(line.angle) * line.length)
          ctx.strokeStyle = `rgba(167,139,250,${Math.random() * 0.3 + 0.1})`
          ctx.lineWidth = 1
          ctx.stroke()
        })
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovered])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full transition-opacity duration-500"
      style={{ opacity: isHovered ? 1 : 0 }}
    />
  )
}

const GalleryCard = ({ item, index }: { item: typeof galleryItems[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.div
      variants={{
        offscreen: { y: 50, opacity: 0 },
        onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: index * 0.1 } },
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-72 w-full rounded-xl overflow-hidden"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
          position: "absolute",
          inset: "16px",
          borderRadius: "12px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "24px",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: item.gradient }}
        />
        <GenerativeCanvas isHovered={isHovered} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="relative z-10">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-xl font-bold text-white mb-1"
          >
            {item.title}
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.05 }}
            className="text-sm text-white/60"
          >
            {item.category}
          </motion.p>
        </div>

        <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </motion.div>
  )
}

const galleryItems = [
  {
    title: "Nice Braids",
    category: "DinqBook — Salon & Beauty",
    gradient: "linear-gradient(135deg, #6B21A8 0%, #4F46E5 100%)",
  },
  {
    title: "G&M Auto Repair",
    category: "DinqShop — Auto Repair",
    gradient: "linear-gradient(135deg, #1D4ED8 0%, #0891B2 100%)",
  },
  {
    title: "Tita PLC",
    category: "DinqFactory — Manufacturing",
    gradient: "linear-gradient(135deg, #065F46 0%, #047857 100%)",
  },
  {
    title: "Dinq Digital",
    category: "DinqAgency — Digital Studio",
    gradient: "linear-gradient(135deg, #4F46E5 0%, #7F77DD 100%)",
  },
  {
    title: "Dinq+ Platform",
    category: "The product we built for ourselves",
    gradient: "linear-gradient(135deg, #1a0a2e 0%, #6B21A8 50%, #4F46E5 100%)",
  },
  {
    title: "Your business",
    category: "Next vertical — coming soon",
    gradient: "linear-gradient(135deg, #0A0A0F 0%, #1a1a2e 100%)",
  },
]

export function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryItems.map((item, index) => (
        <GalleryCard key={item.title} item={item} index={index} />
      ))}
    </div>
  )
}