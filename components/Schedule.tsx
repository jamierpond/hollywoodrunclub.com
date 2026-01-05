'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-black tracking-tighter text-black sm:text-5xl uppercase">
            Tuesday Run
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-medium">Every week. Rain or shine.</p>
          <p className="mt-2 text-3xl font-black tracking-tight">6:30 PM</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Run Details */}
          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">
              The Run
            </h4>

            <p className="text-gray-600 leading-relaxed mb-8">
              We meet at The Oaks Gourmet, head up Bronson Canyon, climb to the Hollywood Sign, and loop back down through Griffith Park. All paces welcome - we regroup along the way. Finish with drinks on the patio.
            </p>

            <div className="border-t border-gray-100 pt-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">
                Meeting Point
              </h4>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-bold">The Oaks Gourmet</p>
                  <p className="text-gray-600 text-sm">1915 N Bronson Ave, Los Angeles</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.595561190543!2d-118.3208345239384!3d34.10549987313694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf46b45bf735%3A0x536df54a8c6cac0d!2sThe%20Oaks%20Gourmet%20Market%20%26%20Cafe!5e0!3m2!1sen!2sus!4v1767589172556!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* Route Map */}
          <motion.div
            id="route"
            className="bg-white border border-gray-200 rounded-xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">
              The Route
            </h4>
            <div
              className="strava-embed-placeholder"
              data-embed-type="route"
              data-embed-id="3443118030208002126"
              data-full-width="true"
              data-style="standard"
              data-terrain="3d"
              data-map-hash="11.98/34.12029/-118.30894"
              data-from-embed="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
