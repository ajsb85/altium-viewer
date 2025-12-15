<template>
  <div class="afs-context-menu" :class="{ 'is-opened': isOpened }">
    <slot name="trigger" :toggle="toggle" />
    <div v-if="isOpened" class="afs-context-menu__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpened = ref(false);

const toggle = () => {
  isOpened.value = !isOpened.value;
};

const close = () => {
    isOpened.value = false;
}

const open = () => {
    isOpened.value = true;
}

defineExpose({ close, open, toggle });
</script>

<style lang="scss" scoped>
.afs-context-menu {
  position: relative;
  
  &__content {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
    min-width: 180px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 4px 0;
  }
}
</style>
