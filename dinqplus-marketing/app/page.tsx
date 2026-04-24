import Hero from "@/components/hero"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)" }}>
      <Hero />
      <Footer />
    </div>
  )
}