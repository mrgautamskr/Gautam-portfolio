import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import VideoBackground from './components/VideoBackground';
import Security from './components/Security'; // ✅ NEW

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      background: '#0A0A0A'
    }}>
      {/* Security Protection — sabse upar */}
      <Security />

      <VideoBackground />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Gallery />
        <Contact />
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;