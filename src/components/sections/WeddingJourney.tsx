import { MapPin, CalendarPlus, ExternalLink } from 'lucide-react';
import { EVENTS } from '../../data/wedding';
import { HaldiBowlIcon, ShehnaiDholIcon, SacredMandapIcon } from '../ui/TraditionalIcons';
import { PadaMudraPair } from '../ui/PadaMudraFootsteps';
import { TempleBorder } from '../ui/TempleBorder';
import { ToranGarland } from '../ui/ToranGarland';

export function WeddingJourney() {
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent('Wedding Ceremony: Swamy & Susmitha');
    const details = encodeURIComponent(
      'Sacred Wedding Ceremony of Potnuru Swamy Patnaik and Pakki Susmitha.\nVenue: Sri Thippala Chinna Apparo Kalyanamandapam',
    );
    const location = encodeURIComponent('Sri Thippala Chinna Apparo Kalyanamandapam');
    const dates = '20261029T170000Z/20261029T210000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const getEventIcon = (name: string) => {
    if (name.includes('Haldi')) {
      return <HaldiBowlIcon className="w-12 h-12 drop-shadow" />;
    }
    if (name.includes('Wedding')) {
      return <SacredMandapIcon className="w-14 h-14 drop-shadow" />;
    }
    return <ShehnaiDholIcon className="w-12 h-12 drop-shadow" />;
  };

  return (
    <section id="wedding-journey" className="relative py-12 sm:py-16 bg-kolam-light text-[#420813] select-none">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12 sm:mb-16">
        <h2 className="font-accent text-4xl sm:text-6xl md:text-7xl text-[#7d1727] mb-2 drop-shadow-sm">
          The Wedding Journey
        </h2>
        <p className="font-display italic text-sm sm:text-base text-[#7e5b52] font-light max-w-md mx-auto">
          Walk with us, function to function, to the sacred hour.
        </p>
      </div>

      {/* Meandering Footsteps & Events Timeline */}
      <div className="max-w-3xl mx-auto px-4 relative">
        <div className="flex flex-col items-center space-y-12 sm:space-y-16">
          {EVENTS.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={event.name} className="w-full flex flex-col items-center">
                {/* Event Card */}
                <div
                  className={`w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#fefdfa] border-2 ${
                    event.isMain
                      ? 'border-[#7d1727] ring-4 ring-[#c4942e]/30 shadow-xl'
                      : 'border-[#c4942e]/60 shadow-md'
                  } flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left`}
                >
                  {/* Traditional Cultural Icon */}
                  <div className="shrink-0 p-3 rounded-full bg-[#fcf8f0] border border-[#c4942e]/50 shadow-inner">
                    {getEventIcon(event.name)}
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    {event.isMain && (
                      <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-royal font-bold tracking-widest uppercase text-[#fcf8f0] bg-[#7d1727] mb-2 shadow-sm">
                        Main Ceremony &amp; Subha Muhurtham
                      </span>
                    )}

                    <h3 className="font-display text-2xl sm:text-3xl text-[#5c0f1c] font-semibold mb-1">
                      {event.name}
                    </h3>

                    <p className="font-royal text-xs sm:text-sm tracking-wider text-[#a1761e] font-semibold mb-1">
                      {event.date} • {event.time}
                    </p>

                    {event.venue && (
                      <p className="font-display text-xs sm:text-sm text-[#7e5b52] mb-3">
                        📍 {event.venue}
                      </p>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mt-3">
                      {event.mapUrl && (
                        <a
                          href={event.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-royal text-[11px] font-bold tracking-wider uppercase text-[#7d1727] border border-[#7d1727] hover:bg-[#7d1727] hover:text-[#fcf8f0] shadow-sm transition-all"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          <span>View Map</span>
                          <ExternalLink className="w-3 h-3 opacity-70" />
                        </a>
                      )}

                      {event.isMain && (
                        <a
                          href={getGoogleCalendarUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-royal text-[11px] font-bold tracking-wider uppercase text-[#c4942e] border border-[#c4942e] hover:bg-[#c4942e] hover:text-[#420813] shadow-sm transition-all"
                        >
                          <CalendarPlus className="w-3.5 h-3.5" />
                          <span>Add to Calendar</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footsteps connecting to the next event */}
                {index < EVENTS.length - 1 && (
                  <div className="my-6 flex flex-col items-center gap-2">
                    <PadaMudraPair rotation={isLeft ? 15 : -15} />
                    <PadaMudraPair rotation={isLeft ? 25 : -25} />
                    <PadaMudraPair rotation={isLeft ? 15 : -15} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <TempleBorder />
        <ToranGarland />
      </div>
    </section>
  );
}
