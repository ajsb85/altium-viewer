<template>
  <svg
    class="lib-icon"
    :class="[`lib-icon--${name}`, { 'lib-icon--filled': filled }]"
    viewBox="0 0 16 16"
    aria-hidden="true"
  >
    <use :href="`#svg-sprite--${name}`" />
  </svg>
</template>

<script setup lang="ts">
/**
 * AfsIcon - SVG Icon Component
 * 
 * Production CSS (production.css:38215-38219):
 * .lib-icon { width: 1em; height: 1em; fill: currentColor; }
 * 
 * Uses sprite sheet at /assets/icons/icons.svg
 */
defineOptions({ name: 'AfsIcon' });

withDefaults(
  defineProps<{
    name: string;
    filled?: boolean;
  }>(),
  {
    filled: false,
  }
);
</script>

<style lang="scss">
/**
 * Production CSS from production.css:38215-38219
 */
.lib-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  flex-shrink: 0;
  
  &--filled {
    fill: var(--afs-primary-default, #0a84ff);
  }
}
</style>
