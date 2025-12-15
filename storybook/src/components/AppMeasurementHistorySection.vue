<template>
  <div class="app-measurement-history-section">
    <div class="app-measurement-history-section__header">
      <span class="afs-typography_paragraph afs-typography">Measurement History</span>
      <button
        v-if="items.length > 0"
        class="afs-btn afs-btn_link afs-btn_sm"
        type="button"
        @click="$emit('clearAll')"
      >
        Clear all
      </button>
    </div>
    <div v-if="items.length === 0" class="app-measurement-history-section__empty">
      <AfsIcon name="ruler-16" class="app-measurement-history-section__empty-icon" />
      <span class="afs-typography_paragraph afs-typography">No measurements yet</span>
    </div>
    <div v-else class="app-measurement-history-section__list">
      <div
        v-for="item in items"
        :key="item.id"
        class="app-measurement-history-section__item"
        :class="{ 'is-selected': item.isSelected }"
        @click="$emit('select', item.id)"
      >
        <div class="app-measurement-history-section__item-header">
          <span class="afs-typography_paragraph afs-typography">{{ item.label }}</span>
          <button
            class="afs-btn-icon afs-btn-icon_transparent afs-btn-icon_sm"
            type="button"
            @click.stop="$emit('delete', item.id)"
          >
            <AfsIcon name="trash-16" />
          </button>
        </div>
        <div class="app-measurement-history-section__item-value">
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * AppMeasurementHistorySection - History of measurements
 * @see production example.html
 */
defineOptions({ name: 'AppMeasurementHistorySection' });

interface HistoryItem {
  id: string;
  label: string;
  value: string;
  isSelected?: boolean;
}

withDefaults(
  defineProps<{
    items: HistoryItem[];
  }>(),
  {
    items: () => [],
  }
);

defineEmits<{
  (e: 'select', itemId: string): void;
  (e: 'delete', itemId: string): void;
  (e: 'clearAll'): void;
}>();
</script>

<style lang="scss">
.app-measurement-history-section {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    font-size: 12px;
    font-weight: 500;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 24px;
    color: var(--afs-text-icon-hint, #ebebf54d);
    
    &-icon { font-size: 32px; }
  }
  
  &__list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 8px 8px;
  }
  
  &__item {
    padding: 8px 12px;
    background: var(--afs-group, #48484a);
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-hover, #636366);
    }
    
    &.is-selected {
      background: var(--afs-primary-overlay, #0a84ff33);
    }
  }
  
  &__item-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__item-value {
    font-size: 14px;
    font-weight: 500;
    font-family: monospace;
    color: var(--afs-text-icon-primary, #fff);
    margin-top: 4px;
  }
}
</style>
