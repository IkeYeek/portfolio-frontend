<template>
  <div id="parent" ref="parent">
    <div id="threejs"><BackgroundThreeJS /></div>
    <div id="content"><AppMain /></div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import BackgroundThreeJS from "./components/BackgroundThreeJS.vue";
import AppMain from "./components/AppMain.vue";

const parent = ref<HTMLDivElement | null>(null);

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
  position: absolute;
  width: 100%;
  height: 100%;
}

#content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(1.5rem);
}
</style>

<style scoped>
button {
  z-index: 999;
  position: absolute;
}
</style>
