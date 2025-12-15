<template>
  <div class="sch-view-module">
    <div class="sch-view-module__canvas" ref="canvasRef">
      <div class="sch-view-module__grid" :style="gridStyle" />
      <div class="sch-view-module__content">
        <slot>
          <div class="sch-view-module__placeholder">
            <AfsIcon name="schematic-16" class="sch-view-module__placeholder-icon" />
            <span class="afs-typography_paragraph afs-typography">{{ sheetName }}</span>
          </div>
        </slot>
      </div>
    </div>
    <div class="sch-view-module__info">
      <span class="sch-view-module__sheet">{{ sheetName }}</span>
      <span class="sch-view-module__zoom">{{ Math.round(zoom * 100) }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * SCHViewModule - Schematic view module for rendering sheets
 * @see production example.html
 */
defineOptions({ name: 'SCHViewModule' });

const props = withDefaults(
  defineProps<{
    sheetName?: string;
    zoom?: number;
    gridSize?: number;
    showGrid?: boolean;
  }>(),
  {
    sheetName: 'Sheet1',
    zoom: 1,
    gridSize: 20,
    showGrid: true,
  }
);

const canvasRef = ref<HTMLElement | null>(null);

const gridStyle = computed(() => ({
  backgroundSize: `${props.gridSize * props.zoom}px ${props.gridSize * props.zoom}px`,
  opacity: props.showGrid ? 0.15 : 0,
}));
</script>

<style lang="scss">
.sch-view-module {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
  background: var(--afs-background, #1c1c1e);
  overflow: hidden;
  
  &__canvas {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  &__grid {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(to right, var(--afs-border, #38383a) 1px, transparent 1px),
      linear-gradient(to bottom, var(--afs-border, #38383a) 1px, transparent 1px);
    pointer-events: none;
  }
  
  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &__placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: var(--afs-text-icon-hint, #ebebf54d);
    
    &-icon { font-size: 48px; }
  }
  
  &__info {
    position: absolute;
    bottom: 8px;
    left: 8px;
    display: flex;
    gap: 12px;
    padding: 4px 8px;
    background: var(--afs-panel, #2c2c2e);
    border-radius: 4px;
    font-size: 11px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__sheet {
    color: var(--afs-text-icon-primary, #fff);
  }
}
</style>
