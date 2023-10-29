import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        main: "#1F2C33",
        mainDark: "#111B21",
        mainLight: "#ADBAC1",
        mainLightHover: "#374146",
        mainInput: "#2A3942",
        message: "#015C4B",
      },
      backgroundImage: {
        messageScreen: "url('/images/message-bg-5.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
