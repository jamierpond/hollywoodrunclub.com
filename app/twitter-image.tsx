import { OG_SIZE, loadFont, createOgResponse, OgImage } from "@/lib/og";
import { getRoute, formatDistance, formatElevation, formatDuration } from "@/lib/strava";

export const runtime = "nodejs";
export const alt = "Hollywood Run Club - Free weekly runs through Griffith Park";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const fontData = await loadFont();

  let routeData = null;
  const routeId = process.env.STRAVA_ROUTE_ID;
  const accessToken = process.env.STRAVA_ACCESS_TOKEN;

  if (routeId && accessToken) {
    try {
      const route = await getRoute(routeId, accessToken);
      routeData = {
        distance: formatDistance(route.distance),
        elevation: formatElevation(route.elevation_gain),
        time: formatDuration(route.estimated_moving_time),
      };
    } catch {
      // Fall back to no route data
    }
  }

  return createOgResponse(<OgImage route={routeData} />, fontData);
}
