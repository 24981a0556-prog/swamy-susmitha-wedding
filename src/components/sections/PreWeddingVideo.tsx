import { Play, Film, ExternalLink } from 'lucide-react';
import { VIDEO_CONFIG } from '../../data/wedding';
import { TempleBorder } from '../ui/TempleBorder';
import { ToranGarland } from '../ui/ToranGarland';

export function PreWeddingVideo() {
  const { youtubeVideoId, channelUrl, title, subtitle } = VIDEO_CONFIG;

  return (
    <section id="pre-wedding-video" className="relative py-12 sm:py-16 bg-kolam-light text-[#420813] select-none">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="font-royal text-xs tracking-[0.25em] text-[#a1761e] font-semibold uppercase mb-1">
            ~ Motion Memories ~
          </p>
          <h2 className="font-accent text-4xl sm:text-6xl text-[#7d1727] mb-2 drop-shadow-sm">
            {title}
          </h2>
          <p className="font-display italic text-sm sm:text-base text-[#7e5b52] font-light max-w-md mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Traditional Ornate Frame */}
        <div className="p-3 sm:p-5 rounded-3xl bg-[#fefdfa] border-4 border-[#c4942e] shadow-xl">
          {youtubeVideoId ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-inner border border-[#7d1727]">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
                title="Swamy & Susmitha Pre-Wedding Film"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden group shadow-inner">
              <picture>
                <source type="image/webp" srcSet="/images/optimized/save-the-date-1920w.webp" />
                <img
                  src="/images/DSC09870.jpg.jpeg"
                  alt="Pre-Wedding Film Teaser"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </picture>

              <div className="absolute inset-0 bg-gradient-to-t from-[#420813]/85 via-[#420813]/40 to-transparent flex flex-col items-center justify-center p-6 text-center text-[#fcf8f0]">
                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#c4942e] to-[#dbaa3e] text-[#420813] shadow-[0_0_30px_rgba(219,170,62,0.6)] group-hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Watch film on YouTube"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </a>

                <h3 className="font-accent text-3xl sm:text-5xl text-[#fce8b8] font-normal mt-5 mb-1">
                  Swamy &amp; Susmitha — A Tale of Forever
                </h3>

                <p className="font-royal text-xs sm:text-sm text-[#dbaa3e] tracking-widest uppercase mb-4 font-semibold">
                  Cinematography by Rudra Clicks
                </p>

                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-royal text-xs font-bold tracking-wider uppercase text-[#420813] bg-[#fce8b8] hover:bg-[#fff] border border-[#c4942e] shadow-md transition-all"
                >
                  <Film className="w-3.5 h-3.5 text-[#7d1727]" />
                  <span>Visit YouTube Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-16">
        <TempleBorder />
        <ToranGarland />
      </div>
    </section>
  );
}
