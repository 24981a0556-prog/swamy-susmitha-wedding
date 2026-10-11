import { useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../../data/wedding';

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  images: GalleryImage[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  isOpen,
  currentIndex,
  images,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const touchStartXRef = useRef<number | null>(null);

  if (!isOpen || !images.length) return null;

  const current = images[currentIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (deltaX > 50) {
      onPrev();
    } else if (deltaX < -50) {
      onNext();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#29050b]/95 backdrop-blur-md animate-in fade-in duration-300 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        type="button"
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-[#5c0f1c] text-[#fce8b8] hover:bg-[#7d1727] border-2 border-[#c4942e] transition-all cursor-pointer shadow-lg"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Counter Badge */}
      <div className="absolute top-5 left-5 z-50 px-4 py-1.5 rounded-full bg-[#5c0f1c] border-2 border-[#c4942e] text-xs sm:text-sm font-royal font-bold tracking-widest text-[#fce8b8] shadow-lg">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous Button */}
      <button
        onClick={onPrev}
        type="button"
        aria-label="Previous Image"
        className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-[#5c0f1c] text-[#fce8b8] hover:bg-[#7d1727] border-2 border-[#c4942e] transition-all cursor-pointer shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Image Container */}
      <div className="relative max-w-5xl max-h-[85vh] w-full px-12 sm:px-16 flex flex-col items-center justify-center">
        <picture>
          <source type="image/webp" srcSet={current.optimized.large} />
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[75vh] max-w-full object-contain rounded-xl border-4 border-[#c4942e] shadow-2xl bg-[#000]"
          />
        </picture>

        {/* Caption */}
        <p className="mt-4 text-center font-display text-xs sm:text-sm text-[#fce8b8] font-light max-w-xl">
          {current.alt}
        </p>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        type="button"
        aria-label="Next Image"
        className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-[#5c0f1c] text-[#fce8b8] hover:bg-[#7d1727] border-2 border-[#c4942e] transition-all cursor-pointer shadow-lg"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>
    </div>
  );
}
