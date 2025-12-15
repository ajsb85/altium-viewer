<template>
  <div class="sch-view" ref="containerRef">
    <canvas ref="canvasRef" class="sch-view__canvas" />
    <div v-if="loading" class="sch-view__loading">
      <div class="sch-view__spinner" />
      <span>Loading Schematic...</span>
    </div>
    <div class="sch-view__toolbar">
      <button type="button" class="sch-view__tool" @click="zoomIn">+</button>
      <button type="button" class="sch-view__tool" @click="zoomOut">−</button>
      <button type="button" class="sch-view__tool" @click="fit">⊡</button>
    </div>
    <div class="sch-view__sheets" v-if="sheets.length > 1">
      <button
        v-for="sheet in sheets"
        :key="sheet.id"
        type="button"
        class="sch-view__sheet"
        :class="{ 'is-active': activeSheet === sheet.id }"
        @click="$emit('sheetChange', sheet.id)"
      >
        {{ sheet.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

/**
 * SCHView - Schematic rendering canvas
 * 
 * @see ViewerCore.js
 */
defineOptions({ name: 'SCHView' });

interface Sheet {
  id: string;
  name: string;
}

withDefaults(
  defineProps<{
    loading?: boolean;
    sheets?: Sheet[];
    activeSheet?: string;
  }>(),
  {
    loading: false,
    sheets: () => [],
    activeSheet: '',
  }
);

const emit = defineEmits<{
  (e: 'zoom', level: number): void;
  (e: 'sheetChange', sheetId: string): void;
}>();

const containerRef = ref<HTMLElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const zoom = ref(1);

function zoomIn() { zoom.value *= 1.25; emit('zoom', zoom.value); }
function zoomOut() { zoom.value /= 1.25; emit('zoom', zoom.value); }
function fit() { zoom.value = 1; emit('zoom', zoom.value); }

onMounted(() => {
  const canvas = canvasRef.value;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.fillStyle = '#fafafa';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#e5e7eb';
      for (let x = 0; x < canvas.width; x += 25) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 25) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }
  }
});
</script>

<style lang="scss">
.sch-view {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fafafa;
  overflow: hidden;
  
  &__canvas { width: 100%; height: 100%; }
  
  &__loading {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.9);
    font-size: 14px;
  }
  
  &__spinner {
    width: 32px;
    height: 32px;
    border: 3px solid #e5e7eb;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin { to { transform: rotate(360deg); } }
  
  &__toolbar {
    position: absolute;
    bottom: 16px;
    right: 16px;
    display: flex;
    gap: 4px;
  }
  
  &__tool {
    width: 32px;
    height: 32px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    
    &:hover { background: #f3f4f6; }
  }
  
  &__sheets {
    position: absolute;
    top: 16px;
    left: 16px;
    display: flex;
    gap: 4px;
  }
  
  &__sheet {
    padding: 6px 12px;
    font-size: 12px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    cursor: pointer;
    
    &.is-active {
      background: #3b82f6;
      border-color: #3b82f6;
      color: white;
    }
  }
}
</style>
