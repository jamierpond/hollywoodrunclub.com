import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "52px",
        }}
      >
        <span
          style={{
            fontSize: "140px",
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
      width: 256,
      height: 256,
    }
  );
}
