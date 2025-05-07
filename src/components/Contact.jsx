const Contact = () => {
  return (
    <section id="contact" className="section py-16">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button bg-red-500"></div>
            <div className="terminal-button bg-yellow-500"></div>
            <div className="terminal-button bg-green-500"></div>
          </div>
          <div className="terminal-title">contact.sh - nithinmouli@portfolio:~/contact</div>
        </div>
        <div className="terminal-content">
          <div className="command-input">
            <span className="command-prompt">nithinmouli@portfolio:~$</span>
            <span className="ml-2">./contact_methods.sh</span>
          </div>
          
          <div className="command-output mt-4">
            <div className="mb-6">
              <p className="text-term-accent font-bold text-xl"># CONTACT ME</p>
              <div className="text-term-comment text-xs mt-1">Last accessed: 2025-05-02 16:33:08 by nithinmoulicontact</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="command-input mb-2">
                  <span className="command-prompt">nithinmouli@portfolio:~$</span>
                  <span className="ml-2">cat contact_info.txt</span>
                </div>
                
                <div className="code-block">
                  <div className="mb-4">
                    <p className="text-term-prompt mb-1">// Email</p>
                    <a href="mailto:nithinmouli03@gmail.com" className="text-term-accent">
                      nithinmouli03@gmail.com
                    </a>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-term-prompt mb-1">// Phone</p>
                    <a href="tel:+919014742932" className="text-term-accent">
                      +91 9014742932
                    </a>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-term-prompt mb-1">// Location</p>
                    <span>Visakhapatnam, India</span>
                  </div>
                  
                  <div>
                    <p className="text-term-prompt mb-1">// Social Profiles</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                      <a href="https://github.com/nithinmouli" target="_blank" rel="noopener noreferrer" className="text-term-accent hover:underline">
                        github.com/nithinmouli
                      </a>
                      <a href="https://www.linkedin.com/in/nithinmouli" target="_blank" rel="noopener noreferrer" className="text-term-accent hover:underline">
                        linkedin.com/in/nithinmouli
                      </a>
                      <a href="https://leetcode.com/nithinmouli/" target="_blank" rel="noopener noreferrer" className="text-term-accent hover:underline">
                        leetcode.com/nithinmouli
                      </a>
                      <a href="https://www.codechef.com/users/nithinmouli" target="_blank" rel="noopener noreferrer" className="text-term-accent hover:underline">
                        codechef.com/users/nithinmouli
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="command-input mb-2">
                  <span className="command-prompt">nithinmouli@portfolio:~$</span>
                  <span className="ml-2">./send_message.sh</span>
                </div>
                
                <div className="code-block">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-term-prompt mb-1">
                        NAME=
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-term-bg border border-term-text/50 p-2 focus:outline-none focus:border-term-accent text-term-text"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-term-prompt mb-1">
                        EMAIL=
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-term-bg border border-term-text/50 p-2 focus:outline-none focus:border-term-accent text-term-text"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-term-prompt mb-1">
                        MESSAGE=
                      </label>
                      <textarea
                        id="message"
                        rows="5"
                        className="w-full bg-term-bg border border-term-text/50 p-2 focus:outline-none focus:border-term-accent text-term-text"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button 
                        type="submit"
                        className="btn-command py-2 w-full flex items-center justify-center"
                      >
                        <span className="mr-2">$ ./send.sh</span>
                        <span className="text-xs">CTRL+ENTER</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="command-input">
                <span className="command-prompt">nithinmouli@portfolio:~$</span>
                <span className="ml-2">cat response_time.txt</span>
              </div>
              
              <div className="mt-2 pl-4 border-l border-term-text/30">
                <p>I typically respond to all messages within 24 hours. Looking forward to connecting with you!</p>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#home" className="btn-command">
                $ cd ~
              </a>
              <a href="#projects" className="btn-command">
                $ cd ../projects
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center text-term-comment text-sm">
        <p>Session activity logged - all communications encrypted and secure</p>
        <p>Terminal session: nithinmoulicontact-{Math.floor(Math.random() * 10000)}-{new Date().toISOString().split('T')[0].replace(/-/g, '')}</p>
      </div>
    </section>
  );
};

export default Contact;