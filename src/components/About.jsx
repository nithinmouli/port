const About = () => {
  return (
    <section id="about" className="section py-16">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button bg-red-500"></div>
            <div className="terminal-button bg-yellow-500"></div>
            <div className="terminal-button bg-green-500"></div>
          </div>
          <div className="terminal-title">about.sh - nithinmouli@portfolio:~/about</div>
        </div>
        <div className="terminal-content">
          <div className="command-input">
            <span className="command-prompt">nithinmouli@portfolio:~$</span>
            <span className="ml-2">./view_about.sh</span>
          </div>
          
          <div className="command-output mt-4">
            <span className="text-term-accent font-bold text-xl"># ABOUT ME</span>
            
            <div className="mt-4">
              <span className="text-term-prompt">nithinmouli@portfolio:~$</span> <span className="text-term-text">man</span> <span className="text-term-accent">nithin-mouli</span>
            </div>
            
            <div className="mt-2 pl-4 border-l border-term-text/30 py-1">
              <p className="mb-2">
                <span className="text-term-comment">NAME</span><br />
                <span>      Nithin Mouli - Detail-oriented Technology Enthusiast</span>
              </p>
              
              <p className="mb-2">
                <span className="text-term-comment">SYNOPSIS</span><br />
                <span>      Computer Science and Engineering student at Vignan's Institute of Information Technology, passionate about creating innovative solutions through technology.</span>
              </p>
              
              <p className="mb-2">
                <span className="text-term-comment">DESCRIPTION</span><br />
                <span className="block mb-2">      With a strong foundation in full-stack development, I specialize in building web and mobile applications using modern technologies like React, React Native, Node.js, and AWS.</span>
                <span>      I'm committed to writing clean, efficient code and solving complex problems. My goal is to contribute my technical skills and creativity in a dynamic, challenging environment.</span>
              </p>
              
              <p className="mb-2">
                <span className="text-term-comment">OPTIONS</span><br />
                <span className="block">      <span className="text-term-accent">--cgpa</span>               8.00 CGPA</span>
                <span className="block">      <span className="text-term-accent">--graduation-date</span>    2022-2026</span>
                <span className="block">      <span className="text-term-accent">--location</span>           Visakhapatnam, India</span>
              </p>
            </div>
            
            <div className="mt-4">
              <span className="text-term-prompt">nithinmouli@portfolio:~$</span> <span className="text-term-text">head</span> <span className="text-term-accent">-n 5 philosophy.txt</span>
            </div>
            
            <div className="mt-2 pl-4 border-l border-term-text/30">
              <p>I believe in:</p>
              <p><span className="text-term-accent">1.</span> Creating solutions that solve real-world problems</p>
              <p><span className="text-term-accent">2.</span> Writing clean, maintainable, and efficient code</p>
              <p><span className="text-term-accent">3.</span> Continuous learning and improvement</p>
              <p><span className="text-term-accent">4.</span> Building technology that enhances people's lives</p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="btn-command">
                $ cd ../projects
              </a>
              <a href="#skills" className="btn-command">
                $ cd ../skills
              </a>
              <a href="#contact" className="btn-command">
                $ cd ../contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;