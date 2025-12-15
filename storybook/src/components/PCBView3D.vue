<template>
  <div 
    class="pcb-view-3d"
    ref="containerRef"
    @wheel="handleZoom"
    @mousedown="startPan"
    @mousemove="handlePan"
    @mouseup="endPan"
  >
    <div class="pcb-view-3d__canvas">
      <div class="pcb-view-3d__board" :style="boardStyle">
        <div class="pcb-view-3d__face pcb-view-3d__face--top">TOP</div>
        <div class="pcb-view-3d__face pcb-view-3d__face--bottom">BOT</div>
        <div class="pcb-view-3d__face pcb-view-3d__face--front" />
        <div class="pcb-view-3d__face pcb-view-3d__face--back" />
        <div class="pcb-view-3d__face pcb-view-3d__face--left" />
        <div class="pcb-view-3d__face pcb-view-3d__face--right" />
      </div>
    </div>
    <div class="pcb-view-3d__controls">
      <button class="afs-btn-icon afs-btn-icon_transparent" @click="resetView">
        <AfsIcon name="reset-16" />
      </button>
      <button class="afs-btn-icon afs-btn-icon_transparent" @click="zoomIn">
        <AfsIcon name="zoom-in-16" />
      </button>
      <button class="afs-btn-icon afs-btn-icon_transparent" @click="zoomOut">
        <AfsIcon name="zoom-out-16" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * PCBView3D - 3D PCB view with rotation and zoom
 * CSS-based 3D perspective demo (production uses WebGL)
 */
defineOptions({ name: 'PCBView3D' });

withDefaults(
  defineProps<{
    boardWidth?: number;
    boardHeight?: number;
    boardThickness?: number;
  }>(),
  {
    boardWidth: 100,
    boardHeight: 80,
    boardThickness: 8,
  }
);

const zoom = ref(1);
const rotateX = ref(-25);
const rotateY = ref(35);
const isPanning = ref(false);
const lastPos = ref({ x: 0, y: 0 });

const boardStyle = computed(() => ({
  transform: `
    scale(${zoom.value})
    rotateX(${rotateX.value}deg)
    rotateY(${rotateY.value}deg)
  `,
}));

function handleZoom(e: WheelEvent) {
  e.preventDefault();
  zoom.value = Math.max(0.5, Math.min(3, zoom.value - e.deltaY * 0.001));
}

function startPan(e: MouseEvent) {
  isPanning.value = true;
  lastPos.value = { x: e.clientX, y: e.clientY };
}

function handlePan(e: MouseEvent) {
  if (!isPanning.value) return;
  const dx = e.clientX - lastPos.value.x;
  const dy = e.clientY - lastPos.value.y;
  rotateY.value += dx * 0.5;
  rotateX.value -= dy * 0.5;
  lastPos.value = { x: e.clientX, y: e.clientY };
}

function endPan() {
  isPanning.value = false;
}

function resetView() {
  zoom.value = 1;
  rotateX.value = -25;
  rotateY.value = 35;
}

function zoomIn() { zoom.value = Math.min(3, zoom.value + 0.2); }
function zoomOut() { zoom.value = Math.max(0.5, zoom.value - 0.2); }
</script>

<style lang="scss">
.pcb-view-3d {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
  background: linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 100%);
  overflow: hidden;
  cursor: grab;
  
  &:active { cursor: grabbing; }
  
  &__canvas {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 600px;
  }
  
  &__board {
    width: 160px;
    height: 128px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.1s;
  }
  
  &__face {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    color: var(--afs-text-icon-hint, #ebebf54d);
    backface-visibility: visible;
    
    &--top {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #00aa00 0%, #008800 100%);
      transform: translateZ(4px);
    }
    
    &--bottom {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #0066aa 0%, #004488 100%);
      transform: rotateX(180deg) translateZ(4px);
    }
    
    &--front {
      width: 100%;
      height: 8px;
      background: #cc9900;
      transform: rotateX(-90deg) translateZ(128px);
    }
    
    &--back {
      width: 100%;
      height: 8px;
      background: #aa7700;
      transform: rotateX(90deg) translateZ(0);
    }
    
    &--left {
      width: 8px;
      height: 100%;
      background: #bb8800;
      transform: rotateY(-90deg) translateZ(0);
    }
    
    &--right {
      width: 8px;
      height: 100%;
      background: #bb8800;
      transform: rotateY(90deg) translateZ(160px);
    }
  }
  
  &__controls {
    position: absolute;
    bottom: 16px;
    right: 16px;
    display: flex;
    gap: 4px;
    background: var(--afs-panel, #2c2c2e);
    border-radius: 4px;
    padding: 4px;
    border: 1px solid var(--afs-border, #38383a);
  }
}
</style>
