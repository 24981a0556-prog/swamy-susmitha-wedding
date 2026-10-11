import { MessageCircle, Phone, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { RSVP_CONFIG } from '../../data/wedding';
import { TempleBorder } from '../ui/TempleBorder';
import { ToranGarland } from '../ui/ToranGarland';

export function RSVP() {
  const whatsappUrl = `https://wa.me/${RSVP_CONFIG.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    RSVP_CONFIG.whatsappMessage,
  )}`;

  return (
    <section id="rsvp" className="relative py-12 sm:py-16 bg-kolam-light text-[#420813] select-none">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="font-royal text-xs tracking-[0.25em] text-[#a1761e] font-semibold uppercase mb-1">
            ~ Shubh Vivah ~
          </p>
          <h2 className="font-accent text-4xl sm:text-6xl text-[#7d1727] mb-2 drop-shadow-sm">
            RSVP &amp; Blessings
          </h2>
          <p className="font-display italic text-sm sm:text-base text-[#7e5b52] font-light max-w-md mx-auto">
            Your gracious presence and heartfelt blessings are our greatest joy.
          </p>
        </div>

        {/* Traditional Auspicious Scroll Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#fefdfa] border-4 border-[#c4942e] shadow-xl text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full bg-[#fcf8f0] border-2 border-[#7d1727] text-[#7d1727] shadow-sm">
              <HeartHandshake className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl text-[#5c0f1c] font-semibold mb-3">
            Kindly Bless Us With Your Presence
          </h3>

          <p className="font-display text-sm sm:text-base text-[#5a2e22] leading-relaxed mb-8">
            Please let us know your presence via WhatsApp or phone call so we can warmly welcome you and make your visit memorable.
          </p>

          {/* Action Buttons in Royal Maroon & Gold */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full font-royal text-xs sm:text-sm font-bold tracking-wider uppercase text-[#fcf8f0] bg-gradient-to-r from-[#2c5932] via-[#3a7542] to-[#2c5932] hover:from-[#1e3f23] hover:to-[#1e3f23] border border-[#c4942e] shadow-md transition-all transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current text-[#fcf8f0]" />
              <span>Confirm on WhatsApp</span>
            </a>

            {/* Direct Call */}
            <a
              href={`tel:${RSVP_CONFIG.phone}`}
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full font-royal text-xs sm:text-sm font-bold tracking-wider uppercase text-[#7d1727] border-2 border-[#7d1727] bg-[#fcf8f0] hover:bg-[#7d1727] hover:text-[#fcf8f0] shadow-sm transition-all transform hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call Directly</span>
            </a>
          </div>

          <div className="pt-6 border-t border-[#c4942e]/40 flex flex-col sm:flex-row items-center justify-around gap-3 text-xs sm:text-sm text-[#7e5b52]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2c5932]" />
              <span>Direct Helpline: <strong className="font-royal text-[#420813]">{RSVP_CONFIG.phoneDisplay}</strong></span>
            </div>
            <div>
              <span>Traditional Wedding Feast following Muhurtham</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <TempleBorder />
        <ToranGarland />
      </div>
    </section>
  );
}
