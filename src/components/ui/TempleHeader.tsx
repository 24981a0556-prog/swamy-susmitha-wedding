export function TempleHeader() {
  return (
    <div className="relative w-full max-w-4xl mx-auto pt-6 pb-2 px-4 flex flex-col items-center select-none">
      {/* Auspicious Invocations */}
      <div className="flex items-center gap-3 mb-4 text-center">
        <span className="text-[#c4942e] text-sm">✦</span>
        <p className="font-royal text-xs sm:text-sm tracking-[0.25em] text-[#7d1727] font-semibold uppercase">
          || శ్రీ వేంకటేశ్వర స్వామి కృప ||
        </p>
        <span className="text-[#c4942e] text-sm">✦</span>
      </div>

      {/* Visual Composition: Banana Trees, Temple Gopuram, Green Parrot */}
      <div className="relative w-full max-w-2xl h-48 sm:h-64 flex items-end justify-center overflow-hidden">
        {/* Left Banana Tree */}
        <div className="absolute left-2 sm:left-6 bottom-0 w-24 sm:w-36 h-44 sm:h-56 pointer-events-none z-10">
          <svg viewBox="0 0 120 180" className="w-full h-full drop-shadow-md">
            {/* Trunk */}
            <path d="M55 180 Q57 110 50 60 Q60 110 65 180 Z" fill="#4d7c2a" />
            <path d="M52 180 Q56 120 54 80 Q58 120 60 180 Z" fill="#6ba038" />
            {/* Banana Bunch & Blossom */}
            <ellipse cx="60" cy="100" rx="8" ry="12" fill="#d4aa2e" />
            <ellipse cx="64" cy="98" rx="6" ry="10" fill="#f1c40f" />
            <path d="M60 112 C60 125 65 130 63 138 C61 130 58 125 60 112 Z" fill="#800020" />
            {/* Left Big Leaves */}
            <path d="M50 70 C20 50 5 80 0 110 C15 85 35 75 52 74" fill="#3a7528" />
            <path d="M48 65 C10 30 -5 50 2 80 C20 55 38 60 50 68" fill="#529930" />
            <path d="M52 60 C30 20 15 25 18 45 C32 30 45 45 53 58" fill="#6db836" />
            {/* Right Leaves */}
            <path d="M58 65 C85 35 110 50 115 80 C95 65 75 60 56 68" fill="#43852b" />
            <path d="M55 75 C80 60 100 85 105 110 C85 90 70 80 54 77" fill="#2d6620" />
            <path d="M54 55 C70 20 85 25 80 45 C70 30 60 45 53 54" fill="#5faa33" />
          </svg>
        </div>

        {/* Center Grand South Indian Temple Gopuram */}
        <div className="relative z-0 w-44 sm:w-60 h-44 sm:h-60 flex flex-col items-center justify-end">
          <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-lg">
            {/* Temple Tier 1 (Base / Maha Dwaram) */}
            <rect x="35" y="170" width="130" height="48" fill="#b88a44" rx="2" />
            <rect x="40" y="174" width="120" height="40" fill="#cfa55b" />
            {/* Temple Doorway (Sanctum Entry) */}
            <path d="M85 214 L85 180 Q100 170 115 180 L115 214 Z" fill="#5c0f1c" />
            <path d="M90 214 L90 185 Q100 178 110 185 L110 214 Z" fill="#30050c" />
            {/* Carved Doorway Pillars */}
            <rect x="78" y="180" width="5" height="34" fill="#8a641a" />
            <rect x="117" y="180" width="5" height="34" fill="#8a641a" />

            {/* Tier 2 */}
            <polygon points="30,170 42,135 158,135 170,170" fill="#a87a38" />
            <polygon points="36,168 46,138 154,138 164,168" fill="#c49442" />
            {/* Miniature Sculpted Niches Tier 2 */}
            <circle cx="60" cy="152" r="4" fill="#7d1727" />
            <circle cx="80" cy="152" r="4" fill="#7d1727" />
            <circle cx="100" cy="152" r="5" fill="#f5d98e" />
            <circle cx="120" cy="152" r="4" fill="#7d1727" />
            <circle cx="140" cy="152" r="4" fill="#7d1727" />

            {/* Tier 3 */}
            <polygon points="44,135 54,105 146,105 156,135" fill="#9e6e2e" />
            <polygon points="48,133 58,108 142,108 152,133" fill="#b88636" />
            <circle cx="75" cy="120" r="3.5" fill="#7d1727" />
            <circle cx="100" cy="120" r="4.5" fill="#f5d98e" />
            <circle cx="125" cy="120" r="3.5" fill="#7d1727" />

            {/* Tier 4 */}
            <polygon points="56,105 66,78 134,78 144,105" fill="#8f6024" />
            <polygon points="60,103 69,81 131,81 140,103" fill="#ad792d" />
            <circle cx="85" cy="92" r="3" fill="#7d1727" />
            <circle cx="100" cy="92" r="4" fill="#f5d98e" />
            <circle cx="115" cy="92" r="3" fill="#7d1727" />

            {/* Tier 5 */}
            <polygon points="68,78 78,54 122,54 132,78" fill="#80541c" />
            <polygon points="72,76 81,56 119,56 128,76" fill="#9e6b22" />

            {/* Shikhara (Dome / Top Crown) */}
            <path d="M76 54 Q100 38 124 54 Z" fill="#c4942e" />
            <path d="M80 54 Q100 42 120 54 Z" fill="#dbaa3e" />

            {/* 5 Golden Kalash Finials on top */}
            <path d="M100 20 L98 38 L102 38 Z" fill="#f5d98e" />
            <circle cx="100" cy="22" r="3" fill="#f1c40f" />
            <path d="M92 24 L90 40 L94 40 Z" fill="#dbaa3e" />
            <circle cx="92" cy="26" r="2.5" fill="#f39c12" />
            <path d="M108 24 L106 40 L110 40 Z" fill="#dbaa3e" />
            <circle cx="108" cy="26" r="2.5" fill="#f39c12" />
            <path d="M84 28 L82 42 L86 42 Z" fill="#c4942e" />
            <circle cx="84" cy="30" r="2" fill="#e67e22" />
            <path d="M116 28 L114 42 L118 42 Z" fill="#c4942e" />
            <circle cx="116" cy="30" r="2" fill="#e67e22" />
          </svg>
        </div>

        {/* Sacred Flying Green Parrot (Andal's Parrot) */}
        <div className="absolute right-16 sm:right-28 top-4 w-12 sm:w-16 h-12 sm:h-16 pointer-events-none z-10 transform -rotate-12 animate-pulse">
          <svg viewBox="0 0 60 50" className="w-full h-full drop-shadow">
            {/* Body */}
            <path d="M25 20 Q35 15 45 22 Q40 32 30 28 Z" fill="#27ae60" />
            {/* Head & Red Beak */}
            <circle cx="45" cy="20" r="6" fill="#2ecc71" />
            <path d="M49 19 Q55 21 52 26 Q47 24 49 19 Z" fill="#e74c3c" />
            <circle cx="46" cy="18" r="1" fill="#000" />
            {/* Wing */}
            <path d="M22 20 Q15 5 30 14 Q32 20 22 20 Z" fill="#1abc9c" />
            {/* Long Tail Feathers */}
            <path d="M25 26 Q10 38 2 46 Q12 36 26 28 Z" fill="#2ecc71" />
            <path d="M26 27 Q14 44 6 50 Q16 38 28 29 Z" fill="#16a085" />
          </svg>
        </div>

        {/* Right Banana Tree */}
        <div className="absolute right-2 sm:right-6 bottom-0 w-24 sm:w-36 h-44 sm:h-56 pointer-events-none z-10 scale-x-[-1]">
          <svg viewBox="0 0 120 180" className="w-full h-full drop-shadow-md">
            <path d="M55 180 Q57 110 50 60 Q60 110 65 180 Z" fill="#4d7c2a" />
            <path d="M52 180 Q56 120 54 80 Q58 120 60 180 Z" fill="#6ba038" />
            <ellipse cx="60" cy="100" rx="8" ry="12" fill="#d4aa2e" />
            <ellipse cx="64" cy="98" rx="6" ry="10" fill="#f1c40f" />
            <path d="M60 112 C60 125 65 130 63 138 C61 130 58 125 60 112 Z" fill="#800020" />
            <path d="M50 70 C20 50 5 80 0 110 C15 85 35 75 52 74" fill="#3a7528" />
            <path d="M48 65 C10 30 -5 50 2 80 C20 55 38 60 50 68" fill="#529930" />
            <path d="M52 60 C30 20 15 25 18 45 C32 30 45 45 53 58" fill="#6db836" />
            <path d="M58 65 C85 35 110 50 115 80 C95 65 75 60 56 68" fill="#43852b" />
            <path d="M55 75 C80 60 100 85 105 110 C85 90 70 80 54 77" fill="#2d6620" />
            <path d="M54 55 C70 20 85 25 80 45 C70 30 60 45 53 54" fill="#5faa33" />
          </svg>
        </div>
      </div>
    </div>
  );
}
