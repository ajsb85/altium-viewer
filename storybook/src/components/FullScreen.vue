<template>
  <button
    type="button"
    class="fullscreen-toggle"
    :class="{ 'is-fullscreen': isFullscreen }"
    :title="isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'"
    @click="toggle"
  >
    <AfsIcon :name="isFullscreen ? 'fullscreen-exit-16' : 'fullscreen-16'" />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * FullScreen - Fullscreen toggle button
 * 
 * @see FullScreen.js plugin
 */
defineOptions({ name: 'FullScreen' });

const props = withDefaults(
  defineProps<{
    /** Target element selector (default: document) */
    target?: string;
  }>(),
  {
    target: '',
  }
);

const emit = defineEmits<{
  (e: 'change', isFullscreen: boolean): void;
}>();

const isFullscreen = ref(false);

function toggle() {
  if (isFullscreen.value) {
    exitFullscreen();
  } else {
    enterFullscreen();
  }
}

function enterFullscreen() {
  const element = props.target 
    ? document.querySelector(props.target) 
    : document.documentElement;
    
  if (element?.requestFullscreen) {
    element.requestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

function handleFullscreenChange() {
  isFullscreen.value = !!document.fullscreenElement;
  emit('change', isFullscreen.value);
}

onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullscreenChange);
});

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange);
});
</script>

<style lang="scss">
.fullscreen-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  background: var(--afs-group, #f3f4f6);
  border: 1px solid var(--afs-border, #e5e7eb);
  border-radius: 6px;
  cursor: pointer;
  color: var(--afs-text-icon-secondary, #6b7280);
  transition: all 0.15s;
  
  &:hover {
    background: var(--afs-secondary-selected, #e5e7eb);
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &.is-fullscreen {
    background: var(--afs-accent, #3b82f6);
    border-color: var(--afs-accent, #3b82f6);
    color: white;
  }
}
</style>
