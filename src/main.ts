import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import 'quasar/src/css/index.sass'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import WorkingOnIt from "./components/WorkingOnIt.vue";
const routes = [
    {
        path: '/',
        component: WorkingOnIt,
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
        component: WorkingOnIt,
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
    /*
    config: {
      brand: {
        // primary: '#e46262',
        // ... or all other brand colors
      },
      notify: {...}, // default set of options for Notify Quasar plugin
      loading: {...}, // default set of options for Loading Quasar plugin
      loadingBar: { ... }, // settings for LoadingBar Quasar plugin
      // ..and many more (check Installation card on each Quasar component/directive/plugin)
    }
    */
})

app.mount('#app')
