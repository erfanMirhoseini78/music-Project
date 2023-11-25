/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontEnd/public/*.html"],
  theme: {
    extend: {
      colors: {
        "darkBlue": "#1b2039"
      },
      spacing: {
        "7.5": "1.875rem",
      },
    },
  },
  plugins: [],
}

