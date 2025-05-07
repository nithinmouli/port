import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../terminal.css'

const Hero = () => {
  const [bootSequenceComplete, setBootSequenceComplete] = useState(false);
  const [bootStage, setBootStage] = useState(0);
  const [terminalReady, setTerminalReady] = useState(false);
  const [commands, setCommands] = useState([]);
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentInput, setCurrentInput] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Boot sequence messages
  const bootMessages = [
    [
      "BIOS Version 1.0.23-nithinmouli © 2025 Terminal Systems",
      "System initializing...",
      "CPU: AMD Ryzen 9 7950X @ 5.7GHz",
      "Memory: 64GB DDR5-6400MHz",
      "Storage: 2TB NVMe SSD",
      "Initializing system components..."
    ],
    [
      "Loading kernel...",
      "Loading initramfs...",
      "Mounting root filesystem...",
      "Starting system services...",
      "[ OK ] Started Network Service.",
      "[ OK ] Started Bluetooth Service.",
      "[ OK ] Reached target Graphical Interface.",
    ],
    [
      "PortfolioOS 4.2.1-terminal (tty1)",
      "",
      "portfolio login: nithinmouli",
      "Password: ********",
      "",
      "Last login: Fri May 02 16:39:00 2025 from 192.168.1.42",
    ]
  ];

  // Command history
  const savedCommandHistory = [
    { command: "ls -la", output: [
      "total 364",
      "drwxr-xr-x  24 nithinmouli  staff   768 May  2 12:32 .",
      "drwxr-xr-x   7 nithinmouli  staff   224 May  2 10:15 ..",
      "-rw-r--r--   1 nithinmouli  staff  8196 May  2 12:30 .bash_history",
      "drwxr-xr-x  12 nithinmouli  staff   384 May  2 11:42 .git",
      "-rw-r--r--   1 nithinmouli  staff   280 May  2 11:40 .gitignore",
      "drwxr-xr-x   3 nithinmouli  staff    96 May  2 10:16 about",
      "drwxr-xr-x   5 nithinmouli  staff   160 May  2 10:18 achievements",
      "-rw-r--r--   1 nithinmouli  staff  2345 May  2 12:26 config.json",
      "drwxr-xr-x   4 nithinmouli  staff   128 May  2 10:17 contact",
      "drwxr-xr-x   3 nithinmouli  staff    96 May  2 10:16 education",
      "-rwxr-xr-x   1 nithinmouli  staff  4562 May  2 12:25 portfolio.sh",
      "drwxr-xr-x   8 nithinmouli  staff   256 May  2 11:23 projects",
      "drwxr-xr-x   6 nithinmouli  staff   192 May  2 10:20 skills"
    ]},
    { command: "cat portfolio.sh", output: [
      "#!/bin/bash",
      "",
      "# This script launches the portfolio interface",
      "",
      "echo \"Loading portfolio components...\"",
      "echo \"Initializing React environment...\"",
      "echo \"Starting portfolio service...\"",
      "",
      "# Launch portfolio in interactive mode",
      "npm run start:portfolio -- --interactive",
      "",
      "exit 0"
    ]},
  ];

  // Portfolio script content
  const portfolioScript = [
    "#!/bin/bash",
    "",
    "# Portfolio Information Script",
    "# Author: Nithin Mouli",
    "# Last Updated: 2025-05-02",
    "",
    "NAME=\"Nithin Mouli\"",
    "ROLE=\"Full Stack Developer | Technology Enthusiast\"",
    "EDUCATION=\"B.E. in Computer Science Engineering, VIGNAN'S INSTITUTE OF INFORMATION TECHNOLOGY (2022-2026)\"",
    "SKILLS=(\"React\" \"Node.js\" \"Express\" \"MongoDB\" \"React Native\" \"AWS\" \"JavaScript\" \"Python\" \"C++\")",
    "",
    "function display_welcome() {",
    "  echo \"Welcome to $NAME's Interactive Portfolio\"",
    "  echo \"----------------------------------------\"",
    "  echo \"Type 'help' to see available commands\"",
    "}",
    "",
    "display_welcome",
    "",
    "# End of script"
  ];

  // Welcome message
  const welcomeMessage = [
    "▄▄▄█████▓▓█████  ██▀███   ███▄ ▄███▓ ██▓ ███▄    █  ▄▄▄       ██▓    ",
    "▓  ██▒ ▓▒▓█   ▀ ▓██ ▒ ██▒▓██▒▀█▀ ██▒▓██▒ ██ ▀█   █ ▒████▄    ▓██▒    ",
    "▒ ▓██░ ▒░▒███   ▓██ ░▄█ ▒▓██    ▓██░▒██▒▓██  ▀█ ██▒▒██  ▀█▄  ▒██░    ",
    "░ ▓██▓ ░ ▒▓█  ▄ ▒██▀▀█▄  ▒██    ▒██ ░██░▓██▒  ▐▌██▒░██▄▄▄▄██ ▒██░    ",
    "  ▒██▒ ░ ░▒████▒░██▓ ▒██▒▒██▒   ░██▒░██░▒██░   ▓██░ ▓█   ▓██▒░██████▒",
    "  ▒ ░░   ░░ ▒░ ░░ ▒▓ ░▒▓░░ ▒░   ░  ░░▓  ░ ▒░   ▒ ▒  ▒▒   ▓▒█░░ ▒░▓  ░",
    "    ░     ░ ░  ░  ░▒ ░ ▒░░  ░      ░ ▒ ░░ ░░   ░ ▒░  ▒   ▒▒ ░░ ░ ▒  ░",
    "  ░         ░     ░░   ░ ░      ░    ▒ ░   ░   ░ ░   ░   ▒     ░ ░   ",
    "            ░  ░   ░            ░    ░           ░       ░  ░    ░  ░",
    "",
    "Welcome to Nithin Mouli's portfolio terminal - v1.0.3",
    "Type 'help' to see available commands. Press TAB for auto-completion.",
    ""
  ];
  
  // Available commands
  const availableCommands = {
    help: "Display available commands",
    about: "View information about me",
    projects: "List my projects",
    skills: "View my technical skills",
    education: "View my educational background",
    achievements: "List my achievements",
    contact: "View my contact information",
    clear: "Clear the terminal screen",
    ls: "List directory contents",
    cat: "View file contents",
    date: "Display current date and time",
    whoami: "Display current user"
  };

  // Clock updating
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Cursor blink effect
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  // Boot sequence with typing animation
  useEffect(() => {
    if (bootStage === 0) {
      setTimeout(() => {
        setBootStage(1);
      }, 1800);
    } else if (bootStage === 1) {
      setTimeout(() => {
        setBootStage(2);
      }, 2200);
    } else if (bootStage === 2) {
      setTimeout(() => {
        setBootSequenceComplete(true);
        setTimeout(() => {
          setTerminalReady(true);
          setTimeout(() => {
            setShowWelcomeMessage(true);
            addCommand({
              command: "./welcome.sh",
              output: welcomeMessage,
              animated: true
            });
          }, 500);
        }, 1000);
      }, 2200);
    }
  }, [bootStage]);
  
  // Auto scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands, bootStage, bootSequenceComplete, terminalReady]);

  // Refocus input ONLY when clicking inside the terminal
  // This is the fixed code that prevents scrolling back to top when clicking elsewhere
  useEffect(() => {
    const handleClick = (e) => {
      if (inputRef.current && terminalReady && terminalRef.current && terminalRef.current.contains(e.target)) {
        inputRef.current.focus();
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [terminalReady]);

  // Handle command execution
  const handleCommand = (cmd) => {
    const cmdLower = cmd.trim().toLowerCase();
    let output = [];
    
    // Add to history if not empty
    if (cmdLower) {
      setCommandHistory(prev => [...prev, cmd]);
      setHistoryIndex(-1);
    } else {
      return addCommand({ command: "", output: [] });
    }
    
    // Split command into parts
    const cmdParts = cmdLower.split(" ");
    const baseCmd = cmdParts[0];
    const args = cmdParts.slice(1);
    
    // Add keypress sound
    playKeypressSound();
    
    switch(baseCmd) {
      case "help":
        output = [
          "Available commands:",
          ...Object.entries(availableCommands).map(([cmd, desc]) => `  ${cmd.padEnd(15)} - ${desc}`),
          "",
          "Navigation:",
          "  cd [section]      - Navigate to a section (e.g., cd projects)",
          "  [section]         - Shorthand to navigate to a section",
          "",
          "Portfolio Sections:",
          "  about, projects, skills, education, achievements, contact"
        ];
        break;
        
      case "about":
        output = [
          "# About Nithin Mouli",
          "",
          "Detail-oriented technology enthusiast with a proven ability to identify real-world",
          "problems and implement innovative solutions through technology.",
          "",
          "With a strong foundation in full-stack development, I specialize in building web",
          "and mobile applications using modern technologies like React, React Native,",
          "Node.js, and AWS.",
          "",
          "I'm committed to writing clean, efficient code and solving complex problems.",
          "My goal is to contribute my technical skills and creativity in a dynamic,",
          "challenging environment."
        ];
        // Redirect to about section after showing output
        setTimeout(() => {
          const targetElement = document.querySelector("#about");
          if (targetElement) {
            targetElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start'
            });
          }
        }, 1500);
        break;
        
      case "projects":
      case "ls":
        if (args[0] === "projects" || (args[0] === "-la" && currentDirectory === "~/projects")) {
          output = [
            "total 12",
            "drwxr-xr-x  3 nithinmouli  staff  96 May  2 10:16 .",
            "drwxr-xr-x  9 nithinmouli  staff 288 May  2 10:15 ..",
            "drwxr-xr-x  3 nithinmouli  staff  96 May  2 10:16 GYM_BILLZ/",
            "drwxr-xr-x  3 nithinmouli  staff  96 May  2 10:16 ATTENDANCE_TRACKER/",
            "drwxr-xr-x  3 nithinmouli  staff  96 May  2 10:16 LEARN_SPHERE/"
          ];
          
          // Redirect to projects section after showing output
          if (baseCmd === "projects") {
            setTimeout(() => {
              const targetElement = document.querySelector("#projects");
              if (targetElement) {
                targetElement.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'start'
                });
              }
            }, 1500);
          }
        } else if (currentDirectory === "~") {
          output = savedCommandHistory[0].output;
        } else {
          output = [
            "total 0",
            "drwxr-xr-x  2 nithinmouli  staff  64 May  2 10:15 .",
            "drwxr-xr-x  9 nithinmouli  staff 288 May  2 10:15 .."
          ];
        }
        break;
        
      case "skills":
        output = [
          "# Technical Skills",
          "",
          "Programming Languages:",
          "  - JavaScript/TypeScript [███████████████████████████████] 90%",
          "  - Python               [████████████████████████████   ] 85%",
          "  - C++                  [████████████████████████████   ] 85%",
          "",
          "Frontend:",
          "  - React.js             [███████████████████████████████] 90%",
          "  - Next.js              [████████████████████████████   ] 85%",
          "  - Tailwind CSS         [███████████████████████████████] 90%",
          "",
          "Backend:",
          "  - Node.js              [████████████████████████████   ] 85%",
          "  - Express.js           [████████████████████████████   ] 85%",
          "  - MongoDB              [██████████████████████████     ] 80%",
          "",
          "Other:",
          "  - AWS                  [████████████████████           ] 70%",
          "  - Git                  [███████████████████████████████] 90%",
          "  - React Native         [████████████████████████████   ] 85%"
        ];
        // Redirect to skills section after showing output
        setTimeout(() => {
          const targetElement = document.querySelector("#skills");
          if (targetElement) {
            targetElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start'
            });
          }
        }, 1500);
        break;
        
      case "cat":
        if (args[0] === "portfolio.sh") {
          output = portfolioScript;
        } else if (args[0] === "README.md") {
          output = [
            "# Nithin Mouli's Portfolio",
            "",
            "Welcome to my terminal-themed portfolio website.",
            "This site showcases my projects, skills, and background as a developer.",
            "",
            "## Navigation",
            "",
            "Use the terminal commands to navigate through different sections,",
            "or use the navigation links in the header.",
            "",
            "## Contact",
            "",
            "Email: nithinmouli03@gmail.com",
            "Phone: +91 9014742932",
            "",
            "© 2025 Nithin Mouli. All rights reserved."
          ];
        } else {
          output = [`cat: ${args[0]}: No such file or directory`];
          playErrorSound();
        }
        break;
        
      case "achievements":
        output = [
          "# Achievements",
          "",
          "- Winner – IWD Hackathon by Google Developer Group Vizag",
          "- 5th position out of 75 teams in a 24hr hackathon \"sushacks\"",
          "- Solved 200+ problems on LeetCode (Rating: 1600)"
        ];
        // Redirect to achievements section after showing output
        setTimeout(() => {
          const targetElement = document.querySelector("#achievements");
          if (targetElement) {
            targetElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start'
            });
          }
        }, 1500);
        break;
        
      case "education":
        output = [
          "# Education",
          "",
          "VIGNAN'S INSTITUTE OF INFORMATION TECHNOLOGY",
          "Bachelor of Engineering in Computer Science and Engineering (CSE)",
          "CGPA: 8.00",
          "Duration: 2022-2026",
          "",
          "Key Coursework:",
          "- Data Structures & Algorithms",
          "- Database Management Systems",
          "- Operating Systems",
          "- Computer Networks",
          "- Web Development",
          "- Object-Oriented Programming"
        ];
        // Redirect to education section after showing output
        setTimeout(() => {
          const targetElement = document.querySelector("#education");
          if (targetElement) {
            targetElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start'
            });
          }
        }, 1500);
        break;
        
      case "contact":
        output = [
          "# Contact Information",
          "",
          "Email: nithinmouli03@gmail.com",
          "Phone: +91 9014742932",
          "Location: Visakhapatnam, India",
          "",
          "Social Profiles:",
          "- GitHub: github.com/nithinmouli",
          "- LinkedIn: linkedin.com/in/nithinmouli",
          "- LeetCode: leetcode.com/nithinmouli",
          "- CodeChef: codechef.com/users/nithinmouli",
          "",
          "I typically respond to all messages within 24 hours."
        ];
        // Redirect to contact section after showing output
        setTimeout(() => {
          const targetElement = document.querySelector("#contact");
          if (targetElement) {
            targetElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start'
            });
          }
        }, 1500);
        break;
        
      case "clear":
        playKeypressSound();
        return setCommands([]);
        
      case "cd":
        let dir = args[0] || "~";
        if (dir === "~" || dir === "/") {
          setCurrentDirectory("~");
          output = [];
        } else if (["about", "projects", "skills", "achievements", "education", "contact"].includes(dir)) {
          setCurrentDirectory(`~/${dir}`);
          // Redirect to the section
          setTimeout(() => {
            const targetElement = document.querySelector(`#${dir}`);
            if (targetElement) {
              targetElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start'
              });
            }
          }, 1000);
          output = [];
        } else {
          output = [`cd: ${dir}: No such file or directory`];
          playErrorSound();
        }
        break;
        
      case "date":
        output = [`${currentTime.toUTCString()}`];
        break;
        
      case "whoami":
        output = ["nithinmouli"];
        break;
        
      default:
        if (["about", "projects", "skills", "achievements", "education", "contact"].includes(baseCmd)) {
          // Execute command as if it were preceded by "cd"
          handleCommand(`cd ${baseCmd}`);
          return;
        }
        output = [`Command not found: ${cmd}. Type 'help' for available commands.`];
        playErrorSound();
    }
    
    addCommand({ command: cmd, output, animated: true });
  };

  // Sounds for terminal interactions
  const playKeypressSound = () => {
    const audio = new Audio('/sounds/keypress.mp3');  // Create a sound file or use an existing one
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio play prevented:', e));
  };
  
  const playErrorSound = () => {
    const audio = new Audio('/sounds/error.mp3');  // Create a sound file or use an existing one
    audio.volume = 0.4;
    audio.play().catch(e => console.log('Audio play prevented:', e));
  };
  
  const playTabSound = () => {
    const audio = new Audio('/sounds/tab.mp3');  // Create a sound file or use an existing one
    audio.volume = 0.2;
    audio.play().catch(e => console.log('Audio play prevented:', e));
  };

  const addCommand = (newCommand) => {
    setCommands(prev => [...prev, newCommand]);
  };

  // Handle key navigation and autocompletion
  const handleKeyDown = (e) => {
    // Command history navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
      playKeypressSound();
    } 
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
      playKeypressSound();
    }
    // Tab completion
    else if (e.key === 'Tab') {
      e.preventDefault();
      
      const input = currentInput.trim().toLowerCase();
      const availableCmds = Object.keys(availableCommands);
      
      // Find matching commands for autocompletion
      const matches = availableCmds.filter(cmd => cmd.startsWith(input));
      
      if (matches.length === 1) {
        // Complete the command
        setCurrentInput(matches[0]);
        setShowSuggestions(false);
      } else if (matches.length > 1) {
        // Show multiple suggestions
        setSuggestions(matches);
        setShowSuggestions(true);
      }
      
      playTabSound();
    }
    // Enter key
    else if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(currentInput);
      setCurrentInput('');
      setShowSuggestions(false);
    }
    // Escape key to hide suggestions
    else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
    setShowSuggestions(false);
  };

  // Render terminal boot sequence or content
  const renderContent = () => {
    if (!bootSequenceComplete) {
      return (
        <div className="font-mono text-term-text whitespace-pre-line my-4">
          {bootMessages[bootStage].map((line, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.3 }}
              className="mb-1"
            >
              {line}
            </motion.div>
          ))}
        </div>
      );
    }

    if (!terminalReady) {
      return (
        <motion.div 
          className="font-mono text-term-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="animate-pulse">Initializing terminal session...</span>
        </motion.div>
      );
    }

    return (
      <div className="terminal-output">
        <AnimatePresence>
          {commands.map((cmd, i) => (
            <motion.div 
              key={i} 
              className="mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <span className="command-prompt text-term-prompt">nithinmouli@portfolio:{currentDirectory}$</span>
                <span className="ml-2 text-term-command">{cmd.command}</span>
              </div>
              <div className="pl-6 whitespace-pre-wrap">
                {cmd.animated ? (
                  cmd.output.map((line, j) => (
                    <motion.div 
                      key={j} 
                      className="leading-tight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: j * 0.03, duration: 0.2 }}
                    >
                      {renderLine(line)}
                    </motion.div>
                  ))
                ) : (
                  cmd.output.map((line, j) => (
                    <div key={j} className="leading-tight">
                      {renderLine(line)}
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        <div className="flex items-start relative">
          <span className="command-prompt text-term-prompt">nithinmouli@portfolio:{currentDirectory}$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="ml-2 bg-transparent outline-none border-none text-term-text flex-grow caret-transparent"
            autoFocus
          />
          <span 
            className={`absolute ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ease-in-out`} 
            style={{ left: `calc(${currentDirectory.length + 22}ch + 0.5rem + ${currentInput.length}ch)` }}
          >
            <span className="text-term-cursor">█</span>
          </span>
          
          {/* Tab completion suggestions */}
          <AnimatePresence>
            {showSuggestions && suggestions.length > 0 && (
              <motion.div 
                className="absolute top-full left-0 mt-1 bg-term-bg border border-term-border rounded p-2 z-10"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-xs text-term-comment mb-1">Suggestions:</div>
                {suggestions.map((suggestion, i) => (
                  <div key={i} className="text-term-text cursor-pointer hover:bg-term-highlight px-2 py-1 rounded"
                       onClick={() => {
                         setCurrentInput(suggestion);
                         setShowSuggestions(false);
                         inputRef.current.focus();
                       }}>
                    {suggestion}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };
  
  // Format terminal output line
  const renderLine = (line) => {
    if (line.startsWith("drwx")) {
      return (
        <>
          {line.split(" ").slice(0, -1).join(" ")} <span className="text-term-folder">{line.split(" ").slice(-1)[0]}</span>
        </>
      );
    } else if (line.startsWith("-rwx")) {
      return (
        <>
          {line.split(" ").slice(0, -1).join(" ")} <span className="text-term-executable">{line.split(" ").slice(-1)[0]}</span>
        </>
      );
    } else if (line.startsWith("#")) {
      return <span className="text-term-heading font-bold">{line}</span>;
    } else if (line.startsWith("-")) {
      return <span><span className="text-term-bullet">•</span> {line.substring(1)}</span>;
    } else {
      return line;
    }
  };

  // Random flicker and glitch effects
  const [flickerClass, setFlickerClass] = useState("");
  const [glitchClass, setGlitchClass] = useState("");
  
  useEffect(() => {
    // Random screen flicker
    const flickerInterval = setInterval(() => {
      if (Math.random() > 0.96) {
        setFlickerClass("opacity-80");
        setTimeout(() => setFlickerClass(""), 100);
      }
    }, 2000);
    
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.98) {
        setGlitchClass("glitch-effect");
        setTimeout(() => setGlitchClass(""), 150);
      }
    }, 5000);
    
    return () => {
      clearInterval(flickerInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <section id="home" className={`min-h-screen pt-16 ${flickerClass} ${glitchClass}`}>
      <div className="scanline"></div>
      <div className="second-scanline"></div>
      <div className="crt-lines"></div>
      <div className="crt-static"></div>
      
      <motion.div 
        className="terminal-window max-w-4xl mx-auto w-full overflow-hidden min-h-[70vh] shadow-lg"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="terminal-header relative flex items-center h-8 bg-term-header px-4">
          <div className="terminal-buttons flex space-x-2">
            <motion.div 
              className="terminal-button bg-red-500 w-3 h-3 rounded-full"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
            <motion.div 
              className="terminal-button bg-yellow-500 w-3 h-3 rounded-full" 
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
            <motion.div 
              className="terminal-button bg-green-500 w-3 h-3 rounded-full"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}  
            ></motion.div>
          </div>
          <div className="terminal-title text-center text-xs text-term-title absolute left-0 right-0 mx-auto w-max">
            bash - nithinmouli@portfolio:{currentDirectory}
          </div>
          <div className="absolute right-4 text-xs text-term-comment">
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
        <div 
          ref={terminalRef} 
          className="terminal-content overflow-auto h-[calc(70vh-32px)] bg-term-bg text-term-text p-3 font-mono text-sm leading-relaxed"
        >
          {renderContent()}
        </div>
      </motion.div>
      
      <motion.div 
        className="flex justify-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="bg-term-bg border border-term-text/30 text-term-comment text-sm px-4 py-2 rounded-md shadow-lg">
          <span className="key-press mx-1 px-2 py-1 bg-term-key rounded text-term-text shadow-inner">Tab</span> for autocomplete 
          | <span className="key-press mx-1 px-2 py-1 bg-term-key rounded text-term-text shadow-inner">↑</span> 
          <span className="key-press mx-1 px-2 py-1 bg-term-key rounded text-term-text shadow-inner">↓</span> for history 
          | Type <span className="text-term-text font-bold">help</span> for commands
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;