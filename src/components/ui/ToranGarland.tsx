export function ToranGarland({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden select-none py-1 ${className}`} aria-hidden="true">
      {/* Golden thread rope */}
      <div className="h-1 bg-gradient-to-r from-[#7d5a13] via-[#dbaa3e] to-[#7d5a13] shadow-sm" />
      
      {/* Hanging Mango Leaves and Marigold Flowers Garland */}
      <div className="flex justify-between items-start -mt-0.5 px-1 sm:px-4 overflow-hidden">
        {Array.from({ length: 28 }).map((_, i) => {
          const isMarigold = i % 2 === 0;
          return (
            <div key={i} className="flex flex-col items-center shrink-0 w-5 sm:w-8">
              {/* Green Mango Leaf */}
              <div
                className="w-2.5 sm:w-3.5 h-6 sm:h-8 rounded-b-full bg-gradient-to-b from-[#2c5932] via-[#3a7542] to-[#204225] border-t border-[#7d5a13] shadow-sm transform origin-top hover:rotate-3 transition-transform"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 85% 70%, 50% 100%, 15% 70%)',
                }}
              />
              {/* Marigold Flower Blossom */}
              {isMarigold && (
                <div className="-mt-1 flex flex-col items-center">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-tr from-[#e67e22] via-[#f39c12] to-[#f1c40f] border border-[#d35400] shadow-sm" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e74c3c] -mt-0.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
