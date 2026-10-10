import { Code, Database, BarChart3, Zap, Monitor, GitBranch, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function Skills() {
  const groups = [
    { title: 'Programming', skills: ['Python', 'C/C++', 'JavaScript', 'SQL'] },
    { title: 'Data & Analysis', skills: ['Excel', 'Statistics', 'Pandas', 'NumPy'] },
    { title: 'Web Development', skills: ['HTML5', 'CSS3', 'React', 'Vite'] },
    { title: 'Tools & Others', skills: ['Git', 'GitHub', 'VS Code', 'Jupyter'] },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="skills" style={{ padding: '80px 40px', borderTop: '1px solid #e0e0e0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            04. <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#e0e0e0' }} />
          </p>
          <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', marginBottom: '8px' }}>My Skills</h2>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '40px' }}>
            Tools and Technologies I Work With.
          </p>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}
        >
          {groups.map((g) => (
            <motion.div
              key={g.title}
              variants={item}
              whileHover={{ y: -4, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              style={{ border: '1px solid #e0e0e0', borderRadius: '4px', padding: '24px 20px', background: '#fff' }}
            >
              <h3 style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '16px' }}>{g.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {g.skills.map((s) => (
                  <div key={s} style={{
                    padding: '10px 14px', border: '1px solid #e0e0e0', borderRadius: '4px',
                    background: '#fafafa', fontSize: '0.65rem', fontWeight: '500',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', minWidth: '64px'
                  }}>
                    <Code size={22} />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}