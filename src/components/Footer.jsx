import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem 1rem',
      borderTop: '1px solid rgba(220,38,38,0.15)',
      color: '#6B7280',
      fontSize: '0.85rem',
      fontFamily: 'Inter, sans-serif',
      background: 'rgba(10,10,10,0.5)'
    }}>
      <div className="container">
        <p>
          © {new Date().getFullYear()} Kirti. Made with{' '}
          <span style={{ color: '#DC2626', fontSize: '1rem' }}>❤</span>{' '}
          and lots of data.
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#4B5563' }}>
          BSc Mathematics • Data Analyst • Web Developer
        </p>
      </div>
    </footer>
  );
}