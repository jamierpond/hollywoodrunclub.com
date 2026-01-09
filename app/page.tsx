import { Metadata } from 'next';
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

export async function generateMetadata(): Promise<Metadata> {
  const description = 'Weekly group runs through Griffith Park, Los Angeles. Tuesdays at 6:30 PM.';

  return {
    title: 'Hollywood Run Club | Los Angeles',
    description,
    keywords: ['los angeles run club', 'la run club', 'hollywood run club', 'hollywood running group', 'los feliz run club', 'los feliz running', 'griffith park running', 'griffith park run club', 'la running group', 'free run club la', 'silver lake run club', 'east hollywood running'],
    openGraph: {
      title: 'Hollywood Run Club',
      description,
      url: 'https://hollywoodrunclub.com',
      siteName: 'Hollywood Run Club',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hollywood Run Club',
      description,
    },
  };
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
