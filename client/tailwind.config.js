/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        rippleAni: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '33%': { transform: 'translate(5px, -5px)' },
          '66%': { transform: 'translate(-5px, 5px)' },
        },
        ripple2Ani: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '33%': { transform: 'translate(-5px, -5px)' },
          '66%': { transform: 'translate(5px, 5px)' },
        },
      },
      animation: {
        ripple: 'rippleAni 3s linear infinite',
        ripple2: 'ripple2Ani 4s linear infinite',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar')],
};
