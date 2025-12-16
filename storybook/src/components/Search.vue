<template>
  <div class="search">
    <div class="afs-subheader app-search-header">
      <div class="afs-typography_title afs-typography afs-subheader__title">
        Search <span class="afs-typography_paragraph afs-typography app-search-header__subtitle">({{ shortcut }})</span>
      </div>
    </div>
    <form class="form search__header" @submit.prevent="handleSubmit">
      <div class="form__section">
        <div class="afs-input">
          <input
            v-model="query"
            class="form__input afs-input__control"
            type="text"
            :placeholder="placeholder"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
          />
        </div>
        <button
          class="form__btn form__icon-search afs-btn-icon afs-btn-icon_primary afs-btn-icon_md"
          type="submit"
        >
          <AfsIcon name="search-thin-16" />
        </button>
        <button
          v-if="showFilters"
          class="form__btn afs-btn-icon afs-btn-icon_md"
          type="button"
          @click="$emit('toggleFilters')"
        >
          <AfsIcon name="filters-12" />
        </button>
      </div>
    </form>
    <div v-if="$slots.default" class="search__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * Search - Main search component matching production structure
 * @see production example.html
 */
defineOptions({ name: 'Search' });

withDefaults(
  defineProps<{
    /** Input placeholder text */
    placeholder?: string;
    /** Keyboard shortcut hint */
    shortcut?: string;
    /** Whether to show filter button */
    showFilters?: boolean;
  }>(),
  {
    placeholder: 'Search',
    shortcut: 'Ctrl+F',
    showFilters: true,
  }
);

const emit = defineEmits<{
  (e: 'submit', query: string): void;
  (e: 'focus'): void;
  (e: 'blur'): void;
  (e: 'toggleFilters'): void;
}>();

const query = ref('');

function handleSubmit() {
  emit('submit', query.value);
}
</script>

<style lang="scss">
.search {
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &__header {
    padding: 8px 16px;
  }
  
  &__body {
    flex: 1;
    overflow: auto;
  }
}

.app-search-header {
  padding: 12px 16px;
  
  &__subtitle {
    color: var(--afs-text-icon-hint, #ebebf54d);
    margin-left: 4px;
  }
}

.form {
  &__section {
    display: flex;
    gap: 4px;
  }
  
  &__input {
    flex: 1;
  }
  
  &__btn {
    flex-shrink: 0;
  }
  
  &__icon-search {
    background: var(--afs-primary-default, #0a84ff);
    
    &:hover {
      background: var(--afs-primary-hover, #409cff);
    }
  }
}

.afs-input {
  display: flex;
  width: 100%;
  
  &__control {
    width: 100%;
    padding: 8px 12px;
    font-size: 13px;
    background: var(--afs-field, #3a3a3c);
    border: 1px solid var(--afs-border, #38383a);
    border-radius: 4px;
    color: var(--afs-text-icon-primary, #fff);
    
    &::placeholder {
      color: var(--afs-text-icon-hint, #ebebf54d);
    }
    
    &:focus {
      outline: none;
      border-color: var(--afs-border-focus, #0a84ff);
    }
  }
}
</style>
