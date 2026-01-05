import { Metadata } from 'next';
import Link from 'next/link';

// --- SEO METADATA (Server Side) ---
export const metadata: Metadata = {
  title: 'Hollywood Run Club | Run the Hills',
  description: 'The premier running community in Hollywood, CA. Weekly runs at Hollywood Reservoir and Runyon Canyon. All paces welcome. Join the movement.',
  openGraph: {
    title: 'Hollywood Run Club',
    description: 'Community. Fitness. Fun. Every Tuesday & Saturday.',
    url: 'https://hollywoodrunclub.com',
    siteName: 'Hollywood Run Club',
    locale: 'en_US',
    type: 'website',
    images: [
        {
          // You would add a real OG image here
          url: 'https://hollywoodrunclub.com/og-image.jpg',
          width: 1200,
          height: 630,
        },
    ],
  },
};

// --- ICONS ---
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

// 1. Navigation (Kept clean and white from V1)
const Navbar = () => (
  <nav className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0 flex items-center">
          <span className="font-black text-2xl tracking-tighter text-black">HRC.</span>
        </div>
        <div className="hidden md:flex space-x-8 font-bold text-sm uppercase tracking-wider">
          <Link href="#schedule" className="text-gray-900 hover:text-gray-500 transition-colors">Schedule</Link>
          <Link href="#merch" className="text-gray-900 hover:text-gray-500 transition-colors">Shop</Link>
        </div>
        <div>
          <a
            href="https://strava.com"
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-gray-800 transition-all flex items-center"
          >
            Strava
          </a>
        </div>
      </div>
    </div>
  </nav>
);

// 2. The New Video Hero
const Hero = () => (
  // Changed to h-screen for maximum video impact
  <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
    {/* --- VIDEO BACKGROUND --- */}
    <div className="absolute inset-0 z-0">
        <video
            autoPlay
            loop
            muted
            playsInline
            // Important for Core Web Vitals (LCP): add a poster image here
            // poster="/images/hero-poster.jpg"
            // CSS filters for that "gritty" look: grayscale and boosted contrast
            className="h-full w-full object-cover grayscale contrast-125 brightness-110"
        >
            <source src="/running.webm" type="video/webm" />
        </video>
        {/* Light Overlay to make black text readable over video */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
    </div>


    {/* --- CONTENT --- */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
      <h1 className="text-6xl sm:text-8xl font-extrabold text-black tracking-tighter mb-6 drop-shadow-sm leading-[0.9]">
        RUN THE <br />
        HOLLYWOOD HILLS
      </h1>
      <p className="mt-6 text-xl sm:text-2xl font-medium text-gray-900 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
        Community. Fitness. Fun. <br />
        Free and open to all. Every Tuesday & Saturday.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="#schedule"
          className="px-8 py-4 bg-black text-white rounded-md font-bold text-lg uppercase tracking-widest hover:bg-gray-900 transition-all flex items-center justify-center"
        >
          View Schedule <ArrowRight />
        </Link>
        <a
          href="https://strava.com"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-4 bg-white border-2 border-black text-black rounded-md font-bold text-lg uppercase tracking-widest hover:bg-gray-100 transition-all"
        >
          Join on Strava
        </a>
      </div>
    </div>
  </div>
);

// 3. Schedule Section (V1 Style)
const RunCard = ({ day, time, title, location, desc, type }: any) => (
  <div className="border border-gray-200 rounded-xl p-8 hover:border-black transition-all bg-white group">
    <div className="flex justify-between items-start mb-4">
      <span className="inline-block px-3 py-1 bg-gray-100 group-hover:bg-black group-hover:text-white transition-colors rounded-full text-xs font-bold uppercase tracking-wide text-gray-600">
        {type}
      </span>
      <span className="text-2xl font-black tracking-tight">{day}</span>
    </div>
    <h3 className="text-3xl font-bold mb-2 tracking-tight">{title}</h3>
    <div className="flex items-center font-medium text-gray-700 mb-2">
      <Clock /> {time}
    </div>
    <div className="flex items-center font-medium text-gray-700 mb-6">
      <MapPin /> {location}
    </div>
    <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
      {desc}
    </p>
  </div>
);

const Schedule = () => (
  <section id="schedule" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black tracking-tighter text-black sm:text-5xl uppercase">Weekly Schedule</h2>
        <p className="mt-4 text-xl text-gray-600 font-medium">Consistency is key. Rain or shine.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RunCard
          day="TUESDAY"
          type="Speed / Hills"
          title="Sign Loop"
          time="6:30 PM"
          location="The Oaks Gourmet"
          desc="3-5 miles through the Hollywood Hills. We'll finish with drinks outside at The Oaks Gourmet."
        />
        <RunCard
          day="SATURDAY"
          type="Long Run"
          title="Coming Soon"
          time="TBD"
          location="Meeting place up for discussion"
          desc="Weekend long runs coming soon. Stay tuned for details."
        />
      </div>
    </div>
  </section>
);

// 4. Vibe Section
const Vibe = () => (
  <section className="py-24 bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-5xl sm:text-7xl font-black mb-8 tracking-tighter uppercase leading-none">
          Run together. <br /> Grow together.
        </h2>
        <div className="space-y-6 text-gray-300 text-lg font-medium leading-relaxed">
          <p>
            Hollywood Run Club is a community of runners exploring the best trails and hidden gems of the Hollywood Hills.
          </p>
          <p>
            All paces welcome. Whether you're training for a marathon or just getting started, you'll find good people, great views, and sunshine. Come for the run, stay for the friends.
          </p>
        </div>
      </div>
      <div className="h-[500px] bg-gray-800 rounded-xl overflow-hidden relative grayscale contrast-125">
        {/* Replace with an actual image of the crew */}
        <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1920&auto=format&fit=crop" alt="Runners" className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  </section>
);

// 5. Footer
const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-8 md:mb-0 text-center md:text-left">
        <span className="font-black text-3xl tracking-tighter uppercase">HRC.</span>
        <p className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-wider">© {new Date().getFullYear()} Hollywood Run Club.</p>
      </div>
      <div className="flex space-x-8 font-bold text-sm uppercase tracking-wider text-gray-900">
        <a href="#" className="hover:text-gray-500 transition-colors">Instagram</a>
        <a href="#" className="hover:text-gray-500 transition-colors">Strava</a>
        <a href="#" className="hover:text-gray-500 transition-colors">Contact</a>
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
      <Vibe />

      {/* Newsletter CTA */}
      <section className="py-24 text-center bg-gray-50 border-t border-gray-100">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">Stay in the loop</h2>
          <p className="text-gray-600 mb-8 font-medium text-lg">Get the weekly route drops and event invites.</p>
          <form className="flex gap-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border-2 border-gray-200 font-medium focus:outline-none focus:border-black transition-all"
            />
            <button className="px-8 py-3 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition-all uppercase tracking-wider">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
