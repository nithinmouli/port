import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true);
  const [bootSequence, setBootSequence] = useState(1);
  
  // Simulate a terminal boot sequence
  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setBootSequence(2);
      setTimeout(() => {
        setBootSequence(3);
        setTimeout(() => {
          setBootSequence(4);
          setTimeout(() => {
            setBootSequence(5);
            setTimeout(() => {
              setLoading(false);
            }, 600);
          }, 500);
        }, 600);
      }, 600);
    }, 800);
    
    return () => clearTimeout(bootTimer);
  }, []);
  
  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {});
      });
    };
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-term-bg text-term-text font-mono flex items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <div className="terminal-button bg-red-500"></div>
                <div className="terminal-button bg-yellow-500"></div>
                <div className="terminal-button bg-green-500"></div>
              </div>
              <div className="terminal-title">bash - nithinmouli@portfolio:~</div>
            </div>
            <div className="terminal-content pt-10 relative">
              <div className="scanline"></div>
              {bootSequence >= 1 && (
                <div className="command-input">
                  <span className="command-prompt">nithinmouli@portfolio:~$</span>
                  <span className="ml-2">sudo start portfolio_service</span>
                </div>
              )}
              {bootSequence >= 2 && (
                <div className="command-output">
                  <span>[sudo] password for nithinmouli: ********</span><br/>
                  <span>Initializing portfolio service...</span><br/>
                  <span className="text-term-warning">Checking dependencies... OK</span>
                </div>
              )}
              {bootSequence >= 3 && (
                <div className="command-output">
                  <span className="text-term-accent">Loading modules...</span><br/>
                  <span>hero.module ............ OK</span><br/>
                  <span>about.module ........... OK</span><br/>
                  <span>projects.module ........ OK</span><br/>
                  <span>skills.module .......... OK</span><br/>
                  <span>achievements.module .... OK</span><br/>
                  <span>education.module ....... OK</span><br/>
                  <span>contact.module ......... OK</span>
                </div>
              )}
              {bootSequence >= 4 && (
                <div className="command-output mt-2">
                  <span>Starting portfolio service on port 3000...</span><br/>
                  <span className="text-term-accent">Establishing connection...</span>
                </div>
              )}
              {bootSequence >= 5 && (
                <div className="command-output mt-2">
                  <span className="text-term-accent">[SUCCESS]</span> Portfolio service started successfully!<br/>
                  <span className="text-term-prompt">Redirecting to main interface in 1 second...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-term-bg text-term-text font-mono">
      <div className="scanline"></div>
      <div className="terminal-noise"></div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
      <div className="fixed bottom-2 right-2 text-xs text-term-comment">
        Last logged in: <span className="text-term-text">2025-05-02 16:17:44</span>
      </div>
    </div>
  )
}

export default App