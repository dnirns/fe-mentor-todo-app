module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-cyan': 'hsl(180, 66%, 49%)',
        'primary-dark-violet': 'hsl(257, 27%, 26%)',
        'secondary-red': 'hsl(0, 87%, 67%)',
        'neutral-gray': 'hsl(0, 0%, 75%)',
        'neutral-grayish-violet': 'hsl(257, 7%, 63%)',
        'neutral-v-dark-blue': 'hsl(255, 11%, 22%)',
        'neutral-v-dark-violet': 'hsl(260, 8%, 14%)',
      },
      backgroundImage: (theme) => ({
        'desktop-search-bg': 'url("/src/assets/images/bg-shorten-desktop.svg")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
