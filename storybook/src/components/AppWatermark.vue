<template>
  <div class="app-watermark">
    <div class="app-watermark__logo">
      <!-- Placeholder SVG for Altium Logo -->
      <svg width="100" height="20" viewBox="0 0 100 20" fill="currentColor">
        <text x="0" y="15" font-family="Arial" font-weight="bold" font-size="14">ALTIUM</text>
      </svg>
    </div>
    <div v-if="text" class="app-watermark__text">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.app-watermark {
  position: absolute;
  bottom: 24px;
  right: 24px;
  opacity: 0.1;
  pointer-events: none;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  &__logo {
     color: #000;
  }
  
  &__text {
      font-size: 12px;
      margin-top: 4px;
  }
}
</style>
