// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#107d56',
            secondary: '#5CBBF6',
            success: '#4CAF50',
            warning: '#FB8C00',
            error: '#FF5252',
            info: '#2196F3',
          },
        },
        dark: {
          colors: {
            primary: '#2E8B57', // A deeper, richer green
            secondary: '#64B5F6', // A softer, muted blue
            success: '#388E3C', // A darker green for success
            warning: '#FFA726', // A warmer, muted orange
            error: '#EF5350', // A softer red for errors
            info: '#42A5F5', // A muted blue for info
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})