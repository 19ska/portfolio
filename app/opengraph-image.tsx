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
          backgroundColor: "#f5f7fe",
          backgroundImage:
            "radial-gradient(1000px 600px at 90% -10%, rgba(37, 99, 235,0.18), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: "#2563eb",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 600,
            }}
          >
            {identity.monogram}
          </div>
          <div style={{ fontSize: 26, color: "#51607f" }}>{identity.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: 40, color: "#51607f" }}>{identity.name}</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 68,
              fontWeight: 600,
              color: "#0f172a",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            <span>I build production AI systems&nbsp;</span>
            <span style={{ color: "#2563eb" }}>from model to infrastructure.</span>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#51607f" }}>
          {identity.role}
        </div>
      </div>
    ),
    { ...size },
  );
}
