'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const BLUR_PLACEHOLDER = 'data:image/webp;base64,UklGRuIAAABXRUJQVlA4INYAAAAwBQCdASogABIAPtFapU0oJSOiMBgIAQAaCWMAuzMhzjgyKoyU08nt2SG0udA9B29DwADv3NHwJlX9JCGUJczYY1f4f/+ccvUktWK509YlCn/7YBkokMiy674fjFSwaoIpFDn0FTNsWbIJI+DuywNsRYLoI4Ga64rrZzZuLxQoYzfBGpFrkTRV3gvM2vZVpJ5TlfXH/UW34HL/KASc9HRHkCM/tdBFJoiyp8jTibQnfOW46zkcb/jgpnMz7/oWkZCBXarg+prre77vLAY9jVVkQKwVuzAA';

const MarqueeBanner = () => {
  const text = "HOLLYWOOD RUN CLUB • EVERY TUESDAY 6:30PM • ALL PACES WELCOME • ";

  return (
    <div className="absolute bottom-0 left-0 right-0 py-4 bg-black overflow-hidden z-20">
      <div className="marquee-track">
        <span className="marquee-content">
          {text}{text}{text}{text}
        </span>
        <span className="marquee-content">
          {text}{text}{text}{text}
        </span>
      </div>
      <style jsx>{`
        .marquee-track {
          display: flex;
          width: fit-content;
          animation: scroll 60s linear infinite;
        }
        .marquee-content {
          flex-shrink: 0;
          white-space: nowrap;
          font-size: 1.25rem;
          font-weight: 900;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0 1rem;
        }
        @media (min-width: 640px) {
          .marquee-content {
            font-size: 1.5rem;
          }
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [loadState, setLoadState] = useState<'blur' | 'poster' | 'video'>('blur');

  useEffect(() => {
    // Load poster image
    const img = new Image();
    img.src = '/running-poster.webp';
    img.onload = () => setLoadState('poster');
  }, []);

  const handleVideoCanPlay = () => {
    setLoadState('video');
  };

  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center">
      {/* Video Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        {/* Base64 blur placeholder - always rendered for instant load */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${loadState !== 'blur' ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: `url(${BLUR_PLACEHOLDER})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
          }}
        />

        {/* Poster image - loads after blur */}
        <img
          src="/running-poster.webp"
          alt=""
          className={`absolute inset-0 w-full h-full object-cover scale-110 grayscale contrast-125 brightness-110 transition-opacity duration-500 ${loadState === 'poster' ? 'opacity-100' : loadState === 'video' ? 'opacity-0' : 'opacity-0'}`}
        />

        {/* Video - loads last */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={handleVideoCanPlay}
          className={`h-full w-full object-cover scale-110 grayscale contrast-125 brightness-110 transition-opacity duration-500 ${loadState === 'video' ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src="/running.webm" type="video/webm" />
        </video>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-16 sm:pt-20"
        style={{ opacity }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-black tracking-tighter mb-4 sm:mb-6 leading-[0.9]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          RUN THE <br />
          HOLLYWOOD HILLS
        </motion.h1>
        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-xl lg:text-2xl font-medium text-gray-900 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Community. Fitness. Fun. <br />
          Free and open to all. Every Tuesday.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="#schedule"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-black text-white rounded-md font-bold text-sm sm:text-lg uppercase tracking-widest hover:bg-gray-900 transition-all inline-flex items-center justify-center gap-2"
          >
            View Schedule <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </motion.div>
      </motion.div>

      <MarqueeBanner />
    </div>
  );
}
