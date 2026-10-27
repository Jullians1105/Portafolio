/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05060F',
        surface: '#0B0D1C',
        line: '#1E2138',
        bone: '#EDEDE9',
        mute: '#8B8EA8',
        volt: '#2B2BFF',
        glow: '#8F8FFF',
        paper: '#ECECE7',
        graphite: '#14151A',
        // Alias de la paleta anterior, usados por CertModal en Skills.jsx
        dark: '#05060F',
        accent: '#0B0D1C',
        light: '#EDEDE9',
        gold: '#8F8FFF',
        brown: '#1E2138',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
