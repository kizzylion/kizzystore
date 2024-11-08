// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,scss,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    // ... other plugins ...
  ],
};
