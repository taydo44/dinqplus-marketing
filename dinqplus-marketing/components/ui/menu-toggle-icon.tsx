"use client"
import { motion } from "framer-motion"

interface MenuToggleIconProps {
  open: boolean
  className?: string
  duration?: number
}

export function MenuToggleIcon({ open, className = "", duration = 300 }: MenuToggleIconProps) {
  const d = duration / 1000
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
      <motion.line x1="3" y1="6" x2="21" y2="6" animate={open ? { x1: 5, y1: 5, x2: 19, y2: 19 } : { x1: 3, y1: 6, x2: 21, y2: 6 }} transition={{ duration: d }} />
      <motion.line x1="3" y1="12" x2="21" y2="12" animate={open ? { opacity: 0, x1: 12, x2: 12 } : { opacity: 1, x1: 3, x2: 21 }} transition={{ duration: d }} />
      <motion.line x1="3" y1="18" x2="21" y2="18" animate={open ? { x1: 5, y1: 19, x2: 19, y2: 5 } : { x1: 3, y1: 18, x2: 21, y2: 18 }} transition={{ duration: d }} />
    </svg>
  )
}