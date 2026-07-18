import { ImageResponse } from "next/og";
import { identity } from "@/lib/data";

export const alt = `${identity.name} — ${identity.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#f5f5f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ fontSize: 26, color: "#6b6b6b", fontFamily: "monospace" }}>
            {identity.name}
          </div>
          <div style={{ fontSize: 26, color: "#6b6b6b" }}>·</div>
          <div style={{ fontSize: 26, color: "#6b6b6b" }}>{identity.location}</div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 68,
            fontWeight: 800,
            color: "#0a0a0a",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 980,
          }}
        >
          I build production AI systems from model to infrastructure.
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#6b6b6b" }}>{identity.role}</div>
      </div>
    ),
    { ...size },
  );
}
