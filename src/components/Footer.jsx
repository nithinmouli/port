const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-term-text/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center md:gap-8 mb-4 md:mb-0">
            <div className="command-input mb-4 md:mb-0">
              <span className="command-prompt">nithinmouli@portfolio:~$</span>
              <span className="ml-2">echo $COPYRIGHT</span>
            </div>
            <div className="text-term-text text-sm">
              © {currentYear} Nithin Mouli. All rights reserved.
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/nithinmouli" target="_blank" rel="noopener noreferrer" className="text-term-text hover:text-term-accent">
              <span className="text-term-comment">git@github.com:</span>nithinmouli
            </a>
            <a href="https://www.linkedin.com/in/nithinmouli" target="_blank" rel="noopener noreferrer" className="text-term-text hover:text-term-accent">
              <span className="text-term-comment">linkedin/</span>nithinmouli
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <div className="command-input">
            <span className="command-prompt">nithinmouli@portfolio:~$</span>
            <span className="ml-2 animate-blink">_</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;