import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  videoPlaceholder: string;
};

export default function Hero({ videoPlaceholder }: Props) {
  const text = "HOLLYWOOD RUN CLUB • EVERY TUESDAY 6:30PM • ALL PACES WELCOME • ";

  return (
    <section className="relative h-svh min-h-svh w-full overflow-hidden flex items-center justify-center">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <Image
          src="/running-poster.webp"
          alt=""
          fill
          priority
          placeholder="blur"
          blurDataURL={videoPlaceholder}
          className="object-cover scale-110 grayscale contrast-125 brightness-110"
        />
        <video
          src="/running.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-110 grayscale contrast-125 brightness-110"
        />
        <div className="absolute inset-0 bg-white/60" />
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
