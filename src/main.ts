import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import LoremIpsum from "./components/LoremIpsum.vue";
import AboutMe from "./components/AboutMe.vue";

const routes = [
    {
        path: '/',
        component: AboutMe,
    },
    {
        path: '/academics',
        component: LoremIpsum,
    },
    {
        path: '/skills',
        component: LoremIpsum,
    },
    {
        path: '/experiences',
        component: LoremIpsum,
    },
    {
        path: '/goals',
        component: LoremIpsum,
    },
    {
        path: '/contact',
        component: LoremIpsum,
    }
];

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(router);

app.mount('#app')
