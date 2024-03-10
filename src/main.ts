import { createApp } from "vue";
import "./style.css";
import { Quasar, Loading } from "quasar";
import "@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import "@quasar/extras/animate/zoomOutRight.css";
import "@quasar/extras/animate/rubberBand.css";
import "@quasar/extras/animate/zoomIn.css";
import "@quasar/extras/animate/zoomOut.css";
import "@quasar/extras/animate/flip.css";
import "@quasar/extras/animate/bounceIn.css";
import "@quasar/extras/animate/bounceOut.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import content from "./components/pages/pagecontent.ts";
import FakeSkills from "./components/pages/Skills.vue";
import WhatCanIDoForYou from "./components/pages/WhatCanIDoForYou.vue";
const TimeLine = () => import("./components/TimeLine.vue");
const Contact = () => import("./components/pages/Contact.vue");
const routes = [
  {
    path: "/",
    component: TimeLine,
    props: {
      definition: content.aboutMe,
    },
  },
  {
    path: "/academics",
    component: TimeLine,
    props: {
      definition: content.academics,
    },
  },
  {
    path: "/my-skills",
    component: FakeSkills,
  },
  {
    path: "/my-experiences",
    component: TimeLine,
    props: {
      definition: content.experiences,
    },
  },
  {
    path: "/what-can-i-do",
    component: WhatCanIDoForYou,
    props: {
      definition: content.whatcanido,
    },
  },
  {
    path: "/contact-me",
    component: Contact,
  },
];

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(router);
app.use(Quasar, {
  plugins: {
    Loading,
  },
  config: {
    loading: {},
  },
});

app.mount("#app");
