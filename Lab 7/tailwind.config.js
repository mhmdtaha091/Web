/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  // Safelist utility classes that are generated dynamically at runtime
  // (ThemeSwitcher sets these class names via JS, so Tailwind's scanner
  // may not see them at build time.)
  safelist: [
    'bg-gray-100',
    'bg-gray-500',
    'bg-gray-900',
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
  ],
  plugins: [],
}
