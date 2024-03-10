<script setup lang="ts">
import SkillsCard from "../ClickeableCard.vue";
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
import DockerLogo from "../../assets/img/docker-logo.png";

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
    description: "Mon premier framework web post-jQuery. J'ai eu l'occasion de travailler sur du Vue3 à de multiples reprises. J'aime beaucoup l'approche en composition offerte par Vue, ainsi que la gestion du cycle de vie qui me semble plus logique qu'avec React notamment.",
    rating: 3
  },
  {
    title: "C",
    alt: "C logo",
    src: CLogo,
    description: "J'ai beaucoup fait de C, principalement au niveau scolaire lors des cours de programmation système. J'ai des bases sur l'API Posix et globalement j'apprécie travailler en C bien que mon langage système goto devient petit à petit Rust.",
    rating: 2
  },
  {
    title: "C#",
    alt: "C# logo",
    src: CSharpLogo,
    description: "J'ai beaucoup utilisé C# pour scripter des environnements XR dans Unity pour mon travail avec L'I2M, et j'ai pu apprécier l'élégance de sa syntaxe même si je la trouve assez inconsistante. J'ai aussi pu travailler avec des Windows Form et du .NET pendant mes études.",
    rating: 2
  },
  {
    title: "Java",
    alt: "Java logo",
    src: JavaLogo,
    description: "Mon premier langage de programmation à proprement parler, pour personnaliser mes premiers launchers et mods minecraft il y a plus de 10 ans ! Je le trouvais horriblement complexe à l'époque. Après les années",
    rating: 4
  },
  {
    title: "Linux",
    alt: "Linux logo",
    src: LinuxLogo,
    description: "Convaincu à l'époque par le SiteDuZéro, je tourne quasi exclusivement sous linux pour mon usage quotidien de mon PC. D'abord Debian puis Ubuntu, j'ai appris à travailler dans cet environnement client, et également à administrer un serveur linux à mon niveau, c'est à dire avec une sécurité décente et du docker à foison !",
    rating: 4
  },
  {
    title: "MongoDB",
    alt: "MongoDB logo",
    src: MongoLogo,
    description: "Pour les PoC ou pour certains cas d'usage d'aggrégation de données très simples, j'ai tendance à apprécier son usage et sa simplicité de mise en place.",
    rating: 2
  },
  {
    title: "NodeJS",
    alt: "NodeJS logo",
    src: NodeLogo,
    description: "Amateur de Node depuis quelques années déjà, express a longtemps été mon go-to pour faire des API Rest. Je suis désormais un peu plus réticent à l'utiliser \"partout\", pour de petites API Rest ou de la PoC je l'aime toujours autant, mais pour des projets plus sérieux j'ai tendance à me tourner vers Rust désormais.",
    rating: 4
  },
  {
    title: "PHP",
    alt: "PHP logo",
    src: PHPLogo,
    description: "Un de mes premiers langages de programmation ! J'oscillais entre le SiteDuZéro, ZesteDeSavoir et Grafikart et codais de nombreuses applications web parfaitement inutiles ! Depuis, j'ai pu formaliser ma connaissance durant mes études et notamment concernant l'utilisation de Symfony et Laravel. Donnez moi n'importe quel code Legacy PHP et j'en fais mon affaire !",
    rating: 3
  },
  {
    title: "Python",
    alt: "Python logo",
    src: PythonLogo,
    description: "J'utilise rarement python ailleurs que dans du développement de simples proof of concepts, mais j'ai déjà pu expérimenter largement ce langage (principalement avec les implémentations CPython et PyPy), que ce soit sur du scripting ou du backend web.",
    rating: 3
  },
  {
    title: "React",
    alt: "React logo",
    src: ReactLogo,
    description: "Bien qu'ayant une préférence personelle pour VueJS, j'ai beaucoup travaillé avec React notamment sur des projets scolaires mais également sur quelques petits bouts de code persos (notamment Organizr).",
    rating: 4
  },
  {
    title: "Rust",
    alt: "React logo",
    src: RustLogo,
    description: "Mon nouveau jouet ! J'ai toujours aimé la programmation système et ayant conscience des problèmes inhérents à C et C++, j'avais envie de me tourner vers un des deux gros langages systèmes: Go et Rust. J'ai choisi de commencer par Rust de par sa philosophie de code qui m'intéressait et je m'attelle désormais à forger mes connaissances dans le langage.",
    rating: 1
  },
  {
    title: "SGBDR",
    alt: "MySQL / Mariadb logos",
    src: SGBDRLogo,
    description: "Comme tout développeur j'ai également régulièrement utilisé des SGBDR. Principalement MariaDB (/MySQL) mais j'ai également lors de mon DUT eu quelques cours sur Oracle Database.",
    rating: 4
  },
  {
    title: "Typescript",
    alt: "Typescript logo",
    src: TSLogo,
    description: "Passionné de web et de programmation j'ai évidemment prit le pas de typescript. Je ne fais d'ailleurs quasiment plus de javascript sauf sur des projets déjà en place !",
    rating: 4
  },
  {
    title: "Unity",
    alt: "Unity logo",
    src: UnityLogo,
    description: "J'ai utilisé Unity durant près d'un an et demi afin de développer des expériences de réalité mixtes pour des casques tels que le Meta Quest 1/2, l'HTC Vive Focus Pro, l'Hololens ou encore le Lynx-R1. Je suis capable de m'adapter à tout projet OpenXR et peut également me plonger dans des documentations plus spécifiques au besoin.",
    rating: 3
  },
  {
    title: "HTML / CSS / JS",
    alt: "HTML / CSS / JS logos",
    src: WebTechLogo,
    description: "Mes premiers pas dans ces langages étaient avec le MOOC du siteduzero. Je n'ai cessé depuis de les utiliser et maîtrise selon moi bien ces technologies bien que le front-end ne soit pas forcément ma partie préférée !",
    rating: 3
  }
  ,
  {
    title: "Docker",
    alt: "Docker logo",
    src: DockerLogo,
    description: "J'ai appris à utiliser Docker au fur et à mesure principalement en regardant et modifiant des Docker compose, puis lors d'un cours de DevOPS dispensé durant ma licence pro. Je suis désormais capable de monter des containers personnalisés, à base de Docker compose, de Dockerfile ou des deux à la fois.",
    rating: 3
  }
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
      :rating="card.rating"
    />
    <div class="isLinkTo" style="display: block; width: 100%">
      <h3>
        <div @click="emit('navigateTo', '/what-can-i-do')">Mes Compétences</div>
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
