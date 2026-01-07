import { fetchRoute, formatDuration, formatPace } from "@/lib/strava";

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  const route = await fetchRoute();

  if (!route) {
    return Response.json({ error: "Route unavailable" }, { status: 500 });
  }

  return Response.json({
    id: route.id,
    name: route.name,
    description: route.description,
    distance: {
      meters: route.distance,
      miles: route.distance / 1609.34,
    },
    elevation_gain: {
      meters: route.elevation_gain,
      feet: route.elevation_gain * 3.28084,
    },
    estimated_moving_time: {
      seconds: route.estimated_moving_time,
      formatted: formatDuration(route.estimated_moving_time),
    },
    pace: {
      seconds_per_mile: (route.estimated_moving_time / route.distance) * 1609.34,
      formatted: formatPace(route.distance, route.estimated_moving_time),
    },
    type: route.type === 1 ? "ride" : "run",
    map: {
      polyline: route.map?.polyline,
      summary_polyline: route.map?.summary_polyline,
    },
    strava_url: `https://www.strava.com/routes/${route.id}`,
  });
}
