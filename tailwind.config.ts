import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Linear Design System Colors
        background: "#08090a",
        panel: "#0f1011",
        surface: "#191a1b",
        secondary: "#28282c",
        primary: "#f7f8f8",
        secondaryText: "#d0d6e0",
        tertiary: "#8a8f98",
        quaternary: "#62666d",
        brand: {
          indigo: "#5e6ad2",
          violet: "#7170ff",
          hover: "#828fff",
        },
        border: {
          subtle: "rgba(255,255,255,0.05)",
          standard: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
    },
  },
  plugins: [],
};

export default config;