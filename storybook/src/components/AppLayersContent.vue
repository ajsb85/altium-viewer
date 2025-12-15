<template>
  <div class="app-layers-content">
    <div class="app-layers-content__header">
      <div class="afs-typography_paragraph afs-typography_ellipsis afs-typography">
        {{ title }}
      </div>
    </div>
    <div class="app-layers-content__list">
      <div
        v-for="layer in layers"
        :key="layer.id"
        class="app-layers-content__item"
        :class="{ 'is-visible': layer.visible }"
      >
        <button
          class="app-layers-content__visibility afs-btn-icon afs-btn-icon_transparent afs-btn-icon_sm"
          type="button"
          @click="$emit('toggleVisibility', layer.id)"
        >
          <AfsIcon :name="layer.visible ? 'eye-visible-16' : 'eye-invisible-16'" />
        </button>
        <span
          class="app-layers-content__color"
          :style="{ backgroundColor: layer.color }"
        />
        <span class="afs-typography_paragraph afs-typography_ellipsis afs-typography app-layers-content__name">
          {{ layer.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * AppLayersContent - Layers list content area
 * @see production example.html
 */
defineOptions({ name: 'AppLayersContent' });

interface Layer {
  id: string;
  name: string;
  color: string;
  visible: boolean;
}

withDefaults(
  defineProps<{
    title?: string;
    layers: Layer[];
  }>(),
  {
    title: 'Layers',
    layers: () => [],
  }
);

defineEmits<{ (e: 'toggleVisibility', layerId: string): void }>();
</script>

<style lang="scss">
.app-layers-content {
  &__header {
    padding: 8px 12px;
    font-size: 12px;
    font-weight: 500;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
    border-bottom: 1px solid var(--afs-border, #38383a);
  }
  
  &__list {
    display: flex;
    flex-direction: column;
  }
  
  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-hover, #48484a);
    }
    
    &.is-visible {
      .app-layers-content__name {
        color: var(--afs-text-icon-primary, #fff);
      }
    }
  }
  
  &__visibility {
    color: var(--afs-text-icon-hint, #ebebf54d);
    
    .is-visible & {
      color: var(--afs-text-icon-primary, #fff);
    }
  }
  
  &__color {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  
  &__name {
    flex: 1;
    font-size: 12px;
    color: var(--afs-text-icon-hint, #ebebf54d);
  }
}
</style>
