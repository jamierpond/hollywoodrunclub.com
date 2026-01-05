'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
import {
  formatDistance,
  formatElevation,
  formatDuration,
  type StravaRoute,
} from '@/lib/strava';

interface ScheduleProps {
  route: StravaRoute | null;
}

export default function Schedule({ route }: ScheduleProps) {
  return (
    <section id="schedule" className="bg-white">
      {/* Big Schedule Header */}
      <div className="border-b border-black/10">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-[0.3em] text-black/40 mb-4">
              WEEKLY RUN
            </p>
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-[-0.03em] leading-[0.9] uppercase">
              Every
              <br />
              Tuesday
            </h2>
          </motion.div>

          {/* Time/Location Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 mt-12"
          >
            <div className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-lg">6:30 PM</span>
            </div>
            <div className="flex items-center gap-3 bg-black/5 px-6 py-4 rounded-full">
              <Calendar className="w-5 h-5" />
              <span className="font-bold text-lg">Rain or Shine</span>
            </div>
            <div className="flex items-center gap-3 bg-black/5 px-6 py-4 rounded-full">
              <MapPin className="w-5 h-5" />
              <span className="font-bold text-lg">Griffith Park</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Two Column Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Meeting Point */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-8 md:px-16 py-16 border-b lg:border-b-0 lg:border-r border-black/10"
          >
            <p className="text-xs font-bold tracking-[0.3em] text-black/40 mb-6">
              MEETING POINT
            </p>
            <h3 className="text-3xl font-black tracking-tight mb-2">
              The Oaks Gourmet
            </h3>
            <p className="text-black/60 mb-8">
              1915 N Bronson Ave, Los Angeles
            </p>

            <div className="rounded-2xl overflow-hidden mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.595561190543!2d-118.3208345239384!3d34.10549987313694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf46b45bf735%3A0x536df54a8c6cac0d!2sThe%20Oaks%20Gourmet%20Market%20%26%20Cafe!5e0!3m2!1sen!2sus!4v1767589172556!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                              />
            </div>

            <p className="text-black/60 leading-relaxed">
              We gather outside the cafe, head up Bronson Canyon into Griffith Park,
              loop around, and return. Stick around after for drinks on the patio.
            </p>
          </motion.div>

          {/* Right - The Route */}
          <motion.div
            id="route"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="px-8 md:px-16 py-16"
          >
            <p className="text-xs font-bold tracking-[0.3em] text-black/40 mb-6">
              WINTER 2026 ROUTE
            </p>
            <h3 className="text-3xl font-black tracking-tight mb-8">
              Griffith Park Loop
            </h3>

            <div
              className="strava-embed-placeholder rounded-2xl overflow-hidden"
              data-embed-type="route"
              data-embed-id="3443118030208002126"
              data-full-width="true"
              data-style="standard"
            />

            <div className="mt-8 flex flex-wrap gap-6">
              {route && (
                <>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-black/40 mb-1">DISTANCE</p>
                    <p className="text-lg font-bold">{formatDistance(route.distance)}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-black/40 mb-1">ELEVATION</p>
                    <p className="text-lg font-bold">{formatElevation(route.elevation_gain)}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-black/40 mb-1">EST. TIME</p>
                    <p className="text-lg font-bold">{formatDuration(route.estimated_moving_time)}</p>
                  </div>
                </>
              )}
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-black/40 mb-1">VIBE</p>
                <p className="text-lg font-bold">Social run</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-2xl md:text-3xl font-black tracking-tight">
            No signup. No fees. Just show up.
          </p>
          <a
            href="https://www.strava.com/routes/3443118030208002126"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-colors"
          >
            View on Strava
          </a>
        </div>
      </div>
    </section>
  );
}
