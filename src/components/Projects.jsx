import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typing, setTyping] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    // Set component visible when it mounts
    setIsVisible(true);
    
    // Simulate typing effect timing
    const timer = setTimeout(() => {
      setTyping(false);
      setTimeout(() => setShowContent(true), 300);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Reset typing animation when changing projects
  useEffect(() => {
    setTyping(true);
    setShowContent(false);
    
    const timer = setTimeout(() => {
      setTyping(false);
      setTimeout(() => setShowContent(true), 300);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [activeProject]);

  const projects = [
    {
      id: 1,
      name: "GYM_BILLZ",
      description: "A cross-platform Gym Management System serving over 100 active users, enabling real-time member tracking, attendance monitoring, and financial analytics.",
      tech: ["React_Native", "Expo", "Node.js", "Express", "Prisma", "AWS_Lambda"],
      features: [
        "Developed a cross-platform Gym Management System serving over 100 active users, enabling real-time member tracking, attendance monitoring, and financial analytics.",
        "Designed a cost-effective backend with AWS Lambda, Express.js, and Prisma, reducing infrastructure expenses by 90%.",
        "Delivered a responsive mobile app with low-latency performance, enabling seamless workflows."
      ],
      link: "#"
    },
    {
      id: 2,
      name: "ATTENDANCE_TRACKER",
      description: "A Python-based backend deployed on AWS Lambda, enabling serverless, cost-efficient attendance tracking.",
      tech: ["AWS_Lambda", "Python", "WebSocket"],
      features: [
        "Developed a Python-based backend deployed on AWS Lambda, enabling serverless, cost-efficient attendance tracking.",
        "Optimized serverless architecture, handling ~3,000 unique daily users with an average of 10,000+ requests/day at zero operational cost.",
        "Achieved an average response time of 1.5–2 seconds, low latency and efficient real-time updates."
      ],
      link: "#"
    },
    {
      id: 3,
      name: "LEARN_SPHERE",
      description: "An educational platform leveraging Google's Gemini AI to semantically analyze and categorize educational content into structured learning modules.",
      tech: ["Next.js", "Clerk", "React", "Tailwind_CSS", "MongoDB", "Google_Gemini_API"],
      features: [
        "Leveraged Google's Gemini AI to semantically analyze and categorize educational content into structured learning modules.",
        "Implemented AI-generated flashcards, summaries, and quizzes using Google Gemini API.",
        "Optimized content retrieval with a scalable Next.js backend, delivering a fast and responsive experience."
      ],
      link: "#"
    },
  ];

  // Variants for framer motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };
  
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };
  
  // Cursor blink animation
  const cursorVariants = {
    blink: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <section id="projects" className="section py-16 overflow-hidden">
      <motion.div 
        className="terminal-window max-w-5xl mx-auto"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="terminal-header flex items-center bg-gray-800 p-2 rounded-t-lg"
          variants={itemVariants}
        >
          <div className="terminal-buttons flex space-x-2">
            <div className="terminal-button w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors duration-200"></div>
            <div className="terminal-button w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors duration-200"></div>
            <div className="terminal-button w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors duration-200"></div>
          </div>
          <div className="terminal-title ml-4 text-gray-400 text-sm">projects.sh - nithinmouli@portfolio:~/projects</div>
        </motion.div>
        
        <motion.div 
          className="terminal-content bg-gray-900 text-green-400 p-6 rounded-b-lg shadow-2xl"
          variants={fadeVariants}
        >
          <motion.div 
            className="command-input flex items-center"
            variants={itemVariants}
          >
            <span className="command-prompt text-cyan-400 font-mono">nithinmouli@portfolio:~$</span>
            <motion.span 
              className="ml-2 font-mono"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              ls -la ./projects/
            </motion.span>
            <motion.span
              variants={cursorVariants}
              animate="blink"
              className={`h-5 w-2 bg-green-400 ml-1 ${typing ? 'inline-block' : 'hidden'}`}
            ></motion.span>
          </motion.div>
          
          <motion.div 
            className="command-output mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {projects.map((project, i) => (
                <motion.div 
                  key={project.id}
                  className={`cursor-pointer border ${
                    activeProject === i 
                      ? 'border-cyan-400 bg-gray-800/50 text-cyan-400 shadow-lg shadow-cyan-500/20' 
                      : 'border-gray-600 text-gray-300 hover:bg-gray-800/30 hover:border-gray-500'
                  } p-4 rounded transition-all duration-300 transform hover:-translate-y-1`}
                  onClick={() => setActiveProject(i)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  <div className="flex">
                    <span className="text-gray-500 w-20 font-mono">drwxr-xr-x</span>
                    <span className={`font-mono ${activeProject === i ? 'text-cyan-400' : 'text-green-400'}`}>
                      {project.name}/
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8"
              variants={fadeVariants}
              initial="hidden"
              animate={showContent ? "visible" : "hidden"}
            >
              <motion.div 
                className="command-input flex items-center"
                variants={itemVariants}
              >
                <span className="command-prompt text-cyan-400 font-mono">nithinmouli@portfolio:~$</span>
                <motion.span 
                  className="ml-2 font-mono"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  cat ./projects/{projects[activeProject].name}/README.md
                </motion.span>
                <motion.span
                  variants={cursorVariants}
                  animate="blink"
                  className={`h-5 w-2 bg-green-400 ml-1 ${typing ? 'inline-block' : 'hidden'}`}
                ></motion.span>
              </motion.div>
              
              <motion.div 
                className="mt-6 pl-4 border-l-2 border-cyan-500/30 code-block bg-gray-800/20 p-6 rounded-lg shadow-inner"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.p 
                  className="text-2xl text-cyan-400 font-bold font-mono"
                  variants={itemVariants}
                >
                  # {projects[activeProject].name}
                </motion.p>
                
                <motion.p 
                  className="mt-3 mb-5 text-gray-300"
                  variants={itemVariants}
                >
                  {projects[activeProject].description}
                </motion.p>
                
                <motion.p 
                  className="text-green-400 font-mono mb-3 font-semibold"
                  variants={itemVariants}
                >
                  ## Technologies
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  variants={itemVariants}
                >
                  {projects[activeProject].tech.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="inline-block px-3 py-1 bg-gray-800 text-cyan-300 border border-cyan-700/40 text-sm rounded-full font-mono"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: 'rgba(8, 145, 178, 0.2)',
                        transition: { duration: 0.2 }
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + (i * 0.05) }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.p 
                  className="text-green-400 font-mono mb-3 font-semibold"
                  variants={itemVariants}
                >
                  ## Features
                </motion.p>
                
                <motion.ul 
                  className="space-y-3 text-gray-300"
                  variants={itemVariants}
                >
                  {projects[activeProject].features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                    >
                      <span className="text-cyan-400 mr-2">●</span> 
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div 
                  className="mt-6 text-gray-500 font-mono text-sm"
                  variants={itemVariants}
                >
                  (Project link: <a href={projects[activeProject].link} className="text-cyan-400 underline hover:text-cyan-300 transition-colors duration-200">github.com/nithinmouli/{projects[activeProject].name.toLowerCase()}</a>)
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              variants={fadeVariants}
              initial="hidden"
              animate={showContent ? "visible" : "hidden"}
            >
              <motion.div 
                className="command-input flex items-center"
                variants={itemVariants}
              >
                <span className="command-prompt text-cyan-400 font-mono">nithinmouli@portfolio:~$</span>
                <span className="ml-2 font-mono">echo "Project details loaded successfully."</span>
              </motion.div>
              
              <motion.div 
                className="command-output mt-2 pl-4 text-gray-300"
                variants={itemVariants}
              >
                <span className="font-mono">Project details loaded successfully.</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex flex-wrap gap-3"
              variants={itemVariants}
            >
              <motion.a 
                href="#skills" 
                className="btn-command bg-gray-800 text-green-400 px-4 py-2 rounded-md font-mono border border-gray-700 hover:bg-gray-700 hover:border-cyan-500 transition-all duration-300 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 group flex items-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-cyan-500 mr-1 group-hover:mr-2 transition-all duration-300">$</span> cd ../skills
              </motion.a>
              
              <motion.a 
                href="#about" 
                className="btn-command bg-gray-800 text-green-400 px-4 py-2 rounded-md font-mono border border-gray-700 hover:bg-gray-700 hover:border-cyan-500 transition-all duration-300 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 group flex items-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-cyan-500 mr-1 group-hover:mr-2 transition-all duration-300">$</span> cd ../about
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;