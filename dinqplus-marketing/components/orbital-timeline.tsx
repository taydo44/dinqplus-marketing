"use client"
import { useState, useEffect, useRef } from "react"
import { ArrowRight, Zap, Globe, Code, Rocket, Users, TrendingUp, Star, Heart } from "lucide-react"

interface TimelineItem {
  id: number
  title: string
  date: string
  content: string
  category: string
  icon: React.ElementType
  relatedIds: number[]
  status: "completed" | "in-progress" | "pending"
  energy: number
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "The Idea",
    date: "2023",
    content: "Born in Ethiopia, the vision was simple — every Ethiopian business deserves great software, no matter where in the world they are.",
    category: "Origin",
    icon: Star,
    relatedIds: [2, 3],
    status: "completed",
    energy: 90,
  },
  {
    id: 2,
    title: "First Build",
    date: "2024 Q1",
    content: "V1 launched with 6 verticals. Real clients, real businesses. Nice Braids, G&M Auto Repair, and Tita PLC came on board.",
    category: "Launch",
    icon: Code,
    relatedIds: [1, 3],
    status: "completed",
    energy: 85,
  },
  {
    id: 3,
    title: "Real Clients",
    date: "2024 Q2",
    content: "3 paying clients across salon, auto repair, and manufacturing. Proof the platform works across industries.",
    category: "Growth",
    icon: Users,
    relatedIds: [2, 4],
    status: "completed",
    energy: 80,
  },
  {
    id: 4,
    title: "Dinq+ V2",
    date: "2025",
    content: "Complete rebuild with better stack — Next.js 15, Tailwind v4, Stripe payments, Sentry monitoring. Faster, cleaner, scalable.",
    category: "Rebuild",
    icon: Rocket,
    relatedIds: [3, 5],
    status: "completed",
    energy: 95,
  },
  {
    id: 5,
    title: "Going Global",
    date: "2025",
    content: "Ethiopian diaspora businesses across DC, London, Dubai, Toronto, Stockholm. One platform, every city.",
    category: "Expansion",
    icon: Globe,
    relatedIds: [4, 6],
    status: "in-progress",
    energy: 75,
  },
  {
    id: 6,
    title: "16 Verticals",
    date: "2026",
    content: "DinqEats, DinqRide, DinqFit, DinqLearn and more — every type of Ethiopian business covered.",
    category: "Roadmap",
    icon: TrendingUp,
    relatedIds: [5, 7],
    status: "pending",
    energy: 70,
  },
  {
    id: 7,
    title: "AI Features",
    date: "2026",
    content: "Claude-powered AI built into every vertical — smart scheduling, route optimization, business insights.",
    category: "AI",
    icon: Zap,
    relatedIds: [6, 8],
    status: "pending",
    energy: 65,
  },
  {
    id: 8,
    title: "The Mission",
    date: "Always",
    content: "Software for Ethiopian entrepreneurs, wherever they are. Built with love from Ethiopia to the world.",
    category: "Mission",
    icon: Heart,
    relatedIds: [1, 7],
    status: "in-progress",
    energy: 100,
  },
]

export default function OrbitalTimeline() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})
  const [rotationAngle, setRotationAngle] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({})
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const orbitRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({})

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval>
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)))
      }, 50)
    }
    return () => { if (rotationTimer) clearInterval(rotationTimer) }
  }, [autoRotate])

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360
    const radius = 200
    const radian = (angle * Math.PI) / 180
    const x = radius * Math.cos(radian)
    const y = radius * Math.sin(radian)
    const zIndex = Math.round(100 + 50 * Math.cos(radian))
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)))
    return { x, y, angle, zIndex, opacity }
  }

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {}
      Object.keys(prev).forEach((key) => { newState[parseInt(key)] = false })
      newState[id] = !prev[id]
      if (!prev[id]) {
        setActiveNodeId(id)
        setAutoRotate(false)
        const item = timelineData.find((i) => i.id === id)
        const pulse: Record<number, boolean> = {}
        item?.relatedIds.forEach((relId) => { pulse[relId] = true })
        setPulseEffect(pulse)
      } else {
        setActiveNodeId(null)
        setAutoRotate(true)
        setPulseEffect({})
      }
      return newState
    })
  }

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({})
      setActiveNodeId(null)
      setPulseEffect({})
      setAutoRotate(true)
    }
  }

  const isRelatedToActive = (itemId: number) => {
    if (!activeNodeId) return false
    const active = timelineData.find((i) => i.id === activeNodeId)
    return active?.relatedIds.includes(itemId) ?? false
  }

  const getStatusStyles = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed": return "text-white bg-black border-white"
      case "in-progress": return "text-black bg-white border-black"
      case "pending": return "text-white bg-black/40 border-white/50"
    }
  }

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Center orb */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-violet-500 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70" />
            <div className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50" style={{ animationDelay: "0.5s" }} />
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md" />
          </div>

          {/* Orbit ring */}
          <div className="absolute w-96 h-96 rounded-full border border-white/10" />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length)
            const isExpanded = expandedItems[item.id]
            const isRelated = isRelatedToActive(item.id)
            const isPulsing = pulseEffect[item.id]
            const Icon = item.icon

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id) }}
              >
                {/* Pulse ring */}
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse" : ""}`}
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                />

                {/* Node */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  isExpanded ? "bg-white text-black border-white shadow-lg shadow-white/30 scale-150"
                  : isRelated ? "bg-white/50 text-black border-white animate-pulse"
                  : "bg-black text-white border-white/40"
                }`}>
                  <Icon size={16} />
                </div>

                {/* Label */}
                <div className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${isExpanded ? "text-white scale-125" : "text-white/70"}`}>
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg border border-white/30 shadow-xl shadow-white/10 rounded-xl overflow-visible p-4">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50" />
                    <div className="flex justify-between items-center mb-2">
                      <span className={`px-2 py-0.5 text-xs rounded border ${getStatusStyles(item.status)}`}>
                        {item.status === "completed" ? "DONE" : item.status === "in-progress" ? "IN PROGRESS" : "PENDING"}
                      </span>
                      <span className="text-xs font-mono text-white/50">{item.date}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-white/80 mb-3">{item.content}</p>

                    <div className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white/60 flex items-center gap-1"><Zap size={10} /> Energy</span>
                        <span className="font-mono text-white/60">{item.energy}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500" style={{ width: `${item.energy}%` }} />
                      </div>
                    </div>

                    {item.relatedIds.length > 0 && (
                      <div className="border-t border-white/10 pt-3">
                        <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Connected</p>
                        <div className="flex flex-wrap gap-1">
                          {item.relatedIds.map((relId) => {
                            const related = timelineData.find((i) => i.id === relId)
                            return (
                              <button
                                key={relId}
                                className="flex items-center h-6 px-2 text-xs border border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all rounded"
                                onClick={(e) => { e.stopPropagation(); toggleItem(relId) }}
                              >
                                {related?.title}
                                <ArrowRight size={8} className="ml-1" />
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}