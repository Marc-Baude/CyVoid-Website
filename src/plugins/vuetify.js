// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const myTheme = {
    dark: true,
    colors:{
        primary: '#85009A',
        secondary: '#7D0077',
        accent: '#DB0DFF',
        error: '#b71c1c',
        background: '#180008',
        surface: '#1e1e1e',
        info: '#E53BFF',
        success: '#4caf50',
        warning: '#ffeb3b',
        textlight: '#ffffff',
        textdark: '#000000',
        transparent: 'transparent'
    }
}
export default createVuetify({
    theme: {
        defaultTheme: 'myTheme',
        themes: {
            myTheme,
        }
    }
})
