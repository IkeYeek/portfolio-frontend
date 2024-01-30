<template>
  <div id="parent" ref="parent">
    <div id="threejs"><Suspense>
      <BackgroundThreeJS @ready="threeJSReadyHandler" />
    </Suspense></div>
    <div id="content" v-if="threeJSReady"><Home /></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch} from "vue";
import BackgroundThreeJS from "./components/BackgroundThreeJS.vue";
import Home from "./components/Home.vue";
import {QSpinnerInfinity, useQuasar} from "quasar";
import logo from "./assets/img/logo.png";
const $q = useQuasar()

const parent = ref<HTMLDivElement | null>(null);
const threeJSReady = ref(false);

watch(() => threeJSReady.value, (v) => {
  if (v && $q.loading.isActive) {
    $q.loading.hide();
  }
  if (!v && !$q.loading.isActive) {
    $q.loading.show({
      message: `<img src="${logo}"' <div class="loading-text">Chargement...</div>`,
      spinnerColor: "primary",
      messageColor: "secondary",
      backgroundColor: "dark",
      customClass: "loading-spinner",
      spinner: QSpinnerInfinity,
      html: true,
    });
  }
}, { immediate: true })

const threeJSReadyHandler = () => {
  threeJSReady.value = true;
}
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
#threejs {
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1.5rem);
}

#content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}
</style>

<style scoped>
button {
  z-index: 999;
  position: absolute;
}
</style>
