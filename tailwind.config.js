/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '460px',
      md:'760px',
      lg:'960px',
      xl:'1180px',
    },
    extend: {},
    container:{
      center: true,
      padding:"12px",
      md:"32px"
    }
  },
  plugins: [],
}