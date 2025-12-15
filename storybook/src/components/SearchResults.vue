<template>
  <div class="search-results">
    <!-- Empty state -->
    <div v-if="!sections.length && !isLoading" class="search-results__empty">
      <AfsIcon v-if="emptyIcon" :name="emptyIcon" class="search-results__empty-icon" />
      <p class="search-results__empty-text">{{ emptyText }}</p>
    </div>
    
    <!-- Loading state -->
    <div v-if="isLoading" class="search-results__loading">
      <div class="search-results__loading-spinner" />
      <span>Searching...</span>
    </div>
    
    <!-- Results sections -->
    <div v-if="sections.length && !isLoading" class="search-results__sections">
      <div
        v-for="section in sections"
        :key="section.id"
        class="search-results__section"
      >
        <div class="search-results__section-header">
          <span class="search-results__section-title">{{ section.title }}</span>
          <span class="search-results__section-count">{{ section.items.length }}</span>
        </div>
        
        <ul class="search-results__list">
          <li
            v-for="item in limitItems(section.items)"
            :key="item.id"
            class="search-results__item"
            :class="{ 'is-selected': item.id === selectedId }"
            @click="selectItem(item)"
          >
            <AfsIcon v-if="item.icon" :name="item.icon" class="search-results__item-icon" />
            <span class="search-results__item-name" v-html="highlightText(item.name)" />
          </li>
        </ul>
      </div>
      
      <!-- Show more button -->
      <button
        v-if="hasMore"
        type="button"
        class="search-results__show-more"
        @click="$emit('showMore')"
      >
        Show all {{ totalCount }} results
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * SearchResults - Search results list with sections
 * 
 * @see Search/components/SearchList.js
 */
defineOptions({ name: 'SearchResults' });

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
    /** Array of result sections */
    sections: SearchSection[];
    /** Search query for highlighting */
    query?: string;
    /** Max items per section (null = no limit) */
    limit?: number | null;
    /** Currently selected item ID */
    selectedId?: string | number | null;
    /** Loading state */
    isLoading?: boolean;
    /** Empty state text */
    emptyText?: string;
    /** Empty state icon */
    emptyIcon?: string;
  }>(),
  {
    query: '',
    limit: 5,
    selectedId: null,
    isLoading: false,
    emptyText: 'No results found',
    emptyIcon: 'search-32',
  }
);

const emit = defineEmits<{
  (e: 'select', item: SearchItem): void;
  (e: 'showMore'): void;
}>();

const totalCount = computed(() => 
  props.sections.reduce((sum, s) => sum + s.items.length, 0)
);

const hasMore = computed(() => {
  if (props.limit === null) return false;
  return props.sections.some(s => s.items.length > props.limit!);
});

function limitItems(items: SearchItem[]) {
  if (props.limit === null) return items;
  return items.slice(0, props.limit);
}

function selectItem(item: SearchItem) {
  emit('select', item);
}

function highlightText(text: string): string {
  if (!props.query) return text;
  const regex = new RegExp(`(${escapeRegExp(props.query)})`, 'gi');
  return text.replace(regex, '<mark class="search-results__highlight">$1</mark>');
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
</script>

<style lang="scss">
.search-results {
  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 16px;
    text-align: center;
  }
  
  &__empty-icon {
    font-size: 32px;
    color: var(--afs-text-icon-hint, #9ca3af);
    margin-bottom: 12px;
  }
  
  &__empty-text {
    margin: 0;
    font-size: 13px;
    color: var(--afs-text-icon-secondary, #6b7280);
  }
  
  &__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 24px;
    color: var(--afs-text-icon-secondary, #6b7280);
    font-size: 13px;
  }
  
  &__loading-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid var(--afs-border, #e5e7eb);
    border-top-color: var(--afs-accent, #3b82f6);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  
  &__sections {
    padding: 4px 0;
  }
  
  &__section {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  
  &__section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 12px;
  }
  
  &__section-title {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
  
  &__section-count {
    font-size: 10px;
    color: var(--afs-text-icon-hint, #9ca3af);
    background: var(--afs-group, #f3f4f6);
    padding: 1px 6px;
    border-radius: 10px;
  }
  
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #f3f4f6);
    }
    
    &.is-selected {
      background: var(--afs-accent, #3b82f6);
      color: white;
      
      .search-results__item-icon {
        color: white;
      }
    }
  }
  
  &__item-icon {
    flex-shrink: 0;
    color: var(--afs-icons, #6b7280);
  }
  
  &__item-name {
    font-size: 13px;
    color: inherit;
  }
  
  &__highlight {
    background: var(--afs-warning-bg, #fef3c7);
    color: inherit;
    padding: 0 2px;
    border-radius: 2px;
  }
  
  &__show-more {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 8px;
    background: none;
    border: none;
    border-top: 1px solid var(--afs-border, #e5e7eb);
    font-size: 12px;
    color: var(--afs-accent, #3b82f6);
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #f3f4f6);
    }
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
