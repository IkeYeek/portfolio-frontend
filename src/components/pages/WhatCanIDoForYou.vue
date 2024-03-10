<script setup lang="ts">
import SkillsCard from "../SkillsCard.vue";
import { onMounted, onUnmounted, ref } from "vue";
import WebLogo from "../../assets/img/web-logo.png";
import ReactLogo from "../../assets/img/react-logo.png";
import UnityOpenXRLogo from "../../assets/img/unity-openxr-logo.png";
import SoftDevLogo from "../../assets/img/soft-dev-logo.png";
import AlgorithmLogo from "../../assets/img/algorithm-logo.png";
import ComputerLogo from "../../assets/img/computer-logo.png";

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

type CardEntry = {
  title: string,
  alt: string,
  src: string,
  description: string,
}

const entries: CardEntry[] = [
  {
    title: "Développement et maintenance web full stack.",
    alt: "VueJS logo",
    src: WebLogo,
    description: "Je suis capable de conceptualiser et designer un site web de toute nature (e-commerce, portfolio, landing page etc.) et également de reprendre du code existant que ce soit pour de la maintenance que de l'extension de fonctionnalités. Je peux travailler avec toutes les technologies listées dans la page compétences. Je suis développeur web full-stack de formation et j'ai également obtenu le score de 4/5 lors de mon passage de la certification web OpQuast sur la qualité de développement web. J'essaye d'appliquer les principes listés dans la feuille de route de la certification du mieux que je peux, c'est-à-dire en prenant en compte l'UX, les problèmes d'accessibilité etc. Je peux également mettre en place un hébergement et un nom de domaine afin de vous offrir un service clé en main.",
  },
  {
    title: "Développement et maintenance d'applications mobiles avec React Native",
    alt: "VueJS logo",
    src: ReactLogo,
    description: "J'ai beaucoup d'expérience avec React et j'ai eu l'occasion de développer quelques applications avec React Native durant ma formation. J'ai aussi par le passé développé des applications cross-platform avec Apache Cordova. Je peux concevoir avec vous des applications métier répondant exactement à vos besoins.",
  },
  {
    title: "Développement et maintenance d'expériences de réalité mixtes OpenXR (VR/AR) avec Unity.",
    alt: "VueJS logo",
    src: UnityOpenXRLogo,
    description: "Mon premier framework web post-jQuery. J'ai eu l'occasion de travailler sur du Vue3 à de multiples reprises. J'aime beaucoup l'approche en composition offerte par Vue, ainsi que la gestion du cycle de vie qui me semble plus logique qu'avec React notamment.",
  },
  {
    title: "Développement et maintenance logiciel (Java / Python / C)",
    alt: "VueJS logo",
    src: SoftDevLogo,
    description: "J'ai pu faire beaucoup de Java lors de ma formation en DUT, de voir les principes de la programmation objet en détail (et les revoir en licence 3), étudier les designs patterns les plus importants etc. J'ai également fait un peu de JavaFX et de JEE.",
  },
  {
    title: "Cours d'algorithmique et de programmation BTS/BUT/L1-L2-L3.",
    alt: "VueJS logo",
    src: AlgorithmLogo,
    description: "Je dispense des cours de programmation dans les langages Python, Java, Javscript, TypeScript, C et C#, ainsi que des cours d'algorithmique et programmation pour des élèves de lycée, de BUT et de Licence. Je peux m'adapter au contenu du cours de l'élève ou bien en préparer un sur un sujet précis demandé à l'avance.",
  },
  {
    title: "Cours d'informatique personnalisés",
    alt: "VueJS logo",
    src: ComputerLogo,
    description: "Je dispense également des cours d'informatique plus généraux, sur l'utilisation d'un ordinateur ou d'outils de bureautique, pour renforcer ses connaissances comme pour en forger de nouvelles.",
  },
]

const emit = defineEmits<{
  (e: 'navigateTo', value: string): void
}>();

</script>

<template>
  <div class="isLinkTo">
    <h3>
      <div @click="emit('navigateTo', '/my-experiences')">Mes Expériences</div>
    </h3>
  </div>
  <h3>
    <div @click="emit('navigateTo', '/my-experiences')">Mes Compétences</div>
  </h3>
  <div id="skill-cards" ref="skillCards">
    <SkillsCard
        v-for="(card, idx) in entries"
        :key="idx"
        :title="card.title"
        :imgAlt="card.alt"
        :imgSrc="card.src"
        :description="card.description"
    />
    <div class="isLinkTo" style="display: block; width: 100%">
      <h3>
        <div @click="emit('navigateTo', '/contact-me')">Me Contacter</div>
      </h3>
    </div>
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
h3 {
  text-align: center;
}
</style>
