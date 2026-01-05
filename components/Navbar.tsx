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
          ? 'bg-white/95 backdrop-blur-lg border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0">
            <span className={`font-black text-2xl tracking-[-0.02em] uppercase transition-colors ${
              scrolled ? 'text-black' : 'text-white'
            }`}>
              HRC
            </span>
          </Link>

          <div className={`hidden md:flex space-x-8 font-bold text-sm uppercase tracking-wider transition-colors ${
            scrolled ? 'text-black' : 'text-white/80'
          }`}>
            <Link href="#schedule" className="hover:opacity-60 transition-opacity">
              Schedule
            </Link>
            <Link href="#route" className="hover:opacity-60 transition-opacity">
              Route
            </Link>
            <Link href="#vibe" className="hover:opacity-60 transition-opacity">
              Community
            </Link>
          </div>

          <a
            href="https://www.strava.com/routes/3443118030208002126"
            target="_blank"
            rel="noreferrer"
            className={`px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${
              scrolled
                ? 'bg-black text-white hover:bg-black/80'
                : 'bg-white text-black hover:bg-white/90'
            }`}
          >
            Strava
          </a>
        </div>
      </div>
    </nav>
  );
}
