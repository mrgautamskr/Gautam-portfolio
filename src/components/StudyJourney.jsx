import { GraduationCap, BookOpen, Code, Layers, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function StudyJourney() {
  const stages = [
    { year: '2026 – Present', title: 'BSc 1st Year', desc: 'Mathematics & Statistics', icon: GraduationCap },
    { year: 'Learning', title: 'Foundations', desc: 'Statistics, Mathematics, Data Analysis', icon: BookOpen },
    { year: 'Practicing', title: 'Hands-on Practice', desc: 'Python, SQL, Data Visualization', icon: Code },
    { year: 'Building', title: 'Projects', desc: 'Real World Skills, Problem Solving', icon: Layers },
    { year: 'Goal', title: 'Future', desc: 'Become a Data Analyst', icon: Target },
  ];

  const currentFocus = [
    'Improve Data Analysis Skills',
    'Build More Real Projects',
    'Learn Advanced Statistics',
    'Explore Machine Learning',
    'Prepare for Future Opportunities',
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="journey" style={{ padding: '80px 40px', borderTop: '1px solid #e0e0e0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            06. <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#e0e0e0' }} />
          </p>
          <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', marginBottom: '8px' }}>My Study Journey</h2>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '40px' }}>
            My academic path, goals and learning progress.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '40px' }}>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
            {stages.map((s, i) => (
              <motion.div
                key={i}
                variants={item}
                style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', paddingBottom: '32px', position: 'relative' }}
              >
                <div style={{
                  width: '40px', height: '40px', minWidth: '40px', borderRadius: '50%',
                  border: '2px solid #e0e0e0', background: '#fff', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', zIndex: 2, transition: 'all 0.3s ease'
                }}>
                  <s.icon size={16} />
                </div>
                {i < stages.length - 1 && (
                  <div style={{
                    position: 'absolute', left: '19px', top: '40px', bottom: 0,
                    width: '2px', background: '#e0e0e0'
                  }} />
                )}
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: '600', color: '#888', letterSpacing: '0.05em' }}>{s.year}</span>
                  <h3 style={{ fontFamily: 'serif', fontSize: '1.1rem', fontWeight: '700', margin: '4px 0' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: '1.6' }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.3}>
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', padding: '28px 24px', background: '#fafafa' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: '700', marginBottom: '20px' }}>
                Current Focus <Target size={18} />
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {currentFocus.map((item, i) => (
                  <li key={i} style={{
                    fontSize: '0.8rem', color: '#555', display: 'flex', alignItems: 'center', gap: '10px', lineHeight: '1.5'
                  }}>
                    <span style={{ color: '#111', fontSize: '0.6rem' }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}