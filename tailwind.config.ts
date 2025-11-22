export default {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        colors: {
          gh: {
            bg: '#0d1117',         // Canvas default
            subtle: '#161b22',     // Canvas subtle (cards)
            border: '#30363d',     // Border default
            hover: '#21262d',      // Hover state
            text: '#c9d1d9',       // FG default
            muted: '#8b949e',      // FG muted
            blue: '#58a6ff',       // Accent emphasis
            green: '#238636',      // Success emphasis
            green_dim: 'rgba(35, 134, 54, 0.4)',
            purple: '#bc8cff',     // Done emphasis
            orange: '#f78166',     // Attention emphasis
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'glow-blue': 'radial-gradient(circle at center, rgba(88, 166, 255, 0.15) 0%, transparent 70%)',
          'glow-green': 'radial-gradient(circle at center, rgba(35, 134, 54, 0.15) 0%, transparent 70%)',
        },
        animation: {
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'float': 'float 6s ease-in-out infinite',
          'blob': 'blob 10s infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          blob: {
            '0%': { transform: 'translate(0px, 0px) scale(1)' },
            '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
            '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
            '100%': { transform: 'translate(0px, 0px) scale(1)' },
          }
        }
      }
    }
  }