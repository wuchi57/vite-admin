/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      width: {
        sidebar: '13.125rem'
      },
      height: {
        navbar: '3.125rem'
      },
      boxShadow: {
        navbar: '0 1px 4px rgba(0,21,41,.08)'
      },
      colors: {
        menuText: '#bfcbd9',
        menuActiveText: '#409EFF',
        subMenuActiveText: '#f4f4f5', //https://github.com/ElemeFE/element/issues/12951
        menuBg: '#304156',
        menuHover: '#263445',
        subMenuBg: '#1f2d3d',
        subMenuHover: '#001528',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
