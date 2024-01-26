import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'
import '@quasar/extras/animate/zoomOutRight.css'
import '@quasar/extras/animate/rubberBand.css'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import Contact from "./components/pages/Contact.vue";
import WorkingOnIt from "./components/WorkingOnIt.vue";
import AboutMe from "./components/AboutMe.vue";
const routes = [
    {
        path: '/',
        component: AboutMe,
    },
    {
        path: '/academics',
        component: WorkingOnIt,
    },
    {
        path: '/skills',
        component: WorkingOnIt,
    },
    {
        path: '/experiences',
        component: WorkingOnIt,
    },
    {
        path: '/goals',
        component: WorkingOnIt,
    },
    {
        path: '/contact',
        component: Contact,
    }
];

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(router);
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

app.mount('#app')
