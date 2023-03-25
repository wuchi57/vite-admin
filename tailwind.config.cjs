/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    colors: {
      pr: '#2389f2'
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
