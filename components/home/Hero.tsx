import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  videoPlaceholder: string;
};

export default function Hero({ videoPlaceholder }: Props) {
  const text = "HOLLYWOOD RUN CLUB • EVERY TUESDAY 6:30PM • ALL PACES WELCOME • ";

  return (
    <section
      style={{ height: '100vh', minHeight: '100vh' }}
      className="relative w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Layer */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Image
          src="/running-poster.webp"
          alt=""
          fill
          priority
          placeholder="blur"
          blurDataURL={videoPlaceholder}
          style={{ objectFit: 'cover', transform: 'scale(1.1)', filter: 'grayscale(100%) contrast(1.25) brightness(1.1)' }}
        />
        <video
          src="/running.webm"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.1)',
            filter: 'grayscale(100%) contrast(1.25) brightness(1.1)',
          }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.6)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-black text-black tracking-tighter leading-[0.9] mb-4">
          RUN THE <br />
          HOLLYWOOD HILLS
        </h1>
        <p className="text-[clamp(1rem,3vw,1.5rem)] font-medium text-zinc-800 max-w-xl mx-auto mt-6 mb-8 leading-relaxed">
          Community. Fitness. Fun. <br />
          Free and open to all. Every Tuesday.
        </p>
        <Link
          href="#schedule"
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold text-sm uppercase tracking-widest rounded-md hover:bg-zinc-800 transition-colors"
        >
          View Schedule <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-black overflow-hidden z-20">
        <div className="animate-marquee flex w-fit py-4">
          <span className="shrink-0 whitespace-nowrap pr-8 text-white font-black text-xl uppercase tracking-wide">
            {text}{text}{text}{text}
          </span>
          <span className="shrink-0 whitespace-nowrap pr-8 text-white font-black text-xl uppercase tracking-wide">
            {text}{text}{text}{text}
          </span>
        </div>
      </div>
    </section>
  );
}
