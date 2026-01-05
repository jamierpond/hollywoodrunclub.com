// app/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

// --- SEO METADATA (Server Side) ---
export const metadata: Metadata = {
  title: 'Hollywood Run Club | Run the Hills',
  description: 'The premier running community in Hollywood, CA. Weekly runs at Hollywood Reservoir and Runyon Canyon. All paces welcome. Join the movement.',
  openGraph: {
    title: 'Hollywood Run Club',
    description: 'Tuesday Track. Saturday Long Runs. No dues, just vibes.',
    url: 'https://hollywoodrunclub.com',
    siteName: 'Hollywood Run Club',
    locale: 'en_US',
    type: 'website',
  },
};

// --- ICONS (Lucide React or Heroicons style SVG) ---
const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const MapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const Clock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- COMPONENTS ---

// 1. Navigation
const Navbar = () => (
  <nav className="w-full fixed top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0 flex items-center">
          <span className="font-bold text-2xl tracking-tighter text-black">HRC.</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="#schedule" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">Schedule</Link>
          <Link href="#routes" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">Routes</Link>
          <Link href="#merch" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">Shop</Link>
        </div>
        <div>
          <a
            href="https://strava.com"
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-gray-800 transition-all flex items-center"
          >
            Join on Strava
          </a>
        </div>
      </div>
    </div>
  </nav>
);

// 2. Hero Section (SSR Optimized Image Handling would go here)
const Hero = () => (
  <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="text-5xl sm:text-7xl font-extrabold text-black tracking-tight mb-6">
        RUN THE <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black">
          HOLLYWOOD HILLS
        </span>
      </h1>
      <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto mb-10">
        Not a networking event. Just running. <br />
        Every Tuesday & Saturday. All paces. No egos.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="#schedule"
          className="px-8 py-3 bg-black text-white rounded-md font-semibold text-lg hover:bg-gray-800 transition-all flex items-center"
        >
          View Schedule <ArrowRight />
        </Link>
        <Link
          href="#routes"
          className="px-8 py-3 bg-gray-100 text-black rounded-md font-semibold text-lg hover:bg-gray-200 transition-all"
        >
          See Routes
        </Link>
      </div>
    </div>

    {/* Abstract Background Elements (CSS only, no heavy JS) */}
    <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 overflow-hidden pointer-events-none">
       <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-200 rounded-full blur-[120px]" />
       <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-200 rounded-full blur-[120px]" />
    </div>
  </div>
);

// 3. Schedule Section
const RunCard = ({ day, time, title, location, desc, type }: any) => (
  <div className="border border-gray-200 rounded-xl p-8 hover:border-black transition-colors bg-white">
    <div className="flex justify-between items-start mb-4">
      <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-wide text-gray-600">
        {type}
      </span>
      <span className="text-2xl font-bold">{day}</span>
    </div>
    <h3 className="text-3xl font-bold mb-2">{title}</h3>
    <div className="flex items-center text-gray-600 mb-2">
      <Clock /> {time}
    </div>
    <div className="flex items-center text-gray-600 mb-6">
      <MapPin /> {location}
    </div>
    <p className="text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
      {desc}
    </p>
  </div>
);

const Schedule = () => (
  <section id="schedule" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Weekly Programming</h2>
        <p className="mt-4 text-gray-500">Consistency is key. Rain or shine.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RunCard
          day="TUESDAY"
          type="Speed / Hills"
          title="The Reservoir Loop"
          time="6:30 PM"
          location="Lake Hollywood Park"
          desc="3-5 miles. We mix it up between flat loops around the reservoir and hill repeats up towards the sign. Post-run drinks at The Bourgeois Pig."
        />
        <RunCard
          day="SATURDAY"
          type="Long Run"
          title="Coffee & Canyons"
          time="8:00 AM"
          location="Franklin Village (Bourgeois Pig)"
          desc="6-10 miles. Exploring Griffith Park, Bronson Canyon, and the Observatory. Multiple pace groups (8:00 - 11:00 min/mi). Coffee included after."
        />
      </div>
    </div>
  </section>
);

// 4. Content / Values Block
const Values = () => (
  <section className="py-20 bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
          MORE THAN <br /> JUST MILES.
        </h2>
        <div className="space-y-6 text-gray-400 text-lg">
          <p>
            Hollywood Run Club was born out of a desire to connect the creative community of Los Angeles through sweat.
          </p>
          <p>
            We run past the tourist traps, finding the quiet trails and hidden stairs that make this neighborhood iconic. Whether you are training for the LA Marathon or just clearing your head after a shoot, you have a spot here.
          </p>
        </div>
      </div>
      <div className="h-96 bg-gray-800 rounded-lg overflow-hidden relative grayscale">
        {/* Placeholder for an Image Component */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold">
            [Insert B&W Photo of Runners near Hollywood Sign]
        </div>
      </div>
    </div>
  </section>
);

// 5. Footer
const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <span className="font-bold text-xl tracking-tighter">HRC.</span>
        <p className="text-sm text-gray-500 mt-1">© {new Date().getFullYear()} Hollywood Run Club.</p>
      </div>
      <div className="flex space-x-6 text-gray-500">
        <a href="#" className="hover:text-black transition-colors">Instagram</a>
        <a href="#" className="hover:text-black transition-colors">Strava</a>
        <a href="#" className="hover:text-black transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

// --- MAIN PAGE LAYOUT ---
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white font-sans">
      <Navbar />
      <Hero />
      <Schedule />
      <Values />
      {/* Newsletter / CTA Section */}
      <section className="py-24 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Stay in the loop</h2>
          <p className="text-gray-500 mb-8">Get the weekly route drops and event invites.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
            <button className="px-6 py-3 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition-all">
              Join
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
