import { Eye } from 'lucide-react';
import { GALLERY_IMAGES } from '../../data/wedding';
import { useLightbox } from '../../hooks/useLightbox';
import { Lightbox } from './Lightbox';
import { TempleBorder } from '../ui/TempleBorder';
import { ToranGarland } from '../ui/ToranGarland';

export function PhotoGallery() {
  const { isOpen, currentIndex, open, close, next, prev } = useLightbox(
    GALLERY_IMAGES.length,
  );

  return (
    <section id="photo-gallery" className="relative py-12 sm:py-16 bg-kolam-light text-[#420813] select-none">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-royal text-xs tracking-[0.25em] text-[#a1761e] font-semibold uppercase mb-1">
            ~ Sacred Memories ~
          </p>
          <h2 className="font-accent text-4xl sm:text-6xl text-[#7d1727] mb-2 drop-shadow-sm">
            Photo Gallery
          </h2>
          <p className="font-display italic text-sm sm:text-base text-[#7e5b52] font-light max-w-md mx-auto">
            Cherished moments from our pre-wedding journey, framed forever in our hearts.
          </p>
        </div>

        {/* Editorial Photo Album Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_IMAGES.map((img, index) => {
            const heightClass =
              index === 0 || index === 4
                ? 'h-80 sm:h-96'
                : index === 1
                ? 'h-96 sm:h-[420px]'
                : 'h-80 sm:h-88';

            return (
              <div
                key={img.src}
                onClick={() => open(index)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer p-2.5 bg-[#fefdfa] border-2 border-[#c4942e]/60 hover:border-[#7d1727] transition-all duration-300 shadow-md hover:shadow-xl ${heightClass}`}
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <picture>
                    <source
                      type="image/webp"
                      media="(min-width: 1024px)"
                      srcSet={img.optimized.medium}
                    />
                    <source
                      type="image/webp"
                      srcSet={img.optimized.small}
                    />
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </picture>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#420813]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-xs text-[#fcf8f0] font-display line-clamp-1">
                      {img.alt}
                    </span>
                    <div className="p-2 rounded-full bg-[#c4942e] text-[#420813] shadow">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fullscreen Lightbox Modal */}
        <Lightbox
          isOpen={isOpen}
          currentIndex={currentIndex}
          images={GALLERY_IMAGES}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      </div>

      <div className="mt-16">
        <TempleBorder />
        <ToranGarland />
      </div>
    </section>
  );
}
