const STRAVA_API = "https://www.strava.com/api/v3";

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

export async function getRoute(routeId: string, accessToken: string): Promise<StravaRoute> {
  const res = await fetch(`${STRAVA_API}/routes/${routeId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    throw new Error(`Strava API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// Format seconds to "X hr Y min" or "Y min"
export function formatDuration(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);

  if (hrs > 0) {
    return `${hrs}h ${mins}m`;
  }
  return `${mins} min`;
}

// Format meters to miles
export function formatDistance(meters: number): string {
  const miles = meters / 1609.34;
  return `${miles.toFixed(1)} mi`;
}

// Format elevation gain to feet
export function formatElevation(meters: number): string {
  const feet = meters * 3.28084;
  return `${Math.round(feet)} ft`;
}

// Calculate pace from distance and time
export function formatPace(distanceMeters: number, timeSeconds: number): string {
  if (distanceMeters === 0 || timeSeconds === 0) return "N/A";
  const miles = distanceMeters / 1609.34;
  const secondsPerMile = timeSeconds / miles;
  const mins = Math.floor(secondsPerMile / 60);
  const secs = Math.round(secondsPerMile % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}/mi`;
}
