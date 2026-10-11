export function HaldiBowlIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      {/* Golden Brass Urli / Bowl */}
      <path d="M12 36 C12 48 20 54 32 54 C44 54 52 48 52 36 L12 36 Z" fill="#d4aa2e" stroke="#8a641a" strokeWidth="2" />
      <ellipse cx="32" cy="36" rx="20" ry="6" fill="#f1c40f" stroke="#8a641a" strokeWidth="2" />
      {/* Mound of Golden Turmeric Powder */}
      <path d="M20 36 C24 24 40 24 44 36 Z" fill="#f39c12" />
      <ellipse cx="32" cy="30" rx="10" ry="4" fill="#f1c40f" />
      {/* Base ring */}
      <ellipse cx="32" cy="54" rx="10" ry="2" fill="#8a641a" />
    </svg>
  );
}

export function ShehnaiDholIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      {/* Traditional Indian Dhol Drum */}
      <ellipse cx="26" cy="38" rx="8" ry="14" fill="#8a641a" stroke="#5c0f1c" strokeWidth="2" />
      <path d="M26 24 L48 28 L48 48 L26 52 Z" fill="#b88636" stroke="#5c0f1c" strokeWidth="2" />
      <ellipse cx="48" cy="38" rx="6" ry="10" fill="#a87a38" stroke="#5c0f1c" strokeWidth="2" />
      {/* Drum straps */}
      <line x1="26" y1="28" x2="48" y2="44" stroke="#5c0f1c" strokeWidth="1.5" />
      <line x1="26" y1="48" x2="48" y2="32" stroke="#5c0f1c" strokeWidth="1.5" />
      {/* Shehnai / Nadaswaram horn */}
      <path d="M16 14 L42 22 L46 16 L18 10 Z" fill="#dbaa3e" stroke="#7d5a13" strokeWidth="1.5" />
      <path d="M42 22 C46 25 50 20 46 16 Z" fill="#c4942e" stroke="#7d5a13" strokeWidth="1.5" />
    </svg>
  );
}

export function SacredMandapIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      {/* Mandapam Dome */}
      <path d="M18 26 Q32 12 46 26 Z" fill="#c4942e" stroke="#7d1727" strokeWidth="2" />
      <circle cx="32" cy="14" r="3" fill="#f1c40f" />
      {/* Kalash on top */}
      <path d="M30 11 L34 11 L32 6 Z" fill="#e74c3c" />
      {/* Mandapam Pillars */}
      <rect x="20" y="26" width="4" height="24" fill="#8a641a" />
      <rect x="40" y="26" width="4" height="24" fill="#8a641a" />
      {/* Auspicious Fire / Havan Kund */}
      <polygon points="26,48 38,48 35,42 29,42" fill="#7d5a13" />
      <path d="M32 36 Q35 41 33 44 Q31 41 32 36 Z" fill="#e74c3c" />
      <path d="M32 38 Q34 41 33 43 Q31 41 32 38 Z" fill="#f1c40f" />
    </svg>
  );
}
