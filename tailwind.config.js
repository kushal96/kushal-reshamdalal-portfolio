/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#04080f',
          secondary: '#07111f',
          card: '#0a1628',
          hover: '#0d1d38',
        },
        mint: {
          DEFAULT: '#00e5a0',
          dim: '#00b07b',
          faint: '#00e5a015',
          glow: '#00e5a030',
        },
        steel: {
          DEFAULT: '#4d9fff',
          dim: '#2d7de0',
        },
        ink: {
          primary: '#f0f6ff',
          muted: '#7a96c4',
          dim: '#3a5278',
          deep: '#1e3052',
        },
        edge: {
          DEFAULT: '#152040',
          light: '#1e2f55',
          glow: '#00e5a020',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(rgba(0, 229, 160, 0.07) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-green': 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,229,160,0.12) 0%, transparent 70%)',
      },
      backgroundSize: {
        'dot-md': '28px 28px',
        'dot-lg': '40px 40px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'ticker': 'ticker 25s linear infinite',
        'blink': 'blink 1.2s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,229,160,0.1), 0 0 60px rgba(0,229,160,0.05)' },
          '50%': { boxShadow: '0 0 40px rgba(0,229,160,0.25), 0 0 80px rgba(0,229,160,0.1)' },
        },
        ticker: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
