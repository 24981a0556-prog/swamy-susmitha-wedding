export function OrnamentalDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 sm:gap-3 my-4 sm:my-6 select-none ${className}`}>
      {/* Left tapered line */}
      <div className="h-[1.5px] w-12 sm:w-28 bg-gradient-to-r from-transparent via-[#c4942e] to-[#7d1727]" />
      
      {/* Left floral accent */}
      <span className="text-[#c4942e] text-xs">✦</span>

      {/* Center Indian Temple Lotus Motif */}
      <svg
        className="w-7 h-5 sm:w-9 sm:h-6 text-[#7d1727] drop-shadow-sm"
        viewBox="0 0 40 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20 1.5 C21.5 5, 25 8, 28 8.5 C25 9.5, 23 11, 22.5 13 C22 11, 20.5 9, 20 8.5 C19.5 9, 18 11, 17.5 13 C17 11, 15 9.5, 12 8.5 C15 8, 18.5 5, 20 1.5 Z" />
        <circle cx="20" cy="17" r="2.2" fill="#c4942e" />
        <circle cx="12" cy="15" r="1.2" fill="#c4942e" />
        <circle cx="28" cy="15" r="1.2" fill="#c4942e" />
        <path d="M14 18 C17 21, 23 21, 26 18 C23 19.5, 17 19.5, 14 18 Z" fill="#7d1727" />
      </svg>

      {/* Right floral accent */}
      <span className="text-[#c4942e] text-xs">✦</span>

      {/* Right tapered line */}
      <div className="h-[1.5px] w-12 sm:w-28 bg-gradient-to-l from-transparent via-[#c4942e] to-[#7d1727]" />
    </div>
  );
}
