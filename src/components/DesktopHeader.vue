<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { router } from "../main.ts";
import { routerHack } from "../helpers.ts";
type Props = {
  pages: {
    title: string;
    path: string;
  }[];
};
const props = defineProps<Props>();
const pages = props.pages;

const activePageIndex = ref(0);
const currentHoverPageIndex = ref(-1);
watch(
  () => activePageIndex.value,
  (newPage) => {
    const page = pages[newPage];
    router.push(page.path);
  },
);

onMounted(() => {
  activePageIndex.value = routerHack(pages) || 0;
});

const keyupMenuHandler = (e: KeyboardEvent, pageIdx: number) => {
  if (pageIdx < pages.length && e.code === "Enter")
    activePageIndex.value = pageIdx;
};
</script>

<template>
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
          :class="{
            active:
              index === activePageIndex || index === currentHoverPageIndex,
          }"
          @mouseenter="currentHoverPageIndex = index"
          @mouseleave="currentHoverPageIndex = -1"
          @click="activePageIndex = index"
          :key="index"
          tabindex="0"
          @keyup="(e) => keyupMenuHandler(e, index)"
        >
          {{ page.title }}
        </li>
      </ul>
    </nav>
    <ul id="social-links">
      <li>
        <a href="https://gitlab.com/IkeYeek" target="_blank"
          ><img src="../assets/img/gitlab.png" alt="Logo Gitlab"
        /></a>
      </li>
      <li>
        <a href="https://github.com/IkeYeek" target="_blank"
          ><img src="../assets/img/github.png" alt="Logo Github"
        /></a>
      </li>
      <li><img src="../assets/img/twitter.png" alt="Logo Twitter" /></li>
      <li>
        <a href="https://linkedin.com/in/lucas-marques-fr" target="_blank"
          ><img src="../assets/img/linkedin.png" alt="Logo Linkedin"
        /></a>
      </li>
    </ul>
    <footer>
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
  </header>
</template>

<style scoped>
#presentation {
  text-align: center;
}

#presentation ul {
  margin-top: 5px;
  padding: 0;
}
#presentation ul li {
  display: inline;
  font-family: Neuton-Light, Helvetica, sans-serif;
  font-size: 32px;
  color: #be95c4;
  margin-right: 24px;
}
nav {
  justify-self: center;
}
nav ul li:hover {
  cursor: pointer;
  color: #e0b1cb;
  border-bottom: 1px solid #e0b1cb;
}
nav ul {
  list-style-type: none;
}
nav ul li {
  margin-top: 20px;
  padding: 5px 5px 15px;
  border-radius: 5px 5px 0 0;
  width: 190px;
  border-bottom: 1px solid #be95c4;
  font-family: Gafata;
  font-size: 24px;
  color: #be95c4;
  transition:
    color 150ms,
    margin-left 150ms;
}

.active {
  color: #e0b1cb;
  border-bottom: 1px solid #e0b1cb;
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
h1 {
  font-family: "Gafata", Helvetica, sans-serif;
  font-size: 52px;
  color: #e0b1cb;
  margin: 0;
}

h2 {
  margin-top: 5px;
  margin-bottom: 0;
  font-family: Neuton-Light, Helvetica, sans-serif;
  font-size: 32px;
  color: #be95c4;
}
footer {
  text-align: center;
  position: fixed;
  bottom: 20px;
  left: 20px;
}
footer div {
  font-family: RobotoSlab;
  font-size: 14px;
  color: #e0b1cb;
  text-align: left;
}
</style>
