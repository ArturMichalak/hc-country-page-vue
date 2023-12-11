import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,ts,vue,mdx}',
    './fragments/**/*.{js,ts,vue,mdx}',
    './layouts/**/*.{js,ts,vue,mdx}',
    './pages/**/*.{js,ts,vue,mdx}',
    './app.vue',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('~/assets/img/hero-image-wr.jpg')",
        done: "url('~/assets/img/done-round.svg')",
      },
      colors: {
        shark: 'rgb(var(--c-shark) / <alpha-value>)',
        'shark-light': 'rgb(var(--c-shark-light) / <alpha-value>)',
        'pale-sky': 'rgb(var(--c-pale-sky) / <alpha-value>)',
        iron: 'rgb(var(--c-iron) / <alpha-value>)',
        'cornflower-blue': 'rgb(var(--c-cornflower-blue) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
