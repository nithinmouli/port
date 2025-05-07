const Skills = () => {
  const skillCategories = [
    {
      category: "Programming_Languages",
      skills: [
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "TypeScript", level: 75 },
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind_CSS", level: 90 },
        { name: "Redux", level: 80 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
      ]
    },
    {
      category: "DevOps_Tools",
      skills: [
        { name: "AWS", level: 70 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 65 },
        { name: "CI/CD", level: 60 },
      ]
    },
  ];

  const renderProgressBar = (level) => {
    const fullBlocks = Math.floor(level / 10);
    const remainder = level % 10;
    let bar = '';
    
    // Add full blocks
    for (let i = 0; i < fullBlocks; i++) {
      bar += '█';
    }
    
    // Add partial block if there's a remainder
    if (remainder > 0) {
      bar += '▓';
    }
    
    // Add empty space to fill the rest
    const emptyBlocks = 10 - fullBlocks - (remainder > 0 ? 1 : 0);
    for (let i = 0; i < emptyBlocks; i++) {
      bar += '░';
    }
    
    return bar;
  };

  return (
    <section id="skills" className="section py-16">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button bg-red-500"></div>
            <div className="terminal-button bg-yellow-500"></div>
            <div className="terminal-button bg-green-500"></div>
          </div>
          <div className="terminal-title">skills.json - nithinmouli@portfolio:~/skills</div>
        </div>
        <div className="terminal-content">
          <div className="command-input">
            <span className="command-prompt">nithinmouli@portfolio:~$</span>
            <span className="ml-2">./analyze_skills.sh</span>
          </div>
          
          <div className="command-output mt-4">
            <div className="mb-6">
              <p className="text-term-accent font-bold text-xl"># SKILLS ANALYSIS</p>
              <div className="text-term-comment text-xs mt-1">Running skill analysis scan - updated: 2025-05-02 16:29:32 by nithinmouli</div>
            </div>
            
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-8">
                <div className="command-input mb-2">
                  <span className="command-prompt">nithinmouli@portfolio:~$</span>
                  <span className="ml-2">cat ./skills/{category.category}.json | jq</span>
                </div>
                
                <div className="code-block p-4 mb-4">
                  <div className="text-term-text font-mono">
                    <span className="text-term-accent">{"{"}</span><br/>
                    <span className="pl-4">"category": </span>
                    <span className="text-term-prompt">"{category.category.replace(/_/g, ' ')}"</span>,<br/>
                    <span className="pl-4">"skills": </span>
                    <span className="text-term-accent">{"["}</span><br/>
                    
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="pl-8">
                        <span className="text-term-accent">{"{"}</span><br/>
                        <span className="pl-4">"name": </span>
                        <span className="text-term-prompt">"{skill.name.replace(/_/g, ' ')}"</span>,<br/>
                        <span className="pl-4">"proficiency": </span>
                        <span className="text-term-text">{skill.level}</span>,<br/>
                        <span className="pl-4">"visualization": </span>
                        <span className="text-term-prompt">"{renderProgressBar(skill.level)}"</span><br/>
                        <span className="text-term-accent">{"}"}</span>
                        {skillIndex < category.skills.length - 1 ? "," : ""}
                      </div>
                    ))}
                    
                    <span className="pl-4 text-term-accent">{"]"}</span><br/>
                    <span className="text-term-accent">{"}"}</span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-4">
              <div className="command-input">
                <span className="command-prompt">nithinmouli@portfolio:~$</span>
                <span className="ml-2">echo "Additional tools and technologies:"</span>
              </div>
              
              <div className="mt-2 pl-4 flex flex-wrap gap-2 border-l border-term-text/30">
                {["VS_Code", "GitHub", "Postman", "Zustand", "Redux_Toolkit", "MongoDB_Atlas", "Vercel", "Prisma", "Supabase", "Redis"].map((tool, index) => (
                  <span key={index} className="inline-block px-2 py-1 bg-term-text/10 border border-term-text/30">
                    {tool.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <div className="command-input">
                <span className="command-prompt">nithinmouli@portfolio:~$</span>
                <span className="ml-2">echo "Skill analysis complete."</span>
              </div>
              
              <div className="command-output mt-2 pl-4">
                <span className="text-term-text">Skill analysis complete.</span>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="btn-command">
                $ cd ../projects
              </a>
              <a href="#achievements" className="btn-command">
                $ cd ../achievements
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;