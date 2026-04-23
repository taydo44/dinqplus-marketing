import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Dinq+ — Software for Ethiopian entrepreneurs worldwide"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)",
          position: "relative",
        }}
      >
        {/* Purple glow blob */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(107,33,168,0.3)",
            filter: "blur(120px)",
          }}
        />

        {/* Bottom glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            left: "200px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(79,70,229,0.2)",
            filter: "blur(100px)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 20px",
            borderRadius: "999px",
            background: "rgba(107,33,168,0.2)",
            border: "1px solid rgba(107,33,168,0.4)",
            marginBottom: "24px",
          }}
        >
          <span style={{ color: "rgba(167,139,250,0.9)", fontSize: "18px", fontWeight: 500 }}>
            ✨ Built for the diaspora
          </span>
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "4px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontSize: "96px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Dinq
          </span>
          <span
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#a78bfa",
              lineHeight: 1,
            }}
          >
            +
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "28px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.5)",
            margin: 0,
            lineHeight: 1.4,
            maxWidth: "700px",
          }}
        >
          Software for Ethiopian entrepreneurs — wherever you are in the world.
        </p>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#34D399",
            }}
          />
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "18px" }}>
            dinqdigital.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}