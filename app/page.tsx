import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Schedule from '@/components/Schedule';
import Vibe from '@/components/Vibe';
import Footer from '@/components/Footer';
import { VIDEO_BLUR_PLACEHOLDER } from '@/lib/constants';
import { fetchRoute } from '@/lib/strava';

export const dynamic = 'force-static';
export const revalidate = 3600;

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
