<template>
  <div id="parent" ref="parent">
    <div id="bg"></div>
    <div id="content" v-if="loaded">
      <Home :currentPage="currentPage" @pageChange="pageChange" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import Home from "./components/Home.vue";
import { QSpinnerInfinity, useQuasar } from "quasar";
import logo from "./assets/img/logo.png";
import { useRouter } from "vue-router";
const $q = useQuasar();
const router = useRouter();
const currentPage = ref(0);

const mapping = [
  "/",
  "/academics",
  "/my-experiences",
  "/my-skills",
  "/my-goals",
  "/contact-me",
];

router.beforeEach((to, _, next) => {
  const pageIdx = mapping
    .map((v, idx) => [v, idx])
    .find((v) => v[0] === to.path);
  currentPage.value = +(pageIdx || 0);
  next();
});

const pageChange = (idx: number) => {
  if (idx >= 0 && idx < mapping.length) router.push(mapping[idx]);
};

const parent = ref<HTMLDivElement | null>(null);
const loaded = ref(false);

setTimeout(() => loaded.value = true, 500);

watch(
  () => loaded.value,
  (v) => {
    if (v && $q.loading.isActive) {
      $q.loading.hide();
    }
    if (!v && !$q.loading.isActive) {
      $q.loading.show({
        message: `<div><img src="${logo}" /></div> <div class="loading-text">Chargement...</div>`,
        spinnerColor: "primary",
        messageColor: "secondary",
        backgroundColor: "dark",
        customClass: "loading-spinner",

        spinnerSize: 100,
        spinner: QSpinnerInfinity,
        html: true,
      });
    }
  },
  { immediate: true },
);
</script>
<style>
body {
  margin: 0;
}
.loading-spinner {
  background-color: #000000;
}
.q-loading__message {
  display: flex;
  flex-direction: column;
  font-size: 3ch;
}
</style>
<style scoped>
#parent {
  position: relative;
  width: 100%;
  height: 100%;
}
#bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("https://blog.ike.icu/content/images/size/w1920/2024/02/jb5rpeIA_4x.jpg");
}

#content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  backdrop-filter: blur(1.5rem);
}
@media (min-width: 760px) and (min-height: 760px) {
  #content {
  }
}
</style>

<style scoped>
button {
  z-index: 999;
  position: absolute;
}
</style>
