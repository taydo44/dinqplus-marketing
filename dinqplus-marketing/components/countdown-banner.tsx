"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, Clock } from "lucide-react"
import { useRouter } from "next/navigation"

function getTimeLeft() {
  const diff = 7 * 24 * 60 * 60 * 1000
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { hours, minutes, seconds }
}

function AnimatedDigit({ value }: { value: number }) {
  return (
    <div className="relative h-[1em] w-[1.2em] overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative flex items-center justify-center rounded-xl px-4 py-3 md:px-6 md:py-5 min-w-[80px] md:min-w-[100px] overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span className="font-mono text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white">
          <AnimatedDigit value={value} />
        </span>
      </div>
      <span className="text-xs font-medium uppercase tracking-widest text-white/40">
        {label}
      </span>
    </div>
  )
}

export function CountdownBanner() {
  const [time, setTime] = useState<{ hours: number; minutes: number; seconds: number } | null>(null)
  const [mounted, setMounted] = useState(false)
  const [seconds, setSeconds] = useState(7 * 24 * 60 * 60)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    setTime({ hours: 167, minutes: 59, seconds: 59 })
    const interval = setInterval(() => {
      setSeconds((prev) => {
        const next = prev - 1
        const h = Math.floor(next / 3600)
        const m = Math.floor((next % 3600) / 60)
        const s = next % 60
        setTime({ hours: h, minutes: m, seconds: s })
        return next
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <section
      className="relative w-full px-4 py-16 md:py-24 overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)" }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "rgba(107,33,168,0.15)", top: "-20%", left: "-10%" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "rgba(79,70,229,0.1)", bottom: "0", right: "0" }} />
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl p-8 md:p-16 flex flex-col items-center gap-8 md:gap-12 text-center overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 80px rgba(107,33,168,0.2)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          <div className="flex flex-col items-center gap-4 relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(107,33,168,0.2)",
                border: "1px solid rgba(107,33,168,0.4)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-medium text-purple-300">Free trial — no credit card required</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              7 days free.{" "}
              <span style={{ background: "linear-gradient(135deg, #a78bfa, #7F77DD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Starts now.
              </span>
            </h2>

            <p className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed">
              Pick your vertical and your free trial begins immediately. No credit card, no commitment. Cancel anytime.
            </p>
          </div>

          <div className="flex items-center gap-2 md:gap-4 relative z-10">
            <TimeUnit value={time?.hours ?? 167} label="Hours" />
            <div className="flex flex-col items-center justify-center pb-6">
              <span className="text-2xl md:text-4xl font-light text-white/20 animate-pulse">:</span>
            </div>
            <TimeUnit value={time?.minutes ?? 59} label="Minutes" />
            <div className="flex flex-col items-center justify-center pb-6">
              <span className="text-2xl md:text-4xl font-light text-white/20 animate-pulse">:</span>
            </div>
            <TimeUnit value={time?.seconds ?? 59} label="Seconds" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-10"
          >
            <button
              onClick={() => window.open("https://app.dinqdigital.com/signup", "_blank")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer border-none"
              style={{ background: "linear-gradient(135deg, #6B21A8, #4F46E5)", color: "white", boxShadow: "0 0 30px rgba(107,33,168,0.4)" }}
            >
              <span>Start your free trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => router.push("/verticals")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all cursor-pointer"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
            >
              <span>See all verticals</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}