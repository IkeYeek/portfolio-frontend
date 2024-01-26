<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {router} from "../main.ts";
import WorkingOnIt from "./WorkingOnIt.vue";
import DesktopHeader from "./DesktopHeader.vue";
import MobileHeader from "./MobileHeader.vue";



const mainContainer = ref<HTMLDivElement | null>(null);

</script>

<template>
  <div id="panes">
    <DesktopHeader  class="desktop-only"/>
    <div id="separator-hr" class="desktop-only"></div>
    <MobileHeader class="mobile-only"/>
    <main ref="mainContainer">
      <div id="mainContainer">
        <WorkingOnIt />
        <!--<router-view />-->
      </div>
    </main>
  </div>
  <footer class="mobile-only">
    <div id="copyleft">Copyleft <span>©</span> Lucas &lt;Ike&gt; Marquès, 2023.</div>
    <div>Fait avec Amour, Figma et VueJS 3 </div>
    <div><a href="https://github.com/IkeYeek/portfolio-frontend" target="_blank" class="external-link">Code source du site</a></div>
  </footer>
</template>

<style scoped>
/* panes */
@media (min-width: 1450px) and (min-height: 800px) {
  #panes {
    display: flex;
  }
}
#panes {
  margin: 70px 10px 10px;
}
#panes {
  margin: 70px 10px 10px;
}

/* separator */
#separator-hr {
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
footer {
  text-align: center;
}
footer div {
  font-family: RobotoSlab;
  font-size: 14px;
  color: #E0B1CB;
  text-align: left;
}
</style>
