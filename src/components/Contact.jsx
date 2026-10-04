import React, { useState } from 'react';
import { HiUser, HiMail, HiChat, HiPaperAirplane } from 'react-icons/hi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const inputBase = {
    width: '100%',
    padding: '0.9rem 1rem 0.9rem 2.75rem',
    border: '1.5px solid rgba(250,204,21,0.35)',
    borderRadius: '12px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.9rem',
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(10px)',
    color: '#F9FAFB',
    outline: 'none',
    transition: 'all 0.3s ease'
  };

  const InputField = ({ icon: Icon, name, type, placeholder, value, onChange }) => (
    <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
      <Icon style={{
        position: 'absolute', left: 14, top: '50%',
        transform: 'translateY(-50%)',
        color: focused === name ? '#FCD34D' : '#9CA3AF',
        fontSize: 18, transition: 'color 0.3s ease',
        pointerEvents: 'none'
      }} />
      <input
        type={type} name={name} placeholder={placeholder}
        value={value} onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
        style={{
          ...inputBase,
          borderColor: focused === name ? 'rgba(250,204,21,0.8)' : 'rgba(250,204,21,0.35)',
          boxShadow: focused === name ? '0 0 0 3px rgba(250,204,21,0.15), 0 0 15px rgba(250,204,21,0.2)' : 'none'
        }}
        required
      />
    </div>
  );

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="glass-card" style={{ padding: '2.5rem' }}>
          <h2 className="section-title">
            <span className="red-dot" /> Get In Touch
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem', alignItems: 'start'
          }}>
            <div>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700, marginBottom: '0.75rem',
                color: '#F9FAFB', lineHeight: 1.2,
                textShadow: '0 2px 8px rgba(0,0,0,0.5)'
              }}>
                Let's Work <span style={{ color: '#DC2626' }}>Together</span>
              </h3>
              <p style={{
                color: '#D1D5DB', lineHeight: 1.7,
                marginBottom: '1.5rem', fontSize: '0.95rem',
                textShadow: '0 1px 4px rgba(0,0,0,0.5)'
              }}>
                Have a project idea, job opportunity or just want to say hi?
                Feel free to reach out! I'll try my best to reply soon!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(250,204,21,0.08)',
                  borderRadius: '12px',
                  border: '1px solid rgba(250,204,21,0.25)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{
                    width: 36, height: 36,
                    background: 'linear-gradient(135deg, #DC2626, #B91C1C)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', flexShrink: 0,
                    boxShadow: '0 0 12px rgba(220,38,38,0.4)'
                  }}>
                    <HiMail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#D1D5DB', fontWeight: 500 }}>Email</div>
                    <div style={{ fontSize: '0.9rem', color: '#F9FAFB', fontWeight: 600 }}>kngautam0p@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <InputField icon={HiUser} name="name" type="text" placeholder="Your Name"
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <InputField icon={HiMail} name="email" type="email" placeholder="Your Email"
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>

              <div style={{ position: 'relative' }}>
                <HiChat style={{
                  position: 'absolute', left: 14, top: 16,
                  color: focused === 'message' ? '#FCD34D' : '#9CA3AF',
                  fontSize: 18, transition: 'color 0.3s ease',
                  pointerEvents: 'none'
                }} />
                <textarea
                  name="message" placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  style={{
                    ...inputBase, minHeight: 130, resize: 'vertical', paddingTop: '0.9rem',
                    borderColor: focused === 'message' ? 'rgba(250,204,21,0.8)' : 'rgba(250,204,21,0.35)',
                    boxShadow: focused === 'message' ? '0 0 0 3px rgba(250,204,21,0.15), 0 0 15px rgba(250,204,21,0.2)' : 'none'
                  }}
                />
              </div>

              <button type="submit" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: '0.5rem', padding: '0.9rem 1.75rem',
                background: submitted
                  ? 'linear-gradient(135deg, #10B981, #047857)'
                  : 'linear-gradient(135deg, #DC2626, #B91C1C)',
                color: 'white', border: 'none', borderRadius: '9999px',
                fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer',
                boxShadow: submitted
                  ? '0 0 20px rgba(16,185,129,0.4)'
                  : '0 0 20px rgba(220,38,38,0.4)',
                transition: 'all 0.3s ease',
                fontFamily: 'Inter, sans-serif',
                alignSelf: 'flex-start'
              }}
                onMouseEnter={(e) => {
                  if (!submitted) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(220,38,38,0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = submitted
                    ? '0 0 20px rgba(16,185,129,0.4)'
                    : '0 0 20px rgba(220,38,38,0.4)';
                }}
              >
                <HiPaperAirplane size={18} />
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}