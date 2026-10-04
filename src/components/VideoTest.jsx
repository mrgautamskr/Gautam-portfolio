import React from 'react';

export default function VideoTest() {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%', height: '100%',
      zIndex: 9999,
      background: '#000'
    }}>
      <h1 style={{ color: 'white', padding: '20px' }}>Video Test</h1>
      
      <video
        autoPlay
        loop
        muted
        playsInline
        controls
        style={{
          width: '80%',
          maxWidth: '800px',
          border: '2px solid red'
        }}
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <p style={{ color: 'yellow', padding: '20px' }}>
        Agar video dikh rahi hai to file sahi hai. Nahi dikh rahi to file galat jagah pe hai.
      </p>
    </div>
  );
}