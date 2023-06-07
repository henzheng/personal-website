// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/robots',
        '@nuxtjs/tailwindcss',
    ],
    css: [
        "@/assets/index.css",
        "@/assets/main.css"
    ],
    app: {
        head: {
            title: 'Henry Zheng',
            link: [
                { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap' }
            ]
        }
    }
})
