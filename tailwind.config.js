/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#bce0ff',
          300: '#8dccff',
          400: '#57aef7',
          500: '#2f8ee8',
          600: '#1f70c7',
          700: '#1b5aa2',
          800: '#1b4d87',
          900: '#10294b',
        },
        secondary: {
          50: '#ecfdf9',
          100: '#d1faef',
          200: '#a7f3e1',
          300: '#6ee7cf',
          400: '#2dd4b8',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: {
          50: '#fff8eb',
          100: '#feefc7',
          200: '#fde08a',
          300: '#fbcf4e',
          400: '#f7b51f',
          500: '#e89b0c',
          600: '#c87807',
          700: '#a65709',
          800: '#87440f',
          900: '#703912',
        },
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #10294b 0%, #1f70c7 52%, #14b8a6 100%)',
        'gradient-dark': 'linear-gradient(135deg, #081827 0%, #10294b 100%)',
      },
      boxShadow: {
        'elevation-1': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'elevation-2': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'elevation-3': '0 16px 40px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [],
};
