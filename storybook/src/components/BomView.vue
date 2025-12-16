<template>
  <div class="bom">
    <!-- Search -->
    <div class="search bom__search">
      <div class="afs-search-container">
        <AfsSearch
          v-model="searchQuery"
          placeholder="Search"
          @search="handleSearch"
          @clear="handleClear"
        />
      </div>
    </div>

    <!-- Content/Table -->
    <div class="content bom__content">
      <LibTable
        :columns="tableColumns"
        :rows="filteredItems"
        :has-hover="true"
        :default-sort-key="sortKey"
        :default-sort-dir="sortDir"
        @sort="handleSort"
        @row-click="handleRowClick"
      >
        <!-- Row number cell -->
        <template #cell-rowNum="{ value }">
          <div class="content__number">{{ value }}</div>
        </template>

        <!-- Name cell with link -->
        <template #cell-name="{ value, row }">
          <AfsLink
            v-if="row.href"
            :href="row.href"
            variant="primary"
            class="content__ellipsis prevent-blur"
            :prevent-blur="true"
          >
            {{ value }}
          </AfsLink>
          <div v-else class="content__ellipsis">{{ value }}</div>
        </template>

        <!-- Price cell -->
        <template #cell-price="{ value }">
          {{ value || 'N/A' }}
        </template>

        <!-- Description cell -->
        <template #cell-description="{ value }">
          <div class="content__ellipsis">{{ value }}</div>
        </template>

        <!-- Designator cell with links -->
        <template #cell-designator="{ value, row }">
          <template v-if="Array.isArray(row.designators)">
            <AfsLink
              v-for="(des, i) in row.designators"
              :key="i"
              variant="primary"
              class="content__link prevent-blur"
              :prevent-blur="true"
              @click="handleDesignatorClick(des)"
            >
              {{ des }}
            </AfsLink>
          </template>
          <AfsLink
            v-else
            variant="primary"
            class="content__link prevent-blur"
            :prevent-blur="true"
            @click="handleDesignatorClick(value)"
          >
            {{ value }}
          </AfsLink>
        </template>

        <!-- Quantity cell -->
        <template #cell-quantity="{ value }">
          {{ value }}
        </template>
      </LibTable>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * BomView - Bill of Materials View Component
 * 
 * Production structure from bom.html
 * Displays BOM table with search, sortable columns, and component links.
 */
import { ref, computed } from 'vue';
import AfsSearch from './AfsSearch.vue';
import LibTable from './LibTable.vue';
import AfsLink from './AfsLink.vue';

export interface BomItem {
  rowNum: number;
  name: string;
  href?: string;
  price?: string;
  description: string;
  designators: string[];
  quantity: number;
}

defineOptions({ name: 'BomView' });

const props = withDefaults(
  defineProps<{
    /** List of BOM items */
    items: BomItem[];
  }>(),
  {
    items: () => [],
  }
);

const emit = defineEmits<{
  (e: 'designator-click', designator: string): void;
  (e: 'row-click', item: BomItem): void;
  (e: 'search', query: string): void;
}>();

const searchQuery = ref('');
const sortKey = ref('name');
const sortDir = ref<'asc' | 'desc'>('desc');

const tableColumns = [
  { key: 'rowNum', label: '№', width: '44px' },
  { key: 'name', label: 'Name', flex: '1 1 18%', sortable: true },
  { key: 'price', label: 'Price', width: '60px', align: 'right' as const, sortable: true },
  { key: 'description', label: 'Description', flex: '1 1 62%' },
  { key: 'designator', label: 'Designator', flex: '1 1 20%' },
  { key: 'quantity', label: 'Quantity', width: '82px', align: 'right' as const, sortable: true },
];

const filteredItems = computed(() => {
  let result = [...props.items];
  
  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.designators.some(d => d.toLowerCase().includes(query))
    );
  }
  
  // Sort
  if (sortKey.value) {
    result.sort((a, b) => {
      const aVal = a[sortKey.value as keyof BomItem];
      const bVal = b[sortKey.value as keyof BomItem];
      
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDir.value === 'asc' ? aVal - bVal : bVal - aVal;
      }
      
      const aStr = String(aVal || '').toLowerCase();
      const bStr = String(bVal || '').toLowerCase();
      
      if (sortDir.value === 'asc') {
        return aStr.localeCompare(bStr);
      }
      return bStr.localeCompare(aStr);
    });
  }
  
  return result.map((item) => ({
    ...item,
    designator: item.designators.join(', '),
  }));
});

function handleSearch(query: string) {
  emit('search', query);
}

function handleClear() {
  searchQuery.value = '';
}

function handleSort(key: string, dir: 'asc' | 'desc') {
  sortKey.value = key;
  sortDir.value = dir;
}

function handleRowClick(_row: Record<string, any>, index: number) {
  emit('row-click', props.items[index]);
}

function handleDesignatorClick(designator: string) {
  emit('designator-click', designator);
}
</script>

<style lang="scss">
/**
 * BOM View styles from production
 */
.bom {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--background-primary, #1c1c1e);
}

.bom__search {
  flex: 0 0 auto;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-primary, rgba(255, 255, 255, 0.1));
}

.bom__content {
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.bom__content .lib-table {
  flex: 1 1 auto;
  overflow: hidden;
}

.bom__content .lib-table__body {
  max-height: 100%;
}

/* Content cell styles */
.content__number {
  color: var(--color-secondary, rgba(255, 255, 255, 0.5));
}

.content__ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.content__link {
  display: inline-block;
  margin-right: 4px;
  
  &:not(:last-child)::after {
    content: '';
  }
}
</style>
