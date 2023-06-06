// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/robots',
        '@nuxtjs/tailwindcss',
    ],
    app: {
        head: {
            title: "Henry Zheng"
        }
    }
})
