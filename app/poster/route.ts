import { chromium } from "playwright";

export const dynamic = "force-static";

const TITLE = "HOLLYWOOD RUN CLUB";
const DAY = "TUESDAYS";
const TIME = "6:30 PM";
const PLACE = "The Oaks Gourmet";
const ADDR = "1915 N Bronson Ave, Los Angeles";
const URL = "hollywoodrunclub.com";

const html = `<!DOCTYPE html>
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

    .sub .dot { margin: 0 10px; }

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
  </style>
</head>
<body>
  <div class="poster">
    <img class="bg" src="https://hollywoodrunclub.com/running-poster.webp" alt="">
    <div class="overlay"></div>
    <div class="content">
      <div class="top">
        <div class="kicker">RUN CLUB</div>
        <h1 class="title">${TITLE}</h1>
        <div class="sub">
          <span>${DAY}</span>
          <span class="dot">•</span>
          <span>${TIME}</span>
          <span class="dot">•</span>
          <span>ALL PACES WELCOME</span>
        </div>
      </div>
      <div class="bottom">
        <div class="where">
          <div class="label">MEET</div>
          <div class="value">${PLACE}</div>
          <div class="meta">${ADDR}</div>
        </div>
        <div class="url">
          <div class="label">INFO</div>
          <div class="value">${URL}</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

export async function GET() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "networkidle" });

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
