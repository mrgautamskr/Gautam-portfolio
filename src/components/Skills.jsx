import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/skills';

function SkillRing({ skill, index }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.percentage / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setAnimated(true), index * 120); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} style={{
      textAlign: 'center',
      opacity: animated ? 1 : 0,
      transform: animated ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s ease'
    }}>
      <div style={{ position: 'relative', width: 110, height: 110, margin: '0 auto' }}>
        <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
          <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="7" />
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke={skill.color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={animated ? offset : circumference}
            style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
        </svg>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          fontSize: '1.15rem',
          color: '#F9FAFB',
          textShadow: '0 2px 6px rgba(0,0,0,0.5)'
        }}>
          {skill.percentage}%
        </div>
      </div>
      <div style={{
        marginTop: '0.75rem',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '0.9rem',
        color: '#E5E7EB',
        textShadow: '0 1px 4px rgba(0,0,0,0.5)'
      }}>
        {skill.name}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="glass-card" style={{ padding: '2.5rem' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem'
          }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              <span className="red-dot" /> My Skills
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
                e.currentTarget.style.borderColor = 'rgba(250,204,21,0.9)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(250,204,21,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(250,204,21,0.5)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              View All
            </button>
          </div>

          <h3 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            fontWeight: 700,
            marginBottom: '2rem',
            color: '#F9FAFB',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)'
          }}>
            Skills That <span style={{ color: '#DC2626' }}>Power My Journey</span>
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '2rem' }}>
            {skills.map((skill, i) => <SkillRing key={i} skill={skill} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}