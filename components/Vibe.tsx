'use client';

import { motion } from 'framer-motion';

export default function Vibe() {
  return (
    <section id="vibe" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-black tracking-tighter sm:text-5xl uppercase">
            The Vibe
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Large Text Block */}
          <motion.div
            className="col-span-2 row-span-2 bg-white text-black rounded-xl p-8 flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase leading-none mb-4">
              Run together. <br /> Grow together.
            </h3>
            <p className="text-gray-600 text-lg">
              Hollywood Run Club is a community of runners exploring the best trails and hidden gems of the Hollywood Hills.
            </p>
          </motion.div>

          {/* Image 1 */}
          <motion.div
            className="col-span-1 row-span-1 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop"
              alt="Runners"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="col-span-1 row-span-1 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=800&auto=format&fit=crop"
              alt="Running trail"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Small Text Block */}
          <motion.div
            className="col-span-1 row-span-1 bg-gray-900 rounded-xl p-6 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-xl font-black uppercase tracking-tight text-center">
              No one left behind.
            </p>
          </motion.div>

          {/* Image 3 */}
          <motion.div
            className="col-span-1 row-span-1 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop"
              alt="Hollywood Hills"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* All Paces Block */}
          <motion.div
            className="col-span-2 row-span-1 bg-white text-black rounded-xl p-6 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-center">
              All paces welcome.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
