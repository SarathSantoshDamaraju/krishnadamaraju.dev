const BLOG = require("./blog.config");
const { fontFamily } = require("tailwindcss/defaultTheme");
const CJK = require("./lib/cjk");
const fontSansCJK = !CJK()
  ? []
  : [`"Noto Sans CJK ${CJK()}"`, `"Noto Sans ${CJK()}"`];

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  darkMode: "class", // Always use class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: BLOG.primaryColor,
        "primary-light": BLOG.primaryLight,
        day: {
          DEFAULT: BLOG.lightBackground || "#f8f9fa",
        },
        night: {
          DEFAULT: BLOG.darkBackground || "#2F4858",
        },
        theme: {
          light: {
            bg: '#f8f9fa',
            text: '#111827', // gray-900
            mutedText: '#6B7280', // gray-500
            divider: '#E5E7EB', // gray-200
          },
          dark: {
            bg: '#1a1a1a',
            text: '#F3F4F6', // gray-100
            mutedText: '#9CA3AF', // gray-400
            divider: '#374151', // gray-700
          }
        }
      },
      fontSize: {
        author: "48px",
      },
      fontFamily: {
        raleway: ["raleway"],
        ralewayMedium: ["raleway-medium"],
        ralewayBold: ["raleway-bold"],
        noEmoji: [
          '"IBM Plex Sans"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
