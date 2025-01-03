/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

module.exports = {
  content: ['./src/**/*.{vue,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindScrollbar({
      preferredStrategy: 'pseudoelements',
      nocompatible: true,
    }),
  ],
};
