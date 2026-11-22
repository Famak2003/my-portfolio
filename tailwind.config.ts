import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xl": "1150px",
        "lmd": "850px",
        "tab": "950px",
        "ltab": "1100px",
        "xxl": "1210px",
        "3xl": "1380px",
        "lmobile": "550px",
        "mobile": "450px",
        "smobile": "350px"
      },
      colors: {
        // --- redesign tokens (dark "control panel" theme) ---
        ink: '#0a0a0b',          // page background
        panel: '#111113',        // framed panels
        raised: '#18181b',       // chips, inputs
        line: 'rgba(255, 255, 255, 0.09)', // hairlines and frames
        fg: '#ededef',           // main text
        muted: '#8b8b93',        // secondary text
        // --- legacy tokens (still used by pages not yet restyled) ---
        background: '#e5e7eb',
        bgBlack: '#141414',
        // Swapped Yellows for Reds/Crimsons
        accent: '#9b1c1c',       // Muted deep red accent
        card: '#1f1f1f',
        lightGray: '#BCBCC2',
        textGray: '#A6A6A6',
        brightRed: '#e02424',    // Softer, brighter red for hover states
        primary: '#771d1d',      // Deep crimson
        secondary: '#9b1c1c',    // Medium red
        deepRed: '#cc0025'
      },
      boxShadow:{
        avatar_shadow: '0px 5px 15px rgba(31, 31, 31, 0.12)',
      },
      backgroundImage:{
        'footerButton': 'linear-gradient(to bottom, #f8b4b4 0%, #771d1d 2%, #cc0025 100%)'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        blink: {
          to: { visibility: 'hidden' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        // Updated shadow pulses to use Red (RGBA 155, 28, 28)
        shadowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(155, 28, 28, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 30px 1px rgba(155, 28, 28, 0.7)',
          },
        },
        iconShadowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px 1px rgba(155, 28, 28, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 15px .5px rgba(155, 28, 28, 0.7)',
          },
        },
      },
      animation: {
        'blink': 'blink 1.2s steps(2, start) infinite',
        'marquee': 'marquee 40s linear infinite',
        'shadow-pulse': 'shadowPulse 5s ease-in-out infinite',
        'icon-shadow-pulse': 'iconShadowPulse 2.5s ease-in-out infinite'
      },
    },
  },
  plugins: [],
  // The site is dark-only: <html> always carries the `dark` class (see layout.tsx),
  // so existing `dark:` styles on pages not yet restyled still apply.
  darkMode: 'class',
} satisfies Config;
