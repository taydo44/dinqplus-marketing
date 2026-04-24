"use client"

import React from "react"

const services = [
  {
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=512&auto=format&fit=crop",
    overlayImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=512&auto=format&fit=crop"
  },
  {
    title: "SaaS Products",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=512&auto=format&fit=crop",
    overlayImage: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=512&auto=format&fit=crop"
  },
  {
    title: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1522120691812-dcdfb625f397?q=80&w=512&auto=format&fit=crop",
    overlayImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=512&auto=format&fit=crop"
  },
  {
    title: "Custom Software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=512&auto=format&fit=crop",
    overlayImage: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=512&auto=format&fit=crop"
  }
]

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 w-full" style={{ background: "rgba(0,0,0,0.3)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            How Can We Help?
          </h2>
          <p className="text-lg sm:text-xl font-light" style={{ color: "rgba(255,255,255,0.4)" }}>
            Let us turn your vision into something amazing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl p-6 flex flex-col h-[320px] transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)" }}
            >
              <div className="relative flex-grow flex items-center justify-center mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute w-44 h-auto rounded-lg shadow-md transition-all duration-400 ease-in-out group-hover:scale-105"
                  style={{ transform: "rotate(-6deg)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(-10deg) scale(1.05)" }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "rotate(-6deg)" }}
                />
                <img
                  src={service.overlayImage}
                  alt={service.title}
                  className="absolute w-44 h-auto rounded-lg shadow-lg transition-all duration-400 ease-in-out group-hover:scale-105"
                  style={{ transform: "rotate(3deg)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(5deg) scale(1.05)" }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "rotate(3deg)" }}
                />
              </div>
              <h3 className="text-left text-lg font-medium text-white mt-auto">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
