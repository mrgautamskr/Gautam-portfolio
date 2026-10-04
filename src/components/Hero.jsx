import React from 'react';
import { HiDownload, HiMail } from 'react-icons/hi';
import { personalInfo } from '../data/personal';

export default function Hero() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Kirti-CV.pdf';
    link.download = 'Kirti_CV.pdf';
    link.click();
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 0 4rem 0',
        overflow: 'hidden'
      }}
    >
      {/* Floating Decorations */}
      <div style={{
        position: 'absolute',
        width: 80, height: 80,
        border: '2px solid rgba(220,38,38,0.15)',
        borderRadius: '50%',
        top: '15%', left: '8%',
        animation: 'float 6s ease-in-out infinite',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        width: 40, height: 40,
        border: '2px solid rgba(220,38,38,0.12)',
        borderRadius: '8px',
        top: '25%', right: '12%',
        transform: 'rotate(45deg)',
        animation: 'float 5s ease-in-out infinite 1s',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        width: 8, height: 8,
        background: 'rgba(220,38,38,0.3)',
        borderRadius: '50%',
        bottom: '30%', left: '15%',
        animation: 'pulse 3s ease-in-out infinite',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {/* LEFT: DP Circle */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            minHeight: '400px'
          }}>
            {/* DP Container — sab kuch iske andar centered */}
            <div style={{
              position: 'relative',
              width: '320px',
              height: '320px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Soft pink-red radial glow — sabse peeche */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, #FECACA 0%, #FEE2E2 35%, #FECDD3 55%, rgba(254,202,202,0.3) 75%, transparent 90%)',
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

              {/* DP Image Circle */}
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
                  src="/assets/dp.jpg"
                  alt="Kirti"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `
                      <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:6rem;background:linear-gradient(135deg,#DC2626,#B91C1C);">
                        ‍💻
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Floating code snippet */}
              <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                background: 'rgba(10,10,10,0.85)',
                color: '#10B981',
                padding: '0.4rem 0.7rem',
                borderRadius: '8px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                fontWeight: 600,
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                border: '1px solid rgba(250,204,21,0.3)',
                animation: 'float 3s ease-in-out infinite 1s',
                zIndex: 3,
                backdropFilter: 'blur(10px)',
                whiteSpace: 'nowrap'
              }}>
                {'<Data />'}
              </div>

              {/* Small floating dot */}
              <div style={{
                position: 'absolute',
                top: '15%',
                left: '5%',
                width: 10, height: 10,
                background: 'rgba(220,38,38,0.7)',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite',
                zIndex: 3
              }} />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            {/* Available badge */}
            {personalInfo.available && (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                background: 'rgba(254,226,226,0.15)',
                color: '#FCA5A5',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 500,
                border: '1px solid rgba(220,38,38,0.3)',
                marginBottom: '1.25rem',
                backdropFilter: 'blur(10px)'
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#DC2626',
                  animation: 'pulse 2s ease-in-out infinite',
                  boxShadow: '0 0 8px rgba(220,38,38,0.6)',
                  display: 'inline-block'
                }} />
                Available for work
              </div>
            )}

            {/* Title */}
            <h1 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              color: '#F9FAFB',
              lineHeight: 1.15,
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em'
            }}>
              Hi, I'm{' '}
              <span style={{ color: '#DC2626' }}>
                {personalInfo.name}
              </span>
            </h1>

            {/* Tagline */}
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
              color: '#DC2626',
              fontWeight: 500,
              marginBottom: '1.25rem'
            }}>
              {personalInfo.tagline}
            </p>

            {/* Description */}
            <p style={{
              fontSize: '0.95rem',
              color: '#D1D5DB',
              lineHeight: 1.7,
              maxWidth: '500px',
              marginBottom: '1.75rem'
            }}>
              {personalInfo.description}
            </p>

            {/* Stats */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              {personalInfo.stats.map((stat, i) => (
                <div key={i} style={{ textAlign: 'center', minWidth: '80px' }}>
                  <div style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 800,
                    color: '#F9FAFB',
                    lineHeight: 1
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#9CA3AF',
                    marginTop: '0.35rem',
                    fontWeight: 500
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={downloadCV}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.75rem',
                  background: 'linear-gradient(135deg, #DC2626, #B91C1C)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(220,38,38,0.4)',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Inter, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(220,38,38,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(220,38,38,0.4)';
                }}
              >
                <HiDownload size={18} /> Download CV
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.75rem',
                  background: 'transparent',
                  color: '#DC2626',
                  border: '2px solid #DC2626',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Inter, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#DC2626';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#DC2626';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <HiMail size={18} /> Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          #home > div > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #home > div > div > div:last-child {
            align-items: center !important;
          }
          #home > div > div > div:last-child p {
            max-width: 100% !important;
          }
          #home > div > div > div:first-child {
            min-height: 300px !important;
          }
          #home > div > div > div:first-child > div {
            width: 250px !important;
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
}