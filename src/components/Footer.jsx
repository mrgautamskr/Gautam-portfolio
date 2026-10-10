import { ArrowUp, Instagram, Facebook, Send, MessageCircle, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: Instagram, url: 'https://www.instagram.com/f_4_fairytale/' },
    { icon: Facebook, url: 'https://www.facebook.com/GautamSarkar786' },
    { icon: Send, url: 'https://t.me/GAUTAM786s' },
    { icon: MessageCircle, url: 'https://wa.me/917575986550' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/gautamsarkar786s/' },
    { icon: Github, url: 'https://github.com/mrgautamskr' },
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer style={{ borderTop: '1px solid #e0e0e0', padding: '48px 40px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '36px', height: '36px', background: '#111', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'serif', fontSize: '0.8rem', fontWeight: '700', borderRadius: '2px'
              }}>GS</div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>GAUTAM SARKAR</span>
                <p style={{ fontSize: '0.7rem', color: '#888', marginTop: '2px' }}>Turning data into meaningful insights.</p>
              </div>
            </div>

            <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} style={{
                  fontSize: '0.72rem', fontWeight: '500', color: '#555', textDecoration: 'none', transition: 'color 0.2s ease'
                }}>{link.label}</a>
              ))}
            </nav>

            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{
                  width: '34px', height: '34px', border: '1px solid #e0e0e0', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid #e0e0e0', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ fontSize: '0.7rem', color: '#888' }}>© {year} Gautam Sarkar. All rights reserved.</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px',
              fontSize: '0.72rem', border: '1px solid #e0e0e0', borderRadius: '4px', cursor: 'pointer', color: '#555',
              transition: 'all 0.2s ease'
            }}>
              <ArrowUp size={14} /> Back to Top
            </button>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}