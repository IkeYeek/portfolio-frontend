<script setup lang="ts">
import { ref } from "vue";
import WorkingOnIt from "./WorkingOnIt.vue";
import DesktopHeader from "./DesktopHeader.vue";
import MobileHeader from "./MobileHeader.vue";


const pages = [
  { title: "Moi", path: "/"},
  { title: "Mon Parcours", path: "/academics"},
  { title: "Mes Compétences", path: "/skills"},
  { title: "Mes Expériences", path: "/experiences"},
  { title: "Mes Objectifs", path: "/goals"},
  { title: "Me Contacter", path: "/contact"},
];
const mainContainer = ref<HTMLDivElement | null>(null);

</script>

<template>
  <div id="panes">
    <DesktopHeader  class="desktop-only" :pages="pages"/>
    <div id="separator-hr" class="desktop-only"></div>
    <MobileHeader class="mobile-only" :pages="pages"/>
    <div id="separator-vr" class="mobile-only"></div>
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

#separator-vr {
  width:  98vw;
  min-height: 3px;
  margin-top: 30px;
  margin-bottom: 15px;
  min-width: 3px;
  background-color: #5D2E8C;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

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
  position: absolute;
  transform: translateX(50%);
  right: 50%;
}
footer div {
  font-family: RobotoSlab, serif;
  font-size: 14px;
  color: #E0B1CB;

}
</style>
