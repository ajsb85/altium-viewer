<template>
  <div class="bom-view-on-premise">
    <div class="bom-view-on-premise__header">
      <AfsIcon name="bom-16" class="bom-view-on-premise__icon" />
      <span class="afs-typography_title afs-typography">Bill of Materials</span>
      <span class="bom-view-on-premise__badge">On-Premise</span>
    </div>
    <div class="bom-view-on-premise__toolbar">
      <div class="afs-input bom-view-on-premise__search">
        <input 
          v-model="searchQuery"
          class="afs-input__control"
          type="text"
          placeholder="Search components..."
        />
      </div>
      <button class="afs-btn afs-btn_secondary afs-btn_sm" @click="$emit('export')">
        <AfsIcon name="download-16" />
        Export
      </button>
    </div>
    <div class="bom-view-on-premise__table-wrapper">
      <table class="bom-view-on-premise__table">
        <thead>
          <tr>
            <th v-for="col in columns" :key="col.id" class="bom-view-on-premise__th">
              {{ col.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(row, idx) in filteredItems" 
            :key="idx" 
            class="bom-view-on-premise__row"
            :class="{ 'is-selected': row.isSelected }"
            @click="$emit('select', idx)"
          >
            <td v-for="col in columns" :key="col.id" class="bom-view-on-premise__td">
              {{ row[col.id] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bom-view-on-premise__footer">
      <span>{{ filteredItems.length }} of {{ items.length }} items</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * BOMViewOnPremise - On-premise BOM view variant
 * @see production example.html
 */
defineOptions({ name: 'BOMViewOnPremise' });

interface Column {
  id: string;
  label: string;
}

const props = withDefaults(
  defineProps<{
    /** Table columns definition */
    columns: Column[];
    /** Data items for the BOM table */
    items: Record<string, string | number | boolean>[];
  }>(),
  {
    columns: () => [],
    items: () => [],
  }
);

defineEmits<{
  (e: 'select', index: number): void;
  (e: 'export'): void;
}>();

const searchQuery = ref('');

const filteredItems = computed(() => {
  if (!searchQuery.value) return props.items;
  const q = searchQuery.value.toLowerCase();
  return props.items.filter(item => 
    Object.values(item).some(v => String(v).toLowerCase().includes(q))
  );
});
</script>

<style lang="scss">
.bom-view-on-premise {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--afs-panel, #2c2c2e);
  border-radius: 4px;
  overflow: hidden;
  
  &__header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--afs-border, #38383a);
  }
  
  &__icon {
    font-size: 16px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__badge {
    margin-left: auto;
    padding: 2px 8px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    background: var(--afs-warning, #ffd60a);
    color: #000;
    border-radius: 2px;
  }
  
  &__toolbar {
    display: flex;
    gap: 8px;
    padding: 8px 16px;
    background: var(--afs-group, #48484a);
  }
  
  &__search {
    flex: 1;
  }
  
  &__table-wrapper {
    flex: 1;
    overflow: auto;
  }
  
  &__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
  }
  
  &__th {
    text-align: left;
    padding: 8px 12px;
    background: var(--afs-group, #48484a);
    color: var(--afs-text-icon-secondary, #ebebf5a6);
    font-weight: 500;
    position: sticky;
    top: 0;
  }
  
  &__row {
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover { background: var(--afs-secondary-hover, #48484a); }
    &.is-selected { background: var(--afs-primary-overlay, #0a84ff33); }
  }
  
  &__td {
    padding: 8px 12px;
    color: var(--afs-text-icon-primary, #fff);
    border-bottom: 1px solid var(--afs-border, #38383a);
  }
  
  &__footer {
    padding: 8px 16px;
    font-size: 11px;
    color: var(--afs-text-icon-hint, #ebebf54d);
    border-top: 1px solid var(--afs-border, #38383a);
  }
}
</style>
