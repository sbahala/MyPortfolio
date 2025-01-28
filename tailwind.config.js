/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          customPurple: '#6b46c1',
          yellow: {
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
          },
          orange: {
            400: '#fb923c',
          },
          red: {
            400: '#f87171',
          },
          blue: {
            400: '#60a5fa',
          },
          green: {
            400: '#34d399',
          },
        },
      },
    },
    plugins: [],
  };
  