<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {router} from "../main.ts";
import WorkingOnIt from "./WorkingOnIt.vue";
import DesktopHeader from "./DesktopHeader.vue";



const mainContainer = ref<HTMLDivElement | null>(null);

</script>

<template>
  <div id="panes">
    <DesktopHeader  class="desktop-only"/>
    <div id="separator" class="desktop-only"></div>
    <main ref="mainContainer">
      <div id="mainContainer">
        <WorkingOnIt />
        <!--<router-view />-->
      </div>
    </main>
  </div>
</template>

<style scoped>
/* panes */
#panes {
  display: flex;
}
#panes {
  margin: 70px 10px 10px;
}
#panes {
  margin: 70px 10px 10px;
}

/* separator */
#separator {
  height:  88vh;
  margin-right: 15px;
  margin-left: 15px;
  min-width: 3px;
  background-color: #5D2E8C;
}

#mainContainer {
  width: 100%;
  height: 100%;
}

/* main content */
main {
  width: 100%;
  min-height: 100%;
  padding: 10px;
  font-family: Neuton-Light;
  font-weight: bold;
  text-shadow: 1px 1px 2px black;
  font-size: 20px;
  color: #ebb5f3;
  overflow: auto;
  max-height: 88vh;
  z-index: 1;
  letter-spacing: 1.1pt;
  line-height: 30px;

}
main > div {
  z-index: 999;
}


::-webkit-scrollbar-track
{
  border: 5px solid #2D1B3F;

  background-color: #E0B1CB;
}

::-webkit-scrollbar
{
  width: 15px;
  background-color: #dfe6e9;
}

::-webkit-scrollbar-thumb
{
  background-color: #5D2E8C;
  border-radius: 10px;
}
</style>
