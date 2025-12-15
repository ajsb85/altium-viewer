<template>
  <div class="graphite-engine-module">
    <canvas ref="canvasRef" class="graphite-engine-module__canvas" />
    <div class="graphite-engine-module__overlay">
      <div class="graphite-engine-module__status" :class="{ 'is-ready': isReady }">
        <AfsIcon :name="isReady ? 'check-16' : 'loader-16'" class="graphite-engine-module__status-icon" />
        <span>{{ isReady ? 'Engine Ready' : 'Loading...' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * GraphiteEngineModule - Graphite rendering engine module
 * Production uses WebGL for CAM file rendering
 */
defineOptions({ name: 'GraphiteEngineModule' });

withDefaults(
  defineProps<{
    isReady?: boolean;
  }>(),
  {
    isReady: true,
  }
);

const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (canvasRef.value) {
    const ctx = canvasRef.value.getContext('2d');
    if (ctx) {
      // Demo render
      const w = canvasRef.value.width = canvasRef.value.offsetWidth;
      const h = canvasRef.value.height = canvasRef.value.offsetHeight;
      
      ctx.fillStyle = '#1c1c1e';
      ctx.fillRect(0, 0, w, h);
      
      // Grid
      ctx.strokeStyle = '#38383a';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < w; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      
      // Demo shapes
      ctx.fillStyle = '#00aa0066';
      ctx.fillRect(w * 0.2, h * 0.2, w * 0.6, h * 0.6);
      
      ctx.strokeStyle = '#ffaa00';
      ctx.lineWidth = 2;
      ctx.strokeRect(w * 0.25, h * 0.25, w * 0.5, h * 0.5);
    }
  }
});
</script>

<style lang="scss">
.graphite-engine-module {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
  background: var(--afs-background, #1c1c1e);
  
  &__canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
  
  &__overlay {
    position: absolute;
    top: 8px;
    right: 8px;
  }
  
  &__status {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: var(--afs-panel, #2c2c2e);
    border-radius: 4px;
    font-size: 11px;
    color: var(--afs-text-icon-hint, #ebebf54d);
    
    &.is-ready {
      color: var(--afs-success, #30d158);
    }
  }
  
  &__status-icon {
    font-size: 12px;
  }
}
</style>
