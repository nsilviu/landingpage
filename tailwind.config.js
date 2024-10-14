module.exports = {
  darkMode: "media", // Enables dark mode based on user's system preference
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Looks for Tailwind classes in your src/app folder
    "./src/components/**/*.{js,ts,jsx,tsx}", // Looks for Tailwind classes in components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
