module.exports = {
  content: [
    "./src/**/*.rs",
    "./index.html",
    "./assets/**/*.css",
  ],
  theme: {
    extend: {
      zIndex: {
        'max': '9999', // 150px
      },
      containers: {
        '0': '1rem',
      },
    }
  },
  variants: {},
  daisyui: {
    themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true,
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/container-queries'),
  ],
};
