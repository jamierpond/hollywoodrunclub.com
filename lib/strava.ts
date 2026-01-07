const STRAVA_API = "https://www.strava.com/api/v3";
const STRAVA_OAUTH = "https://www.strava.com/oauth/token";

export interface StravaRoute {
  id: number;
  name: string;
  description: string;
  distance: number; // meters
  elevation_gain: number; // meters
  estimated_moving_time: number; // seconds
  type: number; // 1 = ride, 2 = run
  sub_type: number; // 1 = road, 2 = mtb, 3 = cross, 4 = trail, 5 = mixed
  created_at: string;
  updated_at: string;
  private: boolean;
  starred: boolean;
  map: {
    id: string;
    polyline: string;
    summary_polyline: string;
  };
}

export interface FormattedRouteData {
  distance: string;
  elevation: string;
  time: string;
  pace: string;
}

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_at: number;
}

async function refreshAccessToken(): Promise<string> {
  const clientId = process.env.STRAVA_CLIENT_ID;
  const clientSecret = process.env.STRAVA_CLIENT_SECRET;
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Strava OAuth credentials");
  }

  const res = await fetch(STRAVA_OAUTH, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  if (!res.ok) {
    throw new Error(`Strava OAuth error: ${res.status} ${res.statusText}`);
  }

  const data: TokenResponse = await res.json();
  return data.access_token;
}

async function getRouteById(routeId: string): Promise<StravaRoute> {
  const accessToken = await refreshAccessToken();

  const res = await fetch(`${STRAVA_API}/routes/${routeId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    throw new Error(`Strava API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

/** Fetch route using STRAVA_ROUTE_ID env var. Returns null on error. */
export async function fetchRoute(): Promise<StravaRoute | null> {
  const routeId = process.env.STRAVA_ROUTE_ID;
  if (!routeId) return null;
  try {
    return await getRouteById(routeId);
  } catch {
    return null;
  }
}

/** Get formatted route data for display. Returns null if route unavailable. */
export async function getFormattedRouteData(): Promise<FormattedRouteData | null> {
  const route = await fetchRoute();
  if (!route) return null;

  return {
    distance: formatDistance(route.distance),
    elevation: formatElevation(route.elevation_gain),
    time: formatDuration(route.estimated_moving_time),
    pace: formatPace(route.distance, route.estimated_moving_time),
  };
}

// Formatters

export function formatDuration(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  return hrs > 0 ? `${hrs}h ${mins}m` : `${mins} min`;
}

export function formatDistance(meters: number): string {
  return `${(meters / 1609.34).toFixed(1)} mi`;
}

export function formatElevation(meters: number): string {
  return `${Math.round(meters * 3.28084)} ft`;
}

export function formatPace(distanceMeters: number, timeSeconds: number): string {
  if (distanceMeters === 0 || timeSeconds === 0) return "N/A";
  const secondsPerMile = (timeSeconds / distanceMeters) * 1609.34;
  const mins = Math.floor(secondsPerMile / 60);
  const secs = Math.round(secondsPerMile % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}/mi`;
}
