export function PadaMudraPair({
  className = '',
  rotation = 0,
}: {
  className?: string;
  rotation?: number;
}) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 select-none opacity-85 ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
    >
      {/* Left Footprint in Red Kumkum / Alta */}
      <svg viewBox="0 0 24 38" className="w-4 h-6 text-[#961d31] fill-current drop-shadow-sm">
        {/* Heel & Sole */}
        <ellipse cx="12" cy="26" rx="7" ry="10" />
        <ellipse cx="12" cy="16" rx="8" ry="7" />
        {/* Toes */}
        <circle cx="6" cy="6" r="2.2" />
        <circle cx="10" cy="4.5" r="2.4" />
        <circle cx="14" cy="5" r="2.2" />
        <circle cx="18" cy="6.5" r="1.8" />
        <circle cx="21" cy="9" r="1.4" />
      </svg>

      {/* Right Footprint in Red Kumkum / Alta */}
      <svg viewBox="0 0 24 38" className="w-4 h-6 text-[#961d31] fill-current drop-shadow-sm scale-x-[-1] translate-y-2">
        <ellipse cx="12" cy="26" rx="7" ry="10" />
        <ellipse cx="12" cy="16" rx="8" ry="7" />
        <circle cx="6" cy="6" r="2.2" />
        <circle cx="10" cy="4.5" r="2.4" />
        <circle cx="14" cy="5" r="2.2" />
        <circle cx="18" cy="6.5" r="1.8" />
        <circle cx="21" cy="9" r="1.4" />
      </svg>
    </div>
  );
}
