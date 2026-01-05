// app/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

// --- SEO METADATA ---
export const metadata: Metadata = {
  title: 'Hollywood Run Club | Run the Hills',
  description: 'The premier running community in Hollywood, CA. Weekly runs at Hollywood Reservoir and Runyon Canyon.',
  openGraph: {
    title: 'Hollywood Run Club',
    description: 'Tuesday Track. Saturday Long Runs. No dues, just vibes.',
    type: 'website',
  },
};

// --- ICONS ---
const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const MapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const Clock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- HERO WITH VIDEO ---
const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 1. The Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg" // Important for Core Web Vitals (LCP)
          className="h-full w-full object-cover grayscale contrast-[1.1] brightness-[0.8]"
        >
          {/* Replace this with your actual running footage URL */}
          <source src="https://videos.pexels.com/video-files/2795748/2795748-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text pops */}
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
      </div>

      {/* 2. Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-bold tracking-widest text-white mb-6 uppercase backdrop-blur-md">
          Est. 2024 • Los Angeles
        </span>

        {/* The Custom Font Class */}
        <h1 className="text-7xl sm:text-9xl font-hollywood text-white uppercase leading-[0.85] tracking-tight mb-8">
          Run The <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Hills.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-xl mx-auto mb-10 font-medium leading-relaxed">
          The premier running community in Hollywood. <br/>
          Tuesday Nights. Saturday Mornings. No Dues.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#schedule"
            className="px-8 py-4 bg-white text-black rounded-none font-bold text-lg uppercase tracking-wider hover:bg-gray-200 transition-all flex items-center justify-center"
          >
            Join The Run
          </Link>
          <a
            href="https://strava.com"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border border-white text-white rounded-none font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all"
          >
            Strava
          </a>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTS ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 sm:p-8 mix-blend-difference text-white">
    <div className="font-hollywood text-3xl tracking-wide uppercase">
      HRC.
    </div>
    <div className="hidden md:flex gap-8 font-bold text-sm tracking-widest uppercase">
      <Link href="#schedule" className="hover:opacity-70 transition-opacity">Schedule</Link>
      <Link href="#routes" className="hover:opacity-70 transition-opacity">Routes</Link>
      <Link href="#shop" className="hover:opacity-70 transition-opacity">Shop</Link>
    </div>
    <div className="md:hidden">
      {/* Mobile Menu Icon Placeholder */}
      <div className="w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer">
        <span className="block w-full h-0.5 bg-white"></span>
        <span className="block w-full h-0.5 bg-white"></span>
      </div>
    </div>
  </nav>
);

const RunCard = ({ day, time, title, location, desc }: any) => (
  <div className="group border-t border-gray-200 py-12 px-4 hover:bg-gray-50 transition-colors cursor-default">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-baseline justify-between gap-6">
      <div className="md:w-1/4">
        <h3 className="text-5xl font-hollywood uppercase leading-none mb-2">{day}</h3>
        <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">{title}</span>
      </div>

      <div className="md:w-1/4 flex flex-col gap-2 font-mono text-sm text-gray-600">
        <div className="flex items-center"><Clock /> {time}</div>
        <div className="flex items-center"><MapPin /> {location}</div>
      </div>

      <div className="md:w-1/3">
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{desc}</p>
      </div>

      <div className="md:w-auto">
        <button className="opacity-0 group-hover:opacity-100 transition-opacity px-6 py-2 border border-black text-black text-sm font-bold uppercase hover:bg-black hover:text-white">
          RSVP
        </button>
      </div>
    </div>
  </div>
);

// --- MAIN PAGE LAYOUT ---
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navbar />

      <Hero />

      <section id="schedule" className="bg-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="font-hollywood text-6xl uppercase tracking-tight">The Schedule</h2>
        </div>
        <div className="border-b border-gray-200">
          <RunCard
            day="Tuesday"
            title="The Reservoir Loop"
            time="6:30 PM"
            location="Lake Hollywood Park"
            desc="Our signature weekday run. 3-5 miles. We mix it up between flat loops around the water and hill repeats up towards the sign. Flash photography encouraged."
          />
          <RunCard
            day="Saturday"
            title="Coffee & Canyons"
            time="8:00 AM"
            location="The Bourgeois Pig"
            desc="Long run vibes. 6-10 miles exploring Griffith Park, Bronson Canyon, and the Observatory. Multiple pace groups. Coffee is mandatory after."
          />
        </div>
      </section>

      {/* Marquee / Vibe Section */}
      <section className="py-24 bg-black overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="text-white font-hollywood text-[10vw] mx-4 uppercase opacity-80"> Hollywood Run Club • </span>
          <span className="text-white font-hollywood text-[10vw] mx-4 uppercase opacity-80"> No Egos • </span>
          <span className="text-white font-hollywood text-[10vw] mx-4 uppercase opacity-80"> All Paces • </span>
          <span className="text-white font-hollywood text-[10vw] mx-4 uppercase opacity-80"> Hollywood Run Club • </span>
        </div>
      </section>

      <footer className="bg-white border-t border-black py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="font-hollywood text-9xl uppercase leading-[0.75] -ml-2">HRC.</h2>
            <p className="mt-8 text-sm font-bold tracking-widest uppercase text-gray-500">
              © {new Date().getFullYear()} Hollywood Run Club
            </p>
          </div>
          <div className="flex gap-8 mt-12 md:mt-0 font-bold uppercase tracking-widest text-sm">
            <a href="#">Instagram</a>
            <a href="#">Strava</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
