import React, { useState, useEffect } from 'react';
import { HiHome, HiUser, HiCode, HiBadgeCheck, HiLightBulb, HiMail, HiMenu, HiX, HiPhotograph } from 'react-icons/hi';

const navItems = [
  { id: 'home', label: 'Home', icon: HiHome },
  { id: 'about', label: 'About', icon: HiUser },
  { id: 'skills', label: 'Skills', icon: HiCode },
  { id: 'certificates', label: 'Certificates', icon: HiBadgeCheck },
  { id: 'projects', label: 'Projects', icon: HiLightBulb },
  { id: 'gallery', label: 'Gallery', icon: HiPhotograph }, // ✅ ADD THIS
  { id: 'contact', label: 'Contact', icon: HiMail },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const handleClick = (id) => {
    setActive(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActive(navItems[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Navbar */}
      {!isMobile && (
        <nav style={{
          position: 'sticky',
          top: '1.5rem',
          zIndex: 200,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 1rem',
          marginBottom: '1rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
            borderRadius: '9999px',
            padding: '0.4rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            boxShadow: '0 8px 30px rgba(220,38,38,0.35)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2px',
                    padding: '0.5rem 1rem',
                    borderRadius: '14px',
                    color: isActive ? 'white' : 'rgba(255,255,255,0.75)',
                    background: isActive ? 'rgba(255,255,255,0.2)' : 'transparent',
                    border: 'none',
                    fontSize: '0.7rem',
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif',
                    minWidth: 64
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                    }
                  }}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}

      {/* Mobile Hamburger Button */}
      {isMobile && (
        <button
          onClick={() => setMobileOpen(true)}
          style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            zIndex: 500,
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'rgba(220,38,38,0.95)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(220,38,38,0.4)',
            backdropFilter: 'blur(10px)'
          }}
          aria-label="Open menu"
        >
          <HiMenu size={22} />
        </button>
      )}

      {/* Mobile Full-Screen Overlay */}
      {isMobile && mobileOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(10,10,10,0.97)',
          backdropFilter: 'blur(20px)',
          zIndex: 400,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          animation: 'fadeInUp 0.3s ease'
        }}>
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Close menu"
          >
            <HiX size={22} />
          </button>

          <div style={{
            width: 60,
            height: 4,
            background: '#DC2626',
            borderRadius: 2,
            marginBottom: '2rem'
          }} />

          {navItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 2rem',
                  background: isActive ? 'rgba(220,38,38,0.15)' : 'transparent',
                  border: isActive ? '1px solid rgba(220,38,38,0.3)' : '1px solid transparent',
                  borderRadius: '16px',
                  color: isActive ? '#DC2626' : 'white',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Poppins, sans-serif',
                  minWidth: 220,
                  animation: `fadeInUp 0.4s ease ${i * 0.08}s both`
                }}
              >
                <Icon size={22} />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div style={{
            marginTop: '2rem',
            padding: '1rem 2rem',
            background: 'rgba(220,38,38,0.1)',
            borderRadius: '16px',
            border: '1px solid rgba(220,38,38,0.2)',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.85rem',
            fontFamily: 'Inter, sans-serif'
          }}>
            Kirti Portfolio © 2025
          </div>
        </div>
      )}
    </>
  );
}