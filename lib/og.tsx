import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const INTER_FONT_URL =
  "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf";

export async function loadFont() {
  return fetch(INTER_FONT_URL).then((res) => res.arrayBuffer());
}

export function createOgResponse(element: React.ReactElement, fontData: ArrayBuffer) {
  return new ImageResponse(element, {
    ...OG_SIZE,
    fonts: [{ name: "Inter", data: fontData, style: "normal", weight: 900 }],
  });
}

interface RouteData {
  distance: string;
  elevation: string;
  time: string;
}

export function OgImage({ route }: { route?: RouteData | null }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000",
        fontFamily: "Inter",
        position: "relative",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, #1a1a1a 0%, #000 100%)",
          display: "flex",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Top: Kicker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Every Tuesday / 6:30 PM
          </span>
        </div>

        {/* Middle: Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          <span
            style={{
              fontSize: "120px",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 0.9,
              textTransform: "uppercase",
            }}
          >
            Hollywood
          </span>
          <span
            style={{
              fontSize: "120px",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 0.9,
              textTransform: "uppercase",
            }}
          >
            Run Club
          </span>
        </div>

        {/* Bottom: Stats or tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {route ? (
            <div style={{ display: "flex", gap: "48px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Distance
                </span>
                <span style={{ fontSize: "36px", fontWeight: 700, color: "#fff" }}>
                  {route.distance}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Elevation
                </span>
                <span style={{ fontSize: "36px", fontWeight: 700, color: "#fff" }}>
                  {route.elevation}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Est. Time
                </span>
                <span style={{ fontSize: "36px", fontWeight: 700, color: "#fff" }}>
                  {route.time}
                </span>
              </div>
            </div>
          ) : (
            <span style={{ fontSize: "28px", color: "rgba(255,255,255,0.6)" }}>
              Free weekly runs through Griffith Park
            </span>
          )}

          <span
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            hollywoodrunclub.com
          </span>
        </div>
      </div>
    </div>
  );
}
