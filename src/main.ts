/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import router from './router';

// Composables
import { createApp } from 'vue'
import CanvasJSChart from '@canvasjs/charts';

const app = createApp(App)

app.use(router);
app.use(CanvasJSChart);
registerPlugins(app)

app.mount('#app')
