import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config"
import Aura from "@primevue/themes/aura"
import { Button, Ripple } from 'primevue'
import router from './routes'
import Select from 'primevue/select';
import 'primeicons/primeicons.css';

const app = createApp(App)

app.use(PrimeVue,{
    theme:{
        preset:Aura,
    }
})

//Directivas
app.directive('ripple', Ripple)



//Componentes Pre-Creados
app.component('Select',Select);
app.component('Button',Button);


app.use(router)
app.mount('#app')
