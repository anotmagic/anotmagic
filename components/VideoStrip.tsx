'use client';

import { useEffect, useRef, useState } from 'react';

type VideoStripProps = {
  src: string;
  poster: string;
  aspectRatio: string; // e.g. "1920/584"
  ariaLabel: string;
};

export default function VideoStrip({ src, poster, aspectRatio, ariaLabel }: VideoStripProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setPlaying(false);
      return;
    }

    // Autoplay can still be blocked by some browsers/embedded webviews even
    // when muted — fall back to a visible play button rather than a dead strip.
    video.play().catch(() => {
      setPlaying(false);
      setAutoplayBlocked(true);
    });
  }, []);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play().catch(() => {});
      setPlaying(true);
      setAutoplayBlocked(false);
    }
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <div className="relative w-full bg-[#0a1a20] overflow-hidden" style={{ aspectRatio }}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        aria-label={ariaLabel}
      />

      {autoplayBlocked && (
        <button
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center bg-[#10262e]/40 hover:bg-[#10262e]/55 transition-colors"
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90 text-[#10262e]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}

      <div className="absolute bottom-3 right-3 flex gap-2">
        <button
          onClick={togglePlay}
          aria-label={playing ? 'Pause video' : 'Play video'}
          className="w-9 h-9 flex items-center justify-center bg-[#10262e]/70 hover:bg-[#10262e]/90 text-white transition-colors backdrop-blur-sm"
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <button
          onClick={toggleMute}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          className="w-9 h-9 flex items-center justify-center bg-[#10262e]/70 hover:bg-[#10262e]/90 text-white transition-colors backdrop-blur-sm"
        >
          {muted ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.2l2.45 2.45c.03-.21.05-.43.05-.65zm2.5 0a6.97 6.97 0 0 1-1.79 4.68l1.42 1.42A8.94 8.94 0 0 0 21 12a8.94 8.94 0 0 0-2.87-6.6l-1.42 1.42A6.97 6.97 0 0 1 19 12zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
