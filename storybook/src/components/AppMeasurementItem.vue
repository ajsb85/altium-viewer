<template>
  <div class="measurement-item" :class="{ 'is-active': isActive }">
    <div class="measurement-item__header" @click="$emit('select')">
      <span class="measurement-item__label">{{ label }}</span>
      <button v-if="removable" type="button" class="measurement-item__remove" @click.stop="$emit('remove')">
        <AfsIcon name="close-12" />
      </button>
    </div>
    <div class="measurement-item__values">
      <div class="measurement-item__value">
        <span class="measurement-item__value-label">X</span>
        <span class="measurement-item__value-num">{{ formatValue(x) }}</span>
      </div>
      <div class="measurement-item__value">
        <span class="measurement-item__value-label">Y</span>
        <span class="measurement-item__value-num">{{ formatValue(y) }}</span>
      </div>
      <div class="measurement-item__value measurement-item__value--total">
        <span class="measurement-item__value-label">D</span>
        <span class="measurement-item__value-num">{{ formatValue(distance) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * AppMeasurementItem - Single measurement entry
 */
defineOptions({ name: 'AppMeasurementItem' });

const props = withDefaults(
  defineProps<{
    /** Label text */
    label?: string;
    /** X coordinates */
    x?: number;
    /** Y coordinates */
    y?: number;
    /** Distance between points */
    distance?: number;
    /** Unit suffix (e.g. 'mm') */
    unit?: string;
    /** Active selection state */
    isActive?: boolean;
    /** Whether delete button is visible */
    removable?: boolean;
  }>(),
  {
    label: 'Measurement',
    x: 0,
    y: 0,
    distance: 0,
    unit: 'mm',
    isActive: false,
    removable: true,
  }
);

defineEmits<{
  (e: 'select'): void;
  (e: 'remove'): void;
}>();

function formatValue(val: number): string {
  return `${val.toFixed(3)} ${props.unit}`;
}
</script>

<style lang="scss">
.measurement-item {
  padding: 8px 12px;
  border: 1px solid var(--afs-border, #e5e7eb);
  border-radius: 6px;
  background: var(--afs-sidebar, #fff);
  cursor: pointer;
  transition: all 0.15s;
  
  &:hover { border-color: var(--afs-accent, #3b82f6); }
  
  &.is-active {
    border-color: var(--afs-accent, #3b82f6);
    background: rgba(59, 130, 246, 0.05);
  }
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  
  &__label {
    font-size: 12px;
    font-weight: 500;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__remove {
    padding: 2px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--afs-text-icon-hint, #9ca3af);
    
    &:hover { color: var(--afs-error, #dc2626); }
  }
  
  &__values {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
  }
  
  &__value {
    text-align: center;
    
    &--total {
      background: var(--afs-group, #f3f4f6);
      border-radius: 4px;
      padding: 4px;
    }
  }
  
  &__value-label {
    display: block;
    font-size: 10px;
    color: var(--afs-text-icon-hint, #9ca3af);
    margin-bottom: 2px;
  }
  
  &__value-num {
    font-size: 11px;
    font-family: monospace;
    color: var(--afs-text-icon-primary, #111827);
  }
}
</style>
