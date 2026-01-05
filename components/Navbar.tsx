'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-black text-2xl tracking-tighter text-black">HRC.</span>
          </div>
          <div className="hidden md:flex space-x-8 font-bold text-sm uppercase tracking-wider">
            <Link href="#schedule" className="text-gray-900 hover:text-gray-500 transition-colors">
              Schedule
            </Link>
            <Link href="#route" className="text-gray-900 hover:text-gray-500 transition-colors">
              Route
            </Link>
            <Link href="#vibe" className="text-gray-900 hover:text-gray-500 transition-colors">
              Vibe
            </Link>
          </div>
          <div>
            <a
              href="https://www.strava.com/routes/3443118030208002126"
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
}
