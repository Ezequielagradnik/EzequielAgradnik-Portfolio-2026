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
          justifyContent: "space-between",
          background: "#f7f6f3",
          color: "#111111",
          padding: "72px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "ui-monospace, Menlo, monospace",
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#787774",
          }}
        >
          <span>Buenos Aires · Available for projects</span>
          <span>EA</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 128, lineHeight: 0.95, letterSpacing: "-0.03em" }}>
            Ezequiel Agradnik
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 40,
              fontStyle: "italic",
              color: "#2f3437",
              letterSpacing: "-0.01em",
            }}
          >
            Full-stack & automation developer.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            fontFamily: "ui-monospace, Menlo, monospace",
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#787774",
            borderTop: "1px solid #eaeaea",
            paddingTop: 28,
          }}
        >
          <span>19 y/o</span>
          <span>10+ clients</span>
          <span>Argentina · Israel · Chile · USA</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
