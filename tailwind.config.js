module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'check-bg': 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
        'blue-bright': 'hsl(220, 98%, 61%)',
        'light-gray-v-light': 'hsl(0, 0%, 98%)',
        'light-gray-v-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-gray-light-grayish-blue': 'hsl(233, 11%, 84%)',
        'light-gray-dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'light-gray-v-dark-grayish-blue': 'hsl(235, 19%, 35%)',
        'dark-v-dark-blue': 'hsl(235, 21%, 11%)',
        'dark-v-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'dark-light-grayish-blue': 'hsl(234, 39%, 85%)',
        'dark-light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
        'dark-grayish-blue': 'hsl(234, 11%, 52%)',
        'dark-v-dark-grayish-blue': 'hsl(237, 14%, 26%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
