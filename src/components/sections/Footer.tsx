import { ArrowUp, Heart } from 'lucide-react';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';
import { TempleBorder } from '../ui/TempleBorder';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#fcf8f0] text-[#420813] select-none overflow-hidden">
      {/* Visual Target Section: Sri Sita Rama Kalyanam Painting */}
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-6 pt-4 pb-8 flex flex-col items-center">
        {/* Sacred Painting Canvas Container */}
        <div className="relative w-full rounded-3xl overflow-hidden border-4 border-[#c4942e] shadow-2xl bg-[#fbf7ee]">
          <picture>
            <source
              type="image/webp"
              srcSet="/images/optimized/sita-rama-kalyanam.webp"
            />
            <img
              src="/images/sita-rama-kalyanam.jpg"
              alt="Sri Sita Rama Kalyanam — Sacred Divine Wedding"
              className="w-full h-auto object-cover object-center max-h-[550px] sm:max-h-[700px]"
            />
          </picture>

          {/* Subtle bottom shadow vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#420813]/25 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Traditional Auspicious Blessing & Typography */}
        <div className="text-center mt-10 max-w-2xl mx-auto px-4">
          <p className="font-royal text-xs sm:text-sm tracking-[0.25em] text-[#a1761e] font-bold uppercase mb-2">
            || మంగళం దివ్య మంగళం ||
          </p>

          <h2 className="font-accent text-5xl sm:text-7xl text-[#7d1727] mb-2 drop-shadow-sm">
            Kalyanam Kamaniyam
          </h2>

          <p className="font-display text-lg sm:text-2xl text-[#5c0f1c] font-semibold tracking-wide uppercase mb-2">
            Swamy &amp; Susmitha
          </p>

          <p className="font-royal text-xs sm:text-sm text-[#7e5b52] tracking-[0.2em] uppercase font-semibold mb-3">
            October 29, 2026 • Visakhapatnam
          </p>

          <OrnamentalDivider className="my-4" />

          {/* Families Blessing Phrasing */}
          <p className="font-display italic text-sm sm:text-base text-[#5a2e22] leading-relaxed mb-6">
            With warmest compliments, heartfelt love, and blessings from the Potnuru and Pakki families. We eagerly await to celebrate every sacred moment with you!
          </p>

          {/* Back to Top Button */}
          <div className="pt-2 pb-6">
            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top of invitation"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-royal text-xs font-bold tracking-widest uppercase text-[#7d1727] border-2 border-[#7d1727] hover:bg-[#7d1727] hover:text-[#fcf8f0] transition-all shadow-sm cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

          {/* Monogram Seal */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#a1761e] font-royal tracking-widest uppercase pb-4 opacity-75">
            <span>S</span>
            <Heart className="w-3 h-3 fill-current text-[#7d1727]" />
            <span>S</span>
            <span>• 2026</span>
          </div>
        </div>
      </div>

      {/* Bottom Temple Frieze Border */}
      <TempleBorder />

      {/* Promotional Website Contact Line */}
      <div className="w-full bg-[#f7efdc] border-t border-[#c4942e]/40 py-3.5 px-4 text-center select-text">
        <p className="font-display text-xs sm:text-sm text-[#5c0f1c] font-normal leading-relaxed max-w-3xl mx-auto">
          For wedding websites, birthday wishes website, or any kind of website, contact:{' '}
          <a
            href="tel:6301302802"
            className="font-semibold text-[#7d1727] hover:text-[#c4942e] underline decoration-[#c4942e]/60 underline-offset-2 transition-colors inline-block"
          >
            6301302802
          </a>{' '}
          or{' '}
          <a
            href="https://wa.me/916301302802"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#2c5932] hover:text-[#1e3f23] underline decoration-[#2c5932]/60 underline-offset-2 transition-colors inline-block"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
