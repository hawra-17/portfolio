/** @type {import('tailwindcss').Config} */
export default {
  /**
   * Dark Mode Configuration
   *
   * "class" means: dark mode is enabled when <html> has class="dark"
   * (as opposed to "media" which uses system preferences)
   *
   * This gives us manual control via our toggle button!
   */
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
