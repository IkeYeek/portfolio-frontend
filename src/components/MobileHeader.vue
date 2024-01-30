<script setup lang="ts">
import {onMounted, ref, VNodeRef, watch} from "vue";
import { router } from "../main.ts";
import { icons } from "feather-icons";
import { routerHack } from "../helpers.ts";
import vueFeather from "vue-feather";

type Props = {
  pages: {
    title: string;
    path: string;
  }[];
};

const props = defineProps<Props>();
const pages = props.pages;
const menuHtmlElement = ref<HTMLElement | null>(null);

const xIcon = icons.x.name;
const menuIcon = icons.menu.name;

const btnStatus = ref(false);

const activePageIndex = ref(0);
const currentHoverPageIndex = ref(-1);
watch(
  () => activePageIndex.value,
  (newPage) => {
    const page = pages[newPage];
    menuHtmlElement.value?.scrollIntoView({
      behavior: "smooth"
    });
    btnStatus.value = false;
    router.push(page.path);
  },
);

onMounted(() => {
  // Quircky hack because the router acts weird
  activePageIndex.value = routerHack(pages) || 0;
});
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
      <i
        v-bind:class="{ rotate: btnStatus }"
        id="menuBtn"
        @click="btnStatus = !btnStatus"
        ref="menuHtmlElement"
        ><vue-feather :type="xIcon" v-if="btnStatus" /><vue-feather
          v-else
          :type="menuIcon"
      /></i>
    </div>
    <nav>
      <Transition
        appear
        enter-active-class="animate-750ms animated zoomIn"
        leave-active-class="animate-750ms animated zoomOut"
      >
        <ul v-if="btnStatus">
          <li
            v-for="(page, index) in pages"
            :class="{
              active:
                index === activePageIndex || index === currentHoverPageIndex,
            }"
            @mouseenter="currentHoverPageIndex = index"
            @mouseleave="currentHoverPageIndex = -1"
            @click="activePageIndex = index"
          >
            {{ page.title }}
          </li>
        </ul>
      </Transition>
    </nav>
    <ul id="social-links" v-if="btnStatus">
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
  </header>
</template>

<style scoped>
#presentation {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#presentation ul {
  margin-top: 5px;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  min-width: 50vw;
  width: 100%;
}
#presentation ul li {
  display: inline;
  font-family: Neuton-Light, Helvetica, sans-serif;
  font-size: 32px;
  color: #C7A3CC;
  text-shadow: 0 0 1px #C7A3CC;
}
#menuBtn {
  width: 36px;
  height: 36px;
  cursor: pointer;
  position: relative;
  color: #C7A3CC;
  border: 2px solid #C7A3CC;
  padding: 4px 4px 0 4px;
  border-radius: 50%;
  box-shadow: 0 0 10px #C7A3CC;
  transition:
    rotate 150ms ease-out,
    scale 150ms ease-out;
}
.rotate {
  rotate: 90deg;
  scale: 1.2;
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
  padding: 0;
}
nav ul li {
  margin-top: 20px;
  padding: 5px 5px 15px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #C7A3CC;
  font-family: Gafata;
  font-size: 24px;
  color: #C7A3CC;
  transition:
    color 150ms,
    margin-left 150ms;
  text-shadow: 0 0 1px #C7A3CC;
}

header {
  min-width: 25vw;
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
  margin-bottom: 0;
  text-shadow: 0 0 1px #C7A3CC;
}
h2 {
  margin-top: 5px;
  margin-bottom: 0;
  font-family: Neuton-Light, Helvetica, sans-serif;
  font-size: 32px;
  color: #C7A3CC;
  text-shadow: 0 0 1px #C7A3CC;
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
