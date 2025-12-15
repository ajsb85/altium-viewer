<template>
  <div class="bom-view">
    <div class="bom-view__header">
      <h3 class="bom-view__title">{{ title }}</h3>
      <div class="bom-view__actions">
        <button
          v-if="exportable"
          type="button"
          class="bom-view__export-btn"
          @click="$emit('export')"
        >
          <AfsIcon name="download-16" />
          Export
        </button>
      </div>
    </div>
    
    <div class="bom-view__search" v-if="searchable">
      <input
        v-model="searchQuery"
        type="text"
        class="bom-view__search-input"
        placeholder="Search components..."
      />
    </div>
    
    <div class="bom-view__table-container">
      <table class="bom-view__table">
        <thead>
          <tr>
            <th
              v-for="col in columns"
              :key="col.key"
              class="bom-view__th"
              :class="{ 'is-sortable': col.sortable }"
              @click="col.sortable && handleSort(col.key)"
            >
              {{ col.label }}
              <span v-if="sortKey === col.key" class="bom-view__sort-icon">
                {{ sortOrder === 'asc' ? '↑' : '↓' }}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in filteredItems"
            :key="item.id || index"
            class="bom-view__row"
            :class="{ 'is-selected': selectedId === item.id }"
            @click="$emit('select', item)"
          >
            <td v-for="col in columns" :key="col.key" class="bom-view__td">
              {{ item[col.key] }}
            </td>
          </tr>
        </tbody>
      </table>
      
      <div v-if="!filteredItems.length" class="bom-view__empty">
        {{ emptyText }}
      </div>
    </div>
    
    <div class="bom-view__footer">
      <span class="bom-view__count">{{ filteredItems.length }} items</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * BOMView - Bill of Materials list view
 * 
 * @see BOM.js plugin
 */
defineOptions({ name: 'BOMView' });

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}

interface BOMItem {
  id?: string | number;
  [key: string]: any;
}

const props = withDefaults(
  defineProps<{
    /** Panel title */
    title?: string;
    /** Table columns */
    columns?: Column[];
    /** BOM items */
    items?: BOMItem[];
    /** Selected item ID */
    selectedId?: string | number | null;
    /** Show search input */
    searchable?: boolean;
    /** Show export button */
    exportable?: boolean;
    /** Empty state text */
    emptyText?: string;
  }>(),
  {
    title: 'Bill of Materials',
    columns: () => [
      { key: 'designator', label: 'Designator', sortable: true },
      { key: 'description', label: 'Description', sortable: true },
      { key: 'quantity', label: 'Qty', sortable: true },
      { key: 'value', label: 'Value' },
    ],
    items: () => [],
    selectedId: null,
    searchable: true,
    exportable: true,
    emptyText: 'No components found',
  }
);

defineEmits<{
  (e: 'select', item: BOMItem): void;
  (e: 'export'): void;
}>();

const searchQuery = ref('');
const sortKey = ref<string | null>(null);
const sortOrder = ref<'asc' | 'desc'>('asc');

const filteredItems = computed(() => {
  let result = [...props.items];
  
  // Filter by search
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(query)
      )
    );
  }
  
  // Sort
  if (sortKey.value) {
    result.sort((a, b) => {
      const aVal = a[sortKey.value!];
      const bVal = b[sortKey.value!];
      const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true });
      return sortOrder.value === 'asc' ? cmp : -cmp;
    });
  }
  
  return result;
});

function handleSort(key: string) {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortOrder.value = 'asc';
  }
}
</script>

<style lang="scss">
.bom-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--afs-sidebar, #fff);
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__title {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__export-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    font-size: 12px;
    background: var(--afs-accent, #3b82f6);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background: var(--afs-accent-hover, #2563eb);
    }
  }
  
  &__search {
    padding: 8px 16px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__search-input {
    width: 100%;
    padding: 8px 12px;
    font-size: 13px;
    border: 1px solid var(--afs-border, #e5e7eb);
    border-radius: 4px;
    
    &:focus {
      outline: none;
      border-color: var(--afs-accent, #3b82f6);
    }
  }
  
  &__table-container {
    flex: 1;
    overflow: auto;
  }
  
  &__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
  }
  
  &__th {
    position: sticky;
    top: 0;
    padding: 10px 12px;
    text-align: left;
    font-weight: 600;
    background: var(--afs-group, #f9fafb);
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
    color: var(--afs-text-icon-secondary, #6b7280);
    
    &.is-sortable {
      cursor: pointer;
      
      &:hover {
        background: var(--afs-secondary-selected, #f3f4f6);
      }
    }
  }
  
  &__sort-icon {
    margin-left: 4px;
  }
  
  &__row {
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #f3f4f6);
    }
    
    &.is-selected {
      background: var(--afs-accent, #3b82f6);
      
      .bom-view__td {
        color: white;
      }
    }
  }
  
  &__td {
    padding: 10px 12px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__empty {
    padding: 32px 16px;
    text-align: center;
    font-size: 13px;
    color: var(--afs-text-icon-secondary, #6b7280);
  }
  
  &__footer {
    padding: 8px 16px;
    border-top: 1px solid var(--afs-border, #e5e7eb);
    font-size: 12px;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
}
</style>
