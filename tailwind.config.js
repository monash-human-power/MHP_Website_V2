/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainbg: "#011625",
        itembg: "#001D31",
        stroke: "#36434E",
        purple: "#381fff",
        white: "#FFFFFF",
        black: "#242121",
        navbarbg: "#09090A",
        searchbarbg: "#1F1F22",
        lightgray: "#EFEFEF",
        gray: "#C0BFBD",
        green: "#ACF601",
        divborder:"#5e5b5b"
      },
      fontFamily: {
        Aldrich: "Aldrich",
        Sansation: "Sansation",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1.2rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      animation: {
        fadeIn: 'fadeIn 1000ms ease-in',
        fadeOut: 'fadeOut 1000ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      width: {
        '100': '25rem',
        '120': '33rem'
      }
    },
  },
  plugins: [],
};
