import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #e0e0e0' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px', padding: '0 40px', maxWidth: '1280px', margin: '0 auto'
      }}>
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} style={{
          display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#111'
        }}>
          <div style={{
            width: '32px', height: '32px', background: '#111', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'serif', fontSize: '0.75rem', fontWeight: '700', borderRadius: '2px'
          }}>GS</div>
          <span style={{ fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            GAUTAM SARKAR
          </span>
        </a>

        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }} style={{
                fontSize: '0.75rem', fontWeight: '500', letterSpacing: '0.06em',
                textTransform: 'uppercase', color: activeSection === link.href.slice(1) ? '#111' : '#555',
                textDecoration: 'none', borderBottom: activeSection === link.href.slice(1) ? '1.5px solid #111' : 'none',
                paddingBottom: '4px', transition: 'all 0.2s ease'
              }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/resume/resume.pdf" download style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 18px',
          fontSize: '0.7rem', fontWeight: '500', background: '#111', color: '#fff',
          borderRadius: '4px', textDecoration: 'none'
        }}>
          <Download size={14} />
          Download Resume
        </a>

        <button onClick={() => setIsOpen(!isOpen)} style={{
          display: 'none', padding: '8px', color: '#111',
          border: '1px solid #e0e0e0', borderRadius: '4px', alignItems: 'center', justifyContent: 'center'
        }}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </motion.nav>
  );
}