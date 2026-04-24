"use client"

import React from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)" }}
    >
      <style>{`
        .main { position: relative; }
        .antenna { position: absolute; width: 100%; top: -40px; left: 0; display: flex; flex-direction: column; align-items: center; }
        .antenna_shadow { width: 90%; height: 8px; background: rgba(0,0,0,0.3); border-radius: 50%; margin-bottom: 4px; }
        .a1, .a2 { width: 4px; height: 40px; background: #a78bfa; border-radius: 4px; }
        .a1 { transform: rotate(-20deg); transform-origin: bottom; }
        .a2 { transform: rotate(20deg); transform-origin: bottom; margin-top: -30px; }
        .a1d, .a2d { width: 10px; height: 10px; background: #7F77DD; border-radius: 50%; }
        .a1d { margin-left: -30px; margin-top: -50px; }
        .a2d { margin-left: 30px; margin-top: -10px; }
        .a_base { width: 60px; height: 8px; background: #6B21A8; border-radius: 4px; margin-top: 4px; }
        .tv { width: 220px; height: 180px; background: linear-gradient(135deg, #1a0a2e, #0f0820); border-radius: 20px; border: 4px solid #6B21A8; position: relative; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 40px rgba(107,33,168,0.4); }
        .cruve { position: absolute; top: -2px; left: -2px; }
        .curve_svg { width: 40px; height: 40px; fill: #6B21A8; opacity: 0.5; }
        .display_div { width: 160px; height: 120px; background: #000; border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 2px solid #4F46E5; overflow: hidden; position: relative; }
        .screen_out { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .screen_out1 { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .screen { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; animation: scanlines 0.1s linear infinite; }
        .screenM { position: absolute; width: 100%; height: 100%; background: repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px); pointer-events: none; }
        .notfound_text { color: #a78bfa; font-size: 11px; font-weight: bold; text-align: center; letter-spacing: 2px; text-shadow: 0 0 8px #6B21A8; }
        .lines { position: absolute; bottom: 16px; left: 16px; display: flex; gap: 4px; }
        .line1, .line2, .line3 { height: 8px; background: #6B21A8; border-radius: 2px; }
        .line1 { width: 20px; }
        .line2 { width: 14px; }
        .line3 { width: 8px; }
        .buttons_div { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 8px; align-items: center; }
        .b1 { width: 16px; height: 16px; background: #4F46E5; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .b1 div { width: 8px; height: 8px; background: #a78bfa; border-radius: 50%; }
        .b2 { width: 12px; height: 12px; background: #6B21A8; border-radius: 2px; }
        .speakers { display: flex; flex-direction: column; gap: 3px; }
        .g1 { display: flex; flex-direction: column; gap: 2px; }
        .g11, .g12, .g13 { width: 12px; height: 2px; background: #4F46E5; border-radius: 1px; }
        .g { width: 12px; height: 2px; background: #4F46E5; border-radius: 1px; margin-top: 3px; }
        .bottom { display: flex; flex-direction: column; align-items: center; margin-top: 8px; }
        .base1 { width: 60px; height: 8px; background: #6B21A8; border-radius: 4px; }
        .base2 { width: 80px; height: 6px; background: #4F46E5; border-radius: 4px; margin-top: 4px; }
        .base3 { width: 100px; height: 6px; background: #3730a3; border-radius: 4px; margin-top: 4px; }
        .text_404 { display: flex; gap: 8px; margin-top: 32px; }
        .text_4041, .text_4042, .text_4043 { font-size: 72px; font-weight: 900; color: #a78bfa; text-shadow: 0 0 20px rgba(107,33,168,0.8); line-height: 1; }
        @keyframes scanlines { 0% { background-position: 0 0; } 100% { background-position: 0 4px; } }
      `}</style>

      <div className="flex flex-col items-center">
        <div className="main_wrapper flex flex-col items-center">
          <div className="main">
            <div className="antenna">
              <div className="antenna_shadow"></div>
              <div className="a1"></div>
              <div className="a1d"></div>
              <div className="a2"></div>
              <div className="a2d"></div>
              <div className="a_base"></div>
            </div>
            <div className="tv">
              <div className="cruve">
                <svg viewBox="0 0 189.929 189.929" xmlns="http://www.w3.org/2000/svg" className="curve_svg">
                  <path d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z" />
                </svg>
              </div>
              <div className="display_div">
                <div className="screen_out">
                  <div className="screen_out1">
                    <div className="screen">
                      <span className="notfound_text">NOT FOUND</span>
                    </div>
                    <div className="screenM"></div>
                  </div>
                </div>
              </div>
              <div className="lines">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
              <div className="buttons_div">
                <div className="b1"><div></div></div>
                <div className="b2"></div>
                <div className="speakers">
                  <div className="g1">
                    <div className="g11"></div>
                    <div className="g12"></div>
                    <div className="g13"></div>
                  </div>
                  <div className="g"></div>
                  <div className="g"></div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="base1"></div>
              <div className="base2"></div>
              <div className="base3"></div>
            </div>
          </div>
          <div className="text_404">
            <div className="text_4041">4</div>
            <div className="text_4042">0</div>
            <div className="text_4043">4</div>
          </div>
        </div>

        <p className="text-white/40 text-sm mt-6 mb-8">This page doesn't exist — yet.</p>

        <button
          onClick={() => router.push("/")}
          className="px-8 py-3 rounded-full text-white font-semibold text-sm cursor-pointer border-none transition-all hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #6B21A8, #4F46E5)", boxShadow: "0 0 20px rgba(107,33,168,0.4)" }}
        >
          Go home
        </button>
      </div>
    </div>
  )
}
