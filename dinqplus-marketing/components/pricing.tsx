"use client"

import React, { useRef, useEffect, useState } from "react"
import { RippleButton } from "@/components/ui/ripple-button"

const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const ShaderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext("webgl")
    if (!gl) return

    const vertSrc = `attribute vec2 aPosition; void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`
    const fragSrc = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 uBackgroundColor;
      mat2 rotate2d(float angle){ float c=cos(angle),s=sin(angle); return mat2(c,-s,s,c); }
      float variation(vec2 v1,vec2 v2,float strength,float speed){ return sin(dot(normalize(v1),normalize(v2))*strength+iTime*speed)/100.0; }
      vec3 paintCircle(vec2 uv,vec2 center,float rad,float width){
        vec2 diff=center-uv;
        float len=length(diff);
        len+=variation(diff,vec2(0.,1.),5.,2.);
        len-=variation(diff,vec2(1.,0.),5.,2.);
        float circle=smoothstep(rad-width,rad,len)-smoothstep(rad,rad+width,len);
        return vec3(circle);
      }
      void main(){
        vec2 uv=gl_FragCoord.xy/iResolution.xy;
        uv.x*=1.5; uv.x-=0.25;
        float mask=0.0;
        float radius=.35;
        vec2 center=vec2(.5);
        mask+=paintCircle(uv,center,radius,.035).r;
        mask+=paintCircle(uv,center,radius-.018,.01).r;
        mask+=paintCircle(uv,center,radius+.018,.005).r;
        vec2 v=rotate2d(iTime)*uv;
        vec3 fg=vec3(v.x*0.4+0.3,v.y*0.2+0.1,0.8-v.y*v.x*0.5);
        vec3 color=mix(uBackgroundColor,fg,mask);
        color=mix(color,vec3(0.8,0.7,1.0),paintCircle(uv,center,radius,.003).r);
        gl_FragColor=vec4(color,1.);
      }
    `

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }

    const program = gl.createProgram()!
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertSrc))
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragSrc))
    gl.linkProgram(program)
    gl.useProgram(program)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW)
    const pos = gl.getAttribLocation(program, "aPosition")
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

    const iTime = gl.getUniformLocation(program, "iTime")
    const iRes = gl.getUniformLocation(program, "iResolution")
    const iBg = gl.getUniformLocation(program, "uBackgroundColor")
    gl.uniform3fv(iBg, new Float32Array([1.0, 1.0, 1.0]))

    let raf: number
    const render = (t: number) => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform1f(iTime, t * 0.001)
      gl.uniform2f(iRes, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)
    return () => cancelAnimationFrame(raf)
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
}

interface Plan {
  planName: string
  description: string
  price: string
  features: string[]
  buttonText: string
  isPopular?: boolean
  buttonVariant?: "primary" | "secondary"
  onClick?: () => void
}

const PricingCard = ({ planName, description, price, features, buttonText, isPopular, buttonVariant = "primary", onClick }: Plan) => (
  <div className={`
    backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex-1 max-w-xs px-7 py-8 flex flex-col transition-all duration-300
    from-white/60 to-white/40 border border-white/30
    ${isPopular ? "scale-105 relative ring-2 ring-purple-400/30 shadow-2xl from-white/80 to-white/60" : ""}
  `}>
    {isPopular && (
      <div className="absolute -top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-purple-600 text-white">
        Most Popular
      </div>
    )}
    <div className="mb-3">
      <h2 className="text-5xl font-extralight tracking-tight text-gray-900">{planName}</h2>
      <p className="text-base text-gray-500 mt-1">{description}</p>
    </div>
    <div className="my-6 flex items-baseline gap-2">
      <span className="text-5xl font-extralight text-gray-900">{price}</span>
      {price !== "Custom" && <span className="text-sm text-gray-500">/mo</span>}
    </div>
    <div className="w-full mb-5 h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent" />
    <ul className="flex flex-col gap-2 text-sm text-gray-700 mb-6">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-2">
          <CheckIcon className="text-purple-500 w-4 h-4 flex-shrink-0" /> {f}
        </li>
      ))}
    </ul>
    <RippleButton
      onClick={onClick}
      rippleColor="rgba(107,33,168,0.3)"
      className={`mt-auto w-full py-2.5 rounded-xl font-semibold text-sm transition ${
        buttonVariant === "primary"
          ? "bg-purple-600 hover:bg-purple-700 text-white"
          : "bg-black/5 hover:bg-black/10 text-gray-800 border border-black/10"
      }`}
    >
      {buttonText}
    </RippleButton>
  </div>
)

export default function Pricing() {
  const plans: Plan[] = [
    {
      planName: "Starter",
      description: "Perfect for salons, auto shops and property managers.",
      price: "$29",
      features: ["DinqBook, DinqShop or DinqProp", "Unlimited clients & records", "Invoicing & payments", "Analytics dashboard", "7-day free trial"],
      buttonText: "Start free trial",
      isPopular: false,
      buttonVariant: "secondary",
      onClick: () => window.open("https://app.dinqdigital.com/signup", "_blank"),
    },
    {
      planName: "Pro",
      description: "For agencies and care businesses needing more power.",
      price: "$49",
      features: ["DinqAgency or DinqCare", "Multi-role team access", "Advanced workflows", "Priority support", "7-day free trial"],
      buttonText: "Start free trial",
      isPopular: true,
      buttonVariant: "primary",
      onClick: () => window.open("https://app.dinqdigital.com/signup", "_blank"),
    },
    {
      planName: "Custom",
      description: "For large organizations with custom needs.",
      price: "Custom",
      features: ["DinqFactory + all verticals", "Custom vertical development", "Dedicated account manager", "Custom integrations & SLA"],
      buttonText: "Contact us",
      isPopular: false,
      buttonVariant: "secondary",
      onClick: () => { window.location.href = "mailto:dinqdigital@gmail.com" },
    },
  ]

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <ShaderCanvas />
      <main className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-8 z-10">
        <div className="w-full max-w-5xl mx-auto text-center mb-14">
          <h1 className="text-5xl md:text-7xl font-extralight leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-purple-600 to-indigo-600">
            Find the plan that's right for you
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Start free for 7 days. No credit card required.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-stretch w-full max-w-4xl">
          {plans.map((plan) => <PricingCard key={plan.planName} {...plan} />)}
        </div>
      </main>
    </div>
  )
}
