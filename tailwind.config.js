/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./work/**/*.html",
    "./services/**/*.html",
    "./about/**/*.html",
    "./insights/**/*.html",
    "./contact/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#090A0B",
        card: "#111317",
        cobalt: {
          DEFAULT: "#0066FF",
          hover: "#0052CC",
        },
        bone: "#F3F4F6",
        muted: "#9CA3AF",
        subcopy: "#6B7280",
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      borderColor: {
        hairline: "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
