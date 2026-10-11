
interface PeacockArchProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  title: string;
  parents: string;
  quote?: string;
  className?: string;
  peacockOrientation?: 'left' | 'right';
}

export function PeacockArch({
  imageSrc,
  imageAlt,
  name,
  title,
  parents,
  quote,
  className = '',
  peacockOrientation = 'left',
}: PeacockArchProps) {
  const isLeft = peacockOrientation === 'left';

  return (
    <div className={`flex flex-col items-center text-center max-w-sm mx-auto select-none ${className}`}>
      {/* Archway Container with Perched Peacock */}
      <div className="relative w-56 sm:w-64 pt-12 pb-2">
        {/* Peacock perched on top */}
        <div
          className={`absolute top-0 ${
            isLeft ? 'left-6' : 'right-6 scale-x-[-1]'
          } w-24 sm:w-28 h-20 sm:h-24 pointer-events-none z-20 drop-shadow-md`}
        >
          <svg viewBox="0 0 100 80" className="w-full h-full">
            {/* Peacock Crest */}
            <circle cx="58" cy="10" r="1.5" fill="#f1c40f" />
            <circle cx="62" cy="8" r="1.5" fill="#f1c40f" />
            <circle cx="66" cy="11" r="1.5" fill="#f1c40f" />
            <line x1="56" y1="16" x2="58" y2="10" stroke="#003366" strokeWidth="1" />
            <line x1="58" y1="16" x2="62" y2="8" stroke="#003366" strokeWidth="1" />
            <line x1="60" y1="16" x2="66" y2="11" stroke="#003366" strokeWidth="1" />
            {/* Crowned Head & Golden Beak */}
            <circle cx="56" cy="18" r="6" fill="#003366" />
            <path d="M62 18 L70 20 L62 22 Z" fill="#d4aa2e" />
            <circle cx="57" cy="17" r="1.2" fill="#fff" />
            <circle cx="57" cy="17" r="0.6" fill="#000" />
            {/* Graceful S-Curved Royal Blue Neck */}
            <path d="M54 22 C48 30 52 42 46 50 C40 58 35 60 30 65" fill="none" stroke="#004080" strokeWidth="8" strokeLinecap="round" />
            <path d="M54 22 C48 30 52 42 46 50 C40 58 35 60 30 65" fill="none" stroke="#0066cc" strokeWidth="5" strokeLinecap="round" />
            {/* Flowing Emerald & Gold Feathers Body */}
            <path d="M42 48 C30 46 15 54 8 72 C22 66 38 64 48 55 Z" fill="#1b4d3e" />
            {/* Tail Eyespots */}
            <circle cx="20" cy="62" r="5" fill="#2e8b57" />
            <circle cx="20" cy="62" r="3.5" fill="#c4942e" />
            <circle cx="20" cy="62" r="2" fill="#003366" />
            <circle cx="32" cy="58" r="5" fill="#2e8b57" />
            <circle cx="32" cy="58" r="3.5" fill="#c4942e" />
            <circle cx="32" cy="58" r="2" fill="#003366" />
            <circle cx="12" cy="70" r="4.5" fill="#2e8b57" />
            <circle cx="12" cy="70" r="3" fill="#c4942e" />
            <circle cx="12" cy="70" r="1.5" fill="#003366" />
          </svg>
        </div>

        {/* Traditional Scalloped Temple Arch Frame */}
        <div className="relative p-2.5 rounded-t-[100px] rounded-b-2xl bg-gradient-to-b from-[#e3b858] via-[#c4942e] to-[#7d5a13] shadow-lg border-2 border-[#5c0f1c]">
          {/* Inner Cream Inset */}
          <div className="relative p-1.5 rounded-t-[92px] rounded-b-xl bg-[#fcf8f0] border border-[#a1761e]">
            {/* Photo Inside Arch */}
            <div className="w-full h-64 sm:h-72 rounded-t-[86px] rounded-b-lg overflow-hidden relative shadow-inner">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5c0f1c]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Details Below Arch */}
      <div className="mt-4 px-2">
        <h3 className="font-accent text-3xl sm:text-4xl text-[#7d1727] tracking-wide mb-1">
          {name}
        </h3>
        
        <p className="font-royal text-[11px] sm:text-xs tracking-[0.25em] text-[#a1761e] font-semibold uppercase mt-1 mb-1">
          {title}
        </p>
        
        <p className="font-display text-sm sm:text-base text-[#5c0f1c] font-medium leading-relaxed max-w-xs">
          {parents}
        </p>

        {quote && (
          <p className="font-display italic text-xs sm:text-sm text-[#7e5b52] font-light mt-2 max-w-xs">
            &ldquo;{quote}&rdquo;
          </p>
        )}
      </div>
    </div>
  );
}
