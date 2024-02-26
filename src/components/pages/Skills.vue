<script setup lang="ts">
import SkillsCard from "../SkillsCard.vue";
import { onMounted, onUnmounted, ref } from "vue";
import VueLogo from "../../assets/img/vue-logo.png";
import CLogo from "../../assets/img/c-logo.png";
import CSharpLogo from "../../assets/img/csharp-logo.png";
import JavaLogo from "../../assets/img/java-logo.png";
import LinuxLogo from "../../assets/img/linux-logo.png";
import MongoLogo from "../../assets/img/mongodb-logo.png";
import NodeLogo from "../../assets/img/node-logo.png";
import PHPLogo from "../../assets/img/php-logo.png";
import PythonLogo from "../../assets/img/python-logo.png";
import ReactLogo from "../../assets/img/react-logo.png";
import RustLogo from "../../assets/img/rust-logo.png";
import SGBDRLogo from "../../assets/img/sgbdr-logo.png";
import TSLogo from "../../assets/img/ts-logo.png";
import UnityLogo from "../../assets/img/unity-logo.png";
import WebTechLogo from "../../assets/img/web-tech-logos.png";

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
  rating: number,
}

const entries: CardEntry[] = [
  {
    title: "VueJS",
    alt: "VueJS logo",
    src: VueLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "C",
    alt: "C logo",
    src: CLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "C#",
    alt: "C# logo",
    src: CSharpLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "Java",
    alt: "Java logo",
    src: JavaLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "Linux",
    alt: "Linux logo",
    src: LinuxLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "MongoDB",
    alt: "MongoDB logo",
    src: MongoLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "NodeJS",
    alt: "NodeJS logo",
    src: NodeLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "PHP",
    alt: "PHP logo",
    src: PHPLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "Python",
    alt: "Python logo",
    src: PythonLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "React",
    alt: "React logo",
    src: ReactLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "Rust",
    alt: "React logo",
    src: RustLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "SGBDR",
    alt: "Mysql / Mariadb logos",
    src: SGBDRLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "Typescript",
    alt: "Typescript logo",
    src: TSLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "Unity",
    alt: "Unity logo",
    src: UnityLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  },
  {
    title: "HTML / CSS / JS",
    alt: "HTML / CSS / JS logos",
    src: WebTechLogo,
    description: "Lorem Ipsum (todo)",
    rating: 4
  }
]

</script>

<template>
  <div id="skill-cards" ref="skillCards">
    <SkillsCard
      v-for="(card, idx) in entries"
      :key="idx"
      :title="card.title"
      :imgAlt="card.alt"
      :imgSrc="card.src"
      :description="card.description"
      :rating="card.rating"
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
