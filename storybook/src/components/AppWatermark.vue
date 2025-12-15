<template>
  <div class="app-watermark" :class="[`app-watermark--${position}`]">
    <img v-if="logoUrl" :src="logoUrl" :alt="text" class="app-watermark__logo" />
    <span v-else class="app-watermark__text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
/**
 * AppWatermark - Branding watermark
 * 
 * @see ViewerComponents.js
 */
defineOptions({ name: 'AppWatermark' });

withDefaults(
  defineProps<{
    text?: string;
    logoUrl?: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  }>(),
  {
    text: 'Altium Viewer',
    logoUrl: '',
    position: 'bottom-right',
  }
);
</script>

<style lang="scss">
.app-watermark {
  position: absolute;
  padding: 8px 12px;
  opacity: 0.5;
  pointer-events: none;
  z-index: 10;
  
  &--top-left { top: 16px; left: 16px; }
  &--top-right { top: 16px; right: 16px; }
  &--bottom-left { bottom: 16px; left: 16px; }
  &--bottom-right { bottom: 16px; right: 16px; }
  
  &__logo {
    height: 24px;
    width: auto;
  }
  
  &__text {
    font-size: 12px;
    font-weight: 500;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
}
</style>
