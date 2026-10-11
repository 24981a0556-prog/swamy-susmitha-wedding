import { Heart } from 'lucide-react';
import { TIMELINE } from '../../data/wedding';
import { TempleBorder } from '../ui/TempleBorder';
import { ToranGarland } from '../ui/ToranGarland';

export function OurStory() {
  return (
    <section id="our-story" className="relative py-12 sm:py-16 bg-kolam-light text-[#420813] select-none">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-royal text-xs tracking-[0.25em] text-[#a1761e] font-semibold uppercase mb-1">
            ~ A Journey of Hearts ~
          </p>
          <h2 className="font-accent text-4xl sm:text-6xl text-[#7d1727] mb-2 drop-shadow-sm">
            Our Story
          </h2>
          <p className="font-display italic text-sm sm:text-base text-[#7e5b52] font-light max-w-md mx-auto">
            Every love story is sacred, but ours is our most cherished blessing.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="relative border-l-2 border-[#c4942e]/60 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 sm:space-y-12">
          {TIMELINE.map((item) => (
            <div key={item.title} className="relative group">
              {/* Auspicious Lotus / Heart Node */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#fcf8f0] border-2 border-[#7d1727] text-[#7d1727] shadow-sm">
                <Heart className="w-3 h-3 fill-current text-[#7d1727]" />
              </div>

              {/* Manuscript Milestone Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#fefdfa] border-2 border-[#c4942e]/40 shadow-md group-hover:border-[#7d1727]/60 transition-colors">
                <div className="inline-block px-3 py-0.5 rounded-full text-[11px] font-royal font-bold tracking-wider uppercase text-[#7d1727] bg-[#fcf8f0] border border-[#7d1727]/30 mb-2">
                  {item.date}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-[#5c0f1c] font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="font-display text-sm sm:text-base text-[#5a2e22] leading-relaxed">
                  {item.description}
                </p>

                {item.image && (
                  <div className="mt-4 rounded-xl overflow-hidden border-2 border-[#c4942e]/50 shadow-md max-w-md">
                    <picture>
                      <source type="image/webp" srcSet={item.image.optimized} />
                      <img
                        src={item.image.original}
                        alt={item.image.alt}
                        loading="lazy"
                        className="w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    </picture>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <TempleBorder />
        <ToranGarland />
      </div>
    </section>
  );
}
