import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Schedule from '@/components/Schedule';
import Vibe from '@/components/Vibe';
import Footer from '@/components/Footer';
import { VIDEO_BLUR_PLACEHOLDER } from '@/lib/constants';
import { getRoute, type StravaRoute } from '@/lib/strava';

export const metadata: Metadata = {
  title: 'Hollywood Run Club | Run the Hills',
  description: 'The premier running community in Hollywood, CA. Weekly runs through the Hollywood Hills. All paces welcome. Join the movement.',
  openGraph: {
    title: 'Hollywood Run Club',
    description: 'Community. Fitness. Fun. Every Tuesday.',
    url: 'https://hollywoodrunclub.com',
    siteName: 'Hollywood Run Club',
    locale: 'en_US',
    type: 'website',
  },
};

async function fetchRoute(): Promise<StravaRoute | null> {
  const routeId = process.env.STRAVA_ROUTE_ID;
  const accessToken = process.env.STRAVA_ACCESS_TOKEN;
  if (!routeId || !accessToken) return null;
  try {
    return await getRoute(routeId, accessToken);
  } catch {
    return null;
  }
}

export default async function Page() {
  const route = await fetchRoute();

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white font-sans">
      <Navbar />
      <Hero videoPlaceholder={VIDEO_BLUR_PLACEHOLDER} />
      <Schedule route={route} />
      <Vibe />
      <Footer />
      <Script src="https://strava-embeds.com/embed.js" strategy="afterInteractive" />
    </main>
  );
}
