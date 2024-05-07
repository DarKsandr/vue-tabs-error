import { createApp } from 'vue'
import App from './App.vue'
import {Tabs, Tab} from 'vue3-tabs-component';
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'


const vfm = createVfm()


createApp(App)
    .use(vfm)
    .component('tabs', Tabs)
    .component('tab', Tab)
    .mount('#app')
