<template>
  <div class="snapping-control">
    <button
      type="button"
      class="snapping-control__btn"
      :class="{ 'is-active': modelValue }"
      :title="modelValue ? 'Snap to grid enabled' : 'Snap to grid disabled'"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <AfsIcon name="grid-16" />
    </button>
    
    <select
      v-if="showOptions && modelValue"
      v-model="internalSnapType"
      class="snapping-control__select"
      @change="$emit('typeChange', internalSnapType)"
    >
      <option value="grid">Grid</option>
      <option value="endpoints">Endpoints</option>
      <option value="midpoints">Midpoints</option>
      <option value="intersection">Intersection</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * Snapping - Snap points toggle and options
 * 
 * @see Snapping.js plugin
 */
defineOptions({ name: 'Snapping' });

const props = withDefaults(
  defineProps<{
    /** Snapping enabled (v-model) */
    modelValue?: boolean;
    /** Current snap type */
    snapType?: 'grid' | 'endpoints' | 'midpoints' | 'intersection';
    /** Show type dropdown */
    showOptions?: boolean;
  }>(),
  {
    modelValue: false,
    snapType: 'grid',
    showOptions: true,
  }
);

defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'typeChange', type: string): void;
}>();

const internalSnapType = ref(props.snapType);

watch(() => props.snapType, (newType) => {
  internalSnapType.value = newType;
});
</script>

<style lang="scss">
.snapping-control {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  
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
    
    &.is-active {
      background: var(--afs-accent, #3b82f6);
      border-color: var(--afs-accent, #3b82f6);
      color: white;
    }
  }
  
  &__select {
    padding: 6px 8px;
    font-size: 12px;
    border: 1px solid var(--afs-border, #e5e7eb);
    border-radius: 4px;
    background: var(--afs-input-bg, #fff);
    cursor: pointer;
  }
}
</style>
