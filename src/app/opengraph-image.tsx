import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

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
          padding: 80,
          background: "#f7f3ec",
          color: "#171717",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: "50%",
            border: "1px solid #b8ab8a",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          {profile.initials}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 600 }}>{profile.name}</div>
          <div style={{ fontSize: 32, color: "#57534e" }}>{profile.role}</div>
          <div style={{ fontSize: 24, color: "#78716c" }}>
            {profile.location}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#78716c" }}>
          martineikefet.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
