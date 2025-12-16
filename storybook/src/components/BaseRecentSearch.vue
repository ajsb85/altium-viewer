<template>
  <div class="base-recent-search" v-if="searches.length">
    <div class="base-recent-search__header">
      <span class="base-recent-search__title">Recent Searches</span>
      <button type="button" class="base-recent-search__clear" @click="$emit('clearAll')">Clear</button>
    </div>
    <div class="base-recent-search__list">
      <button
        v-for="search in searches"
        :key="search"
        type="button"
        class="base-recent-search__item"
        @click="$emit('select', search)"
      >
        <AfsIcon name="history-16" class="base-recent-search__icon" />
        <span class="base-recent-search__text">{{ search }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * BaseRecentSearch - Recent searches display
 */
defineOptions({ name: 'BaseRecentSearch' });

withDefaults(
  defineProps<{
    /** List of recent search queries */
    searches?: string[];
  }>(),
  {
    searches: () => [],
  }
);

defineEmits<{
  (e: 'select', search: string): void;
  (e: 'clearAll'): void;
}>();
</script>

<style lang="scss">
.base-recent-search {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
  }
  
  &__title {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
  
  &__clear {
    font-size: 11px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--afs-accent, #3b82f6);
    
    &:hover { text-decoration: underline; }
  }
  
  &__list {
    display: flex;
    flex-direction: column;
  }
  
  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    
    &:hover { background: var(--afs-secondary-selected, #f3f4f6); }
  }
  
  &__icon {
    color: var(--afs-text-icon-hint, #9ca3af);
  }
  
  &__text {
    font-size: 13px;
    color: var(--afs-text-icon-primary, #111827);
  }
}
</style>
