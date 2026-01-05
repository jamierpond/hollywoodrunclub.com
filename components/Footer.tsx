export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Newsletter - commented out until mailing list is set up
      <section className="py-16 text-center border-b border-gray-100">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Stay in the loop</h2>
          <p className="text-gray-600 mb-8 font-medium">
            Get the weekly route drops and event invites.
          </p>
          <form className="flex gap-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border-2 border-gray-200 font-medium focus:outline-none focus:border-black transition-all"
            />
            <button className="px-8 py-3 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition-all uppercase tracking-wider">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      */}

      {/* Footer Bottom */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <span className="font-black text-3xl tracking-tighter uppercase">HRC.</span>
              <p className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-wider">
                &copy; {new Date().getFullYear()} Hollywood Run Club.
              </p>
            </div>
            <div className="flex space-x-8 font-bold text-sm uppercase tracking-wider text-gray-900">
              <a href="https://www.strava.com/routes/3443118030208002126" target="_blank" rel="noreferrer" className="hover:text-gray-500 transition-colors">
                Strava
              </a>
              <a href="mailto:jamie@hollywoodrunclub.com" className="hover:text-gray-500 transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-400">
              Hero video by{' '}
              <a
                href="https://www.youtube.com/@sam_metal"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Samuel Hartman
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
