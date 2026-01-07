import { OG_SIZE, loadFont, createOgResponse, OgImage } from "@/lib/og";
import { getFormattedRouteData } from "@/lib/strava";

export const runtime = "nodejs";
export const alt = "Hollywood Run Club - Free weekly runs through Griffith Park";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const [fontData, routeData] = await Promise.all([
    loadFont(),
    getFormattedRouteData(),
  ]);

  return createOgResponse(<OgImage route={routeData} />, fontData);
}
