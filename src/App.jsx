import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import StudyJourney from './components/StudyJourney';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Security from './components/Security';

export default function App() {
  return (
    <div>
      <Security />
      <Navbar />
      <main>
        <Hero />
        <SocialLinks />
        <Projects />
        <Skills />
        <Gallery />
        <StudyJourney />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}