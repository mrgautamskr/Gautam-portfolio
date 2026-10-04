import React, { useEffect, useState, useRef } from 'react';

export default function Security() {
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);
  const canvasRefs = useRef([]);

  const showWarningToast = (msg) => {
    setWarningMessage(msg);
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 2500);
  };

  useEffect(() => {
    // ============================================
    // 1. RIGHT-CLICK DISABLE
    // ============================================
    const handleContextMenu = (e) => {
      e.preventDefault();
      showWarningToast(' Right-click disabled');
      return false;
    };

    // ============================================
    // 2. KEYBOARD SHORTCUTS BLOCK
    // ============================================
    const handleKeyDown = (e) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        e.stopPropagation();
        showWarningToast('🚫 DevTools blocked');
        return false;
      }

      // Ctrl+Shift+I/J/C
      if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        showWarningToast(' Inspect blocked');
        return false;
      }

      // Ctrl+U (View Source)
      if (e.ctrlKey && ['U', 'u'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        showWarningToast(' View Source blocked');
        return false;
      }

      // Ctrl+S (Save)
      if (e.ctrlKey && ['S', 's'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        showWarningToast('🚫 Save blocked');
        return false;
      }

      // Ctrl+P (Print)
      if (e.ctrlKey && ['P', 'p'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        showWarningToast('🚫 Print blocked');
        return false;
      }

      // Ctrl+A (Select All)
      if (e.ctrlKey && ['A', 'a'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        showWarningToast('🚫 Select All blocked');
        return false;
      }

      // Ctrl+C (Copy) - allow in inputs
      if (e.ctrlKey && ['C', 'c'].includes(e.key)) {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          e.stopPropagation();
          showWarningToast('🚫 Copy blocked');
        }
      }

      // PrintScreen
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText('');
        showWarningToast('🚫 Screenshot blocked');
        return false;
      }

      // Meta+Shift+3/4 (Mac screenshot)
      if (e.metaKey && e.shiftKey && ['3', '4'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        showWarningToast('🚫 Mac screenshot blocked');
        return false;
      }

      // Win+Shift+S (Windows Snip)
      if (e.metaKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        e.stopPropagation();
        showWarningToast(' Snip blocked');
        return false;
      }
    };

    // ============================================
    // 3. COPY/CUT/DROP BLOCK
    // ============================================
    const handleCopy = (e) => {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        e.clipboardData.setData('text/plain', '');
        showWarningToast('🚫 Copy blocked');
      }
    };

    const handleCut = (e) => {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
      }
    };

    const handleDrop = (e) => {
      e.preventDefault();
    };

    // ============================================
    // 4. DRAG BLOCK ON IMAGES/VIDEOS
    // ============================================
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO' || e.target.tagName === 'CANVAS') {
        e.preventDefault();
      }
    };

    // ============================================
    // 5. SCREEN RECORDING DETECTION (MediaStream)
    // ============================================
    const originalGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = async function(constraints) {
      if (constraints.video) {
        setIsRecording(true);
        showWarningToast('🚫 Screen recording detected!');
        // Return black stream
        const canvas = document.createElement('canvas');
        canvas.width = 1920;
        canvas.height = 1080;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 1920, 1080);
        
        const stream = canvas.captureStream(30);
        // Keep filling black
        const interval = setInterval(() => {
          ctx.fillStyle = '#000000';
          ctx.fillRect(0, 0, 1920, 1080);
        }, 100);
        
        stream.getVideoTracks()[0].onended = () => {
          clearInterval(interval);
          setIsRecording(false);
        };
        
        return stream;
      }
      return originalGetUserMedia(constraints);
    };

    // ============================================
    // 6. DISPLAY CAPTURE DETECTION
    // ============================================
    const originalGetDisplayMedia = navigator.mediaDevices.getDisplayMedia?.bind(navigator.mediaDevices);
    if (navigator.mediaDevices.getDisplayMedia) {
      navigator.mediaDevices.getDisplayMedia = async function(constraints) {
        setIsRecording(true);
        showWarningToast('🚫 Screen share detected!');
        
        const canvas = document.createElement('canvas');
        canvas.width = 1920;
        canvas.height = 1080;
        const ctx = canvas.getContext('2d');
        
        const stream = canvas.captureStream(30);
        const interval = setInterval(() => {
          ctx.fillStyle = '#0A0A0A';
          ctx.fillRect(0, 0, 1920, 1080);
          ctx.fillStyle = '#DC2626';
          ctx.font = 'bold 48px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(' RECORDING BLOCKED', 960, 540);
        }, 100);
        
        stream.getVideoTracks()[0].onended = () => {
          clearInterval(interval);
          setIsRecording(false);
        };
        
        return stream;
      };
    }

    // ============================================
    // 7. DEVTOOLS DETECTION (Multiple methods)
    // ============================================
    const detectDevTools = () => {
      // Method 1: Window size difference
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      
      if (widthThreshold || heightThreshold) {
        setIsDevToolsOpen(true);
      } else {
        setIsDevToolsOpen(false);
      }

      // Method 2: Debugger timing
      const start = performance.now();
      debugger;
      const end = performance.now();
      if (end - start > 100) {
        setIsDevToolsOpen(true);
      }
    };

    // ============================================
    // 8. VISIBILITY CHANGE (Screenshot tool detection)
    // ============================================
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User switched tabs or opened screenshot tool
        document.body.style.filter = 'blur(20px) brightness(0.3)';
      } else {
        document.body.style.filter = '';
      }
    };

    // ============================================
    // 9. PROTECT IMAGES WITH CANVAS
    // ============================================
    const protectImagesWithCanvas = () => {
      const images = document.querySelectorAll('img:not(.protected)');
      images.forEach((img) => {
        img.classList.add('protected');
        img.setAttribute('draggable', 'false');
        
        // Create canvas overlay
        const canvas = document.createElement('canvas');
        const rect = img.getBoundingClientRect();
        canvas.width = rect.width || 300;
        canvas.height = rect.height || 300;
        canvas.style.position = 'absolute';
        canvas.style.top = img.offsetTop + 'px';
        canvas.style.left = img.offsetLeft + 'px';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '10';
        
        const ctx = canvas.getContext('2d');
        try {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          // Add subtle watermark
          ctx.fillStyle = 'rgba(255,255,255,0.03)';
          ctx.font = '12px Arial';
          ctx.fillText('© Kirti', 10, canvas.height - 10);
        } catch (e) {
          // Cross-origin image, skip
        }
        
        img.parentElement.style.position = 'relative';
        img.parentElement.appendChild(canvas);
      });
    };

    // ============================================
    // 10. IFRAME EMBED BLOCK
    // ============================================
    if (window.top !== window.self) {
      window.top.location = window.self.location;
    }

    // ============================================
    // ATTACH ALL LISTENERS
    // ============================================
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('drop', handleDrop);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const devToolsInterval = setInterval(detectDevTools, 1000);
    const imageProtectInterval = setInterval(protectImagesWithCanvas, 3000);
    
    setTimeout(protectImagesWithCanvas, 500);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('drop', handleDrop);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(devToolsInterval);
      clearInterval(imageProtectInterval);
      
      // Restore getUserMedia
      navigator.mediaDevices.getUserMedia = originalGetUserMedia;
    };
  }, []);

  return (
    <>
      {/* Warning Toast */}
      {showWarning && (
        <div style={{
          position: 'fixed',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(135deg, #DC2626, #991B1B)',
          color: 'white',
          padding: '0.85rem 1.5rem',
          borderRadius: '12px',
          fontSize: '0.9rem',
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif',
          zIndex: 100000,
          boxShadow: '0 8px 30px rgba(220,38,38,0.6)',
          animation: 'slideDown 0.3s ease',
          border: '1px solid rgba(250,204,21,0.5)',
          backdropFilter: 'blur(10px)'
        }}>
          {warningMessage}
        </div>
      )}

      {/* Recording Overlay - BLACK SCREEN */}
      {isRecording && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: '#000000',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1rem',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{ fontSize: '4rem' }}>🚫</div>
          <h2 style={{
            color: '#DC2626',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '2rem',
            fontWeight: 700,
            textAlign: 'center'
          }}>
            Recording Blocked
          </h2>
          <p style={{
            color: '#9CA3AF',
            fontSize: '1rem',
            textAlign: 'center',
            maxWidth: '400px'
          }}>
            Screen recording is not allowed on this website
          </p>
        </div>
      )}

      {/* DevTools Open Overlay */}
      {isDevToolsOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(10,10,10,0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 99998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1rem',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{ fontSize: '4rem' }}>⚠️</div>
          <h2 style={{
            color: '#DC2626',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '2rem',
            fontWeight: 700
          }}>
            Developer Tools Detected
          </h2>
          <p style={{
            color: '#9CA3AF',
            fontSize: '1rem',
            textAlign: 'center',
            maxWidth: '400px'
          }}>
            Please close DevTools to view this website
          </p>
        </div>
      )}

      {/* Invisible Watermark Pattern */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        pointerEvents: 'none',
        zIndex: 9997,
        opacity: 0.02,
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 100px,
          rgba(255,255,255,0.3) 100px,
          rgba(255,255,255,0.3) 101px
        )`,
        userSelect: 'none'
      }} />

      {/* Visible Watermark */}
      <div style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        color: 'rgba(255,255,255,0.12)',
        fontSize: '0.7rem',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        zIndex: 9997,
        pointerEvents: 'none',
        userSelect: 'none',
        letterSpacing: '0.05em'
      }}>
        © Kirti Portfolio 2025
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        * {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
        }
        
        input, textarea {
          -webkit-user-select: text !important;
          user-select: text !important;
        }
        
        img {
          -webkit-user-drag: none !important;
          user-drag: none !important;
          pointer-events: none !important;
        }
        
        video {
          pointer-events: none !important;
        }
        
        video[controls] {
          pointer-events: auto !important;
        }

        canvas {
          pointer-events: none !important;
        }
      `}</style>
    </>
  );
}