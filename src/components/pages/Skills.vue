<script setup lang="ts">
import SkillsCard from "../SkillsCard.vue";
import { onMounted, onUnmounted, ref } from "vue";
import VueLogo from "../../assets/img/vue-logo.png";

const skillCards = ref<HTMLDivElement | null>(null);

const adjustHeightProgrammatically = () => {
  if (skillCards.value === null) return;
  const skillCardElements = [...skillCards.value.children];

  const maxHeight = skillCardElements.reduce((maxHeightSoFar, currentCard) => {
    const cardContent = currentCard.children[0] as HTMLElement;
    const cardHeight = cardContent.getBoundingClientRect().height;
    return cardHeight > maxHeightSoFar ? cardHeight : maxHeightSoFar;
  }, 0);

  if (maxHeight === 0) return; // TODO figure out wtf is going on

  skillCardElements.forEach((skillCard) => {
    const cardContent = skillCard.children[0] as HTMLDivElement;
    cardContent.style.height = `${maxHeight}px`;
  });
};

onMounted(() => {
  adjustHeightProgrammatically();
  window.addEventListener("resize", adjustHeightProgrammatically);
});
onUnmounted(() => {
  window.removeEventListener("resize", adjustHeightProgrammatically);
});
</script>

<template>
  <div id="skill-cards" ref="skillCards">
    <SkillsCard
      v-for="i in 8"
      :key="i"
      title="VueJS"
      imgAlt="VueJS logo"
      :imgSrc="VueLogo"
      description="lorem"
      :rating="4"
    />
  </div>
</template>

<style scoped>
#skill-cards {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
