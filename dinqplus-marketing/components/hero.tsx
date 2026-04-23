"use client"
import { useEffect, useRef } from "react"
import { MeshGradient, PulsingBorder } from "@/components/mesh-gradient"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#6B21A8", "#4F46E5", "#0A0A0F", "#7F77DD"]}
        speed={0.3}
      />

      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Header */}
      <header
        style={{
          position: "relative",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
        >
          <span
            style={{
              fontSize: "24px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.02em",
              filter: "url(#logo-glow)",
            }}
          >
            Dinq
            <sup
              style={{
                background: "linear-gradient(135deg, #a78bfa, #ffffff, #7F77DD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "14px",
                fontWeight: 900,
              }}
            >
              +
            </sup>
          </span>
        </motion.div>
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <a href="/verticals" style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", fontWeight: 300, padding: "8px 12px", borderRadius: "999px", textDecoration: "none" }}>Verticals</a>
          <a href="/pricing" style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", fontWeight: 300, padding: "8px 12px", borderRadius: "999px", textDecoration: "none" }}>Pricing</a>
          <a href="/studio" style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", fontWeight: 300, padding: "8px 12px", borderRadius: "999px", textDecoration: "none" }}>Studio</a>
        </nav>

        <div
          style={{ position: "relative", display: "flex", alignItems: "center", filter: "url(#gooey-filter)" }}
          className="group"
        >
          <button
            onClick={() => window.open("https://app.dinqdigital.com/login", "_blank")}
            style={{
              position: "absolute",
              right: 0,
              padding: "0 10px",
              borderRadius: "999px",
              background: "white",
              color: "black",
              fontSize: "12px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "translateX(-40px)",
              zIndex: 0,
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
          <button
            onClick={() => window.open("https://app.dinqdigital.com/login", "_blank")}
            style={{
              padding: "0 24px",
              borderRadius: "999px",
              background: "white",
              color: "black",
              fontSize: "12px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              zIndex: 10,
              border: "none",
              cursor: "pointer",
              position: "relative",
            }}
          >
            Login
          </button>
        </div>
      </header>

      {/* Main content */}
      <main
        style={{
          position: "relative",
          zIndex: 20,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 32px 64px",
        }}
      >
        <div style={{ maxWidth: "640px" }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 16px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
              marginBottom: "24px",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 500 }}>
              ✨ Dinq+ is here — built for the diaspora
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ marginBottom: "24px", lineHeight: 1 }}
          >
            <span
              style={{
                display: "block",
                fontWeight: 300,
                fontSize: "clamp(32px, 5vw, 56px)",
                marginBottom: "8px",
                letterSpacing: "0.05em",
                background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 30%, #7F77DD 70%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "url(#text-glow)",
              }}
            >
              Your business
            </span>
            <span
              style={{
                display: "block",
                fontWeight: 900,
                fontSize: "clamp(48px, 8vw, 96px)",
                color: "white",
                textShadow: "0 0 40px rgba(255,255,255,0.1)",
              }}
            >
              runs on
            </span>
            <span
              style={{
                display: "block",
                fontWeight: 300,
                fontSize: "clamp(48px, 8vw, 96px)",
                color: "rgba(255,255,255,0.8)",
                fontStyle: "italic",
              }}
            >
              Dinq+
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              fontSize: "18px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.7)",
              marginBottom: "32px",
              lineHeight: 1.6,
              maxWidth: "480px",
            }}
          >
            One platform built for Ethiopian entrepreneurs — wherever you are in the world.
            Pick your vertical, start free for 7 days, go live in minutes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/pricing")}
              style={{
                padding: "16px 40px",
                borderRadius: "999px",
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.3)",
                color: "white",
                fontWeight: 500,
                fontSize: "14px",
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                transition: "all 0.3s",
              }}
            >
              See pricing
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/verticals")}
              style={{
                padding: "16px 40px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #6B21A8, #4F46E5)",
                border: "none",
                color: "white",
                fontWeight: 600,
                fontSize: "14px",
                cursor: "pointer",
                boxShadow: "0 0 30px rgba(107,33,168,0.4)",
                transition: "all 0.3s",
              }}
            >
              Get started free
            </motion.button>
          </motion.div>
        </div>
      </main>

      {/* Rotating ring */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          right: "32px",
          zIndex: 30,
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PulsingBorder
          colors={["#6B21A8", "#7F77DD", "#4F46E5", "#ffffff", "#6B21A8", "#a78bfa", "#ffffff"]}
          colorBack="#00000000"
          speed={1.5}
          roundness={1}
          thickness={0.1}
          softness={0.2}
          intensity={5}
          spots={5}
          spotSize={0.1}
          pulse={0.1}
          smoke={0.5}
          smokeSize={4}
          scale={0.65}
          rotation={0}
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
        <motion.svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            transform: "scale(1.6)",
          }}
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <defs>
            <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text style={{ fontSize: "7px", fill: "rgba(255,255,255,0.8)" }}>
            <textPath href="#circle" startOffset="0%">
              Dinq+ • Built for the diaspora • For every business •
            </textPath>
          </text>
        </motion.svg>
      </div>
    </div>
  )
}