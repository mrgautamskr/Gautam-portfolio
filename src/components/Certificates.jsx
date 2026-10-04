import React from 'react';
import { certificates } from '../data/certificates';
import { HiDocumentText } from 'react-icons/hi';

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding">
      <div className="container">
        <div className="glass-card" style={{ padding: '2.5rem' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem'
          }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              <span className="red-dot" /> My Certificates
            </h2>
            <button style={{
              padding: '0.4rem 1rem',
              border: '1.5px solid rgba(250,204,21,0.5)',
              borderRadius: '9999px',
              background: 'rgba(255,255,255,0.08)',
              color: '#F9FAFB',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Inter, sans-serif',
              backdropFilter: 'blur(10px)'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(250,204,21,0.2)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(250,204,21,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              View All
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                width: 220, height: 220,
                background: 'radial-gradient(circle, rgba(254,226,226,0.25) 0%, transparent 70%)',
                borderRadius: '50%',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)'
              }} />
              <div style={{
                position: 'relative',
                width: 200, height: 200,
                background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '5rem',
                boxShadow: '0 12px 40px rgba(220,38,38,0.4)',
                border: '4px solid rgba(255,255,255,0.15)',
                animation: 'float 4s ease-in-out infinite'
              }}>
                🎓
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certificates.map((cert, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.25rem',
                  border: '1.5px solid rgba(250,204,21,0.3)',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(250,204,21,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(250,204,21,0.7)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(250,204,21,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(250,204,21,0.3)';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: 42, height: 42,
                    background: 'rgba(250,204,21,0.15)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#FCD34D',
                    flexShrink: 0,
                    border: '1px solid rgba(250,204,21,0.3)'
                  }}>
                    <HiDocumentText size={20} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontWeight: 600, fontSize: '0.9rem',
                      color: '#F9FAFB', marginBottom: '0.15rem',
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      textShadow: '0 1px 3px rgba(0,0,0,0.5)'
                    }}>
                      {cert.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#D1D5DB', fontWeight: 500 }}>
                      {cert.provider}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '0.8rem', fontWeight: 600,
                    color: '#FCD34D', whiteSpace: 'nowrap',
                    padding: '0.25rem 0.6rem',
                    background: 'rgba(250,204,21,0.12)',
                    borderRadius: '9999px',
                    border: '1px solid rgba(250,204,21,0.3)'
                  }}>
                    {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}