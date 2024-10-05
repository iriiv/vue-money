export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: 'max-h-screen flex flex-col'
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/color-mode'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  colorMode: {
    classSuffix: '',
  },

  compatibilityDate: '2024-10-04'
});