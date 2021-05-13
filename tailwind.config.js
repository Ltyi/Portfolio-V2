const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',

  purge: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],

  darkMode: false,

  theme: {
    extend: {
      colors: {
        orange: colors.orange
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        noto: ['Noto Sans TC', 'sans-serif']
      },

      backgroundImage: () => ({
        profile: "url('~@/assets/profile.jpg')",
        portfolio1: "url('~@/assets/portfolio1.jpg')",
        portfolio2: "url('~@/assets/portfolio2.jpg')"
      })
    }
  },

  variants: {},

  plugins: []
}
