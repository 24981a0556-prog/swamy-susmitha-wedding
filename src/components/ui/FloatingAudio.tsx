import { VolumeX, Music } from 'lucide-react';

interface FloatingAudioProps {
  isPlaying: boolean;
  onToggle: () => void;
  error?: string | null;
}

export function FloatingAudio({ isPlaying, onToggle, error }: FloatingAudioProps) {
  return (
    <div className="fixed top-5 right-5 sm:top-6 sm:right-6 z-50 select-none">
      <button
        onClick={onToggle}
        type="button"
        title={error ? `Audio: ${error}` : isPlaying ? 'Pause Kalyanam Vybhogam Music' : 'Play Kalyanam Vybhogam Music'}
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
        className={`group relative flex items-center gap-2 px-3.5 py-2 rounded-full border-2 transition-all duration-300 shadow-xl cursor-pointer ${
          isPlaying
            ? 'bg-[#5c0f1c] border-[#dbaa3e] text-[#fce8b8] shadow-[0_0_15px_rgba(219,170,62,0.4)]'
            : 'bg-[#fcf8f0] border-[#c4942e] text-[#7d1727] hover:bg-[#5c0f1c] hover:text-[#fce8b8]'
        }`}
      >
        {isPlaying ? (
          <>
            {/* Animated sound bars */}
            <div className="flex items-center gap-0.5 h-4 w-4 justify-center">
              <span className="w-0.5 bg-[#fce8b8] rounded-full sound-bar-1" />
              <span className="w-0.5 bg-[#dbaa3e] rounded-full sound-bar-2" />
              <span className="w-0.5 bg-[#fce8b8] rounded-full sound-bar-3" />
            </div>
            <span className="text-[11px] font-royal font-semibold tracking-wider uppercase hidden sm:inline">
              Music On
            </span>
          </>
        ) : (
          <>
            {error ? (
              <VolumeX className="w-4 h-4 text-[#961d31]" />
            ) : (
              <Music className="w-4 h-4 text-[#7d1727] group-hover:text-[#fce8b8] transition-colors" />
            )}
            <span className="text-[11px] font-royal font-semibold tracking-wider uppercase hidden sm:inline">
              {error ? 'Audio Err' : 'Play Music'}
            </span>
          </>
        )}
      </button>
    </div>
  );
}
