import { getRoute } from "@/lib/strava";

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  const routeId = process.env.STRAVA_ROUTE_ID;

  if (!routeId) {
    return Response.json(
      { error: "Missing STRAVA_ROUTE_ID" },
      { status: 500 }
    );
  }

  try {
    const route = await getRoute(routeId);

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
        formatted: formatTime(route.estimated_moving_time),
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
  } catch (err) {
    return Response.json(
      { error: "Failed to fetch route", details: String(err) },
      { status: 500 }
    );
  }
}

function formatTime(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  if (hrs > 0) return `${hrs}h ${mins}m`;
  return `${mins} min`;
}

function formatPace(distanceMeters: number, timeSeconds: number): string {
  const miles = distanceMeters / 1609.34;
  const secondsPerMile = timeSeconds / miles;
  const mins = Math.floor(secondsPerMile / 60);
  const secs = Math.round(secondsPerMile % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}/mi`;
}
