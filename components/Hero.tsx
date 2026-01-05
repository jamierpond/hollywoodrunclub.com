'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-110 grayscale contrast-125 brightness-110"
        >
          <source src="/running.webm" type="video/webm" />
        </video>
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20"
        style={{ opacity }}
      >
        <motion.h1
          className="text-6xl sm:text-8xl font-extrabold text-black tracking-tighter mb-6 leading-[0.9]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          RUN THE <br />
          HOLLYWOOD HILLS
        </motion.h1>
        <motion.p
          className="mt-6 text-xl sm:text-2xl font-medium text-gray-900 max-w-2xl mx-auto mb-10 leading-relaxed"
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
            className="px-8 py-4 bg-black text-white rounded-md font-bold text-lg uppercase tracking-widest hover:bg-gray-900 transition-all inline-flex items-center justify-center gap-2"
          >
            View Schedule <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>

      <MarqueeBanner />
    </div>
  );
}
