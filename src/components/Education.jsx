const Education = () => {
  return (
    <section id="education" className="section py-16">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button bg-red-500"></div>
            <div className="terminal-button bg-yellow-500"></div>
            <div className="terminal-button bg-green-500"></div>
          </div>
          <div className="terminal-title">education.db - nithinmouli@portfolio:~/education</div>
        </div>
        <div className="terminal-content">
          <div className="command-input">
            <span className="command-prompt">nithinmouli@portfolio:~$</span>
            <span className="ml-2">sqlite3 education.db "SELECT * FROM education"</span>
          </div>
          
          <div className="command-output mt-4">
            <div className="mb-6">
              <p className="text-term-accent font-bold text-xl"># EDUCATION</p>
              <div className="text-term-comment text-xs mt-1">Database query executed: 2025-05-02 16:29:32 by nithinmouli</div>
            </div>
            
            <div className="overflow-auto">
              <div className="border border-term-text/30">
                <div className="flex border-b border-term-text/30 bg-term-text/10">
                  <div className="px-4 py-2 w-1/4 border-r border-term-text/30 font-bold">INSTITUTION</div>
                  <div className="px-4 py-2 w-1/4 border-r border-term-text/30 font-bold">DEGREE</div>
                  <div className="px-4 py-2 w-1/4 border-r border-term-text/30 font-bold">DURATION</div>
                  <div className="px-4 py-2 w-1/4 font-bold">CGPA</div>
                </div>
                
                <div className="flex border-b border-term-text/30">
                  <div className="px-4 py-2 w-1/4 border-r border-term-text/30">VIGNAN'S INSTITUTE OF INFORMATION TECHNOLOGY</div>
                  <div className="px-4 py-2 w-1/4 border-r border-term-text/30">B.E. in Computer Science and Engineering</div>
                  <div className="px-4 py-2 w-1/4 border-r border-term-text/30">2022-2026</div>
                  <div className="px-4 py-2 w-1/4">8.00</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="command-input">
                <span className="command-prompt">nithinmouli@portfolio:~$</span>
                <span className="ml-2">sqlite3 education.db "SELECT * FROM coursework"</span>
              </div>
              
              <div className="mt-4 code-block">
                <div className="text-term-text">
                  <p className="mb-2 text-term-prompt">Key Coursework:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
                    {["Data Structures & Algorithms", "Database Management Systems", "Operating Systems", "Computer Networks", "Web Development", "Object-Oriented Programming"].map((course, index) => (
                      <div key={index} className="flex gap-2">
                        <span className="text-term-accent">-</span>
                        <span className="text-term-text">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="command-input">
                <span className="command-prompt">nithinmouli@portfolio:~$</span>
                <span className="ml-2">cat ./education/certification_summary.txt</span>
              </div>
              
              <div className="mt-2 pl-4 border-l border-term-text/30">
                <p className="mb-2">Additional certifications and training:</p>
                <ul className="list-disc pl-5">
                  <li>Full Stack Web Development</li>
                  <li>AWS Cloud Practitioner</li>
                  <li>React Advanced Patterns</li>
                  <li>Data Structures & Algorithms Masterclass</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#achievements" className="btn-command">
                $ cd ../achievements
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

export default Education;