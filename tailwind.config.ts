/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        bgColor: 'var(--bg-color)',
        bg2Color: 'var(--bg-color2)',
        scoreColor: 'var(--score-color)',
        lightText: 'var(--light-text)',
        softText: 'var(--soft-text)',
        typoColor: 'var(--typoColor-color)',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-slow-nolinear': 'spin 6s reverse infinite',
        'anim-ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      fontFamily: {
        opensans: [`var(--font-opensans)`, 'sans-serif'],
        secondary: [`var(--font-title)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [
]
};
