import defaultTheme from "tailwindcss/defaultTheme";

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.vue",
    "./app/components/**/**/*.vue",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/styles/**/*.css",


  ]
};
