const BLOG = require("./blog.config");
const { fontFamily } = require("tailwindcss/defaultTheme");
const CJK = require("./lib/cjk");
const fontSansCJK = !CJK()
  ? []
  : [`"Noto Sans CJK ${CJK()}"`, `"Noto Sans ${CJK()}"`];

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  darkMode: BLOG.appearance === "auto" ? "media" : "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: BLOG.primaryColor,
        "primary-light": BLOG.primaryLight,
        day: {
          DEFAULT: BLOG.lightBackground || "#ffffff",
        },
        night: {
          DEFAULT: BLOG.darkBackground || "#2F4858",
        },
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
