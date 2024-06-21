/**
 * @type {import("tailwindcss").Config}
 * */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      fontSize: {
        heading: "32px",
        subheading: "24px",
        body: "18px",
        caption: "14px"
      }
    }
  },
  plugins: [],
}