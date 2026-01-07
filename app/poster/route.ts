import chromiumBinary from "@sparticuz/chromium";

const isVercel = process.env.VERCEL === "1";

async function getBrowser() {
  if (isVercel) {
    const { chromium } = await import("playwright-core");
    return chromium.launch({
      args: chromiumBinary.args,
      executablePath: await chromiumBinary.executablePath(),
      headless: true,
    });
  } else {
    const { chromium } = await import("playwright");
    return chromium.launch({ headless: true });
  }
}
import QRCode from "qrcode";
import { readFileSync } from "fs";
import { join } from "path";
import {
  getRoute,
  formatDuration,
  formatDistance,
  formatPace,
  formatElevation,
  type StravaRoute,
} from "@/lib/strava";

export const dynamic = "force-static";
export const revalidate = 3600;

const imageBuffer = readFileSync(join(process.cwd(), "public/griffith.webp"));
const imageBase64 = `data:image/webp;base64,${imageBuffer.toString("base64")}`;

const TITLE = "HOLLYWOOD RUN CLUB";
const URL = "hollywoodrunclub.com";
const PLACE = "The Oaks Gourmet";
const ADDR = "1915 N Bronson Ave, Los Angeles";

interface PosterData {
  qrSvg: string;
  route: StravaRoute | null;
}

function buildHtml({ qrSvg, route }: PosterData) {
  const distance = route ? formatDistance(route.distance) : "--";
  const elevation = route ? formatElevation(route.elevation_gain) : "--";
  const time = route ? formatDuration(route.estimated_moving_time) : "--";

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @font-face {
      font-family: 'Geist';
      src: url('https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-Regular.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Geist';
      src: url('https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-Medium.woff2') format('woff2');
      font-weight: 500;
      font-style: normal;
    }
    @font-face {
      font-family: 'Geist';
      src: url('https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-SemiBold.woff2') format('woff2');
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: 'Geist';
      src: url('https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-Bold.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: 'Geist';
      src: url('https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-ExtraBold.woff2') format('woff2');
      font-weight: 800;
      font-style: normal;
    }
    @font-face {
      font-family: 'Geist';
      src: url('https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-Black.woff2') format('woff2');
      font-weight: 900;
      font-style: normal;
    }
  </style>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Geist', system-ui, -apple-system, sans-serif;
      width: 11in;
      height: 17in;
    }

    .poster {
      position: relative;
      width: 11in;
      height: 17in;
      overflow: hidden;
      background: #0a0a0a;
    }

    .bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.4;
    }

    .content {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      color: #fff;
    }

    /* Top section */
    .header {
      padding: 64px 64px 48px;
    }

    .kicker {
      font-weight: 700;
      letter-spacing: 0.3em;
      font-size: 13px;
      opacity: 0.7;
    }

    .title {
      margin-top: 16px;
      font-weight: 900;
      letter-spacing: -0.03em;
      line-height: 0.9;
      font-size: 108px;
      text-transform: uppercase;
    }

    /* Hero stat - distance as the main visual */
    .hero-stat {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .hero-number {
      font-weight: 900;
      font-size: 220px;
      letter-spacing: -0.04em;
      line-height: 0.85;
    }

    .hero-unit {
      font-weight: 800;
      font-size: 42px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      opacity: 0.6;
      margin-top: 8px;
    }

    .hero-label {
      margin-top: 32px;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      opacity: 0.5;
    }

    /* Bottom info bar */
    .footer {
      background: #fff;
      color: #0a0a0a;
      padding: 48px 64px;
      display: grid;
      grid-template-columns: 1fr 1fr auto auto;
      gap: 32px;
      align-items: center;
    }

    .stat-pills {
      display: flex;
      gap: 16px;
    }

    .footer-block {}

    .footer-label {
      font-weight: 800;
      letter-spacing: 0.2em;
      font-size: 10px;
      text-transform: uppercase;
      opacity: 0.5;
      margin-bottom: 8px;
    }

    .footer-value {
      font-weight: 800;
      font-size: 22px;
      letter-spacing: -0.01em;
    }

    .footer-meta {
      font-weight: 500;
      font-size: 13px;
      opacity: 0.6;
      margin-top: 4px;
    }

    .stat-pill {
      background: #0a0a0a;
      color: #fff;
      padding: 16px 28px;
      border-radius: 100px;
      text-align: center;
    }

    .stat-pill .footer-label {
      color: #fff;
      opacity: 0.6;
    }

    .stat-pill .footer-value {
      color: #fff;
    }

    .qr {
      width: 80px;
      height: 80px;
    }

    .qr svg {
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>
  <div class="poster">
    <img class="bg" src="${imageBase64}" alt="">
    <div class="content">
      <div class="header">
        <div class="kicker">EVERY TUESDAY / 6:30 PM</div>
        <h1 class="title">Hollywood<br>Run Club</h1>
      </div>

      ${route ? `
      <div class="hero-stat">
        <div class="hero-number">${route.distance ? (route.distance / 1609.34).toFixed(1) : "--"}</div>
        <div class="hero-unit">Miles</div>
        <div class="hero-label">Winter 2026 Route</div>
      </div>
      ` : `
      <div class="hero-stat">
        <div class="hero-number">?</div>
        <div class="hero-unit">Miles</div>
        <div class="hero-label">Route TBD</div>
      </div>
      `}

      <div class="footer">
        <div class="footer-block">
          <div class="footer-label">Meet At</div>
          <div class="footer-value">${PLACE}</div>
          <div class="footer-meta">${ADDR}</div>
        </div>

        <div class="footer-block">
          <div class="footer-label">Info</div>
          <div class="footer-value">${URL}</div>
        </div>

        ${route ? `
        <div class="stat-pills">
          <div class="stat-pill">
            <div class="footer-label">Est. Time</div>
            <div class="footer-value">${time}</div>
          </div>
          <div class="stat-pill">
            <div class="footer-label">Elevation</div>
            <div class="footer-value">${elevation}</div>
          </div>
        </div>
        ` : ""}

        <div class="qr">${qrSvg}</div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

export async function GET() {
  const qrSvg = await QRCode.toString(`https://${URL}`, {
    type: "svg",
    margin: 0,
    color: { dark: "#0a0a0a", light: "#ffffff00" },
  });

  // Fetch Strava route if configured
  let route: StravaRoute | null = null;
  const routeId = process.env.STRAVA_ROUTE_ID;

  if (routeId) {
    try {
      route = await getRoute(routeId);
    } catch (err) {
      console.error("Failed to fetch Strava route:", err);
    }
  }

  const browser = await getBrowser();
  const page = await browser.newPage();

  await page.setContent(buildHtml({ qrSvg, route }), { waitUntil: "networkidle" });

  const pdf = await page.pdf({
    width: "11in",
    height: "17in",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=hollywood-run-club-poster.pdf",
    },
  });
}
