import { NextRequest } from "next/server";
import { chromium } from "playwright";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // Build the URL for the HTML version, forwarding any query params
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${process.env.PORT || 3000}`;

  const htmlUrl = new URL("/poster/html", baseUrl);
  searchParams.forEach((value, key) => {
    htmlUrl.searchParams.set(key, value);
  });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(htmlUrl.toString(), { waitUntil: "networkidle" });

  // Generate PDF at 11x17 tabloid size
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
