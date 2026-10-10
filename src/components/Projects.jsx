import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function Projects() {
  const projects = [
    {
      name: 'College Schedule',
      desc: 'College schedule manager with history, notifications and related student productivity features.',
      tech: ['React', 'Supabase', 'Vite'],
      thumbnail: '/projects/college-schedule.png',
      demo: 'https://college-schedule-snowy.vercel.app/',
      github: 'https://github.com/mrgautamskr/college-schedule'
    },
    {
      name: 'Finora Finance',
      desc: 'Personal expense tracking application concept for managing income, expenses, budgets, and monthly financial analytics.',
      tech: ['React', 'Supabase', 'Vite'],
      thumbnail: '/projects/finora-finance.png',
      demo: 'https://finora-five-eta.vercel.app/',
      github: 'https://github.com/mrgautamskr/Finora'
    },
    {
      name: 'More Projects',
      desc: 'Exciting new web development and data analysis projects are currently in progress and will be added here soon.',
      tech: ['Coming Soon'],
      thumbnail: '',
      demo: '',
      github: 'https://github.com/mrgautamskr'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const item = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const tagColors = {
    React: { bg: '#e8f4f8', color: '#2d8cf0', border: '#b8ddf0' },
    Supabase: { bg: '#e8f8f0', color: '#3ecf8e', border: '#b8f0d8' },
    Vite: { bg: '#f0edff', color: '#646cff', border: '#d0ccff' },
    'Coming Soon': { bg: '#f5f5f5', color: '#888', border: '#e0e0e0' },
  };

  return (
    <section id="projects" style={{ padding: '80px 40px', borderTop: '1px solid #e0e0e0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                03. <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#e0e0e0' }} />
              </p>
              <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', marginBottom: '8px' }}>My Works</h2>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888' }}>
                Some of my projects, websites and important works.
              </p>
            </div>
            <div style={{ maxWidth: '320px' }}>
              <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.7' }}>
                Here are some of the projects I have built or worked on. Each project is a step in my learning journey towards becoming a better Data Analyst and Developer.
              </p>
            </div>
          </div>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}
        >
          {projects.map((p) => (
            <motion.article
              key={p.name}
              variants={item}
              whileHover={{ y: -8, boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}
              style={{ border: '1px solid #e0e0e0', borderRadius: '4px', overflow: 'hidden', background: '#fff' }}
            >
              {/* Cover Image */}
              <div style={{ height: '180px', background: '#fafafa', overflow: 'hidden', position: 'relative' }}>
                {p.thumbnail ? (
                  <img
                    src={p.thumbnail}
                    alt={`${p.name} screenshot`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => { e.target.style.transform = 'scale(1.08)'; }}
                    onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.display = 'flex';
                      e.target.parentElement.style.alignItems = 'center';
                      e.target.parentElement.style.justifyContent = 'center';
                      e.target.parentElement.style.color = '#888';
                      e.target.parentElement.style.fontSize = '0.8rem';
                      e.target.parentElement.textContent = p.name;
                    }}
                  />
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#888', fontSize: '0.8rem' }}>
                    {p.name}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontFamily: 'serif', fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>{p.name}</h3>
                <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: '1.6', marginBottom: '12px' }}>{p.desc}</p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {p.tech.map((t) => {
                    const colors = tagColors[t] || { bg: '#fafafa', color: '#555', border: '#e0e0e0' };
                    return (
                      <span key={t} style={{
                        padding: '4px 14px',
                        fontSize: '0.7rem',
                        fontWeight: '500',
                        borderRadius: '20px',
                        border: `1px solid ${colors.border}`,
                        background: colors.bg,
                        color: colors.color,
                        transition: 'all 0.2s ease'
                      }}>{t}</span>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '6px 16px', fontSize: '0.72rem', fontWeight: '500',
                      background: '#111', color: '#fff', borderRadius: '4px',
                      textDecoration: 'none', transition: 'all 0.2s ease'
                    }}>
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '6px 16px', fontSize: '0.72rem', fontWeight: '500',
                    background: 'transparent', color: '#111',
                    border: '1px solid #111', borderRadius: '4px',
                    textDecoration: 'none', transition: 'all 0.2s ease'
                  }}>
                    <Github size={13} /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}