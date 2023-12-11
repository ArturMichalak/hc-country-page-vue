// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-svgo',
    '@nuxt/image',
    '@nuxtjs/storybook',
    '@vee-validate/nuxt',
    '@nuxtjs/tailwindcss',
    '@ant-design-vue/nuxt',
    ['@nuxtjs/google-fonts', { families: { 'Be Vietnam Pro': true } }],
    ['@nuxtjs/eslint-module', { lintOnStart: false }],
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    dir: 'assets/img',
  },
  components: [{ path: '~/fragments' }, { path: '~/components' }],
})
