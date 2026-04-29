"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Navbar } from "@/components/navbar";

export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
  src: string;
  index: number;
  total: number;
  phase: AnimationPhase;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
  name: string;
  color: string;
  target_industry: string;
}

const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

const VERTICALS = [
  { name: "DinqBook", color: "#6B21A8", industry: "Salon", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&q=80" },
  { name: "DinqShop", color: "#1D4ED8", industry: "Auto Repair", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=300&q=80" },
  { name: "DinqCare", color: "#DB2877", industry: "Home Care", image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=300&q=80" },
  { name: "DinqAgency", color: "#4F46E5", industry: "Digital Agency", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80" },
  { name: "DinqProp", color: "#047857", industry: "Property Mgmt", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&q=80" },
  { name: "DinqFactory", color: "#065F46", industry: "Manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80" },
  { name: "DinqServe", color: "#EA580C", industry: "Restaurant/Bar", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&q=80" },
  { name: "DinqGuard", color: "#1E3A5F", industry: "Security", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=300&q=80" },
  { name: "DinqStyle", color: "#7C3AED", industry: "Tailoring", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80" },
  { name: "DinqArtist", color: "#F97316", industry: "Creatives", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&q=80" },
  { name: "DinqClean", color: "#0891B2", industry: "Cleaning", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&q=80" },
  { name: "DinqDrop", color: "#0EA5E9", industry: "E-commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80" },
  { name: "DinqEvents", color: "#F59E0B", industry: "Event Planning", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&q=80" },
  { name: "DinqVolt", color: "#EAB308", industry: "Electricians", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&q=80" },
  { name: "DinqFit", color: "#16A34A", industry: "Gym/Fitness", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&q=80" },
  { name: "DinqLegal", color: "#475569", industry: "Immigration/Legal", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&q=80" },
  { name: "DinqStudio", color: "#9333EA", industry: "Photo/Video Studio", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&q=80" },
  { name: "DinqPay", color: "#0D9488", industry: "Money Transfer", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&q=80" },
  { name: "DinqTravel", color: "#2563EB", industry: "Travel", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&q=80" },
  { name: "DinqMarket", color: "#DC2626", industry: "Retail", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&q=80" },
]

const TOTAL_IMAGES = VERTICALS.length;
const MAX_SCROLL = 3000;
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

function FlipCard({ src, index, total, phase, target, name, color, target_industry }: FlipCardProps) {
  return (
    <motion.div
      animate={{ x: target.x, y: target.y, rotate: target.rotation, scale: target.scale, opacity: target.opacity }}
      transition={{ type: "spring", stiffness: 40, damping: 15 }}
      style={{ position: "absolute", width: IMG_WIDTH, height: IMG_HEIGHT, transformStyle: "preserve-3d", perspective: "1000px" }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg" style={{ backfaceVisibility: "hidden" }}>
          <img src={src} alt={name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent" />
        </div>
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg flex flex-col items-center justify-center p-2"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: color }}
        >
          <p className="text-[7px] font-bold text-white/70 uppercase tracking-widest mb-1">{target_industry}</p>
          <p className="text-[9px] font-bold text-white text-center leading-tight">{name}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function VerticalsPage() {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize({ width: entry.contentRect.width, height: entry.contentRect.height });
      }
    });
    observer.observe(containerRef.current);
    setContainerSize({ width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight });
    return () => observer.disconnect();
  }, []);

  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [virtualScroll]);

  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });
  const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normalizedX = (e.clientX - rect.left) / rect.width * 2 - 1;
      mouseX.set(normalizedX * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase("line"), 500);
    const t2 = setTimeout(() => setIntroPhase("circle"), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const scatterPositions = useMemo(() => VERTICALS.map(() => ({
    x: (Math.random() - 0.5) * 1500,
    y: (Math.random() - 0.5) * 1000,
    rotation: (Math.random() - 0.5) * 180,
    scale: 0.6,
    opacity: 0,
  })), []);

  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const u1 = smoothMorph.on("change", setMorphValue);
    const u2 = smoothScrollRotate.on("change", setRotateValue);
    const u3 = smoothMouseX.on("change", setParallaxValue);
    return () => { u1(); u2(); u3(); };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  return (
    <div style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)", height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Navbar />
      <div ref={containerRef} className="relative flex-1 overflow-hidden">
        <div className="flex h-full w-full flex-col items-center justify-center">

          <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={introPhase === "circle" && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
              className="text-2xl font-medium tracking-tight text-white md:text-4xl"
            >
              Your business runs on Dinq+
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={introPhase === "circle" && morphValue < 0.5
                ? { opacity: 0.5 - morphValue }
                : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-4 text-xs font-bold tracking-[0.2em] text-white/50"
            >
              SCROLL TO EXPLORE
            </motion.p>
          </div>

          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="absolute top-[10%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              Find your vertical
            </h2>
            <p className="text-sm md:text-base max-w-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              20 verticals. One platform. Built for Ethiopian entrepreneurs everywhere.
            </p>
          </motion.div>

          <div className="relative flex items-center justify-center w-full h-full">
            {VERTICALS.map((vertical, i) => {
              let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

              if (introPhase === "scatter") {
                target = scatterPositions[i];
              } else if (introPhase === "line") {
                const lineSpacing = 70;
                const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                target = { x: i * lineSpacing - lineTotalWidth / 2, y: 0, rotation: 0, scale: 1, opacity: 1 };
              } else {
                const isMobile = containerSize.width < 768;
                const minDimension = Math.min(containerSize.width, containerSize.height);
                const circleRadius = Math.min(minDimension * 0.35, 350);
                const circleAngle = (i / TOTAL_IMAGES) * 360;
                const circleRad = (circleAngle * Math.PI) / 180;
                const circlePos = {
                  x: Math.cos(circleRad) * circleRadius,
                  y: Math.sin(circleRad) * circleRadius,
                  rotation: circleAngle + 90,
                };
                const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                const arcCenterY = arcApexY + arcRadius;
                const spreadAngle = isMobile ? 100 : 130;
                const startAngle = -90 - spreadAngle / 2;
                const step = spreadAngle / (TOTAL_IMAGES - 1);
                const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                const maxRotation = spreadAngle * 0.8;
                const boundedRotation = -scrollProgress * maxRotation;
                const currentArcAngle = startAngle + i * step + boundedRotation;
                const arcRad = (currentArcAngle * Math.PI) / 180;
                const arcPos = {
                  x: Math.cos(arcRad) * arcRadius + parallaxValue,
                  y: Math.sin(arcRad) * arcRadius + arcCenterY,
                  rotation: currentArcAngle + 90,
                  scale: isMobile ? 1.4 : 1.8,
                };
                target = {
                  x: lerp(circlePos.x, arcPos.x, morphValue),
                  y: lerp(circlePos.y, arcPos.y, morphValue),
                  rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                  scale: lerp(1, arcPos.scale, morphValue),
                  opacity: 1,
                };
              }

              return (
                <FlipCard
                  key={i}
                  src={vertical.image}
                  index={i}
                  total={TOTAL_IMAGES}
                  phase={introPhase}
                  target={target}
                  name={vertical.name}
                  color={vertical.color}
                  target_industry={vertical.industry}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
