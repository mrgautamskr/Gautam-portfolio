import { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const categories = ['All', 'Images', 'Videos', 'College', 'Projects', 'Personal'];

  const galleryItems = [
    { id: 1, type: 'image', category: 'Personal', title: 'Portrait', src: '/gallery/portrait-1.jpg' },
    { id: 2, type: 'image', category: 'Personal', title: 'Casual', src: '/gallery/casual.jpg' },
    { id: 3, type: 'image', category: 'College', title: 'Campus Life', src: '/gallery/campus.jpg' },
    { id: 4, type: 'image', category: 'Projects', title: 'Coding Session', src: '/gallery/coding.jpg' },
    { id: 5, type: 'image', category: 'Personal', title: 'City View', src: '/gallery/city.jpg' },
    { id: 6, type: 'image', category: 'Personal', title: 'Sunset', src: '/gallery/sunset.jpg' },
    { 
      id: 7, 
      type: 'video', 
      category: 'Projects', 
      title: 'Project Demo', 
      src: '/gallery/project-demo.mp4', 
      thumbnail: '/gallery/project-demo-thumb.jpg',
      duration: '0:24' 
    },
    { id: 8, type: 'image', category: 'Projects', title: 'Code Editor', src: '/gallery/code-editor.jpg' },
    { id: 9, type: 'image', category: 'College', title: 'Study Notes', src: '/gallery/notes.jpg' },
    { id: 10, type: 'image', category: 'Personal', title: 'Nature', src: '/gallery/nature.jpg' },
    { id: 11, type: 'image', category: 'Personal', title: 'Mountains', src: '/gallery/mountains.jpg' },
    { id: 12, type: 'image', category: 'Personal', title: 'Full Portrait', src: '/gallery/full-portrait.jpg' },
  ];

  const filtered = activeFilter === 'All'
    ? galleryItems
    : activeFilter === 'Images' ? galleryItems.filter(i => i.type === 'image')
    : activeFilter === 'Videos' ? galleryItems.filter(i => i.type === 'video')
    : galleryItems.filter(i => i.category === activeFilter);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const item = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const openLightbox = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);

  const goNext = () => {
    if (!lightbox) return;
    const currentIndex = filtered.findIndex(i => i.id === lightbox.id);
    const nextIndex = (currentIndex + 1) % filtered.length;
    setLightbox(filtered[nextIndex]);
  };

  const goPrev = () => {
    if (!lightbox) return;
    const currentIndex = filtered.findIndex(i => i.id === lightbox.id);
    const prevIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    setLightbox(filtered[prevIndex]);
  };

  return (
    <section id="gallery" style={{ padding: '80px 40px', borderTop: '1px solid #e0e0e0', minWidth: '1280px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                05. <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#e0e0e0' }} />
              </p>
              <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', marginBottom: '8px' }}>Gallery</h2>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888' }}>
                Some of my images, videos and moments.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveFilter(cat)} 
                  style={{
                    padding: '6px 18px', 
                    fontSize: '0.72rem', 
                    border: '1px solid #e0e0e0',
                    borderRadius: '20px', 
                    background: activeFilter === cat ? '#111' : 'transparent',
                    color: activeFilter === cat ? '#fff' : '#555', 
                    cursor: 'pointer', 
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}
        >
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              variants={item}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}
              onClick={() => openLightbox(item)}
              style={{
                aspectRatio: '1', 
                border: '1px solid #e0e0e0', 
                borderRadius: '4px',
                background: '#fafafa', 
                cursor: 'pointer', 
                position: 'relative', 
                overflow: 'hidden'
              }}
            >
              {item.type === 'video' ? (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div style="display:flex;align-items:center;justify-content:center;height:100%;color:#888;font-size:0.75rem;text-align:center;padding:10px;">
                        ${item.title}
                      </div>
                    `;
                  }}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div style="display:flex;align-items:center;justify-content:center;height:100%;color:#888;font-size:0.75rem;text-align:center;padding:10px;">
                        ${item.title}
                      </div>
                    `;
                  }}
                />
              )}
              
              {item.type === 'video' && (
                <div style={{
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  width: '44px', 
                  height: '44px', 
                  background: 'rgba(0,0,0,0.6)', 
                  borderRadius: '50%',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#fff',
                  pointerEvents: 'none'
                }}>
                  <Play size={20} fill="white" />
                </div>
              )}
              
              {item.duration && (
                <span style={{
                  position: 'absolute', 
                  bottom: '8px', 
                  right: '8px',
                  background: 'rgba(0,0,0,0.7)', 
                  color: '#fff', 
                  fontSize: '0.6rem',
                  padding: '2px 6px', 
                  borderRadius: '3px',
                  pointerEvents: 'none'
                }}>
                  {item.duration}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#888' }}>
            <p style={{ fontSize: '1rem' }}>No items found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(0,0,0,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <button 
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                color: '#fff',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px'
              }}
            >
              <X size={24} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#fff',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#fff',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronRight size={24} />
            </button>

            <div 
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              {lightbox.type === 'video' ? (
                <video
                  src={lightbox.src}
                  controls
                  autoPlay
                  style={{
                    maxWidth: '100%',
                    maxHeight: '75vh',
                    borderRadius: '4px'
                  }}
                />
              ) : (
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '75vh',
                    objectFit: 'contain',
                    borderRadius: '4px'
                  }}
                />
              )}
              <div style={{ color: '#fff', fontSize: '0.9rem', textAlign: 'center' }}>
                <span style={{ fontWeight: '600' }}>{lightbox.title}</span>
                <span style={{ opacity: 0.6, marginLeft: '12px', fontSize: '0.8rem' }}>{lightbox.category}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}