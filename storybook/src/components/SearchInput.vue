<template>
  <div class="search-input">
    <div class="search-input__wrapper">
      <AfsIcon name="search-16" class="search-input__icon" />
      <input
        ref="inputRef"
        type="text"
        class="search-input__field"
        :value="modelValue"
        :placeholder="placeholder"
        @input="handleInput"
        @keydown.enter="handleSubmit"
        @keydown.escape="handleClear"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
      />
      <button
        v-if="modelValue"
        type="button"
        class="search-input__clear"
        @click="handleClear"
      >
        <AfsIcon name="close-12" />
      </button>
    </div>
    
    <!-- Filter dropdown -->
    <div v-if="showFilters" class="search-input__filters">
      <button
        type="button"
        class="search-input__filter-btn"
        @click="$emit('toggleFilters')"
      >
        {{ activeFilterName }}
        <AfsIcon name="chevron-down-12" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * SearchInput - Search input with filter dropdown
 * 
 * @see Search.js plugin
 */
defineOptions({ name: 'SearchInput' });

const props = withDefaults(
  defineProps<{
    /** Current search value (v-model) */
    modelValue: string;
    /** Placeholder text */
    placeholder?: string;
    /** Show filter dropdown */
    showFilters?: boolean;
    /** Active filter name */
    activeFilterName?: string;
  }>(),
  {
    placeholder: 'Search components, nets...',
    showFilters: true,
    activeFilterName: 'All',
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'submit'): void;
  (e: 'clear'): void;
  (e: 'focus'): void;
  (e: 'blur'): void;
  (e: 'toggleFilters'): void;
}>();

const inputRef = ref<HTMLInputElement | null>(null);

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}

function handleSubmit() {
  emit('submit');
}

function handleClear() {
  emit('update:modelValue', '');
  emit('clear');
  inputRef.value?.focus();
}

function focus() {
  inputRef.value?.focus();
}

defineExpose({ focus });
</script>

<style lang="scss">
.search-input {
  display: flex;
  gap: 8px;
  
  &__wrapper {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
  }
  
  &__icon {
    position: absolute;
    left: 12px;
    color: var(--afs-text-icon-hint, #9ca3af);
    pointer-events: none;
  }
  
  &__field {
    width: 100%;
    padding: 8px 36px 8px 36px;
    border: 1px solid var(--afs-border, #e5e7eb);
    border-radius: 6px;
    font-size: 13px;
    color: var(--afs-text-icon-primary, #111827);
    background: var(--afs-input-bg, #fff);
    transition: border-color 0.2s, box-shadow 0.2s;
    
    &::placeholder {
      color: var(--afs-text-icon-hint, #9ca3af);
    }
    
    &:focus {
      outline: none;
      border-color: var(--afs-accent, #3b82f6);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }
  
  &__clear {
    position: absolute;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 0;
    background: var(--afs-group, #f3f4f6);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: var(--afs-text-icon-secondary, #6b7280);
    transition: all 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #e5e7eb);
      color: var(--afs-text-icon-primary, #111827);
    }
  }
  
  &__filters {
    flex-shrink: 0;
  }
  
  &__filter-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px;
    background: var(--afs-group, #f3f4f6);
    border: 1px solid var(--afs-border, #e5e7eb);
    border-radius: 6px;
    font-size: 12px;
    color: var(--afs-text-icon-secondary, #6b7280);
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      background: var(--afs-secondary-selected, #e5e7eb);
    }
  }
}
</style>
