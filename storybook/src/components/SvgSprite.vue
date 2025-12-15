<template>
  <!-- SVG Sprite Sheet - hidden but available for use elements -->
  <div v-html="svgContent" style="display: none;" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

/**
 * SvgSprite - Loads and injects the SVG sprite sheet
 * 
 * This component fetches the icons.svg file and injects it into the DOM
 * so that <use xlink:href="#..."> elements can reference the symbols.
 */
defineOptions({ name: 'SvgSprite' });

const svgContent = ref('');

onMounted(async () => {
  try {
    const response = await fetch('/src/assets/icons.svg');
    if (response.ok) {
      svgContent.value = await response.text();
    }
  } catch (e) {
    console.warn('Failed to load SVG sprite:', e);
  }
});
</script>
