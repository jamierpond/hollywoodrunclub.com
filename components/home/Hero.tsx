import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import HeroBackground from './HeroBackground';

type Props = {
  videoPlaceholder: string;
};

export default function Hero({ videoPlaceholder }: Props) {
  const text = "HOLLYWOOD RUN CLUB • EVERY TUESDAY 6:30PM • ALL PACES WELCOME • ";

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        minHeight: '100svh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <HeroBackground videoPlaceholder={videoPlaceholder} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1rem', maxWidth: '80rem' }}>
        <h1
          style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            fontWeight: 900,
            color: 'black',
            letterSpacing: '-0.05em',
            lineHeight: 0.9,
            marginBottom: '1rem',
          }}
        >
          RUN THE <br />
          HOLLYWOOD HILLS
        </h1>
        <p
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            fontWeight: 500,
            color: '#111',
            maxWidth: '40rem',
            margin: '1.5rem auto 2rem',
            lineHeight: 1.5,
          }}
        >
          Community. Fitness. Fun. <br />
          Free and open to all. Every Tuesday.
        </p>
        <Link
          href="#schedule"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'black',
            color: 'white',
            fontWeight: 700,
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            borderRadius: '0.375rem',
            textDecoration: 'none',
          }}
        >
          View Schedule <ArrowRight style={{ width: '1rem', height: '1rem' }} />
        </Link>
      </div>

      {/* Marquee Banner */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '56px',
          backgroundColor: 'black',
          overflow: 'hidden',
          zIndex: 20,
        }}
      >
        <div className="animate-marquee" style={{ display: 'flex', width: 'fit-content', padding: '16px 0' }}>
          <span style={{ flexShrink: 0, whiteSpace: 'nowrap', paddingRight: '2rem', color: 'white', fontWeight: 900, fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {text}{text}{text}{text}
          </span>
          <span style={{ flexShrink: 0, whiteSpace: 'nowrap', paddingRight: '2rem', color: 'white', fontWeight: 900, fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {text}{text}{text}{text}
          </span>
        </div>
      </div>
    </section>
  );
}
