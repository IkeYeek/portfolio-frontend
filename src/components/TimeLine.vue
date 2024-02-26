<script lang="ts">
import { NamedColor } from "quasar";

type TimeLineEntryType = "Heading" | "Entry";
type TimeLineEntry = {
  type: TimeLineEntryType;
  title?: string;
  subtitle?: string;
  icon?: string;
  innerHtml?: string;
  linkTo?: string;
};
export type TimeLineDefinition = {
  color: NamedColor;
  entries: TimeLineEntry[];
};
export type TimeLineProps = {
  definition: TimeLineDefinition;
};
</script>
<script setup lang="ts">
import { onBeforeUpdate, onMounted, ref } from "vue";
const emit = defineEmits<{
  (e: 'navigateTo', value: string): void
}>();
const { definition } = defineProps<TimeLineProps>();
const firstLoad = ref(false);
onMounted(() => {
  firstLoad.value = true;
});

onBeforeUpdate(() => {
  if (!firstLoad.value) return;
});

const handleClick = (entry: TimeLineEntry) => {
  if (entry.linkTo !== undefined) {
    emit("navigateTo", entry.linkTo!);
  }
};
</script>

<template>
  <div id="timeline-container">
    <Transition name="change-timeline">
      <q-timeline id="timeline" :color="definition.color">
        <q-timeline-entry
          v-for="(entry, index) in definition.entries"
          :heading="entry.type === 'Heading'"
          :key="index"
          :title="entry.title"
          :subtitle="entry.subtitle"
          :icon="entry.icon"
          :class="{
            isLinkTo: entry.linkTo !== undefined
          }"
          @click="() => handleClick(entry)"
        >
          <div v-html="entry.innerHtml"></div>
        </q-timeline-entry>
      </q-timeline>
    </Transition>
  </div>
</template>

<style scoped>
#timeline {
  width: 80%;
  height: 80%;
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
<style lang="scss">
.q-timeline__heading-title {
  text-align: center;
}
.q-timeline__heading-title:last-child {
  margin-bottom: 100px;
}
.isLinkTo h3 {
  display: flex;
  justify-content: center;
}
.isLinkTo h3 div {
  background-color: rgba(29, 29, 29, 0.5);
  border-radius: 5px;
  padding: 10px;
  transition: background-color 250ms ease-in-out;
}
.isLinkTo h3 div:hover {
  background-color: rgba(156, 39, 176, 0.25);
  cursor: pointer;
}
</style>
