<script setup lang="ts">
import { onMounted, ref } from "vue";
import { QCard } from "quasar";
const hoverElem = ref<QCard | null>(null);
const divElem = ref<HTMLElement | null>(null);
const dummyDiv = ref<HTMLDivElement | null>(null);

const props = defineProps<{
  title: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
  rating?: number;
}>();

const setZIndex = (e: HTMLElement, v: number) =>
  (e.style.zIndex = v.toString());
const main = ref<HTMLElement | null>(null);
const hoverOn = () => {
  let delta = main.value?.scrollTop || 0;
  if (hoverElem.value === null) return;
  const t = hoverElem.value.$el as HTMLDivElement;
  const savePos = t.getBoundingClientRect();
  t.style.zIndex = "999";
  if (window.innerHeight > 800 && window.innerWidth > 1450) {
    dummyDiv.value!.style.height = "500px";
    t.style.position = "absolute";
    t.style.left = savePos.left.toString();
    t.style.top = (savePos.top - delta).toString();
  }
  setZIndex(t, 1);
};

const descriptionOpened = ref(false);

const hoverOff = () => {
  if (hoverElem.value === null) return;
  const t = hoverElem.value.$el as HTMLDivElement;
  setZIndex(t, 2);
  setTimeout(() => {
    setZIndex(t, 0);
    t.style.position = "";
    dummyDiv.value!.style.height = "0";
  }, 125);
};

onMounted(() => {
  if (hoverElem.value !== null && divElem.value !== null) {
    divElem.value!.style.minWidth = hoverElem.value!.$el.style.width;
    divElem.value!.style.minHeight = hoverElem.value!.$el.style.height;
  }
  let maybeMainElement = document.querySelector("main");
  if (maybeMainElement !== null) {
    main.value = maybeMainElement;
  }
});
</script>

<template>
  <div id="skill-card-container" ref="divElem">
    <div id="dummyDiv" ref="dumyDiv"></div>
    <q-card
      class="skill-card"
      :onmouseenter="hoverOn"
      :onmouseleave="hoverOff"
      ref="hoverElem"
      @click="descriptionOpened = true"
    >
      <q-img
        :src="props.imgSrc"
        :alt="props.imgAlt"
        width="250px"
        height="250px"
        ratio="1:1"
      >
        <div class="absolute-bottom text-h6">
          {{ props.title }}
          <span class="float-right"
            ><q-rating
              :model-value="+props.rating"
              readonly
              icon="school"
              color="secondary"
              :max="4"
              v-if="props.rating"
              ><template v-slot:tip-1>
                <q-tooltip>Connaissances de surface, à approfondir.</q-tooltip>
              </template>
              <template v-slot:tip-2>
                <q-tooltip>Déjà utilise sur un / des petits projets.</q-tooltip>
              </template>
              <template v-slot:tip-3>
                <q-tooltip
                  >Utilisé de nombreuses fois, plutôt à l'aise.</q-tooltip
                > </template
              ><template v-slot:tip-4>
                <q-tooltip
                  >Parfaitement à l'aise.</q-tooltip
                > </template
              ></q-rating
            ></span
          >
        </div>
      </q-img>
    </q-card>
    <q-dialog v-model="descriptionOpened">
      <q-card dark>
        <q-card-section>
          <div class="text-h6">{{ props.title }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
{{ props.description }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Fermer" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped>
#skill-card-container {
  padding: 20px;
  width: 290px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}
.skill-card {
  overflow: hidden;
  background-color: #2d1b3f;
  width: 250px;
  transition: all 300ms ease-in-out;
}
.skill-card:hover {
  cursor: pointer;
  scale: 1.5;
  transition: all 300ms ease-in-out;
}
</style>
