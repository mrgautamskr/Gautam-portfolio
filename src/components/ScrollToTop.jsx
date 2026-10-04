import React, { useState, useEffect } from 'react';
import { HiChevronUp } from 'react-icons/hi';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: 100,
        right: '1.5rem',
        width: 46,
        height: 46,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #DC2626, #B91C1C)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(220,38,38,0.4)',
        zIndex: 300,
        transition: 'all 0.3s ease',
        animation: 'scaleIn 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(220,38,38,0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(220,38,38,0.4)';
      }}
    >
      <HiChevronUp size={22} />
    </button>
  );
}