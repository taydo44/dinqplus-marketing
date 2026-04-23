"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Zap } from "lucide-react"
import { useRouter } from "next/navigation"

const plans = [
  {
    name: "Starter",
    price: { monthly: 29, yearly: 23 },
    description: "Perfect for salons, auto shops and property managers.",
    features: [
      "DinqBook, DinqShop or DinqProp",
      "Unlimited clients & records",
      "Invoicing & payments",
      "Analytics dashboard",
      "7-day free trial",
    ],
    isFeatured: false,
    verticals: "DinqBook · DinqShop · DinqProp",
  },
  {
    name: "Pro",
    price: { monthly: 49, yearly: 39 },
    description: "For agencies and care businesses needing more power.",
    features: [
      "DinqAgency or DinqCare",
      "Multi-role team access",
      "Advanced workflows",
      "Priority support",
      "7-day free trial",
    ],
    isFeatured: true,
    verticals: "DinqAgency · DinqCare",
  },
  {
    name: "Factory",
    price: { monthly: 79, yearly: 63 },
    description: "Full manufacturing operations with 4 role types.",
    features: [
      "DinqFactory vertical",
      "4 roles: admin, store, production, marketing",
      "Inventory management",
      "Production tracking",
      "7-day free trial",
    ],
    isFeatured: false,
    verticals: "DinqFactory",
  },
]

export default function AuroraPricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const router = useRouter()

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 + 0.3, duration: 0.6, ease: "easeInOut" as const },
    }),
  }

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center px-8 py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)" }}
    >
      {/* Aurora background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: "600px", height: "600px",
            background: "rgba(107,33,168,0.6)",
            top: "10%", left: "10%",
            filter: "blur(100px)",
            animation: "moveAurora1 20s infinite alternate ease-in-out",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "500px", height: "500px",
            background: "rgba(79,70,229,0.5)",
            bottom: "10%", right: "10%",
            filter: "blur(100px)",
            animation: "moveAurora2 25s infinite alternate ease-in-out",
          }}
        />
      </div>

      <style>{`
        @keyframes moveAurora1 { from { transform: translate(0,0) rotate(0deg); } to { transform: translate(100px,50px) rotate(180deg); } }
        @keyframes moveAurora2 { from { transform: translate(0,0) rotate(0deg); } to { transform: translate(-100px,-50px) rotate(-180deg); } }
      `}</style>

      <div className="relative z-10 flex flex-col items-center text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 16px", borderRadius: "999px", marginBottom: "24px",
            background: "rgba(107,33,168,0.15)",
            border: "1px solid rgba(107,33,168,0.3)",
          }}
        >
          <Zap className="h-4 w-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-300">Flexible & transparent pricing</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8"
        >
          Simple pricing
        </motion.h1>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <span className={`text-lg ${billingCycle === "monthly" ? "text-white" : "text-white/40"}`}>Monthly</span>
          <div
            className="w-14 h-8 flex items-center rounded-full p-1 cursor-pointer"
            style={{ background: "rgba(255,255,255,0.1)" }}
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
          >
            <motion.div
              className="w-6 h-6 rounded-full"
              style={{ background: "linear-gradient(135deg, #6B21A8, #4F46E5)" }}
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
              animate={{ marginLeft: billingCycle === "yearly" ? "auto" : "0" }}
            />
          </div>
          <span className={`text-lg ${billingCycle === "yearly" ? "text-white" : "text-white/40"}`}>Yearly</span>
          <span className="text-sm text-purple-400 font-semibold">(Save 20%)</span>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full relative z-10">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            custom={index}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative p-8 rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: plan.isFeatured ? "rgba(107,33,168,0.15)" : "rgba(255,255,255,0.03)",
              border: plan.isFeatured ? "1px solid rgba(107,33,168,0.4)" : "1px solid rgba(255,255,255,0.08)",
              boxShadow: plan.isFeatured ? "0 0 60px rgba(107,33,168,0.2)" : "none",
            }}
          >
            {plan.isFeatured && (
              <div
                className="absolute top-0 right-0 text-xs font-bold px-4 py-1.5 rounded-bl-lg"
                style={{ background: "linear-gradient(135deg, #6B21A8, #4F46E5)", color: "white" }}
              >
                MOST POPULAR
              </div>
            )}

            <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
            <p className="text-white/40 text-sm mb-1">{plan.verticals}</p>
            <p className="text-white/50 text-sm mb-6">{plan.description}</p>

            <div className="flex items-baseline mb-8">
              <span className="text-white/40 text-2xl mr-1">$</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={billingCycle}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="text-5xl font-bold text-white"
                >
                  {plan.price[billingCycle]}
                </motion.span>
              </AnimatePresence>
              <span className="text-white/40 ml-2 text-sm">/{billingCycle === "monthly" ? "mo" : "mo, billed yearly"}</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => window.open("https://app.dinqdigital.com/signup", "_blank")}
              className="w-full py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer border-none"
              style={
                plan.isFeatured
                  ? { background: "linear-gradient(135deg, #6B21A8, #4F46E5)", color: "white", boxShadow: "0 0 20px rgba(107,33,168,0.4)" }
                  : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }
              }
            >
              Start free trial
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}