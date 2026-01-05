// app/poster/page.tsx
// A print-first, fixed-size poster page you can export to PDF or print from the browser.

import Image from "next/image";

function getParam(searchParams: Record<string, string | string[] | undefined>, key: string, fallback: string) {
  const v = searchParams[key];
  return (Array.isArray(v) ? v[0] : v) ?? fallback;
}

export default async function PosterPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;

  // Simple customization via query params so you can generate variants without editing code
  const title = getParam(params, "title", "HOLLYWOOD RUN CLUB");
  const day = getParam(params, "day", "TUESDAYS");
  const time = getParam(params, "time", "6:30 PM");
  const place = getParam(params, "place", "The Oaks Gourmet");
  const addr = getParam(params, "addr", "1915 N Bronson Ave, Los Angeles");
  const url = getParam(params, "url", "hollywoodrunclub.com");

  return (
    <main className="poster-shell">
      {/* Fixed-size artboard (Letter tabloid 11x17 by default via CSS) */}
      <section className="poster-page">
        {/* Background image */}
        <Image
          src="/running-poster.webp"
          alt=""
          fill
          priority
          className="poster-bg"
        />

        {/* Overlay */}
        <div className="poster-overlay" />

        {/* Content */}
        <div className="poster-content">
          <div className="poster-top">
            <div className="poster-kicker">RUN CLUB</div>
            <h1 className="poster-title">{title}</h1>
            <div className="poster-sub">
              <span>{day}</span>
              <span className="dot">•</span>
              <span>{time}</span>
              <span className="dot">•</span>
              <span>ALL PACES WELCOME</span>
            </div>
          </div>

          <div className="poster-bottom">
            <div className="poster-where">
              <div className="label">MEET</div>
              <div className="value">{place}</div>
              <div className="meta">{addr}</div>
            </div>

            <div className="poster-url">
              <div className="label">INFO</div>
              <div className="value">{url}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
