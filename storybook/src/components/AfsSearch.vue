<template>
  <form class="afs-search" @submit.prevent="$emit('search', modelValue)">
    <button
      class="afs-search__icon afs-btn-icon afs-btn-icon_radius-tl afs-btn-icon_radius-tr afs-btn-icon_radius-bl afs-btn-icon_radius-br afs-btn-icon_transparent afs-btn-icon_lg"
      type="button"
      @click="$emit('search', modelValue)"
    >
      <svg class="icon icon-search-2-16 afs-btn-icon__figure">
        <use href="#svg-sprite--search-16"></use>
      </svg>
    </button>
    <div class="afs-input">
      <input
        type="text"
        class="afs-input__control afs-search__control afs-input_radius-tl afs-input_radius-tr afs-input_radius-bl afs-input_radius-br"
        :placeholder="placeholder"
        :value="modelValue"
        @input="handleInput"
        @keydown.enter.prevent="$emit('search', modelValue)"
      />
    </div>
    <button
      v-if="modelValue && showClear"
      class="afs-search__remove-icon afs-btn-icon afs-btn-icon_radius-tl afs-btn-icon_radius-tr afs-btn-icon_radius-bl afs-btn-icon_radius-br afs-btn-icon_transparent afs-btn-icon_lg"
      type="button"
      @click="handleClear"
    >
      <svg class="icon icon-cross-16 afs-btn-icon__figure">
        <use href="#svg-sprite--cross-16"></use>
      </svg>
    </button>
  </form>
</template>

<script setup lang="ts">
/**
 * AfsSearch - Production Search Input Component
 * 
 * Production CSS from production.css:13013-13053
 * Search input with search icon, clear button, and form submission.
 */

defineOptions({ name: 'AfsSearch' });

const props = withDefaults(
  defineProps<{
    /**
     * Search query value (v-model).
     */
    modelValue?: string;
    /**
     * Input placeholder text.
     * @default 'Search'
     */
    placeholder?: string;
    /**
     * Whether to show the clear button when input has value.
     * @default true
     */
    showClear?: boolean;
  }>(),
  {
    modelValue: '',
    placeholder: 'Search',
    showClear: true,
  }
);

const emit = defineEmits<{
  /**
   * Emitted when the input value changes.
   */
  (e: 'update:modelValue', value: string): void;
  /**
   * Emitted when Enter is pressed or search icon is clicked.
   */
  (e: 'search', value: string): void;
  /**
   * Emitted when the search is cleared via the clear button.
   */
  (e: 'clear'): void;
}>();

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}

function handleClear() {
  emit('update:modelValue', '');
  emit('clear');
}
</script>

<style lang="scss">
/**
 * Production CSS from production.css:13013-13053
 */
.afs-search {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  position: relative;
  display: flex;
  align-items: center;
}

.afs-search__icon {
  position: absolute;
  top: 0;
  left: 6px;
  z-index: 1;
}

.afs-search__remove-icon {
  position: absolute;
  top: 0;
  right: 6px;
  z-index: 1;
}

.afs-search__toggle-btn:hover {
  background-color: var(--tool-button-background-hover);
}

.afs-search:disabled,
.afs-search[disabled],
.afs-search.is-disabled {
  opacity: 0.48;
  cursor: not-allowed;
  pointer-events: none;
  user-select: none;
}

.afs-search .afs-input {
  flex: 1 1 auto;
}

.afs-search .afs-search__control {
  width: 100%;
  padding: 0 38px;
  background-color: var(--afs-field-bg, rgba(255, 255, 255, 0.08));
  color: var(--afs-text-icon-secondary, rgba(255, 255, 255, 0.6));
  border: 1px solid var(--afs-field-border, transparent);
  border-radius: 8px;
  height: 32px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.2s, background-color 0.2s;

  &::placeholder {
    color: var(--afs-text-icon-secondary, rgba(255, 255, 255, 0.4));
  }

  &:focus {
    border-color: var(--afs-focus, #0a84ff);
    background-color: var(--afs-field-bg-focus, rgba(255, 255, 255, 0.12));
  }
}

.afs-search .afs-search__control_hide-right-icon {
  padding: 0 38px 0 16px;
}

/* Icon button base styles for search */
.afs-search .afs-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--afs-text-icon-secondary, rgba(255, 255, 255, 0.6));

  &:hover {
    color: var(--afs-text-icon-primary, #fff);
  }

  .icon {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
}
</style>
