import { useState } from 'react';
import { Play, Film, ExternalLink } from 'lucide-react';
import { VIDEO_CONFIG } from '../../data/wedding';
import { TempleBorder } from '../ui/TempleBorder';
import { ToranGarland } from '../ui/ToranGarland';

export function PreWeddingVideo() {
  const { youtubeVideoId, channelUrl, title, subtitle, thumbnailUrl } = VIDEO_CONFIG;
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState<string>(
    thumbnailUrl || `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`
  );

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

        {/* Traditional Ornate Frame - Portrait 9:16 for YouTube Short */}
        <div className="max-w-[340px] sm:max-w-[380px] md:max-w-[400px] mx-auto p-3 sm:p-4 rounded-3xl bg-[#fefdfa] border-4 border-[#c4942e] shadow-xl">
          <div
            className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-inner border border-[#7d1727] bg-[#420813]"
            style={{ aspectRatio: '9/16' }}
          >
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&playsinline=1`}
                title="Swamy & Susmitha Pre-Wedding Film"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full block group cursor-pointer text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dbaa3e]"
                aria-label="Play pre-wedding video"
              >
                <img
                  src={thumbSrc}
                  alt="Swamy & Susmitha Pre-Wedding Film"
                  loading="lazy"
                  onError={() => {
                    if (thumbSrc !== `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`) {
                      setThumbSrc(`https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`);
                    } else {
                      setThumbSrc('/images/DSC09870.jpg.jpeg');
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#420813]/90 via-[#420813]/35 to-black/30 flex flex-col items-center justify-between p-6 sm:p-7 text-center text-[#fcf8f0]">
                  {/* Top Badge */}
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#420813]/75 backdrop-blur-sm border border-[#c4942e]/50 font-royal text-[11px] sm:text-xs text-[#fce8b8] tracking-widest uppercase">
                      <Film className="w-3.5 h-3.5 text-[#dbaa3e]" />
                      Pre-Wedding Film
                    </span>
                  </div>

                  {/* Play Button */}
                  <div className="flex flex-col items-center my-auto">
                    <span className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#c4942e] via-[#e5b84c] to-[#dbaa3e] text-[#420813] shadow-[0_0_35px_rgba(219,170,62,0.7)] group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                    </span>
                    <span className="mt-3 font-royal text-xs sm:text-sm tracking-widest text-[#fce8b8] uppercase font-semibold drop-shadow">
                      Watch Video
                    </span>
                  </div>

                  {/* Couple Title & Cinematography Credit */}
                  <div className="w-full text-center pb-1">
                    <h3 className="font-accent text-3xl sm:text-4xl text-[#fce8b8] font-normal mb-1 drop-shadow">
                      Swamy &amp; Susmitha
                    </h3>
                    <p className="font-royal text-[11px] sm:text-xs text-[#dbaa3e] tracking-widest uppercase font-semibold">
                      Cinematography by Rudra Clicks
                    </p>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Channel Link */}
        <div className="text-center mt-6">
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-royal text-xs text-[#7d1727] hover:text-[#a1761e] transition-colors tracking-wider uppercase font-semibold"
          >
            <Film className="w-3.5 h-3.5 text-[#7d1727]" />
            <span>Visit Rudra Clicks YouTube Channel</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="mt-16">
        <TempleBorder />
        <ToranGarland />
      </div>
    </section>
  );
}
