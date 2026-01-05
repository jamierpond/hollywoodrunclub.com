export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {/* Left */}
          <div>
            <span className="text-4xl md:text-5xl font-black tracking-[-0.03em] uppercase">
              Hollywood
              <br />
              Run Club
            </span>
            <p className="mt-6 text-white/50 max-w-sm">
              Free weekly runs through Griffith Park. Every Tuesday at 6:30 PM.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex gap-8 font-bold text-sm uppercase tracking-wider">
              <a
                href="https://www.strava.com/routes/3443118030208002126"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                Strava
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                Instagram
              </a>
              <a
                href="mailto:jamie@hollywoodrunclub.com"
                className="hover:text-white/60 transition-colors"
              >
                Contact
              </a>
            </div>

            <p className="mt-8 md:mt-0 text-sm text-white/30">
              &copy; {new Date().getFullYear()} Hollywood Run Club
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/30">
            Hero video by{' '}
            <a
              href="https://www.youtube.com/@sam_metal"
              target="_blank"
              rel="noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              Samuel Hartman
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
