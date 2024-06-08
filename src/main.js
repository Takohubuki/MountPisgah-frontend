import { createApp } from 'vue'

// Import Vuetify
import 'vuetify/styles'
import VueVideoPlayer from 'vue-video-player'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import router from './router'

import './style.css'
import 'video.js/dist/video-js.css'
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(router).use(VueVideoPlayer).mount('#app')
