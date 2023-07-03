<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {router} from "../main.ts";
const pages = [
  { title: "Moi", path: "/"},
  { title: "Mon Parcours", path: "/academics"},
  { title: "Mes Compétences", path: "/skills"},
  { title: "Mes Expériences", path: "/experiences"},
  { title: "Mes Objectifs", path: "/goals"},
  { title: "Me Contacter", path: "/contact"},
];


const mainContainer = ref<HTMLDivElement | null>(null);

const activePageIndex = ref(0);
const currentHoverPageIndex = ref(-1);
watch(() => activePageIndex.value, (newPage) => {
  const page = pages[newPage];
  router.push(page.path);
})
onMounted(() => {
  // Quircky hack because the router acts weird
  const hash = document.URL.split("#");
  if (hash.length === 2) {
    for (let i = 0; i < pages.length; i += 1) {
      if (hash[1] === pages[i].path)
        activePageIndex.value = i;
    }
  }

})
</script>

<template>
  <div id="panes">
    <header>
      <div id="presentation">
        <h1>Lucas &lt;Ike&gt; Marquès</h1>
        <h2>Développeur passioné</h2>
        <ul>
          <li>Web</li>
          <li>Mobile</li>
          <li>XR</li>
          <li>Software</li>
        </ul>
      </div>
      <nav>
        <ul>
          <li
              v-for="(page, index) in pages"
              :class="{ active: index === activePageIndex || index === currentHoverPageIndex }"
              @mouseenter="currentHoverPageIndex=index"
              @mouseleave="currentHoverPageIndex=-1"
              @click="activePageIndex = index"
          >{{ page.title }}</li>
        </ul>
      </nav>
      <ul id="social-links">
        <li><a href="https://gitlab.com/IkeYeek" target="_blank"><img src="../assets/img/gitlab.png" alt="Logo Gitlab" /></a></li>
        <li><a href="https://github.com/IkeYeek" target="_blank"><img src="../assets/img/github.png" alt="Logo Github" /></a></li>
        <li><img src="../assets/img/twitter.png" alt="Logo Twitter" /></li>
        <li><a href="https://linkedin.com/in/lucas-marques-fr" target="_blank"><img src="../assets/img/linkedin.png" alt="Logo Linkedin" /></a></li>
      </ul>
      <footer>
        <div id="copyleft">Copyleft <span>©</span> Lucas &lt;Ike&gt; Marquès, 2023.</div>
        <div>Fait avec Amour, Figma et VueJS 3 </div>
        <div><a href="https://github.com/IkeYeek/portfolio-frontend" target="_blank" class="external-link">Code source du site</a></div>
      </footer>
    </header>
    <div id="separator"></div>
    <main ref="mainContainer">
      <div>
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* preface */
@font-face {
  font-family: "Gafata";
  src: local("Gafata"), url("src/assets/font/Gafata-Regular.ttf");
}
@font-face {
  font-family: "Neuton-Light";
  src: local("Neuton-Light"), url("src/assets/font/Neuton-Light.ttf");
}
@font-face {
  font-family: "RobotoSlab";
  src: local("RobotoSlab"), url("src/assets/font/RobotoSlab.ttf");
}
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
/* header */
header {
  min-width: 25vw;
  width: 30vw;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
#presentation {
  text-align: center;
}
h1 {
  font-family: "Gafata";
  font-size: 52px;
  color: #E0B1CB;
  margin-bottom: 0;
}
h2 {
  margin-top: 5px;
  margin-bottom: 0;
  font-family: Neuton-Light;
  font-size: 32px;
  color: #BE95C4;
}
#presentation ul {
  margin-top: 5px;
}
#presentation ul li {
  display: inline;
  font-family: Neuton-Light;
  font-size: 32px;
  color: #BE95C4;
  margin-right: 24px;
}
nav {
  justify-self: center;
}
nav ul li:hover {
  cursor: pointer;
  color: #E0B1CB;
  border-bottom: 1px solid #E0B1CB;
}
nav ul {
  list-style-type: none;
}
nav ul li {
  margin-top: 20px;
  padding: 5px 5px 15px;
  border-radius: 5px 5px 0 0;
  width: 190px;
  border-bottom: 1px solid #BE95C4;
  font-family: Gafata;
  font-size: 24px;
  color: #BE95C4;
  transition: color 150ms, margin-left 150ms;
}
.active {
  color: #E0B1CB;
  border-bottom: 1px solid #E0B1CB;
  margin-left: 15px;
}
#social-links {

}
#social-links ul {
  min-width: 30vw;
  display: flex;
}
#social-links li {
  display: inline;
  margin-right: 50px;
}
#social-links li img {
  width: 24px;
  height: 24px;
}
footer {
  text-align: center;
  position: fixed;
  bottom: 20px;
  left: 20px;
}

/* separator */
#separator {
  height:  88vh;
  margin-right: 30px;
  min-width: 3px;
  background-color: #5D2E8C;
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
footer div {
  font-family: RobotoSlab;
  font-size: 14px;
  color: #E0B1CB;
  text-align: left;
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
