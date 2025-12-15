<template>
  <form class="base-form" @submit.prevent="$emit('submit', query)">
    <div class="base-form__input-wrapper">
      <AfsIcon name="search-16" class="base-form__icon" />
      <input
        ref="inputRef"
        v-model="query"
        type="text"
        class="base-form__input"
        :placeholder="placeholder"
        @input="$emit('input', query)"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
      />
      <button
        v-if="query"
        type="button"
        class="base-form__clear"
        @click="clear"
      >
        <AfsIcon name="close-12" />
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * BaseForm - Search input form
 */
defineOptions({ name: 'BaseForm' });

withDefaults(
  defineProps<{
    placeholder?: string;
    modelValue?: string;
  }>(),
  {
    placeholder: 'Search...',
    modelValue: '',
  }
);

const emit = defineEmits<{
  (e: 'submit', query: string): void;
  (e: 'input', query: string): void;
  (e: 'update:modelValue', value: string): void;
  (e: 'focus'): void;
  (e: 'blur'): void;
}>();

const query = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

function clear() {
  query.value = '';
  emit('update:modelValue', '');
  emit('input', '');
  inputRef.value?.focus();
}
</script>

<style lang="scss">
.base-form {
  &__input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  &__icon {
    position: absolute;
    left: 10px;
    color: var(--afs-text-icon-hint, #9ca3af);
    pointer-events: none;
  }
  
  &__input {
    width: 100%;
    padding: 8px 32px 8px 34px;
    font-size: 13px;
    border: 1px solid var(--afs-border, #e5e7eb);
    border-radius: 6px;
    background: var(--afs-input-bg, #fff);
    
    &:focus {
      outline: none;
      border-color: var(--afs-accent, #3b82f6);
    }
    
    &::placeholder {
      color: var(--afs-text-icon-hint, #9ca3af);
    }
  }
  
  &__clear {
    position: absolute;
    right: 8px;
    padding: 4px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--afs-text-icon-hint, #9ca3af);
    
    &:hover { color: var(--afs-text-icon-primary, #111827); }
  }
}
</style>
