<template>
  <span class="afs-icon" :class="{ 'afs-icon--filled': filled }">
    <component :is="iconComponent" v-if="iconComponent" />
    <span v-else class="afs-icon__fallback" :title="name"></span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ 
  name: string; 
  filled?: boolean;
}>();

// Simple mapping or pure fallback. 
// Ideally this would map names to SVG components or paths.
// For now, we'll just handle a few known ones or return null to avoid errors.
const iconComponent = computed(() => {
    // In a real app this would import SVGs dynamically or from a map
    return null; 
});
</script>

<style scoped>
.afs-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: currentColor; /* Placeholder for icon mask */
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
}
.afs-icon__fallback {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
