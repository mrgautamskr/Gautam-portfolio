import React from 'react';
import { projects } from '../data/projects';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const gradients = [
  'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
  'linear-gradient(135deg, #10B981 0%, #047857 100%)',
  'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="glass-card" style={{ padding: '2.5rem' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem'
          }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              <span className="red-dot" /> My Creative Projects
            </h2>
            <button style={{
              padding: '0.4rem 1rem',
              border: '1.5px solid rgba(250,204,21,0.5)',
              borderRadius: '9999px',
              background: 'rgba(255,255,255,0.08)',
              color: '#F9FAFB',
              fontSize: '0.8rem', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.3s ease',
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
            gap: '1.5rem'
          }}>
            {projects.map((project, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(15px)',
                border: '1.5px solid rgba(250,204,21,0.35)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 15px rgba(250,204,21,0.1)',
                display: 'flex', flexDirection: 'column'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(250,204,21,0.3), 0 12px 32px rgba(0,0,0,0.3)';
                  e.currentTarget.style.borderColor = 'rgba(250,204,21,0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(250,204,21,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(250,204,21,0.35)';
                }}
              >
                <div style={{
                  height: 180,
                  background: gradients[i % gradients.length],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '4rem', position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute', width: 100, height: 100,
                    border: '2px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%', top: -30, right: -30
                  }} />
                  <div style={{
                    position: 'absolute', width: 60, height: 60,
                    border: '2px solid rgba(255,255,255,0.15)',
                    borderRadius: '50%', bottom: -20, left: -20
                  }} />
                  <span style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}>
                    {project.emoji}
                  </span>
                </div>

                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{
                    fontFamily: 'Poppins, sans-serif', fontWeight: 700,
                    fontSize: '1.05rem', marginBottom: '0.5rem',
                    color: '#F9FAFB', textShadow: '0 2px 6px rgba(0,0,0,0.5)'
                  }}>
                    {project.title}
                  </h4>
                  <p style={{
                    fontSize: '0.85rem', color: '#D1D5DB',
                    lineHeight: 1.6, marginBottom: '1rem', flex: 1,
                    textShadow: '0 1px 3px rgba(0,0,0,0.4)'
                  }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                    {project.tags.map((tag, j) => (
                      <span key={j} style={{
                        padding: '0.25rem 0.65rem',
                        background: 'rgba(250,204,21,0.12)',
                        color: '#FCD34D',
                        borderRadius: '8px',
                        fontSize: '0.72rem', fontWeight: 600,
                        border: '1px solid rgba(250,204,21,0.3)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex', gap: '1rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(250,204,21,0.15)'
                  }}>
                    <a href={project.liveUrl} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      fontSize: '0.8rem', fontWeight: 600,
                      color: '#FCD34D', textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#FDE68A'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#FCD34D'}
                    >
                      <HiExternalLink size={14} /> Live Demo
                    </a>
                    <a href={project.githubUrl} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      fontSize: '0.8rem', fontWeight: 600,
                      color: '#D1D5DB', textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#FCD34D'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                    >
                      <HiCode size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}