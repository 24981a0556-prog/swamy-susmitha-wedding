import { Heart, ChevronDown } from 'lucide-react';
import { HERO, EVENTS } from '../../data/wedding';
import { TempleHeader } from '../ui/TempleHeader';
import { TempleBorder } from '../ui/TempleBorder';
import { ToranGarland } from '../ui/ToranGarland';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';

interface HeroProps {
  onOpenInvitation: () => void;
  hasOpened: boolean;
}

export function Hero({ onOpenInvitation, hasOpened }: HeroProps) {
  const mainCeremony = EVENTS.find((e) => e.isMain);

  const handleOpen = () => {
    onOpenInvitation();
    const target = document.getElementById('meet-the-couple') || document.getElementById('our-story');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-kolam-light text-[#420813] overflow-hidden select-none">
      {/* Top Temple Gopuram, Banana Trees, and Parrot */}
      <TempleHeader />

      {/* Traditional Indian Temple Frieze Border */}
      <TempleBorder />

      {/* Main Wedding Invitation Card Body */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 flex flex-col items-center text-center">
        {/* Sanskrit Auspicious Invocation */}
        <p className="font-royal text-xs sm:text-sm tracking-[0.25em] text-[#7d1727] font-semibold uppercase mb-3">
          || శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు ||
        </p>

        <p className="font-display text-sm sm:text-base text-[#7e5b52] font-light max-w-lg leading-relaxed mb-6">
          Together with their families, cordially invite you to celebrate the sacred wedding ceremony of
        </p>

        {/* Couple Names in Majestic Royal Maroon Script */}
        <div className="my-2 sm:my-4">
          <h1 className="font-accent text-5xl sm:text-7xl md:text-8xl text-[#7d1727] drop-shadow-sm leading-tight">
            Swamy
            <span className="font-display text-3xl sm:text-5xl text-[#c4942e] mx-3 sm:mx-5 font-light">
              &amp;
            </span>
            Susmitha
          </h1>
        </div>

        <OrnamentalDivider className="my-2 sm:my-4" />

        {/* Wedding Date Display */}
        <div className="space-y-1 sm:space-y-2 mb-6">
          <p className="font-royal text-lg sm:text-2xl md:text-3xl text-[#5c0f1c] font-bold tracking-[0.15em] uppercase">
            Thursday, October 29, 2026
          </p>
          <p className="font-royal text-xs sm:text-sm tracking-[0.2em] text-[#a1761e] font-semibold uppercase">
            Subha Muhurtham: {HERO.timeDisplay}
          </p>
        </div>

        {/* Venue Information */}
        {mainCeremony?.venue && (
          <div className="max-w-md mx-auto mb-8 p-3 rounded-xl bg-[#fcf8f0]/80 border border-[#c4942e]/40 shadow-sm">
            <p className="font-royal text-[11px] sm:text-xs tracking-[0.2em] text-[#7d1727] font-semibold uppercase mb-1">
              Auspicious Venue
            </p>
            <p className="font-display text-base sm:text-lg text-[#420813] font-medium leading-snug">
              {mainCeremony.venue}
            </p>
            <p className="text-xs text-[#7e5b52] font-light mt-0.5">
              Visakhapatnam, Andhra Pradesh
            </p>
          </div>
        )}

        {/* "Open Invitation" Seal Button */}
        <div className="my-4">
          <button
            onClick={handleOpen}
            type="button"
            id="open-invitation-btn"
            className="group relative inline-flex items-center gap-3 px-8 sm:px-11 py-3.5 sm:py-4 rounded-full font-royal text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#fcf8f0] bg-gradient-to-r from-[#7d1727] via-[#961d31] to-[#7d1727] hover:from-[#5c0f1c] hover:to-[#5c0f1c] border-2 border-[#dbaa3e] shadow-[0_4px_20px_rgba(125,23,39,0.35)] hover:shadow-[0_6px_25px_rgba(219,170,62,0.45)] transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Heart className="w-4 h-4 text-[#f5d98e] fill-[#f5d98e] group-hover:scale-110 transition-transform" />
            <span>{hasOpened ? 'Explore Invitation' : 'Open Invitation'}</span>
            <span className="text-[#f5d98e]">✦</span>
          </button>
        </div>

        {/* Scroll cue */}
        <div className="mt-4">
          <a
            href="#meet-the-couple"
            aria-label="Scroll to Couple Introduction"
            className="inline-flex flex-col items-center gap-1 text-[#7e5b52] hover:text-[#7d1727] transition-colors"
          >
            <span className="font-royal text-[10px] tracking-widest uppercase">Begin Sacred Journey</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#c4942e]" />
          </a>
        </div>
      </div>

      {/* Hanging Mango Leaves & Marigold Garland */}
      <ToranGarland />
    </section>
  );
}
