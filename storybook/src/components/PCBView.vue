<template>
  <div class="pcb-view" ref="containerRef">
    <canvas ref="canvasRef" class="pcb-view__canvas" />
    <div v-if="loading" class="pcb-view__loading">
      <div class="pcb-view__spinner" />
      <span>Loading PCB...</span>
    </div>
    <div v-if="error" class="pcb-view__error">
      <AfsIcon name="warning-24" />
      <span>{{ error }}</span>
    </div>
    <div class="pcb-view__toolbar">
      <button type="button" class="pcb-view__tool" title="Zoom In" @click="zoomIn">+</button>
      <button type="button" class="pcb-view__tool" title="Zoom Out" @click="zoomOut">−</button>
      <button type="button" class="pcb-view__tool" title="Fit" @click="fit">⊡</button>
    </div>
    <div class="pcb-view__info">
      <span>Zoom: {{ Math.round(zoom * 100) }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * PCBView - 2D PCB rendering canvas
 * 
 * @see ViewerGrid.js, ViewerCore.js
 */
defineOptions({ name: 'PCBView' });

withDefaults(
  defineProps<{
    /** Loading state */
    loading?: boolean;
    /** Error message to display (if any) */
    error?: string;
  }>(),
  {
    loading: false,
    error: '',
  }
);

const emit = defineEmits<{
  (e: 'zoom', level: number): void;
  (e: 'pan', x: number, y: number): void;
}>();


const canvasRef = ref<HTMLCanvasElement | null>(null);
const zoom = ref(1);

function zoomIn() {
  zoom.value = Math.min(zoom.value * 1.25, 10);
  emit('zoom', zoom.value);
}

function zoomOut() {
  zoom.value = Math.max(zoom.value / 1.25, 0.1);
  emit('zoom', zoom.value);
}

function fit() {
  zoom.value = 1;
  emit('zoom', zoom.value);
}

onMounted(() => {
  // Canvas setup would go here
  const canvas = canvasRef.value;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // Draw placeholder grid
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }
  }
});

onUnmounted(() => {
  // Cleanup
});
</script>

<style lang="scss">
.pcb-view {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--afs-canvas-bg, #1a1a2e);
  overflow: hidden;
  
  &__canvas {
    width: 100%;
    height: 100%;
  }
  
  &__loading,
  &__error {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background: var(--afs-overlay-bg, rgba(0, 0, 0, 0.7));
    color: var(--afs-text-icon-inverse, #fff);
    font-size: 14px;
  }
  
  &__spinner {
    width: 32px;
    height: 32px;
    border: 3px solid var(--afs-border, rgba(255, 255, 255, 0.3));
    border-top-color: var(--afs-accent, #3b82f6);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  &__error {
    color: var(--afs-error, #f87171);
  }
  
  &__toolbar {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    gap: 4px;
  }
  
  &__tool {
    width: 32px;
    height: 32px;
    background: var(--afs-panel, rgba(255, 255, 255, 0.9));
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
      background: var(--afs-secondary-selected, #fff);
    }
  }
  
  &__info {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    padding: 4px 8px;
    background: var(--afs-overlay-bg, rgba(0, 0, 0, 0.6));
    color: var(--afs-text-icon-inverse, #fff);
    font-size: 11px;
    border-radius: 4px;
  }
}
</style>
