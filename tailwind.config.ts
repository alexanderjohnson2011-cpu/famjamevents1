import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vice: {
          paper: '#FFF7F3',
          blush: '#FFD6E7',
          lilac: '#E9D8FF',
          midnight: '#070A16',
          navy: '#0B1030',
          cyan: '#00E7FF',
          pink: '#FF3BD4',
          purple: '#7C3BFF',
          gold: '#FFD36E',
          ink: '#0B1020',
          muted: '#5A5F75',
          white: '#FFFFFF',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      backgroundImage: {
        'vice-day': 'linear-gradient(135deg, #FFF7F3 0%, #FFD6E7 45%, #E9D8FF 100%)',
        'vice-night': 'radial-gradient(1200px circle at 20% 10%, rgba(255,59,212,0.18), transparent 40%), radial-gradient(900px circle at 80% 20%, rgba(0,231,255,0.14), transparent 45%), linear-gradient(180deg, #070A16 0%, #0B1030 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11,16,48,0.15)',
        'glow-cyan': '0 0 14px rgba(0,231,255,0.55), 0 0 34px rgba(0,231,255,0.25)',
        'glow-pink': '0 0 14px rgba(255,59,212,0.55), 0 0 34px rgba(255,59,212,0.25)',
        'glow-purple': '0 0 14px rgba(124,59,255,0.55), 0 0 34px rgba(124,59,255,0.25)',
        'glow-gold': '0 0 14px rgba(255,211,110,0.45), 0 0 30px rgba(255,211,110,0.2)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl2: '1.25rem',
      },
      fontFamily: {
        display: ['ui-rounded', 'system-ui', 'Arial Rounded MT Bold', 'Segoe UI', 'sans-serif'],
        body: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        neonPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'neon-pulse': 'neonPulse 2.8s ease-in-out infinite',
        shimmer: 'shimmer 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
