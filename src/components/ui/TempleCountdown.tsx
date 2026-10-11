import { useCountdown } from '../../hooks/useCountdown';
import { WEDDING_DATE } from '../../data/wedding';

export function TempleCountdown() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);

  const units = [
    { label: 'DAYS', value: days },
    { label: 'HOURS', value: hours },
    { label: 'MINUTES', value: minutes },
    { label: 'SECONDS', value: seconds },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-2 select-none">
      {/* Stone Carved Arcade Outer Shell */}
      <div className="relative rounded-2xl bg-temple-stone p-3 sm:p-5 border-4 border-[#7d5a13] shadow-2xl">
        {/* Carved Header Title Banner */}
        <div className="text-center py-2.5 mb-3 sm:mb-5 border-b-2 border-[#7d5a13]/60 bg-[#b2894b]/60 rounded-lg shadow-inner">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#5c410c] text-sm">✦</span>
            <h3 className="font-royal text-xl sm:text-3xl md:text-4xl tracking-[0.25em] text-[#420813] font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
              OUR MUHURTHAM IN
            </h3>
            <span className="text-[#5c410c] text-sm">✦</span>
          </div>
        </div>

        {/* Arcade Grid flanked by Elephants */}
        <div className="relative flex items-center justify-between gap-1 sm:gap-4">
          {/* Left Carved Elephant Pillar */}
          <div className="hidden md:flex flex-col items-center justify-center w-16 h-36 shrink-0 opacity-80">
            <svg viewBox="0 0 50 100" className="w-full h-full drop-shadow">
              <path d="M40 20 Q48 35 45 60 Q40 85 45 95 L25 95 Q28 75 25 55 Q20 40 25 25 Z" fill="#7d5a13" />
              {/* Elephant silhouette with raised trunk */}
              <circle cx="28" cy="30" r="14" fill="#6b4c10" />
              <path d="M22 35 C15 45 5 40 2 25 C0 15 15 10 20 22" fill="none" stroke="#6b4c10" strokeWidth="6" strokeLinecap="round" />
              <circle cx="28" cy="28" r="1.5" fill="#f5d98e" />
            </svg>
          </div>

          {/* 4 Carved Stone Arches */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-5 w-full">
            {units.map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                {/* Individual Stone Arch Niche */}
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-w-[130px] rounded-t-[40px] sm:rounded-t-[55px] rounded-b-lg bg-gradient-to-b from-[#8f6629] via-[#6e4e1d] to-[#543b14] border-2 border-[#7d5a13] shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)] flex items-center justify-center p-2">
                  {/* Inner Stone Arch molding */}
                  <div className="absolute inset-1 rounded-t-[36px] sm:rounded-t-[50px] rounded-b border border-[#dbaa3e]/30 pointer-events-none" />

                  {/* Digit */}
                  <span className="font-royal text-2xl sm:text-4xl md:text-5xl font-bold text-[#fce8b8] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wider">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>

                {/* Stone Rosette Label Banner */}
                <div className="mt-2 px-2 py-1 rounded bg-[#7d5a13]/80 border border-[#dbaa3e]/40 shadow-sm w-full text-center max-w-[120px]">
                  <span className="font-royal text-[9px] sm:text-xs font-bold tracking-[0.18em] text-[#fce8b8]">
                    {unit.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Carved Elephant Pillar */}
          <div className="hidden md:flex flex-col items-center justify-center w-16 h-36 shrink-0 opacity-80 scale-x-[-1]">
            <svg viewBox="0 0 50 100" className="w-full h-full drop-shadow">
              <path d="M40 20 Q48 35 45 60 Q40 85 45 95 L25 95 Q28 75 25 55 Q20 40 25 25 Z" fill="#7d5a13" />
              <circle cx="28" cy="30" r="14" fill="#6b4c10" />
              <path d="M22 35 C15 45 5 40 2 25 C0 15 15 10 20 22" fill="none" stroke="#6b4c10" strokeWidth="6" strokeLinecap="round" />
              <circle cx="28" cy="28" r="1.5" fill="#f5d98e" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
