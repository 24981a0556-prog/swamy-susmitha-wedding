import { useState, useEffect, useRef, useCallback } from 'react';

interface AudioControls {
  play: () => Promise<void>;
  toggle: () => void;
  isPlaying: boolean;
  hasAudio: boolean;
  error: string | null;
}

export function useAudio(src: string | null): AudioControls {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!src) {
      setError('No audio source provided.');
      return;
    }

    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handlePlay = () => {
      setIsPlaying(true);
      setError(null);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleError = () => {
      const err = audio.error;
      const msg = err
        ? `Audio error code ${err.code}: ${err.message}`
        : 'Failed to load audio track.';
      console.error('Audio playback error:', msg);
      setError(msg);
      setIsPlaying(false);
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [src]);

  const play = useCallback(async () => {
    if (!audioRef.current) {
      console.warn('Audio element not ready.');
      return;
    }
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err: unknown) {
      const e = err as Error;
      console.warn('Audio autoplay/play was blocked by browser or failed:', e.message);
      // If browser blocked it or interaction needed
      setError(e.message);
    }
  }, []);

  const toggle = useCallback(() => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setError(null);
      }).catch((err) => {
        setError(err.message);
      });
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  return { play, toggle, isPlaying, hasAudio: !!src, error };
}
