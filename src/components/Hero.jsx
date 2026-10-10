import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" style={{
      padding: '100px 40px 40px', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          border: '1.5px solid #222', borderRadius: '2px', padding: '40px 48px 32px',
          maxWidth: '1280px', width: '100%', background: '#fff', position: 'relative'
        }}
      >
        {/* Top Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: '48px', flexWrap: 'wrap', gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '36px', height: '36px', background: '#111', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'serif', fontSize: '0.8rem', fontWeight: '700', borderRadius: '2px'
            }}>GS</div>
            <span style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              GAUTAM SARKAR
            </span>
          </div>
          <div style={{
            fontSize: '0.7rem', fontWeight: '500', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: '#555'
          }}>
            TURNING DATA INTO MEANINGFUL INSIGHTS.
          </div>
        </motion.div>

        {/* Main Content */}
        <div style={{
          position: 'relative', minHeight: '520px',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
              zIndex: 3, display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '240px'
            }}
          >
            <p style={{ fontSize: '0.82rem', color: '#555', lineHeight: '1.7' }}>
              A BSc Mathematics & Statistics student exploring the world through data, logic and curiosity.
            </p>
            <p style={{
              fontSize: '0.78rem', fontWeight: '500', letterSpacing: '0.1em',
              color: '#555', display: 'flex', alignItems: 'center', gap: '12px'
            }}>
              Aspiring Data Analyst
              <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#e0e0e0' }} />
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
              {['Mathematics', 'Statistics', 'Data Science'].map((s) => (
                <span key={s} style={{
                  padding: '4px 14px', fontSize: '0.68rem', fontWeight: '500',
                  border: '1px solid #e0e0e0', borderRadius: '20px', color: '#555', background: '#fff'
                }}>{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Background Name - MOVED UP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              position: 'absolute', left: '50%', top: '28%', transform: 'translate(-50%, -50%)',
              zIndex: 1, textAlign: 'center', pointerEvents: 'none', userSelect: 'none'
            }}
          >
            <span style={{
              fontFamily: 'serif', fontSize: 'clamp(5rem, 12vw, 10rem)', fontWeight: '900',
              color: '#111', letterSpacing: '0.1em', lineHeight: '0.9', whiteSpace: 'nowrap'
            }}>GAUTAM</span>
            <span style={{
              fontFamily: 'sans-serif', fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
              fontWeight: '600', letterSpacing: '0.5em', textTransform: 'uppercase',
              color: '#111', display: 'block', marginTop: '8px'
            }}>Sarkar</span>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              position: 'relative', zIndex: 2,
              display: 'flex', justifyContent: 'center', alignItems: 'flex-end'
            }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
              <img
                src="/images/portrait.png"
                alt="Gautam Sarkar"
                style={{
                  width: '100%', height: 'auto', maxHeight: '600px',
                  objectFit: 'contain', objectPosition: 'bottom center',
                  filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.15))'
                }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </motion.div>

          {/* Right Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
              zIndex: 3, display: 'flex', flexDirection: 'column', gap: '20px',
              alignItems: 'flex-end', maxWidth: '220px'
            }}
          >
            <p style={{
              fontFamily: 'cursive', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              color: '#111', lineHeight: '1'
            }}>Gautam Sarkar</p>
            <blockquote style={{
              fontSize: '0.82rem', color: '#555', lineHeight: '1.7',
              textAlign: 'right', fontStyle: 'italic'
            }}>
              <span style={{
                fontFamily: 'serif', fontSize: '2rem', color: '#e0e0e0',
                display: 'block', lineHeight: '1', marginBottom: '4px'
              }}>&ldquo;</span>
              Learn the rules. Understand the data. Build something better.
            </blockquote>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
            marginTop: '40px', color: '#888', fontSize: '0.65rem',
            letterSpacing: '0.15em', textTransform: 'uppercase'
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} />
          </motion.div>
          <span>Scroll Down</span>
        </motion.div>
      </motion.div>
    </section>
  );
}