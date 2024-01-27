<script setup lang="ts">
import {NamedColor} from "quasar";

type TimeLineEntryType = "Heading" | "Entry"
type TimeLineEntry = {
  type: TimeLineEntryType;
  title?: string;
  subtitle?: string;
  icon?: string;
  innerHtml?: string
}
export type TimeLineDefinition = {
  color: NamedColor;
  entries: TimeLineEntry[];
}


const {definition} = defineProps<{
  definition: TimeLineDefinition;
}>();
</script>

<template>
  <div id="timeline-container">
    <q-timeline id="timeline" :color="definition.color">
      <q-timeline-entry v-for="(entry, index) in definition.entries" :heading="entry.type === 'Heading'" :key="index" :title="entry.title" :subtitle="entry.subtitle"  :icon="entry.icon">
        <div v-html="entry.innerHtml"></div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<style scoped>
#timeline {
  width: 80%;
  height: 80%;
  backdrop-filter: blur(5px);
}
#timeline-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>