import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Schedule from '@/components/Schedule';
import Vibe from '@/components/Vibe';
import Footer from '@/components/Footer';

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

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white font-sans">
      <Navbar />
      <Hero />
      <Marquee />
      <Schedule />
      <Vibe />
      <Footer />
      <Script src="https://strava-embeds.com/embed.js" strategy="afterInteractive" />
    </main>
  );
}
