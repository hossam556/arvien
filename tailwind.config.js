module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'main-5': '#093A53',
        'main-4': '#1E6A87',
        'main-3': '#1D9DB1',
        'main-2': '#15558d',
        'main-1': '#1c598F',
        "gray1" : "#9D9D9D",
        "gray2" : "#F6F6F6",
      }
    },
  },
  plugins: [],
}
