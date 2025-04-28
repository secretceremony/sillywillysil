// src/plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css' // Often imported here too
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi' // <-- Import mdi icon set definition

export default createVuetify({
  components,
  directives,
  icons: { // <-- Ensure this icons object exists and is configured
    defaultSet: 'mdi', // <-- Set MDI as the default
    aliases, // <-- Include aliases if using them
    sets: {
      mdi, // <-- Include the mdi icon set definition
    },
  },
  // ... other options like theme
})