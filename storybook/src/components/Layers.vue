<template>
  <div class="layers-panel">
    <!-- Layers View Tabs (Top/Bottom) -->
    <div v-if="showViewTabs" class="layers-panel__view-tabs">
      <button
        v-for="view in layersViews"
        :key="view.id"
        type="button"
        class="layers-panel__view-tab"
        :class="{ 'is-active': view.isActive }"
        @click="$emit('selectView', view.id)"
      >
        {{ view.name }}
      </button>
    </div>
    
    <!-- Layers List -->
    <div class="layers-panel__list">
      <div
        v-for="layer in layers"
        :key="layer.id"
        class="layers-panel__item"
        :class="{ 'is-hidden': !layer.isVisible }"
      >
        <div class="layers-panel__item-content">
          <div 
            class="layers-panel__color" 
            :style="{ backgroundColor: layer.color }"
          />
          <span class="layers-panel__name">{{ layer.name }}</span>
        </div>
        
        <div class="layers-panel__actions">
          <button
            type="button"
            class="layers-panel__visibility-btn"
            :class="{ 'is-visible': layer.isVisible }"
            :title="layer.isVisible ? 'Hide layer' : 'Show layer'"
            @click="toggleVisibility(layer)"
          >
            <AfsIcon :name="layer.isVisible ? 'eye-16' : 'eye-off-16'" />
          </button>
          <button
            type="button"
            class="layers-panel__only-btn"
            title="Show only this layer"
            @click="showOnly(layer)"
          >
            Only
          </button>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <div v-if="$slots.footer" class="layers-panel__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * Layers - Layers visibility panel component
 * 
 * Displays PCB layers with visibility toggles and "only" buttons.
 * Part of BoardItemsVisibility plugin.
 * 
 * @see BoardItemsVisibility/components/Layers.js
 */
defineOptions({ name: 'Layers' });

interface Layer {
  id: string | number;
  name: string;
  color?: string;
  isVisible: boolean;
}

interface LayersView {
  id: number;
  name: string;
  isActive: boolean;
}

const props = defineProps<{
  /** Array of layer items */
  layers: Layer[];
  /** Array of layer views (top/bottom) */
  layersViews?: LayersView[];
  /** Show view tabs */
  showViewTabs?: boolean;
}>();

const emit = defineEmits<{
  (e: 'toggleVisibility', layer: Layer): void;
  (e: 'showOnly', layer: Layer): void;
  (e: 'selectView', viewId: number): void;
}>();

function toggleVisibility(layer: Layer) {
  emit('toggleVisibility', layer);
}

function showOnly(layer: Layer) {
  emit('showOnly', layer);
}
</script>

<style lang="scss">
.layers-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &__view-tabs {
    display: flex;
    padding: 8px;
    gap: 4px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__view-tab {
    flex: 1;
    padding: 6px 12px;
    background: var(--afs-group, #f3f4f6);
    border: 1px solid var(--afs-border, #e5e7eb);
    border-radius: 4px;
    cursor: pointer;
    font-size: 11px;
    font-weight: 500;
    color: var(--afs-text-icon-secondary, #6b7280);
    transition: all 0.2s;
    
    &:hover {
      background: var(--afs-secondary-selected, #e5e7eb);
    }
    
    &.is-active {
      background: var(--afs-accent, #3b82f6);
      color: white;
      border-color: var(--afs-accent, #3b82f6);
    }
  }
  
  &__list {
    flex: 1;
    overflow-y: auto;
    padding: 4px 0;
  }
  
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 12px;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #f3f4f6);
    }
    
    &.is-hidden {
      opacity: 0.5;
    }
  }
  
  &__item-content {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    min-width: 0;
  }
  
  &__color {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  
  &__name {
    font-size: 12px;
    color: var(--afs-text-icon-primary, #111827);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  &__actions {
    display: flex;
    align-items: center;
    gap: 4px;
    opacity: 0;
    transition: opacity 0.15s;
    
    .layers-panel__item:hover & {
      opacity: 1;
    }
  }
  
  &__visibility-btn,
  &__only-btn {
    padding: 4px 8px;
    background: none;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    font-size: 10px;
    color: var(--afs-text-icon-secondary, #6b7280);
    transition: all 0.15s;
    
    &:hover {
      background: var(--afs-group, #f3f4f6);
      border-color: var(--afs-border, #e5e7eb);
    }
  }
  
  &__visibility-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    
    &.is-visible {
      color: var(--afs-accent, #3b82f6);
    }
  }
  
  &__footer {
    padding: 8px 12px;
    border-top: 1px solid var(--afs-border, #e5e7eb);
  }
}
</style>
