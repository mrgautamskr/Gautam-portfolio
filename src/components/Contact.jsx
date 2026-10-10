import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xqpeblbo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio Contact',
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I will get back to you soon.' 
        });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: 'Something went wrong. Please try again later.' 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please check your internet connection.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'kngautam0p@gmail.com', 
      link: 'mailto:kngautam0p@gmail.com' 
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+91 75759 86650', 
      link: 'tel:+917575986650' 
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Bongaigaon, Assam, India, 783383', 
      link: null 
    },
    { 
      icon: Clock, 
      label: 'Availability', 
      value: 'Open to opportunities', 
      link: null 
    },
  ];

  return (
    <section id="contact" style={{ padding: '80px 40px', borderTop: '1px solid #e0e0e0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            08. <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#e0e0e0' }} />
          </p>
          <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', marginBottom: '8px' }}>Get in Touch</h2>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '40px' }}>
            Let's talk about ideas, opportunities or collaborations.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '48px', alignItems: 'start' }}>
          <Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {contactInfo.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '40px', height: '40px', minWidth: '40px', border: '1px solid #e0e0e0',
                    borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fafafa'
                  }}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', color: '#888', marginBottom: '4px' }}>{item.label}</span>
                    {item.link ? (
                      <a href={item.link} style={{ fontSize: '0.85rem', color: '#111', textDecoration: 'none', transition: 'color 0.2s' }}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.85rem' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '6px' }}>Name *</label>
                  <input 
                    type="text" 
                    value={form.name} 
                    onChange={(e) => setForm({...form, name: e.target.value})} 
                    style={{ width: '100%', padding: '12px 14px', border: '1px solid #e0e0e0', borderRadius: '4px', fontSize: '0.85rem', outline: 'none' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '6px' }}>Email *</label>
                  <input 
                    type="email" 
                    value={form.email} 
                    onChange={(e) => setForm({...form, email: e.target.value})} 
                    style={{ width: '100%', padding: '12px 14px', border: '1px solid #e0e0e0', borderRadius: '4px', fontSize: '0.85rem', outline: 'none' }} 
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '6px' }}>Subject</label>
                <input 
                  type="text" 
                  value={form.subject} 
                  onChange={(e) => setForm({...form, subject: e.target.value})} 
                  style={{ width: '100%', padding: '12px 14px', border: '1px solid #e0e0e0', borderRadius: '4px', fontSize: '0.85rem', outline: 'none' }} 
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '6px' }}>Message *</label>
                <textarea 
                  rows={5} 
                  value={form.message} 
                  onChange={(e) => setForm({...form, message: e.target.value})} 
                  style={{ width: '100%', padding: '12px 14px', border: '1px solid #e0e0e0', borderRadius: '4px', fontSize: '0.85rem', outline: 'none', resize: 'vertical' }} 
                />
              </div>

              {status && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px',
                  borderRadius: '4px', fontSize: '0.8rem', 
                  background: status.type === 'success' ? '#e8f8f0' : (status.type === 'error' ? '#fde8e8' : '#fff8e1'), 
                  color: status.type === 'success' ? '#1a7a4c' : (status.type === 'error' ? '#c53030' : '#856404'), 
                  border: `1px solid ${status.type === 'success' ? '#b8f0d8' : (status.type === 'error' ? '#f5c6cb' : '#ffeaa7')}`
                }}>
                  {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                  <span>{status.message}</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 32px',
                  fontSize: '0.8rem', fontWeight: '500', 
                  background: isSubmitting ? '#555' : '#111', 
                  color: '#fff', border: 'none', borderRadius: '4px', 
                  cursor: isSubmitting ? 'not-allowed' : 'pointer', 
                  alignSelf: 'flex-start', transition: 'all 0.2s ease',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send size={14} /> Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}