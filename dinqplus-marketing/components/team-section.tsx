"use client"

import React from "react"

const members = [
  {
    name: "Teddy",
    role: "Founder & Builder",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Teddy&backgroundColor=6B21A8",
  },
  {
    name: "Team Member",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=4F46E5",
  },
  {
    name: "Team Member",
    role: "Backend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan&backgroundColor=065F46",
  },
  {
    name: "Team Member",
    role: "UI/UX Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Casey&backgroundColor=1D4ED8",
  },
  {
    name: "Team Member",
    role: "Growth & Marketing",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Morgan&backgroundColor=DB2877",
  },
]

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-white/30 text-xs font-medium uppercase tracking-widest mb-2">Our team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Small but mighty
          </h2>
          <p className="text-white/40 mt-4 max-w-xl">
            A tight-knit team building software for Ethiopian entrepreneurs everywhere.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t py-6 sm:grid-cols-3 md:grid-cols-5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="w-20 h-20 rounded-full border overflow-hidden mb-3" style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}>
                <img
                  className="w-full h-full object-cover"
                  src={member.avatar}
                  alt={member.name}
                />
              </div>
              <span className="text-sm text-white font-medium">{member.name}</span>
              <span className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
