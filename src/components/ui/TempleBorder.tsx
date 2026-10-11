export function TempleBorder({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden select-none ${className}`} aria-hidden="true">
      {/* Top ornamental line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c4942e] to-transparent" />
      {/* Repeating traditional Indian elephant and lotus temple frieze band */}
      <div className="h-4 sm:h-5 bg-[#5c0f1c] border-y border-[#c4942e] flex items-center justify-around px-2 overflow-hidden shadow-inner">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2 sm:gap-4 shrink-0 text-[#f5d98e] opacity-90">
            {/* Elephant icon */}
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 8c-1.1 0-2 .9-2 2v1h-2V7c0-2.2-1.8-4-4-4H8C5.8 3 4 4.8 4 7v11c0 .6.4 1 1 1h2v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2h4v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-5h1c1.7 0 3-1.3 3-3v-3c0-1.1-.9-2-2-2zm-9-2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
            </svg>
            {/* Lotus / Floral diamond */}
            <span className="text-[9px] text-[#dbaa3e]">✦</span>
            {/* Kalash / Arch */}
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3 5h-6l3-5zm-5 6h10l2 6h-14l2-6zm-1 7h12l-1 5h-10l-1-5z" />
            </svg>
          </div>
        ))}
      </div>
      {/* Bottom ornamental line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c4942e] to-transparent" />
    </div>
  );
}
