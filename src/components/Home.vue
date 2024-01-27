<script setup lang="ts">
import { ref } from "vue";
import DesktopHeader from "./DesktopHeader.vue";
import MobileHeader from "./MobileHeader.vue";

const pages = [
  { title: "Moi", path: "/" },
  { title: "Mon Parcours", path: "/academics" },
  { title: "Mes Compétences", path: "/skills" },
  { title: "Mes Expériences", path: "/experiences" },
  { title: "Mes Objectifs", path: "/goals" },
  { title: "Me Contacter", path: "/contact" },
];
const mainContainer = ref<HTMLDivElement | null>(null);
</script>

<template>
  <div id="panes" class="desktop-only-perso">
    <DesktopHeader :pages="pages" />
    <div id="separator-hr" class="desktop-only-perso"></div>
    <main ref="mainContainer">
      <div id="mainContainer">
        <router-view />
      </div>
    </main>
  </div>
  <div class="mobile-only-perso">
    <MobileHeader :pages="pages" />
    <router-view />
    <footer class="mobile-only-perso">
      <div id="copyleft">
        Copyleft <span>©</span> Lucas &lt;Ike&gt; Marquès, 2023.
      </div>
      <div>Fait avec Amour, Figma et VueJS 3</div>
      <div>
        <a
          href="https://github.com/IkeYeek/portfolio-frontend"
          target="_blank"
          class="external-link"
          >Code source du site</a
        >
      </div>
    </footer>
  </div>
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
  height: 88vh;
  margin-right: 15px;
  margin-left: 15px;
  min-width: 3px;
  background-color: #5d2e8c;
}

#separator-vr {
  width: 98vw;
  min-height: 3px;
  margin-top: 30px;
  margin-bottom: 15px;
  min-width: 3px;
  background-color: #5d2e8c;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

#mainContainer {
  width: 100%;
  height: 100%;
  max-width: 100vw;
}

/* main content */
main {
  width: 100%;
  min-height: 100%;

  overflow: auto;
  max-height: 88vh;
  z-index: 1;
}
main > div {
  z-index: 999;
}

::-webkit-scrollbar-track {
  border: 5px solid #2d1b3f;

  background-color: #e0b1cb;
}

::-webkit-scrollbar {
  width: 15px;
  background-color: #dfe6e9;
}

::-webkit-scrollbar-thumb {
  background-color: #5d2e8c;
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
  color: #e0b1cb;
}
</style>