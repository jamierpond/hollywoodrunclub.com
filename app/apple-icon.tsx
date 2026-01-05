import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
        }}
      >
        <span
          style={{
            fontSize: "100px",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.05em",
          }}
        >
          H
        </span>
      </div>
    ),
    {
      width: 180,
      height: 180,
    }
  );
}
