<template>
  <!-- 
    SvgSprite - No-op component
    The SVG sprite is now globally injected via .storybook/preview.ts
    This component exists only for backward compatibility.
  -->
  <div class="svg-sprite" />
</template>

<script setup lang="ts">
/**
 * SvgSprite - Legacy component (no-op)
 * 
 * The SVG sprite sheet is now injected globally via .storybook/preview.ts
 * using Vite's ?raw import. This component exists only for backward
 * compatibility with existing stories that reference it.
 */
defineOptions({ name: 'SvgSprite' });
</script>

<style lang="scss">
.svg-sprite {
  display: none;
  visibility: var(--afs-hidden, hidden);
}
</style>

