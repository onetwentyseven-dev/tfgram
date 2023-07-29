import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import { registerLicense } from '@syncfusion/ej2-base'

// Registering Syncfusion license key
registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCeUx1RHxbf1xzZFxMZFlbRH9PMyBoS35RdUVkW3teeXBQRmlbU0J0'
)
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
