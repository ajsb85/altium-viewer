<template>
  <div class="gerber-engine">
    <div class="gerber-engine__canvas" ref="canvasRef">
      <svg class="gerber-engine__svg" :viewBox="viewBox">
        <!-- Demo gerber rendering -->
        <g class="gerber-engine__layer" v-for="layer in layers" :key="layer.id">
          <rect 
            v-if="layer.visible"
            class="gerber-engine__aperture"
            :x="layer.x || 10"
            :y="layer.y || 10"
            :width="layer.width || 80"
            :height="layer.height || 60"
            :fill="layer.color"
            :opacity="layer.opacity || 0.8"
          />
        </g>
        <!-- Origin crosshair -->
        <line x1="0" y1="-5" x2="0" y2="5" stroke="var(--afs-text-icon-hint)" stroke-width="0.5" />
        <line x1="-5" y1="0" x2="5" y2="0" stroke="var(--afs-text-icon-hint)" stroke-width="0.5" />
      </svg>
    </div>
    <div class="gerber-engine__overlay">
      <div class="gerber-engine__coords">
        X: {{ cursorX.toFixed(3) }} mm | Y: {{ cursorY.toFixed(3) }} mm
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

/**
 * GerberEngine - Gerber file rendering engine (SVG demo)
 * Production uses WebGL/canvas
 */
defineOptions({ name: 'GerberEngine' });

interface GerberLayer {
  id: string;
  name: string;
  color: string;
  visible: boolean;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  opacity?: number;
}

const props = withDefaults(
  defineProps<{
    layers: GerberLayer[];
    width?: number;
    height?: number;
  }>(),
  {
    layers: () => [],
    width: 100,
    height: 80,
  }
);

const canvasRef = ref<HTMLElement | null>(null);
const cursorX = ref(0);
const cursorY = ref(0);

const viewBox = computed(() => `-5 -5 ${props.width + 10} ${props.height + 10}`);
</script>

<style lang="scss">
.gerber-engine {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
  background: var(--afs-background, #1c1c1e);
  overflow: hidden;
  
  &__canvas {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &__svg {
    width: 80%;
    height: 80%;
    max-width: 400px;
    max-height: 320px;
  }
  
  &__layer {
    transition: opacity 0.15s;
  }
  
  &__aperture {
    stroke: none;
  }
  
  &__overlay {
    position: absolute;
    bottom: 8px;
    left: 8px;
    right: 8px;
    display: flex;
    justify-content: center;
  }
  
  &__coords {
    padding: 4px 12px;
    background: var(--afs-panel, #2c2c2e);
    border-radius: 4px;
    font-size: 11px;
    font-family: monospace;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
}
</style>
