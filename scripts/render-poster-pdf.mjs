// scripts/render-poster-pdf.mjs
// Renders /poster to a print-ready PDF using Chromium via Playwright.
// Run with: pnpm dev (in one terminal), then: node scripts/render-poster-pdf.mjs

import { chromium } from "playwright";
import path from "node:path";

const url =
  process.env.POSTER_URL ??
  "http://localhost:3000/poster?title=HOLLYWOOD%20RUN%20CLUB&day=TUESDAYS&time=6%3A30%20PM&place=The%20Oaks%20Gourmet&addr=1915%20N%20Bronson%20Ave%2C%20Los%20Angeles&url=hollywoodrunclub.com";

const out = process.env.POSTER_OUT ?? path.resolve("poster.pdf");

const browser = await chromium.launch();
const page = await browser.newPage();

// Prefer waiting for images/fonts to settle
await page.goto(url, { waitUntil: "networkidle" });

// Generate PDF with background + CSS @page size
await page.pdf({
  path: out,
  printBackground: true,
  preferCSSPageSize: true,
});

await browser.close();
console.log(`Wrote ${out}`);
