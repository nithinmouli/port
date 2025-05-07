const Achievements = () => {
  const achievements = [
    {
      title: "Winner – IWD Hackathon",
      organization: "Google Developer Group Vizag",
      description: "Won first place for developing an innovative solution during the International Women's Day Hackathon.",
    },
    {
      title: "5th Position in SusHacks",
      organization: "24-hour Hackathon",
      description: "Secured 5th position out of 75 teams in an intensive 24-hour hackathon.",
    },
    {
      title: "200+ LeetCode Problems",
      organization: "LeetCode",
      description: "Solved over 200 problems on LeetCode with a rating of 1600.",
    },
  ];

  return (
    <section id="achievements" className="section py-16">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button bg-red-500"></div>
            <div className="terminal-button bg-yellow-500"></div>
            <div className="terminal-button bg-green-500"></div>
          </div>
          <div className="terminal-title">achievements.log - nithinmouli@portfolio:~/achievements</div>
        </div>
        <div className="terminal-content">
          <div className="command-input">
            <span className="command-prompt">nithinmouli@portfolio:~$</span>
            <span className="ml-2">grep -r "achievement" /var/log/portfolio/</span>
          </div>
          
          <div className="command-output mt-4">
            <div className="mb-6">
              <p className="text-term-accent font-bold text-xl"># ACHIEVEMENTS</p>
              <div className="text-term-comment text-xs mt-1">Last updated: 2025-05-02 16:29:32 by nithinmouli</div>
            </div>
            
            {achievements.map((achievement, index) => (
              <div key={index} className="mb-6 border border-term-text/30 p-4 bg-term-text/5">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-term-accent font-bold">[{achievement.title}]</span>
                  <span className="text-term-comment">@ {achievement.organization}</span>
                </div>
                
                <div className="pl-4 border-l-2 border-term-text/30">
                  <p>{achievement.description}</p>
                </div>
                
                <div className="mt-2 text-term-comment text-xs">
                  {/* Generate a fake timestamp for each achievement */}
                  achievement.log:{index+1}: {new Date(Date.now() - (index * 7776000000)).toISOString().split('T')[0]}
                </div>
              </div>
            ))}
            
            <div className="mt-4">
              <div className="command-input">
                <span className="command-prompt">nithinmouli@portfolio:~$</span>
                <span className="ml-2">cat achievement_stats.txt</span>
              </div>
              
              <div className="mt-2 pl-4 border-l border-term-text/30">
                <div className="flex flex-wrap gap-4">
                  <div>
                    <span className="text-term-comment">Total Achievements:</span> <span className="text-term-accent">3</span>
                  </div>
                  <div>
                    <span className="text-term-comment">Hackathons Won:</span> <span className="text-term-accent">1</span>
                  </div>
                  <div>
                    <span className="text-term-comment">Competitions Placed:</span> <span className="text-term-accent">2</span>
                  </div>
                  <div>
                    <span className="text-term-comment">LeetCode Rating:</span> <span className="text-term-accent">1600</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#education" className="btn-command">
                $ cd ../education
              </a>
              <a href="#skills" className="btn-command">
                $ cd ../skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;