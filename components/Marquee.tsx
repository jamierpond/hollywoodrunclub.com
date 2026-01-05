'use client';

export default function Marquee() {
  const text = "HOLLYWOOD RUN CLUB \u2022 EVERY TUESDAY 6:30PM \u2022 ALL PACES WELCOME \u2022 ";

  return (
    <section className="py-6 bg-black overflow-hidden">
      <div className="flex animate-marquee">
        <div className="flex shrink-0">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-white font-black text-2xl sm:text-4xl mx-4 uppercase tracking-wider whitespace-nowrap">
              {text}
            </span>
          ))}
        </div>
        <div className="flex shrink-0">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-white font-black text-2xl sm:text-4xl mx-4 uppercase tracking-wider whitespace-nowrap">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
