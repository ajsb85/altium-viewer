<template>
  <div class="variants-panel">
    <div class="variants-panel__header">
      <h3 class="variants-panel__title">{{ title }}</h3>
    </div>
    
    <div class="variants-panel__content">
      <div
        v-for="variant in variants"
        :key="variant.id"
        class="variants-panel__item"
        :class="{ 'is-selected': variant.id === selectedId }"
        @click="selectVariant(variant)"
      >
        <div class="variants-panel__item-info">
          <span class="variants-panel__item-name">{{ variant.name }}</span>
          <span v-if="variant.description" class="variants-panel__item-desc">
            {{ variant.description }}
          </span>
        </div>
        <AfsBadge v-if="variant.isDefault" size="xs">Default</AfsBadge>
      </div>
      
      <div v-if="!variants.length" class="variants-panel__empty">
        <p>No variants defined</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsBadge from './AfsBadge.vue';

/**
 * Variants - Design variants selection panel
 * 
 * @see Variants.js plugin
 */
defineOptions({ name: 'Variants' });

interface Variant {
  id: string;
  name: string;
  description?: string;
  isDefault?: boolean;
}

withDefaults(
  defineProps<{
    /** Panel title */
    title?: string;
    /** Available variants */
    variants?: Variant[];
    /** Selected variant ID */
    selectedId?: string | null;
  }>(),
  {
    title: 'Design Variants',
    variants: () => [],
    selectedId: null,
  }
);

const emit = defineEmits<{
  (e: 'select', variant: Variant): void;
}>();

function selectVariant(variant: Variant) {
  emit('select', variant);
}
</script>

<style lang="scss">
.variants-panel {
  background: var(--afs-sidebar, #fff);
  
  &__header {
    padding: 12px 16px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__title {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__content {
    padding: 4px 0;
  }
  
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #f3f4f6);
    }
    
    &.is-selected {
      background: var(--afs-accent, #3b82f6);
      
      .variants-panel__item-name,
      .variants-panel__item-desc {
        color: white;
      }
    }
  }
  
  &__item-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  
  &__item-name {
    font-size: 13px;
    font-weight: 500;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__item-desc {
    font-size: 11px;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
  
  &__empty {
    padding: 24px 16px;
    text-align: center;
    
    p {
      margin: 0;
      font-size: 13px;
      color: var(--afs-text-icon-secondary, #6b7280);
    }
  }
}
</style>
