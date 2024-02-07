<script setup lang="ts">
import {onMounted, ref} from "vue";
import {QCard} from "quasar";
const hoverElem = ref<QCard | null>(null);
const divElem = ref<HTMLDivElement | null>(null);

const props = defineProps<{
  title: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
  rating: number;
}>();

const setZIndex = (e: HTMLElement, v: number) => e.style.zIndex = v.toString();
const importedImage = ref("");

const hoverOn = () => {
  const t = (hoverElem.value.$el as HTMLDivElement)
  t.style.position = "fixed";
  setZIndex(t, 1);
}

const hoverOff = () => {
  const t = (hoverElem.value.$el as HTMLDivElement)
  setZIndex(t, 2);
  setTimeout(() => {
    setZIndex(t, 0);
    t.style.position = "";
  }, 125);
}

onMounted(() => {
  if (hoverElem.value !== null && divElem.value !== null) {
    divElem.value!.style.minWidth = hoverElem.value!.$el.style.width;
    divElem.value!.style.minHeight = hoverElem.value!.$el.style.height;
  }
  import(props.imgSrc).then(v => importedImage.value = v.default)
})

</script>

<template>
<div id="skill-card-container" ref="divElem">
  <q-card class="skill-card" :onmouseenter="hoverOn" :onmouseleave="hoverOff" ref="hoverElem">
    <q-img :src="importedImage" :alt="props.imgAlt" width="250px" height="250px" ratio="1:1" >
      <div class="absolute-bottom text-h6">
        {{props.title}}
        <span class="float-right"><q-rating :model-value="+props.rating" readonly icon="school" color="secondary" :max="6"><template v-slot:tip-1>
        <q-tooltip>Connaissances de surface</q-tooltip>
      </template>
      <template v-slot:tip-2>
        <q-tooltip>Déjà expérimenté, pour tester</q-tooltip>
      </template>
      <template v-slot:tip-3>
        <q-tooltip>Déjà expérimenté, sur un projet</q-tooltip>
      </template><template v-slot:tip-4>
        <q-tooltip>Déjà utilisé, sur plusieurs projets</q-tooltip>
      </template><template v-slot:tip-5>
        <q-tooltip>Expérimenté sur de nombreux projets, considéré comme maîtrisé</q-tooltip>
      </template><template v-slot:tip-6>
        <q-tooltip>Expérimenté sur de nombreux projets, considéré comme expert</q-tooltip>
      </template></q-rating></span>
      </div>
    </q-img>
    <q-card-section>
      {{ props.description }}<template v-if="Math.random() > .7">lorem ipsum dolor sit amet.</template>
    </q-card-section>
  </q-card>
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
  background-color: #2D1B3F;
  width: 250px;
  transition: scale 250ms ease-in-out;
}
.skill-card:hover {
  cursor: pointer;
  scale: 1.5;
  transition: scale 250ms ease-in-out;
}
</style>