<template>
  <div class="preview-panel" :id="panelId">
    <div class="preview-panel__list">
      <template v-for="item in items" :key="item.id">
        <!-- Group title support -->
        <div 
          v-if="item.groupTitle" 
          class="preview-panel__group-title afs-typography_paragraph afs-typography"
        >
          {{ item.groupTitle }}
        </div>
        <PreviewItem
          class="preview-panel__item"
          :id="item.id"
          :title="item.title"
          :imageSrc="item.imageSrc"
          :isSelected="item.id === selectedId"
          @click="handleSelect(item.id)"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import PreviewItem from './PreviewItem.vue';

/**
 * PreviewPanel - Scrollable list of preview items (schematic thumbnails)
 * 
 * Production structure (from PreviewPanel.js lines 193-194, 662, 685):
 * ```html
 * <div class="preview-panel">           <!-- scrolling container -->
 *   <div class="preview-panel__list">   <!-- item wrapper -->
 *     <div class="preview-panel__item">...</div>
 *   </div>
 * </div>
 * ```
 */
defineOptions({ name: 'PreviewPanel' });

export interface PreviewPanelItem {
  id: string;
  title: string;
  imageSrc?: string;
  groupTitle?: string;
}

const props = withDefaults(
  defineProps<{
    /** Unique panel ID (for mounting point) */
    panelId?: string;
    /** Array of preview items */
    items: PreviewPanelItem[];
    /** Currently selected item ID */
    selectedId?: string;
  }>(),
  {
    panelId: 'PreviewPanel',
    items: () => [],
    selectedId: '',
  }
);

const emit = defineEmits<{
  (e: 'select', itemId: string): void;
}>();

function handleSelect(itemId: string) {
  emit('select', itemId);
}
</script>

<style lang="scss">
/**
 * Production CSS from production.css lines 36536-36566
 */
.preview-panel {
  flex: 1 1 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1rem;
  
  // Custom scrollbar styling
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    border: 0.13rem solid transparent;
    background-clip: padding-box;
    background-color: var(--afs-scrollbar-thumb, #48484a);
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
}

.preview-panel__list {
  display: flex;
  flex-direction: column;
}

.preview-panel__group-title {
  padding: 0.5rem 0;
  color: var(--color-primary, var(--afs-text-icon-primary));
  line-height: 1.17;
}

.preview-panel__item:not(:last-child) {
  margin-bottom: 1rem;
}

.preview-panel__item + .preview-panel__group-title {
  margin-top: 0.5rem;
}
</style>
