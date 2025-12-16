<template>
  <div class="app-objects-list">
    <div
      v-for="item in items"
      :key="item.id"
      class="app-objects-list__item"
      :class="{ 'is-selected': item.isSelected, 'is-highlighted': item.isHighlighted }"
      @click="$emit('select', item.id)"
      @mouseenter="$emit('highlight', item.id)"
      @mouseleave="$emit('unhighlight', item.id)"
    >
      <AfsIcon v-if="item.icon" :name="item.icon" class="app-objects-list__icon" />
      <span class="afs-typography_paragraph afs-typography_ellipsis afs-typography app-objects-list__name">
        {{ item.name }}
      </span>
      <span v-if="item.value" class="app-objects-list__value">
        {{ item.value }}
      </span>
    </div>
    <div v-if="items.length === 0" class="app-objects-list__empty">
      <span class="afs-typography_paragraph afs-typography">No items found</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * AppObjectsList - List of selectable objects
 * @see production example.html
 */
defineOptions({ name: 'AppObjectsList' });

interface ObjectItem {
  id: string;
  name: string;
  icon?: string;
  value?: string;
  isSelected?: boolean;
  isHighlighted?: boolean;
}

withDefaults(
  defineProps<{
    /** Array of object items to display */
    items: ObjectItem[];
  }>(),
  {
    items: () => [],
  }
);

defineEmits<{
  (e: 'select', itemId: string): void;
  (e: 'highlight', itemId: string): void;
  (e: 'unhighlight', itemId: string): void;
}>();
</script>

<style lang="scss">
.app-objects-list {
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: auto;
  
  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover, &.is-highlighted {
      background: var(--afs-secondary-hover, #48484a);
    }
    
    &.is-selected {
      background: var(--afs-primary-overlay, #0a84ff33);
    }
  }
  
  &__icon {
    font-size: 16px;
    flex-shrink: 0;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__name {
    flex: 1;
    font-size: 12px;
    color: var(--afs-text-icon-primary, #fff);
  }
  
  &__value {
    font-size: 11px;
    color: var(--afs-text-icon-hint, #ebebf54d);
    font-family: monospace;
  }
  
  &__empty {
    padding: 24px;
    text-align: center;
    color: var(--afs-text-icon-hint, #ebebf54d);
  }
}
</style>
