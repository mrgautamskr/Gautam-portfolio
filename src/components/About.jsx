import { GraduationCap, MapPin, Languages, Briefcase, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function About() {
  const labels = [
    { icon: GraduationCap, text: 'Student' },
    { icon: MapPin, text: 'India' },
    { icon: Languages, text: 'English, Hindi, Japanese, Assamese, Bengali' },
    { icon: Briefcase, text: 'Data Analyst (Aspiring)' },
    { icon: FolderOpen, text: 'Open to opportunities' },
  ];

  return (
    <section id="about" style={{ padding: '80px 40px', borderTop: '1px solid #e0e0e0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            07. <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#e0e0e0' }} />
          </p>
          <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', marginBottom: '8px' }}>About Me</h2>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '40px' }}>
            A little more about myself.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '48px', alignItems: 'start' }}>
          <Reveal>
            <img
  src="/images/portrait1.png"
  alt="Gautam Sarkar"
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top center',
    borderRadius: '4px'
  }}
  onError={(e) => {
    e.target.style.display = 'none';
    e.target.parentElement.style.display = 'flex';
    e.target.parentElement.style.alignItems = 'center';
    e.target.parentElement.style.justifyContent = 'center';
    e.target.parentElement.style.color = '#888';
    e.target.parentElement.textContent = '📷 Add photo to public/images/portrait.png';
  }}
/>
          </Reveal>

          <Reveal delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.8' }}>
                Hi, I'm Gautam Sarkar, a BSc Mathematics and Statistics student with an interest in data, problem-solving, and technology. I enjoy learning new things, building practical projects, and exploring how data can create real-world impact. My goal is to develop strong analytical skills and work on meaningful projects that solve real problems.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {labels.map((label) => (
                  <div key={label.text} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '8px 16px', border: '1px solid #e0e0e0', borderRadius: '4px',
                    fontSize: '0.75rem', fontWeight: '500', background: '#fafafa', color: '#555'
                  }}>
                    <label.icon size={14} />
                    <span>{label.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}