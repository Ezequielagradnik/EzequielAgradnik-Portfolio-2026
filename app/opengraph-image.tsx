import { ImageResponse } from "next/og"

export const alt = "Ezequiel Agradnik — Full-Stack & Automation Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #000000 0%, #1a0033 50%, #0a0014 100%)",
          padding: "80px",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -200,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -150,
            right: 100,
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#a855f7",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Portfolio · 2026
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            backgroundImage: "linear-gradient(to right, #c084fc, #ec4899, #f43f5e)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          Ezequiel Agradnik
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 42,
            color: "#e5e7eb",
            fontWeight: 500,
            marginBottom: 56,
          }}
        >
          Full-Stack & Automation Developer
        </div>

        <div
          style={{
            display: "flex",
            gap: 48,
            fontSize: 26,
            color: "#9ca3af",
          }}
        >
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <span style={{ color: "#a855f7", fontSize: 32 }}>●</span> 18 y/o
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <span style={{ color: "#ec4899", fontSize: 32 }}>●</span> 10+ Clients
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <span style={{ color: "#f43f5e", fontSize: 32 }}>●</span> Argentina · Dubai · Israel
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
