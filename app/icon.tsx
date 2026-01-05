import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default async function Icon() {
  // Fetch Inter Black (900 weight)
  const interBlack = await fetch(
    "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf"
  ).then((res) => res.arrayBuffer());

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
            fontSize: "150px",
            fontFamily: "Inter",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.06em",
            marginTop: "-8px",
          }}
        >
          H
        </span>
      </div>
    ),
    {
      width: 256,
      height: 256,
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
