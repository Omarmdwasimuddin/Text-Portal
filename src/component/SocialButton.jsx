export default function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
      {/* Facebook Button */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-5 rounded-full backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-7 h-7 fill-current text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
          >
            <path d="M279.14 288l14.22-92.66h-88.91V127.77c0-25.35 12.42-50.06 52.24-50.06H295V6.26S268.91 0 243.24 0C178.6 0 135.43 42.42 135.43 120.1v75.24H48v92.66h87.43V512h104.2V288z" />
          </svg>
        </div>
      </a>

      {/* LinkedIn Button */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-5 rounded-full backdrop-blur-lg border border-sky-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-sky-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-sky-500/50 hover:bg-gradient-to-tr hover:from-sky-500/10 hover:to-black/40 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-7 h-7 fill-current text-sky-500 group-hover:text-sky-400 transition-colors duration-300"
          >
            <path d="M100.28 448H7.4V149.7h92.88zm-46.44-338A53.73 53.73 0 1 1 107.56 56a53.73 53.73 0 0 1-53.72 54zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.26-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.7V149.7h89v40.7h1.3c12.4-23.6 42.7-48.3 87.8-48.3 93.8 0 111.1 61.7 111.1 141.9V448z" />
          </svg>
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-5 rounded-full backdrop-blur-lg border border-green-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-green-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-green-500/50 hover:bg-gradient-to-tr hover:from-green-500/10 hover:to-black/40 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            className="w-7 h-7 text-green-500 fill-current group-hover:text-green-400 transition-colors duration-300"
          >
            <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 30.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z" />
          </svg>
        </div>
      </a>

      {/* Twitter (X) Button */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-5 rounded-full backdrop-blur-lg border border-slate-400/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-slate-400/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-slate-400/50 hover:bg-gradient-to-tr hover:from-slate-400/10 hover:to-black/40 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-7 h-7 fill-current text-slate-300 group-hover:text-white transition-colors duration-300"
          >
            <path d="M389.2 48h70.6L305.6 224.2 480 464H343.1L240 325.7 121.9 464H51.3L203.5 275.5 32 48h140.2l95.8 128.5L389.2 48zM366.4 421.7h39.1L149.6 88h-42L366.4 421.7z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
