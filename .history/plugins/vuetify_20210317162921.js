import Vue from 'vue'
import Vuetify from 'vuetify/lib'

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0A1B53',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
})

Vue.use(Vuetify)