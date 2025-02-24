// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
    devtools: { enabled: false },
    app: {
        head: {
          title: 'Stock-table',
          meta: [
            { name: 'description', content: 'This is my awesome Nuxt 3 application' }
          ],
        }
      },
    css: ['@/assets/css/global.css'],
    modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
    primevue: {
        options: {
            ripple: true,
            inputVariant: 'filled',
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'light',
                    cssLayer: false
                }
            }
        }
    }
});
