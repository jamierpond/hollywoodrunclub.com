import { ImageResponse } from "next/og";

const FONT_URL =
  "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf";

export async function generateIcon(size = 256) {
  const interBlack = await fetch(FONT_URL).then((res) => res.arrayBuffer());

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
          borderRadius: `${Math.round(size * 0.2)}px`,
        }}
      >
        <span
          style={{
            fontSize: `${Math.round(size * 0.59)}px`,
            fontFamily: "Inter",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          H
        </span>
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [
        {
          name: "Inter",
          data: interBlack,
          style: "normal",
          weight: 900,
        },
      ],
    }
  );
}
