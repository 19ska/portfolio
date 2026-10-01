import { ImageResponse } from "next/og";

// Static preview copy, deliberately independent of identity.tagline/role —
// this card should stay fixed even as the hero copy on the page evolves.
const PREVIEW_NAME = "Skanda Gonur Nagaraj";
const PREVIEW_ROLE = "Software Engineer";
const PREVIEW_SKILLS = "AI/ML • Agentic AI • LLMs • RAG • Distributed Systems";

export const alt = `${PREVIEW_NAME} — ${PREVIEW_ROLE}`;
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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#fbfaf8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 72,
            fontWeight: 600,
            color: "#16161a",
            letterSpacing: "-0.02em",
            maxWidth: 1040,
          }}
        >
          {PREVIEW_NAME}
        </div>

        <div style={{ display: "flex", marginTop: 16, fontSize: 36, fontWeight: 500, color: "#c1440e" }}>
          {PREVIEW_ROLE}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 64,
            fontSize: 28,
            color: "#63636b",
            maxWidth: 1040,
          }}
        >
          {PREVIEW_SKILLS}
        </div>
      </div>
    ),
    { ...size },
  );
}
