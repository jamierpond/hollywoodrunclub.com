'use client';

import { useState, useEffect } from 'react';

type Props = {
  videoPlaceholder: string;
};

export default function HeroBackground({ videoPlaceholder }: Props) {
  const [loadState, setLoadState] = useState<'blur' | 'poster' | 'video'>('blur');

  useEffect(() => {
    const img = new Image();
    img.src = '/running-poster.webp';
    img.onload = () => {
      setLoadState((prev) => (prev === 'video' ? 'video' : 'poster'));
    };
  }, []);

  const handleVideoCanPlay = () => setLoadState('video');

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      {/* Blur placeholder */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${videoPlaceholder})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)',
          transform: 'scale(1.1)',
          opacity: loadState === 'blur' ? 1 : 0,
          transition: 'opacity 500ms',
        }}
      />
      {/* Poster */}
      <img
        src="/running-poster.webp"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(1.1)',
          filter: 'grayscale(100%) contrast(1.25) brightness(1.1)',
          opacity: loadState === 'poster' ? 1 : 0,
          transition: 'opacity 500ms',
        }}
      />
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={handleVideoCanPlay}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(1.1)',
          filter: 'grayscale(100%) contrast(1.25) brightness(1.1)',
          opacity: loadState === 'video' ? 1 : 0,
          transition: 'opacity 500ms',
        }}
      >
        <source src="/running.webm" type="video/webm" />
      </video>
      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255,255,255,0.6)' }} />
    </div>
  );
}
