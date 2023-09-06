/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '760px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontSize: {
        '75xl': '88px',
        button: ['13px', { letterSpacing: '0', fontWeight: '700' }],
        navbar: ['15px', { letterSpacing: '0', fontWeight: '500' }],
      },
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-bg': "url('/img/footer-bg.svg')",
        'static-bg': "url('/img/static-bg.svg')",
      },
      colors: {
       'risidio-yellow': '#f9b807',
       'white-lighter': '#f7faf9',
        primary: '#5fbdc1',
        purple: '#63037e',
        'bg-purple': '#5154a1',
        'base-grey': '#383838',
        'bg-lighter': '#f5f5f5',
      },
      zIndex: {
        1: '-100',
      },
      minHeight: {
        video: '975px',
      },
    },
  },
  plugins: [],
};
