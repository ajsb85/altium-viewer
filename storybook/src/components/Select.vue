<template>
  <div class="select-tool" :class="{ 'is-active': isActive }">
    <button
      type="button"
      class="select-tool__btn"
      :title="isActive ? 'Selection active' : 'Enable selection'"
      @click="toggle"
    >
      <AfsIcon name="cursor-16" />
    </button>
    
    <div v-if="selectedItems.length" class="select-tool__count">
      {{ selectedItems.length }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * Select - Selection tool toggle
 * 
 * @see Select.js plugin
 */
defineOptions({ name: 'Select' });

const props = withDefaults(
  defineProps<{
    /** Tool active state (v-model) */
    modelValue?: boolean;
    /** Currently selected items */
    selectedItems?: any[];
  }>(),
  {
    modelValue: false,
    selectedItems: () => [],
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const isActive = computed(() => props.modelValue);

function toggle() {
  emit('update:modelValue', !props.modelValue);
}
</script>

<style lang="scss">
.select-tool {
  position: relative;
  display: inline-flex;
  
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    background: var(--afs-group, #f3f4f6);
    border: 1px solid var(--afs-border, #e5e7eb);
    border-radius: 6px;
    cursor: pointer;
    color: var(--afs-text-icon-secondary, #6b7280);
    transition: all 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #e5e7eb);
      color: var(--afs-text-icon-primary, #111827);
    }
  }
  
  &.is-active &__btn {
    background: var(--afs-accent, #3b82f6);
    border-color: var(--afs-accent, #3b82f6);
    color: white;
  }
  
  &__count {
    position: absolute;
    top: -4px;
    right: -4px;
    min-width: 16px;
    height: 16px;
    padding: 0 4px;
    font-size: 10px;
    font-weight: 600;
    line-height: 16px;
    text-align: center;
    background: var(--afs-error, #dc2626);
    color: white;
    border-radius: 8px;
  }
}
</style>
