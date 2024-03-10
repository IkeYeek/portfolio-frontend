<script setup lang="ts">
import {onMounted, ref} from "vue";
import TimeLine from "../TimeLine.vue";
import SkillsCard from "../ClickeableCard.vue";
import handleBlogRSS from "../../blogRSSHandler.ts";

const props = defineProps(["definition"]);
const emit = defineEmits(["navigateTo"]);

type CardEntry = {
  title: string,
  alt: string,
  src: string,
  link: string
}

const entries = ref<CardEntry[]>([])

const openBlogPost = (post: CardEntry) =>{
  window.open(post.link);
}

onMounted(async () => {
  let blogPosts = (await handleBlogRSS()).item;
  for (let blogPost of blogPosts) {
    entries.value.push({
      title: blogPost.title,
      alt: blogPost.image?.alt || "no image",
      src: blogPost.image?.link || "",
      link: blogPost.link
    })
  }
  entries.value.push({
    title: "Tous mes articles",
    alt: "Logo IKE",
    src: "https://blog.ike.icu/favicon.ico",
    link: "https://blog.ike.icu/"
  })
})
</script>

<template>
  <div>
    <h4>Mes derniers articles de blog:</h4>
    <div id="skill-cards" ref="skillCards">
      <SkillsCard
          v-for="(card, idx) in entries"
          :key="idx"
          :title="card.title"
          :imgAlt="card.alt"
          :imgSrc="card.src"
          :block-modal="true"
          @click="openBlogPost(card)"
      />
    </div>
    <div id="content">
      <TimeLine :definition="props.definition"/>
    </div>
    <div class="isLinkTo" style="display: block; width: 100%">
      <h3>
        <div @click="emit('navigateTo', '/academics')">Mon Parcours</div>
      </h3>
    </div>
    <div class="isLinkTo" style="display: block; width: 100%">
      <h3>
        <div @click="emit('navigateTo', '/contact-me')">Me Contacter</div>
      </h3>
    </div>
  </div>
</template>

<style scoped>
#content {
  margin-top: 50px;
}
h4 {
  text-align: center;
}
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