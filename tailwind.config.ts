import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0D1117",
          secondary: "#161B22",
          tertiary: "#21262D",
        },
        foreground: {
          primary: "#F0F6FC",
          secondary: "#8B949E",
          muted: "#484F58",
        },
        neon: {
          cyan: "#00D9FF",
          purple: "#BD93F9",
          green: "#50FA7B",
          pink: "#FF79C6",
          yellow: "#F1FA8C",
          orange: "#FFB86C",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "pulse-neon": "pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "typing": "typing 3.5s steps(40, end), blink-caret .75s step-end infinite",
        "matrix": "matrix 20s linear infinite",
        "glitch": "glitch 1s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.5)" },
          "100%": { boxShadow: "0 0 30px rgba(189, 147, 249, 0.8), 0 0 40px rgba(0, 217, 255, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-neon": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#00D9FF" },
        },
        matrix: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        glitch: {
          "0%": {
            textShadow: "0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00",
          },
          "15%": {
            textShadow: "0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00",
          },
          "16%": {
            textShadow: "-0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00",
          },
          "49%": {
            textShadow: "-0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00",
          },
          "50%": {
            textShadow: "0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00",
          },
          "99%": {
            textShadow: "0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00",
          },
          "100%": {
            textShadow: "-0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff, -0.04em -0.025em 0 #fffc00",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-neon": "linear-gradient(135deg, #00D9FF, #BD93F9)",
        "gradient-dark": "linear-gradient(180deg, #0D1117, #161B22)",
      },
    },
  },
  plugins: [],
};

export default config;