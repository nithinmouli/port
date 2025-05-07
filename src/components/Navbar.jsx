import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [currentTime, setCurrentTime] = useState('2025-05-02 18:34:45');
  const [hoveredItem, setHoveredItem] = useState(null);

  // Using typewriter effect for terminal path
  const [text] = useTypewriter({
    words: ['cd /home/portfolio'],
    loop: 1,
    typeSpeed: 70,
    delaySpeed: 1500,
  });

  const navItems = [
    { name: '/about', href: '#about' },
    { name: '/projects', href: '#projects' },
    { name: '/skills', href: '#skills' },
    { name: '/achievements', href: '#achievements' },
    { name: '/education', href: '#education' },
    { name: '/contact', href: '#contact' },
  ];

  // Handle scroll events and update time
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
      
      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    // Update the time every second with the UTC time in the desired format
    const timeUpdater = setInterval(() => {
      const now = new Date();
      const year = now.getUTCFullYear();
      const month = String(now.getUTCMonth() + 1).padStart(2, '0');
      const day = String(now.getUTCDate()).padStart(2, '0');
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      
      setCurrentTime(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
    }, 1000);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeUpdater);
    };
  }, []);

  // Subtle sound effect for menu interactions
  const playHoverSound = () => {
    const audio = new Audio('/sounds/menu-hover.mp3');
    audio.volume = 0.1;
    audio.play().catch(e => console.log('Audio play prevented:', e));
  };

  const playClickSound = () => {
    const audio = new Audio('/sounds/menu-click.mp3');
    audio.volume = 0.2;
    audio.play().catch(e => console.log('Audio play prevented:', e));
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        sticky 
          ? 'bg-[#1a1a1a] border-b border-white/30 shadow-lg backdrop-blur-sm bg-opacity-90' 
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: sticky ? 'blur(4px)' : 'none',
      }}
    >
      <div className="w-full p-0" style={{ borderWidth: 0, borderRadius: 0 }}>
        <motion.div 
          className="flex items-center h-8 px-4 relative"
          style={{
            backgroundColor: 'rgba(30, 30, 30, 0.95)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex space-x-2 ml-4">
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-500"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              style={{ transition: 'all 0.2s ease' }}
            ></motion.div>
            <motion.div 
              className="w-3 h-3 rounded-full bg-yellow-500"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              style={{ transition: 'all 0.2s ease' }}
            ></motion.div>
            <motion.div 
              className="w-3 h-3 rounded-full bg-green-500"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              style={{ transition: 'all 0.2s ease' }}
            ></motion.div>
          </div>
          <div className="text-center text-xs absolute left-0 right-0 mx-auto w-max text-white opacity-80">
            bash - nithinmouli@portfolio:~
          </div>
          <div className="absolute right-4 text-xs text-white opacity-70">
            {currentTime} UTC
          </div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 py-2">
        <nav className="flex flex-wrap items-center justify-between">
          <motion.a 
            href="#home" 
            className="font-bold group"
            style={{
              fontFamily: 'monospace',
              textDecoration: 'none', // Remove underline
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={playClickSound}
          >
            <span className="group-hover:text-[#86efac] transition-colors duration-300"
                  style={{ 
                    color: '#4ade80',
                    textShadow: '0 0 8px rgba(74, 222, 128, 0.5)',
                    fontWeight: 'bold'
                  }}>
              nithinmouli@portfolio:~$
            </span> <span className="text-white">{text}</span>
            <Cursor cursorColor="#4ade80" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md transition-colors duration-300 relative`}
                style={{ 
                  color: activeSection === item.href.substring(1) ? '#4ade80' : 'white',
                  textShadow: activeSection === item.href.substring(1) ? '0 0 8px rgba(74, 222, 128, 0.5)' : 'none',
                  cursor: 'pointer',
                  fontFamily: "'Courier New', monospace",
                  position: 'relative',
                  display: 'block',
                  textDecoration: 'none', // Remove underline
                }}
                onMouseEnter={() => {
                  setHoveredItem(item.name);
                  playHoverSound();
                }}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => playClickSound()}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.1 * index + 0.5 
                }}
                whileHover={{ color: '#86efac' }}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 mx-2"
                    style={{ backgroundColor: '#4ade80' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                <div className="relative z-10">
                  {item.name}
                </div>
                
                {hoveredItem === item.name && (
                  <motion.div
                    className="absolute inset-0 rounded-md -z-10"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                    layoutId="hoverIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <motion.button
            onClick={() => {
              setIsOpen(!isOpen);
              playClickSound();
            }}
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10"
            style={{ 
              borderWidth: '1px', 
              borderColor: 'rgba(255, 255, 255, 0.3)',
              transition: 'background-color 0.2s ease'
            }}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="space-y-1.5">
              <motion.div 
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} 
                className="w-6 h-0.5 bg-white"
              />
              <motion.div 
                animate={{ opacity: isOpen ? 0 : 1 }} 
                className="w-6 h-0.5 bg-white"
              />
              <motion.div 
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} 
                className="w-6 h-0.5 bg-white"
              />
            </div>
          </motion.button>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="space-y-1 mt-2 p-2 rounded-md"
                style={{
                  borderWidth: '1px',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  backgroundColor: 'rgba(26, 26, 26, 0.95)',
                  backdropFilter: 'blur(4px)'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-2 rounded-md`}
                    style={{ 
                      color: activeSection === item.href.substring(1) ? '#4ade80' : 'white',
                      backgroundColor: activeSection === item.href.substring(1) 
                        ? 'rgba(255, 255, 255, 0.1)' 
                        : 'transparent',
                      textDecoration: 'none', // Remove underline
                    }}
                    onClick={() => {
                      setIsOpen(false);
                      playClickSound();
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    whileHover={{ 
                      x: 5, 
                      backgroundColor: 'rgba(255, 255, 255, 0.05)' 
                    }}
                    onMouseEnter={() => playHoverSound()}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;