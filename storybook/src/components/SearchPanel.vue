<template>
  <div class="search-panel">
    <div class="search-panel__header">
      <SearchInput
        v-model="searchValue"
        :placeholder="placeholder"
        :show-filters="showFilters"
        :active-filter-name="activeFilter?.name || 'All'"
        @submit="handleSearch"
        @clear="handleClear"
        @toggle-filters="toggleFilters"
      />
    </div>
    
    <!-- Filter dropdown -->
    <Transition name="fade">
      <div v-if="isFiltersOpen" class="search-panel__filter-dropdown">
        <button
          v-for="filter in filters"
          :key="filter.id"
          type="button"
          class="search-panel__filter-option"
          :class="{ 'is-active': filter.isActive }"
          @click="selectFilter(filter)"
        >
          {{ filter.name }}
          <AfsIcon v-if="filter.isActive" name="check-12" />
        </button>
      </div>
    </Transition>
    
    <!-- Results area -->
    <div class="search-panel__body">
      <SearchResults
        :sections="resultSections"
        :query="searchValue"
        :limit="resultLimit"
        :selected-id="selectedId"
        :is-loading="isLoading"
        :empty-text="emptyText"
        @select="handleSelect"
        @show-more="handleShowMore"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SearchInput from './SearchInput.vue';
import SearchResults from './SearchResults.vue';
import AfsIcon from './AfsIcon.vue';

/**
 * SearchPanel - Complete search panel with input, filters, and results
 * 
 * @see Search.js plugin
 */
defineOptions({ name: 'SearchPanel' });

interface Filter {
  id: number;
  name: string;
  isActive?: boolean;
}

interface SearchItem {
  id: string | number;
  name: string;
  icon?: string;
}

interface SearchSection {
  id: string;
  title: string;
  items: SearchItem[];
}

const props = withDefaults(
  defineProps<{
    /** Search input placeholder */
    placeholder?: string;
    /** Available filters */
    filters?: Filter[];
    /** Search result sections */
    results?: SearchSection[];
    /** Max results per section */
    resultLimit?: number | null;
    /** Selected item ID */
    selectedId?: string | number | null;
    /** Show filter dropdown */
    showFilters?: boolean;
    /** Loading state */
    isLoading?: boolean;
    /** Empty state text */
    emptyText?: string;
  }>(),
  {
    placeholder: 'Search components, nets...',
    filters: () => [
      { id: 3, name: 'All', isActive: true },
      { id: 2, name: 'Components' },
      { id: 1, name: 'Nets' },
    ],
    results: () => [],
    resultLimit: 5,
    selectedId: null,
    showFilters: true,
    isLoading: false,
    emptyText: 'No results found',
  }
);

const emit = defineEmits<{
  (e: 'search', query: string): void;
  (e: 'clear'): void;
  (e: 'selectFilter', filter: Filter): void;
  (e: 'selectItem', item: SearchItem): void;
  (e: 'showMore'): void;
}>();

const searchValue = ref('');
const isFiltersOpen = ref(false);

const activeFilter = computed(() => 
  props.filters.find(f => f.isActive) || props.filters[0]
);

const resultSections = computed(() => props.results);

function toggleFilters() {
  isFiltersOpen.value = !isFiltersOpen.value;
}

function selectFilter(filter: Filter) {
  isFiltersOpen.value = false;
  emit('selectFilter', filter);
}

function handleSearch() {
  emit('search', searchValue.value);
}

function handleClear() {
  searchValue.value = '';
  emit('clear');
}

function handleSelect(item: SearchItem) {
  emit('selectItem', item);
}

function handleShowMore() {
  emit('showMore');
}
</script>

<style lang="scss">
.search-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--afs-sidebar, #fff);
  
  &__header {
    padding: 12px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__filter-dropdown {
    padding: 4px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__filter-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px 12px;
    background: none;
    border: none;
    border-radius: 4px;
    font-size: 13px;
    color: var(--afs-text-icon-secondary, #6b7280);
    cursor: pointer;
    transition: all 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #f3f4f6);
    }
    
    &.is-active {
      color: var(--afs-accent, #3b82f6);
      font-weight: 500;
    }
  }
  
  &__body {
    flex: 1;
    overflow-y: auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
