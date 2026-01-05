import { chromium } from "playwright";
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
} from "./strava";

export const dynamic = "force-static";

const imageBuffer = readFileSync(join(process.cwd(), "public/griffith.jpg"));
const imageBase64 = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;

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
  const duration = route ? formatDuration(route.estimated_moving_time) : "--";
  const pace = route ? formatPace(route.distance, route.estimated_moving_time) : "--";
  const elevation = route ? formatElevation(route.elevation_gain) : "--";
  const routeName = route?.name || "";

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    @font-face {
      font-family: 'Geist';
      src: local('Geist'), local('system-ui');
    }

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
      background: white;
    }

    .bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(100%) contrast(1.25) brightness(1.1);
      transform: scale(1.08);
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(255,255,255,0.66);
    }

    .content {
      position: absolute;
      inset: 0;
      padding: 72px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #0a0a0a;
    }

    .kicker {
      font-weight: 800;
      letter-spacing: 0.22em;
      font-size: 14px;
    }

    .title {
      margin-top: 14px;
      font-weight: 900;
      letter-spacing: -0.04em;
      line-height: 0.92;
      font-size: 92px;
    }

    .sub {
      margin-top: 20px;
      font-weight: 700;
      letter-spacing: 0.14em;
      font-size: 16px;
      text-transform: uppercase;
      opacity: 0.85;
    }

    .route-name {
      margin-top: 24px;
      font-weight: 600;
      font-size: 20px;
      opacity: 0.9;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      margin-top: 48px;
      padding: 32px;
      background: rgba(255,255,255,0.5);
      border-radius: 8px;
    }

    .stat-item {
      text-align: center;
    }

    .stat-label {
      font-weight: 800;
      letter-spacing: 0.22em;
      font-size: 11px;
      text-transform: uppercase;
      opacity: 0.7;
    }

    .stat-value {
      margin-top: 8px;
      font-weight: 900;
      font-size: 32px;
      letter-spacing: -0.02em;
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      gap: 48px;
      align-items: flex-end;
    }

    .label {
      font-weight: 800;
      letter-spacing: 0.22em;
      font-size: 12px;
      text-transform: uppercase;
      opacity: 0.7;
    }

    .value {
      margin-top: 8px;
      font-weight: 900;
      letter-spacing: -0.02em;
      font-size: 28px;
    }

    .meta {
      margin-top: 6px;
      font-weight: 600;
      font-size: 14px;
      opacity: 0.75;
    }

    .qr {
      width: 120px;
      height: 120px;
      flex-shrink: 0;
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
    <div class="overlay"></div>
    <div class="content">
      <div class="top">
        <div class="kicker">RUN CLUB</div>
        <h1 class="title">${TITLE}</h1>
        <div class="sub">TUESDAYS @ 6:30 PM</div>
        ${route ? `
        <div class="route-name">${routeName}</div>
        <div class="stats">
          <div class="stat-item">
            <div class="stat-label">Distance</div>
            <div class="stat-value">${distance}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">Est. Time</div>
            <div class="stat-value">${duration}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">Pace</div>
            <div class="stat-value">${pace}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">Elevation</div>
            <div class="stat-value">${elevation}</div>
          </div>
        </div>
        ` : ""}
      </div>
      <div class="bottom">
        <div class="where">
          <div class="label">Meet</div>
          <div class="value">${PLACE}</div>
          <div class="meta">${ADDR}</div>
        </div>
        <div class="url">
          <div class="label">Info</div>
          <div class="value">${URL}</div>
        </div>
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

  // Fetch Strava route if credentials are configured
  let route: StravaRoute | null = null;
  const routeId = process.env.STRAVA_ROUTE_ID;
  const accessToken = process.env.STRAVA_ACCESS_TOKEN;

  if (routeId && accessToken) {
    try {
      route = await getRoute(routeId, accessToken);
    } catch (err) {
      console.error("Failed to fetch Strava route:", err);
    }
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setContent(buildHtml({ qrSvg, route }), { waitUntil: "networkidle" });

  const pdf = await page.pdf({
    width: "11in",
    height: "17in",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=hollywood-run-club-poster.pdf",
    },
  });
}
