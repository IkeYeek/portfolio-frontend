<template>
  <div id="parent" ref="parent">
    <div id="threejs"><Suspense>
      <BackgroundThreeJS @ready="threeJSReadyHandler" />
    </Suspense></div>
    <div id="content" v-if="threeJSReady"><Home /></div>
  </div>
</template>

<script lang="ts" setup>
import {Component, ref, watch} from "vue";
import BackgroundThreeJS from "./components/BackgroundThreeJS.vue";
import Home from "./components/Home.vue";
import {
  QSpinnerBall,
  QSpinnerBox,
  QSpinnerHourglass,
  QSpinnerInfinity, QSpinnerOrbit, QSpinnerOval,
  useQuasar
} from "quasar";
const $q = useQuasar()

const parent = ref<HTMLDivElement | null>(null);
const threeJSReady = ref(false);

const randomSpinner = (): Component => {
  const spinners: Component[] = [QSpinnerBall, QSpinnerBox, QSpinnerHourglass, QSpinnerInfinity, QSpinnerOrbit, QSpinnerOval];
  return spinners[Math.floor(spinners.length * Math.random())];
}

watch(() => threeJSReady.value, (v) => {
  if (v && $q.loading.isActive) {
    $q.loading.hide();
  }
  if (!v && !$q.loading.isActive) {
    $q.loading.show({
      delay: 100,
      message: "Chargement...",
      spinnerColor: "secondary",
      messageColor: "primary",
      backgroundColor: "accent",
      spinner: randomSpinner()
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
