// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    // TODO: inlineSSRStyles break the tailwind plugin at this moment
    inlineSSRStyles: false,
  },
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
  svgo: {
    defaultImport: 'component',
    componentPrefix: 'i',
  },
  tailwindcss: {
    configPath: 'tailwind.config',
    viewer: false,
  },
  image: {
    dir: 'assets/img',
  },
  components: [{ path: '~/fragments' }, { path: '~/components' }],
})
