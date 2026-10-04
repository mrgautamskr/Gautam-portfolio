import React, { useState, useEffect, useRef } from 'react';

export default function VideoBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.warn('⚠️ Autoplay blocked:', err);
        videoRef.current.muted = true;
        videoRef.current.play().catch(e => console.error('Still failed:', e));
      });
    }
  }, [videoLoaded]);

  if (isMobile) {
    return (
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 0,
        background: 'linear-gradient(180deg, #0f0505 0%, #0A0A0A 50%, #0a0505 100%)'
      }}>
        <div style={{
          position: 'absolute',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          top: -150, right: -150
        }} />
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw', height: '100vh',
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      background: '#0A0A0A'
    }}>
      {/* Video Element - CLEAR & VISIBLE */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => {
          console.log('✅ Video loaded successfully');
          setVideoLoaded(true);
        }}
        onError={(e) => {
          console.error('❌ Video error:', e);
          setVideoError(true);
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          opacity: videoLoaded ? 0.75 : 0, // ✅ Increased from 0.45 to 0.75
          transition: 'opacity 1s ease',
          filter: 'grayscale(15%) contrast(1.2) brightness(1.1)' // ✅ Less grayscale, more brightness
        }}
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      {/* Loading indicator */}
      {!videoLoaded && !videoError && (
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'rgba(250,204,21,0.6)',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          zIndex: 5
        }}>
          Loading video...
        </div>
      )}

      {/* Error fallback */}
      {videoError && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(180deg, #0f0505 0%, #0A0A0A 50%, #0a0505 100%)',
          zIndex: 1
        }} />
      )}

      {/* Dark overlay - LIGHTER for better visibility */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(180deg, rgba(10,5,5,0.5) 0%, rgba(10,10,10,0.55) 50%, rgba(10,5,5,0.5) 100%)', // ✅ Reduced from 0.75-0.82 to 0.5-0.55
        zIndex: 2
      }} />

      {/* Red glow accents */}
      <div style={{
        position: 'absolute',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        top: -150, right: -150,
        zIndex: 3,
        animation: 'float 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        bottom: -100, left: -100,
        zIndex: 3,
        animation: 'float 10s ease-in-out infinite 2s'
      }} />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        backgroundImage: `
          linear-gradient(rgba(250,204,21,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(250,204,21,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        zIndex: 3
      }} />
    </div>
  );
}