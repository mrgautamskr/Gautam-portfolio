import React from 'react';
import { personalInfo } from '../data/personal';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const socials = [
  { icon: FaGithub, url: 'https://github.com/kirti', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/kirti', label: 'LinkedIn' },
  { icon: FaInstagram, url: 'https://instagram.com/kirti', label: 'Instagram' },
  { icon: HiOutlineMail, url: 'mailto:kirti@example.com', label: 'Email' },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="glass-card" style={{ padding: '2.5rem' }}>
          <h2 className="section-title">
            <span className="red-dot" />
            About Me
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            {/* Text Content */}
            <div>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#F9FAFB',
                lineHeight: 1.3,
                textShadow: '0 2px 8px rgba(0,0,0,0.6)'
              }}>
                Turning Data Into{' '}
                <span style={{ color: '#DC2626' }}>Meaningful Insights</span>
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#E5E7EB',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                textShadow: '0 1px 4px rgba(0,0,0,0.5)'
              }}>
                {personalInfo.aboutText}
              </p>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {socials.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      style={{
                        width: 42, height: 42,
                        borderRadius: '50%',
                        border: '1.5px solid rgba(250,204,21,0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#F9FAFB',
                        background: 'rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 0 10px rgba(250,204,21,0.15)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#DC2626';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.borderColor = '#DC2626';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(220,38,38,0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.color = '#F9FAFB';
                        e.currentTarget.style.borderColor = 'rgba(250,204,21,0.4)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 0 10px rgba(250,204,21,0.15)';
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Image - about.jpg with glow */}
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{
                position: 'relative',
                width: '280px',
                height: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Soft pink-red radial glow background */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle, #FECACA 0%, #FEE2E2 30%, #FECDD3 50%, rgba(254,202,202,0.4) 70%, transparent 85%)',
                  borderRadius: '50%',
                  animation: 'float 6s ease-in-out infinite',
                  zIndex: 0
                }} />

                {/* Outer decorative ring */}
                <div style={{
                  position: 'absolute',
                  width: '90%',
                  height: '90%',
                  borderRadius: '50%',
                  border: '2px solid rgba(220,38,38,0.2)',
                  animation: 'float 6s ease-in-out infinite 0.5s',
                  zIndex: 1
                }} />

                {/* About Image Circle */}
                <div style={{
                  position: 'relative',
                  width: '80%',
                  height: '80%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid rgba(255,255,255,0.4)',
                  boxShadow: '0 0 40px rgba(220,38,38,0.3), 0 0 80px rgba(254,202,202,0.2)',
                  animation: 'float 4s ease-in-out infinite',
                  zIndex: 2,
                  background: 'linear-gradient(135deg, #FECACA, #FEE2E2)'
                }}>
                  <img
                    src="/assets/about.jpg"
                    alt="Kirti - About"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML = `
                        <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:5rem;background:linear-gradient(135deg,#DC2626,#B91C1C);">
                          🤔
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Lightbulb decoration */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  right: '5%',
                  fontSize: '2rem',
                  animation: 'float 3s ease-in-out infinite 1s',
                  zIndex: 3,
                  filter: 'drop-shadow(0 0 8px rgba(250,204,21,0.6))'
                }}>
                  💡
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}