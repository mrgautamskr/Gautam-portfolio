import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HiX, HiPlay, HiPhotograph, HiVideoCamera } from 'react-icons/hi';

const galleryItems = [
  { id: 1, type: 'image', src: '/assets/image1.jpg', title: 'Project Screenshot 1', category: 'Work' },
  { id: 2, type: 'image', src: '/assets/image2.jpg', title: 'Project Screenshot 2', category: 'Design' },
  { id: 3, type: 'image', src: '/assets/image3.jpg', title: 'Project Screenshot 3', category: 'Work' },
  { id: 4, type: 'image', src: '/assets/image4.jpg', title: 'Project Screenshot 4', category: 'Design' },
  { id: 5, type: 'video', src: '/assets/video1.mp4', title: 'Demo Video 1', category: 'Demo' },
  { id: 6, type: 'video', src: '/assets/video2.mp4', title: 'Demo Video 2', category: 'Demo' },
  { id: 7, type: 'video', src: '/assets/video3.mp4', title: 'Demo Video 3', category: 'Tutorial' },
  { id: 8, type: 'video', src: '/assets/video4.mp4', title: 'Demo Video 4', category: 'Tutorial' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const videoRefs = useRef({});
  const canvasRefs = useRef({});
  const animationRefs = useRef({});

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const filteredItems = galleryItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'images') return item.type === 'image';
    if (filter === 'videos') return item.type === 'video';
    return true;
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedItem]);

  useEffect(() => {
    return () => {
      Object.values(animationRefs.current).forEach(id => {
        if (id) cancelAnimationFrame(id);
      });
      animationRefs.current = {};
    };
  }, [filter]);

  const startCanvasAnimation = useCallback((itemId) => {
    const videoEl = videoRefs.current[itemId];
    const canvasEl = canvasRefs.current[itemId];
    if (!videoEl || !canvasEl) return;

    const ctx = canvasEl.getContext('2d');
    let running = true;

    const drawFrame = () => {
      if (!running) return;
      if (videoEl.readyState >= 2 && videoEl.videoWidth > 0) {
        canvasEl.width = videoEl.videoWidth;
        canvasEl.height = videoEl.videoHeight;
        ctx.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height);
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('© Kirti Portfolio', 10, canvasEl.height - 10);
      }
      animationRefs.current[itemId] = requestAnimationFrame(drawFrame);
    };

    if (animationRefs.current[itemId]) {
      cancelAnimationFrame(animationRefs.current[itemId]);
    }
    drawFrame();
  }, []);

  const stopCanvasAnimation = useCallback((itemId) => {
    if (animationRefs.current[itemId]) {
      cancelAnimationFrame(animationRefs.current[itemId]);
      animationRefs.current[itemId] = null;
    }
    const videoEl = videoRefs.current[itemId];
    if (videoEl) {
      videoEl.pause();
      videoEl.currentTime = 0;
    }
  }, []);

  const handleCardEnter = (item) => {
    setHoveredId(item.id);
    if (item.type === 'video') {
      const video = videoRefs.current[item.id];
      if (video) {
        video.play().catch(() => {});
        startCanvasAnimation(item.id);
      }
    }
  };

  const handleCardLeave = (item) => {
    setHoveredId(null);
    if (item.type === 'video') {
      stopCanvasAnimation(item.id);
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All', icon: null, count: galleryItems.length },
    { id: 'images', label: 'Images', icon: HiPhotograph, count: galleryItems.filter(i => i.type === 'image').length },
    { id: 'videos', label: 'Videos', icon: HiVideoCamera, count: galleryItems.filter(i => i.type === 'video').length },
  ];

  return (
    <section id="gallery" className="section-padding">
      <div className="container">
        <div className="glass-card" style={{ padding: '2.5rem' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem'
          }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              <span className="red-dot" /> My Gallery
            </h2>
            <span style={{
              fontSize: '0.85rem', color: '#FCD34D', fontWeight: 600,
              background: 'rgba(250,204,21,0.1)', padding: '0.4rem 1rem',
              borderRadius: '9999px', border: '1px solid rgba(250,204,21,0.3)'
            }}>
              🔒 Protected Content
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.6rem 1.25rem',
                    border: `1.5px solid ${isActive ? 'rgba(250,204,21,0.8)' : 'rgba(250,204,21,0.3)'}`,
                    borderRadius: '9999px',
                    background: isActive ? 'rgba(250,204,21,0.2)' : 'rgba(255,255,255,0.05)',
                    color: isActive ? '#FCD34D' : '#D1D5DB',
                    fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
                    transition: 'all 0.3s ease', fontFamily: 'Inter, sans-serif',
                    backdropFilter: 'blur(10px)',
                    boxShadow: isActive ? '0 0 15px rgba(250,204,21,0.3)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(250,204,21,0.1)';
                      e.currentTarget.style.borderColor = 'rgba(250,204,21,0.6)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(250,204,21,0.3)';
                    }
                  }}
                >
                  {Icon && <Icon size={16} />}
                  {tab.label}
                  <span style={{ fontSize: '0.7rem', opacity: 0.7, marginLeft: '0.25rem' }}>
                    ({tab.count})
                  </span>
                </button>
              );
            })}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredItems.map((item, i) => {
              const isHovered = hoveredId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  onMouseEnter={() => handleCardEnter(item)}
                  onMouseLeave={() => handleCardLeave(item)}
                  style={{
                    position: 'relative',
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(15px)',
                    border: '1.5px solid rgba(250,204,21,0.35)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                    boxShadow: isHovered
                      ? '0 0 30px rgba(250,204,21,0.3), 0 12px 32px rgba(0,0,0,0.3)'
                      : '0 0 15px rgba(250,204,21,0.1)',
                    aspectRatio: '16/10',
                    animation: `fadeInUp 0.5s ease ${i * 0.08}s both`,
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                    borderColor: isHovered ? 'rgba(250,204,21,0.7)' : 'rgba(250,204,21,0.35)'
                  }}
                >
                  {item.type === 'image' ? (
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <img
                        src={item.src}
                        alt={item.title}
                        draggable="false"
                        style={{
                          width: '100%', height: '100%', objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                          pointerEvents: 'none'
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement;
                          if (fallback && !fallback.querySelector('.fallback')) {
                            const div = document.createElement('div');
                            div.className = 'fallback';
                            div.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#DC2626,#B91C1C);color:white;font-size:3rem;';
                            div.textContent = '🖼️';
                            fallback.appendChild(div);
                          }
                        }}
                      />
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'auto' }} />
                    </div>
                  ) : (
                    <div style={{
                      width: '100%', height: '100%',
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                      position: 'relative', overflow: 'hidden'
                    }}>
                      <video
                        ref={(el) => {
                          if (el) videoRefs.current[item.id] = el;
                          else delete videoRefs.current[item.id];
                        }}
                        src={item.src}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        style={{
                          position: 'absolute', top: 0, left: 0,
                          width: '100%', height: '100%',
                          objectFit: 'cover', opacity: 0.4, filter: 'blur(1px)'
                        }}
                      />
                      <canvas
                        ref={(el) => {
                          if (el) canvasRefs.current[item.id] = el;
                          else delete canvasRefs.current[item.id];
                        }}
                        style={{
                          position: 'absolute', top: 0, left: 0,
                          width: '100%', height: '100%',
                          objectFit: 'cover', zIndex: 1, pointerEvents: 'none'
                        }}
                      />
                      <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        background: 'linear-gradient(135deg, rgba(220,38,38,0.3), rgba(139,92,246,0.3))',
                        zIndex: 2, transition: 'opacity 0.3s ease',
                        opacity: isHovered ? 0.5 : 1
                      }} />
                      <div style={{
                        position: 'absolute', top: '50%', left: '50%',
                        width: 60, height: 60, borderRadius: '50%',
                        background: 'rgba(250,204,21,0.9)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 0 30px rgba(250,204,21,0.5)',
                        zIndex: 3,
                        animation: !isHovered ? 'pulse 2s ease-in-out infinite' : 'none',
                        transform: `translate(-50%, -50%) ${isHovered ? 'scale(0.8)' : 'scale(1)'}`,
                        transition: 'transform 0.3s ease'
                      }}>
                        <HiPlay size={28} color="#0A0A0A" />
                      </div>
                      <span style={{
                        position: 'absolute', top: 10, right: 10,
                        background: 'rgba(220,38,38,0.9)', color: 'white',
                        padding: '0.25rem 0.6rem', borderRadius: '8px',
                        fontSize: '0.65rem', fontWeight: 700,
                        zIndex: 4, letterSpacing: '0.05em'
                      }}>🔒 DRM</span>
                      <span style={{
                        position: 'absolute', bottom: 10, right: 10,
                        background: 'rgba(0,0,0,0.7)', color: '#FCD34D',
                        padding: '0.25rem 0.6rem', borderRadius: '8px',
                        fontSize: '0.7rem', fontWeight: 600, zIndex: 4
                      }}>🎬 VIDEO</span>
                    </div>
                  )}

                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '1rem',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.95))',
                    transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'transform 0.3s ease', zIndex: 5, pointerEvents: 'none'
                  }}>
                    <h4 style={{
                      fontFamily: 'Poppins, sans-serif', fontWeight: 700,
                      fontSize: '0.95rem', color: '#F9FAFB', marginBottom: '0.25rem'
                    }}>{item.title}</h4>
                    <span style={{ fontSize: '0.75rem', color: '#FCD34D', fontWeight: 600 }}>
                      {item.category} • {item.type === 'image' ? '📸' : '🎬'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#9CA3AF' }}>
              No items found
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)',
            zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem', animation: 'fadeInUp 0.3s ease'
          }}
        >
          <button
            onClick={() => setSelectedItem(null)}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(250,204,21,0.2)',
              border: '1.5px solid rgba(250,204,21,0.5)',
              color: '#FCD34D', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.3s ease', zIndex: 1001
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(250,204,21,0.3)';
              e.currentTarget.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(250,204,21,0.2)';
              e.currentTarget.style.transform = 'rotate(0)';
            }}
          >
            <HiX size={22} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '900px', width: '100%', maxHeight: '85vh', position: 'relative' }}
          >
            {selectedItem.type === 'image' ? (
              <div style={{ position: 'relative' }}>
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  draggable="false"
                  style={{
                    width: '100%', maxHeight: '80vh', objectFit: 'contain',
                    borderRadius: '16px', border: '2px solid rgba(250,204,21,0.5)',
                    boxShadow: '0 0 40px rgba(250,204,21,0.3)', pointerEvents: 'none'
                  }}
                />
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  borderRadius: '16px', pointerEvents: 'auto'
                }} />
              </div>
            ) : (
              <div style={{
                position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#000', borderRadius: '16px',
                border: '2px solid rgba(250,204,21,0.5)',
                boxShadow: '0 0 40px rgba(250,204,21,0.3)',
                overflow: 'hidden', maxHeight: '85vh', width: '100%'
              }}>
                {/* ✅ DOWNLOAD BLOCKED VIDEO */}
                <video
                  src={selectedItem.src}
                  controls
                  controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                  disablePictureInPicture
                  autoPlay
                  playsInline
                  disableRemotePlayback
                  onContextMenu={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }}
                  style={{
                    maxWidth: '100%', maxHeight: '85vh',
                    width: 'auto', height: 'auto',
                    display: 'block', pointerEvents: 'auto',
                    objectFit: 'contain'
                  }}
                  onLoadedMetadata={(e) => {
                    const video = e.currentTarget;
                    const aspectRatio = video.videoWidth / video.videoHeight;
                    const container = video.parentElement;
                    if (aspectRatio < 1) {
                      container.style.maxWidth = '450px';
                      container.style.margin = '0 auto';
                    } else {
                      container.style.maxWidth = '900px';
                    }
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: 50, left: 20,
                  color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem',
                  fontWeight: 600, fontFamily: 'Arial, sans-serif',
                  pointerEvents: 'none', textShadow: '0 0 10px rgba(0,0,0,0.8)', zIndex: 10
                }}>
                  © Kirti Portfolio 2025 • Protected Content
                </div>
              </div>
            )}

            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif', fontSize: '1.25rem',
                fontWeight: 700, color: '#F9FAFB', marginBottom: '0.25rem'
              }}>{selectedItem.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#FCD34D', fontWeight: 600 }}>
                {selectedItem.category} • {selectedItem.type === 'image' ? '📸 Image' : '🎬 Video'} • 🔒 Protected
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
        }
        /* Hide download button in video controls */
        video::-webkit-media-controls-enclosure {
          overflow: hidden;
        }
        video::-webkit-media-controls-panel {
          width: calc(100% + 30px);
        }
        video::-internal-media-controls-download-button {
          display: none !important;
          visibility: hidden !important;
          pointer-events: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        video::-webkit-media-controls-overflow-button {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
