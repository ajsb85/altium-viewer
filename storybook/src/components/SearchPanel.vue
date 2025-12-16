<template>
  <div
    class="lib-modal lib-modal_type-aside-right lib-modal_type-aside lib-modal_left-border"
    :style="{ width: `${width}px` }"
  >
    <div class="lib-modal__container afs-box afs-box_border">
      <!-- Close button -->
      <button
        class="lib-modal__close afs-btn-icon afs-btn-icon_radius-tl afs-btn-icon_radius-tr afs-btn-icon_radius-bl afs-btn-icon_radius-br afs-btn-icon_transparent afs-btn-icon_md"
        type="button"
        @click="$emit('close')"
      >
        <svg class="icon icon-cross-16 afs-btn-icon__figure">
          <use href="#svg-sprite--cross-16"></use>
        </svg>
      </button>

      <!-- Body -->
      <div class="lib-modal__body">
        <div class="search">
          <!-- Header -->
          <div class="afs-subheader app-search-header">
            <div class="afs-typography_title afs-typography afs-subheader__title afs-subheader__title_multi-line">
              {{ title }}
              <span class="afs-typography_paragraph afs-typography app-search-header__subtitle">{{ subtitle }}</span>
            </div>
          </div>

          <!-- Search Form -->
          <form class="form search__header" @submit.prevent="$emit('search', searchQuery)">
            <div class="form__section">
              <div class="afs-input">
                <input
                  v-model="searchQuery"
                  class="form__input afs-input__control afs-input_radius-tl afs-input_radius-tr afs-input_radius-bl afs-input_radius-br"
                  type="text"
                  :placeholder="placeholder"
                />
              </div>
              <button
                class="form__btn form__icon-search afs-btn-icon afs-btn-icon_radius-tl afs-btn-icon_radius-tr afs-btn-icon_radius-bl afs-btn-icon_radius-br afs-btn-icon_primary afs-btn-icon_md"
                type="submit"
              >
                <svg class="icon icon-search-thin-16 afs-btn-icon__figure">
                  <use href="#svg-sprite--search-thin-16"></use>
                </svg>
              </button>
              <button
                v-if="showFiltersButton"
                class="form__btn afs-btn-icon afs-btn-icon_radius-tl afs-btn-icon_radius-tr afs-btn-icon_radius-bl afs-btn-icon_radius-br afs-btn-icon_md"
                type="button"
                @click="$emit('toggle-filters')"
              >
                <svg class="icon icon-filters-12 afs-btn-icon__figure">
                  <use href="#svg-sprite--filters-12"></use>
                </svg>
              </button>
            </div>
          </form>

          <!-- Search Results Slot -->
          <div v-if="$slots.results" class="search__results">
            <slot name="results"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

/**
 * SearchPanel - Search Side Panel Component
 *
 * Production HTML from search panel
 * Search input with primary submit button and filters toggle.
 */

defineOptions({ name: 'SearchPanel' });

const props = withDefaults(
  defineProps<{
    /** Panel title */
    title?: string;
    /** Subtitle (e.g. shortcut hint) */
    subtitle?: string;
    /** Panel width in pixels */
    width?: number;
    /** Input placeholder */
    placeholder?: string;
    /** Whether to show filters toggle */
    showFiltersButton?: boolean;
    /** Current search query (v-model) */
    modelValue?: string;
  }>(),
  {
    title: 'Search',
    subtitle: '(Ctrl+F)',
    width: 240,
    placeholder: 'Search',
    showFiltersButton: true,
    modelValue: '',
  }
);

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'search', query: string): void;
  (e: 'toggle-filters'): void;
  (e: 'update:modelValue', value: string): void;
}>();

const searchQuery = ref(props.modelValue);
</script>

<style lang="scss">
/**
 * Production CSS from production.css
 */

/* search container */
.search {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* app-search-header */
.app-search-header__subtitle {
  color: var(--afs-text-icon-secondary, rgba(255, 255, 255, 0.6));
}

/* search form */
.search__header {
  padding: 0 1rem 1rem;
}

.form__section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.form__input {
  flex: 1 1 auto;
}

.form__btn {
  flex: 0 0 auto;
}

/* afs-btn-icon primary variant */
.afs-btn-icon_primary {
  border-color: var(--afs-primary-border, #0a84ff);
  color: var(--afs-text-icon-over-background, #fff);
  background: var(--afs-primary-default, #0a84ff);
}

.afs-btn-icon_primary:hover {
  background: var(--afs-primary-hover, #409cff);
}

/* afs-input in search */
.search .afs-input {
  flex: 1 1 auto;
}

.search .afs-input__control {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--afs-secondary-border, rgba(255, 255, 255, 0.1));
  border-radius: 4px;
  background: var(--afs-secondary-default, rgba(255, 255, 255, 0.08));
  color: var(--afs-text-icon-primary, #fff);
  font-size: 12px;
  outline: none;
  
  &::placeholder {
    color: var(--afs-text-icon-secondary, rgba(255, 255, 255, 0.4));
  }
  
  &:focus {
    border-color: var(--afs-focus, #0a84ff);
  }
}

/* search results */
.search__results {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0 1rem;
}
</style>
