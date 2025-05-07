/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        term: {
          bg: "#0A1010",          // Darker background with slight blue tint
          text: "#39FF14",         // Bright radium/neon green 
          prompt: "#39FF14",       // Same neon green for prompts
          accent: "#00FFFF",       // Cyan for highlights
          comment: "#4A9553",      // Dimmer green for comments
          warning: "#FFFF00",      // Yellow for warnings
          error: "#FF3333",        // Bright red for errors
          selection: "#1C4C1C",    // Green-tinted selection background
          folder: "#FFCC00",       // Folder color
          executable: "#FF3333",   // Executable file color
          link: "#00FFFF",         // Links color
          dimmedText: "#2A8C2A",   // Dimmer text for less important content
        },
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'VT323', 'Consolas', 'Monaco', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: 0.99 },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: 0.4 },
        },
        noise: {
          '0%, 100%': { backgroundPosition: '0 0' },
          '10%': { backgroundPosition: '-5% -10%' },
          '20%': { backgroundPosition: '-15% 5%' },
          '30%': { backgroundPosition: '7% -25%' },
          '40%': { backgroundPosition: '20% 25%' },
          '50%': { backgroundPosition: '-25% 10%' },
          '60%': { backgroundPosition: '15% 5%' },
          '70%': { backgroundPosition: '0% 15%' },
          '80%': { backgroundPosition: '25% 35%' },
          '90%': { backgroundPosition: '-10% 10%' },
        },
        crtFlicker: {
          '0%': { opacity: '0.9' },
          '2%': { opacity: '0.8' },
          '5%': { opacity: '0.95' },
          '10%': { opacity: '0.9' },
          '15%': { opacity: '0.85' },
          '20%': { opacity: '0.9' },
          '30%': { opacity: '0.95' },
          '40%': { opacity: '0.9' },
          '50%': { opacity: '0.95' },
          '60%': { opacity: '0.9' },
          '70%': { opacity: '0.8' },
          '80%': { opacity: '0.9' },
          '90%': { opacity: '0.95' },
          '100%': { opacity: '0.95' },
        },
        terminalType: {
          '0%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(0)' },
          '21%': { transform: 'translateY(-4px)' },
          '23%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(0)' },
          '41%': { transform: 'translateY(-4px)' },
          '43%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(0)' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        fadeUpIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        pulse: {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '0.7',
            transform: 'scale(0.98)'
          },
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow: '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 20px #39FF14'
          },
          '20%, 24%, 55%': {
            textShadow: 'none'
          }
        },
        slideFromLeft: {
          '0%': { 
            transform: 'translateX(-20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        slideFromRight: {
          '0%': { 
            transform: 'translateX(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        gradientFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        typing: 'typing 3.5s steps(40, end)',
        scanline: 'scanline 8s linear infinite',
        glitch: 'glitch 0.2s ease infinite',
        flicker: 'flicker 0.15s infinite',
        noise: 'noise 0.2s infinite',
        crtFlicker: 'crtFlicker 5s infinite',
        terminalType: 'terminalType 5s infinite',
        matrixRain: 'matrixRain 20s linear infinite',
        fadeUpIn: 'fadeUpIn 0.5s ease-out forwards',
        pulse: 'pulse 2s infinite ease-in-out',
        neonFlicker: 'neonFlicker 2.5s infinite',
        slideFromLeft: 'slideFromLeft 0.5s ease-out forwards',
        slideFromRight: 'slideFromRight 0.5s ease-out forwards',
        gradientFlow: 'gradientFlow 3s ease infinite',
      }
    },
  },
  plugins: [],
}