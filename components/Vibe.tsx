'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Vibe() {
  return (
    <section id="vibe" className="bg-zinc-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[0.3em] text-black/40 mb-4">
            THE COMMUNITY
          </p>
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-[-0.03em] leading-[0.9] uppercase max-w-4xl">
            Run Together.
            <br />
            Grow Together.
          </h2>
        </motion.div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/3] relative overflow-hidden"
        >
          <Image
            src="/griffith.jpg"
            alt="Griffith Park trails"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="aspect-[4/3] relative overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop"
            alt="Runners"
            fill
            className="object-cover grayscale"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="aspect-[4/3] relative overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop"
            alt="Hollywood Hills"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Values Grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl font-black mb-4">01</div>
            <h3 className="text-xl font-black mb-3 uppercase tracking-tight">All Paces Welcome</h3>
            <p className="text-black/60 leading-relaxed">
              Whether you&apos;re training for a marathon or just starting out, you belong here. We regroup throughout the run.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-6xl font-black mb-4">02</div>
            <h3 className="text-xl font-black mb-3 uppercase tracking-tight">We&apos;ve Got Your Back</h3>
            <p className="text-black/60 leading-relaxed">
              We look out for each other. It&apos;s a community, not a competition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-6xl font-black mb-4">03</div>
            <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Free Forever</h3>
            <p className="text-black/60 leading-relaxed">
              No signup, no fees, no app required. Just show up at the meeting point and run with us.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
