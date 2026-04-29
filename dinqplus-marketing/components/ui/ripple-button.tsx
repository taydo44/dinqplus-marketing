"use client"

import React, { useRef, useState } from "react"

interface Ripple {
  x: number
  y: number
  id: number
}

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  rippleColor?: string
}

export function RippleButton({ children, className, onClick, rippleColor = "rgba(255,255,255,0.35)", ...props }: RippleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700)

    onClick?.(e)
  }

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden select-none ${className}`}
      onClick={handleClick}
      {...props}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: "absolute",
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            borderRadius: "50%",
            background: rippleColor,
            transform: "translate(-50%, -50%)",
            animation: "ripple-expand 0.7s ease-out forwards",
            pointerEvents: "none",
          }}
        />
      ))}
      <style>{`
        @keyframes ripple-expand {
          from { width: 0; height: 0; opacity: 1; }
          to { width: 500px; height: 500px; opacity: 0; }
        }
      `}</style>
      <span className="relative z-10">{children}</span>
    </button>
  )
}
