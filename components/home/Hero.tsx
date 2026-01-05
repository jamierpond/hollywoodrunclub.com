'use client';

import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
  videoPlaceholder: string;
};

type RouteData = {
  distance: { miles: number };
  elevation_gain: { feet: number };
  estimated_moving_time: { formatted: string };
  pace: { formatted: string };
} | null;

export default function Hero({ videoPlaceholder }: Props) {
  const [route, setRoute] = useState<RouteData>(null);

  useEffect(() => {
    fetch('/route')
      .then(res => res.ok ? res.json() : null)
      .then(setRoute)
      .catch(() => null);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <video
          src="/running.webm"
          autoPlay
          loop
          muted
          playsInline
          poster={videoPlaceholder}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col text-white">
        {/* Top - Kicker */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-32 px-8 md:px-16"
        >
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-white/60">
            EVERY TUESDAY / 6:30 PM / LOS ANGELES
          </p>
        </motion.div>

        {/* Center - Main Title */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 -mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[clamp(3rem,12vw,10rem)] font-black tracking-[-0.04em] leading-[0.85] uppercase"
          >
            Hollywood
            <br />
            Run Club
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-lg md:text-xl text-white/70 max-w-md font-medium"
          >
            Free weekly runs through Griffith Park.
            <br />
            All paces welcome.
          </motion.p>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white text-black"
        >
          <div className="flex flex-col sm:flex-row">
            {/* Season Route */}
            <div className="flex-1 px-8 md:px-16 py-8 border-b sm:border-b-0 sm:border-r border-black/10">
              <p className="text-[10px] font-bold tracking-[0.2em] text-black/50 mb-2">
                WINTER 2026 ROUTE
              </p>
              <div className="flex items-baseline gap-4 flex-wrap">
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl md:text-6xl font-black tracking-tight">
                    {route ? route.distance.miles.toFixed(1) : '---'}
                  </span>
                  <span className="text-lg font-bold text-black/50 uppercase tracking-wider">
                    Miles
                  </span>
                </div>
                {route && (
                  <div className="flex items-baseline gap-6 text-lg font-bold text-black/40">
                    <span className="whitespace-nowrap">{Math.round(route.elevation_gain.feet)} ft</span>
                    <span className="whitespace-nowrap">{route.estimated_moving_time.formatted} ({route.pace.formatted})</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="#schedule"
              className="group flex items-center justify-between gap-4 px-8 md:px-12 py-8 bg-black text-white hover:bg-zinc-900 transition-colors"
            >
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-2">
                  JOIN US
                </p>
                <p className="text-xl font-bold">
                  View Schedule
                </p>
              </div>
              <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
