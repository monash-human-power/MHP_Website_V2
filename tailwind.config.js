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
        navbarbg: "#09090A",
        searchbarbg: "#1F1F22",
        lightgray: "#EFEFEF",
        gray: "#C0BFBD",
        greenbutton: "#ACF601",
      },
      fontFamily: {
        //sans: ["Arial", "Helvetica", "sans-serif"],
        Aldrich: "Aldrich",
        Sansation: "Sansation",
      },
      fontSize: {
        xs: ".75rem", // Extra small
        sm: ".875rem", // Small
        base: "1rem", // Base
        lg: "1.125rem", // Large
        xl: "1.25rem", // Extra large
        "2xl": "1.5rem", // 2X large
        "3xl": "1.875rem", // 3X large
        "4xl": "2.25rem", // 4X large
        "5xl": "3rem", // 5X large
        "6xl": "4rem", // 6X large
        "7xl": "5rem", // 7X large
      },
    },
  },
  plugins: [],
};
