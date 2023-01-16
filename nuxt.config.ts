// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        server: {
          proxy: {
            '/img': {
              target: 'https://api.tuchong.com',
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/img/, '')
            }
          },
        }
      },
})
