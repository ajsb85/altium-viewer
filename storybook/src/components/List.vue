<template>
  <div class="list" :class="{ 'is-expanded': isExpanded }">
    <div v-for="(item, idx) in items" :key="idx" class="list-row" :class="{ 'is-selected': item.isSelected }">
      <div class="list-row__cell" v-for="(cell, cidx) in item.cells" :key="cidx">
        <template v-if="cell.type === 'icon'">
          <AfsIcon :name="cell.value" class="list-row__icon" />
        </template>
        <template v-else-if="cell.type === 'color'">
          <span class="list-row__color" :style="{ backgroundColor: cell.value }" />
        </template>
        <template v-else>
          <span class="afs-typography_paragraph afs-typography" :class="{ 'afs-typography_ellipsis': cell.ellipsis }">
            {{ cell.value }}
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * List - Generic list component for layers, search results, etc.
 * @see production example.html
 */
defineOptions({ name: 'List' });

interface ListCell {
  type?: 'text' | 'icon' | 'color';
  value: string;
  ellipsis?: boolean;
}

interface ListItem {
  cells: ListCell[];
  isSelected?: boolean;
}

withDefaults(
  defineProps<{
    items: ListItem[];
    isExpanded?: boolean;
  }>(),
  {
    isExpanded: true,
  }
);
</script>

<style lang="scss">
.list {
  display: flex;
  flex-direction: column;
}

.list-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background-color 0.15s;
  
  &:hover {
    background: var(--afs-secondary-hover, #48484a);
  }
  
  &.is-selected {
    background: var(--afs-primary-overlay, #0a84ff33);
  }
  
  &__cell {
    display: flex;
    align-items: center;
  }
  
  &__icon {
    font-size: 16px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__color {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    border: 1px solid var(--afs-border, #38383a);
  }
}

.afs-typography_ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
