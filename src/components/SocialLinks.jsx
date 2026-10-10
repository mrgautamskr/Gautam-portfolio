import { Instagram, Facebook, Send, MessageCircle, Linkedin, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function SocialLinks() {
  const socials = [
    { 
      name: 'Instagram', 
      username: '@f_4_fairytale', 
      desc: 'Follow my journey', 
      icon: Instagram, 
      color: '#E4405F', 
      url: 'https://www.instagram.com/f_4_fairytale/' 
    },
    { 
      name: 'Facebook', 
      username: 'GautamSarkar786', 
      desc: 'Connect with me', 
      icon: Facebook, 
      color: '#1877F2', 
      url: 'https://www.facebook.com/GautamSarkar786' 
    },
    { 
      name: 'Telegram', 
      username: '@GAUTAM786s', 
      desc: 'Message me', 
      icon: Send, 
      color: '#26A5E4', 
      url: 'https://t.me/GAUTAM786s' 
    },
    { 
      name: 'WhatsApp', 
      username: '+91 75759 86550', 
      desc: 'Quick chat', 
      icon: MessageCircle, 
      color: '#25D366', 
      url: 'https://wa.me/917575986550' 
    },
    { 
      name: 'LinkedIn', 
      username: 'gautamsarkar786s', 
      desc: 'Professional network', 
      icon: Linkedin, 
      color: '#0A66C2', 
      url: 'https://www.linkedin.com/in/gautamsarkar786s/' 
    },
    { 
      name: 'GitHub', 
      username: 'mrgautamskr', 
      desc: 'View my code', 
      icon: Github, 
      color: '#333', 
      url: 'https://github.com/mrgautamskr' 
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section style={{ padding: '80px 40px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                02. <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#e0e0e0' }} />
              </p>
              <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', marginBottom: '8px' }}>Connect with Me</h2>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888' }}>
                Let's Connect and Grow Together.
              </p>
            </div>
            <div style={{ maxWidth: '320px' }}>
              <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.7' }}>
                Feel free to connect with me on any platform. I'm always open to discussions, collaborations and new opportunities.
              </p>
            </div>
          </div>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}
        >
          {socials.map((s) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -8, boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center', padding: '28px 16px 20px',
                border: '1px solid #e0e0e0', borderRadius: '4px', background: '#fff',
                position: 'relative', textDecoration: 'none', color: '#111'
              }}
            >
              <s.icon size={28} style={{ color: s.color, marginBottom: '8px' }} />
              <h3 style={{ fontSize: '0.8rem', fontWeight: '600' }}>{s.name}</h3>
              <p style={{ fontSize: '0.7rem', color: '#555' }}>{s.username}</p>
              <p style={{ fontSize: '0.65rem', color: '#888', marginTop: '2px' }}>{s.desc}</p>
              <div style={{
                position: 'absolute', bottom: '12px', right: '12px',
                width: '28px', height: '28px', borderRadius: '50%',
                border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <ArrowRight size={14} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}