// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { VCalendar } from 'vuetify/labs/VCalendar';
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
export default createVuetify({
  components: {
    VCalendar,
    ...components,
    ...labsComponents,
  },
})