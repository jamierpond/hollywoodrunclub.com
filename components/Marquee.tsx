'use client';

export default function Marquee() {
  const text = "HOLLYWOOD RUN CLUB • EVERY TUESDAY 6:30PM • ALL PACES WELCOME • ";

  return (
    <section className="py-6 bg-black overflow-hidden relative">
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
          font-size: 1.5rem;
          font-weight: 900;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0 1rem;
        }
        @media (min-width: 640px) {
          .marquee-content {
            font-size: 2.25rem;
          }
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
