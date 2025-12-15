<template>
  <div class="measurement-display" :class="{ 'is-measuring': isMeasuring }">
    <!-- Measurement header -->
    <div class="measurement-display__header">
      <h3 class="measurement-display__title">{{ title }}</h3>
      <select
        v-model="internalUnit"
        class="measurement-display__unit-select"
        @change="$emit('unitChange', internalUnit)"
      >
        <option value="mm">mm</option>
        <option value="mil">mil</option>
        <option value="inch">inch</option>
      </select>
    </div>
    
    <!-- Active measurement -->
    <div v-if="measurement" class="measurement-display__values">
      <div class="measurement-display__value-row">
        <span class="measurement-display__label">ΔX:</span>
        <span class="measurement-display__value">{{ formatValue(measurement.x) }}</span>
      </div>
      <div class="measurement-display__value-row">
        <span class="measurement-display__label">ΔY:</span>
        <span class="measurement-display__value">{{ formatValue(measurement.y) }}</span>
      </div>
      <div class="measurement-display__value-row measurement-display__value-row--primary">
        <span class="measurement-display__label">Distance:</span>
        <span class="measurement-display__value">{{ formatValue(measurement.xy) }}</span>
      </div>
    </div>
    
    <!-- Empty state -->
    <div v-else class="measurement-display__empty">
      <AfsIcon name="ruler-24" class="measurement-display__empty-icon" />
      <p class="measurement-display__empty-text">
        {{ isMeasuring ? 'Click to set start point' : 'Click to start measuring' }}
      </p>
    </div>
    
    <!-- Measurement list -->
    <div v-if="measurements.length" class="measurement-display__list">
      <h4 class="measurement-display__list-title">Saved Measurements</h4>
      <div
        v-for="(m, index) in measurements"
        :key="m.id || index"
        class="measurement-display__list-item"
        :class="{ 'is-selected': selectedId === m.id }"
        @click="$emit('select', m)"
      >
        <span class="measurement-display__list-value">{{ formatValue(m.xy) }}</span>
        <button
          type="button"
          class="measurement-display__list-delete"
          @click.stop="$emit('delete', m)"
        >
          <AfsIcon name="trash-16" />
        </button>
      </div>
    </div>
    
    <!-- Controls -->
    <div v-if="measurements.length || measurement" class="measurement-display__controls">
      <button
        v-if="measurement"
        type="button"
        class="measurement-display__btn measurement-display__btn--save"
        @click="$emit('save')"
      >
        Save
      </button>
      <button
        v-if="measurements.length"
        type="button"
        class="measurement-display__btn measurement-display__btn--clear"
        @click="$emit('clearAll')"
      >
        Clear All
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * MeasurementDisplay - Measurement values display panel
 * 
 * Shows X, Y, and distance measurements with unit selection.
 * 
 * @see Measurement.js plugin
 */
defineOptions({ name: 'MeasurementDisplay' });

interface MeasurementItem {
  id?: string | number;
  x: number;
  y: number;
  xy: number;
}

const props = withDefaults(
  defineProps<{
    /** Panel title */
    title?: string;
    /** Active measurement */
    measurement?: MeasurementItem | null;
    /** List of saved measurements */
    measurements?: MeasurementItem[];
    /** Display unit */
    unit?: 'mm' | 'mil' | 'inch';
    /** Selected measurement ID */
    selectedId?: string | number | null;
    /** Whether currently measuring */
    isMeasuring?: boolean;
  }>(),
  {
    title: 'Measurement',
    measurement: null,
    measurements: () => [],
    unit: 'mm',
    selectedId: null,
    isMeasuring: false,
  }
);

const emit = defineEmits<{
  (e: 'unitChange', unit: string): void;
  (e: 'select', m: MeasurementItem): void;
  (e: 'delete', m: MeasurementItem): void;
  (e: 'save'): void;
  (e: 'clearAll'): void;
}>();

const internalUnit = ref(props.unit);

watch(() => props.unit, (newUnit) => {
  internalUnit.value = newUnit;
});

function formatValue(value: number): string {
  if (typeof value !== 'number' || isNaN(value)) return '—';
  
  let formatted: string;
  switch (internalUnit.value) {
    case 'mil':
      formatted = value.toFixed(2);
      break;
    case 'inch':
      formatted = (value / 1000).toFixed(4);
      break;
    case 'mm':
    default:
      formatted = (value * 0.0254).toFixed(3);
  }
  
  return `${formatted} ${internalUnit.value}`;
}
</script>

<style lang="scss">
.measurement-display {
  display: flex;
  flex-direction: column;
  background: var(--afs-sidebar, #fff);
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__title {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__unit-select {
    padding: 4px 8px;
    font-size: 12px;
    border: 1px solid var(--afs-border, #e5e7eb);
    border-radius: 4px;
    background: var(--afs-input-bg, #fff);
    color: var(--afs-text-icon-primary, #111827);
    cursor: pointer;
  }
  
  &__values {
    padding: 16px;
  }
  
  &__value-row {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    font-size: 13px;
    
    &--primary {
      padding-top: 12px;
      margin-top: 8px;
      border-top: 1px solid var(--afs-border, #e5e7eb);
      font-weight: 500;
    }
  }
  
  &__label {
    color: var(--afs-text-icon-secondary, #6b7280);
  }
  
  &__value {
    font-family: monospace;
    color: var(--afs-text-icon-primary, #111827);
  }
  
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
  
  &__list {
    border-top: 1px solid var(--afs-border, #e5e7eb);
    padding: 8px 0;
  }
  
  &__list-title {
    margin: 0;
    padding: 8px 16px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
  
  &__list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #f3f4f6);
    }
    
    &.is-selected {
      background: var(--afs-accent, #3b82f6);
      color: white;
    }
  }
  
  &__list-value {
    font-family: monospace;
    font-size: 13px;
  }
  
  &__list-delete {
    padding: 4px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--afs-text-icon-hint, #9ca3af);
    transition: color 0.15s;
    
    &:hover {
      color: var(--afs-error, #dc2626);
    }
  }
  
  &__controls {
    display: flex;
    gap: 8px;
    padding: 12px 16px;
    border-top: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__btn {
    flex: 1;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 500;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    
    &--save {
      background: var(--afs-accent, #3b82f6);
      color: white;
      
      &:hover {
        background: var(--afs-accent-hover, #2563eb);
      }
    }
    
    &--clear {
      background: var(--afs-group, #f3f4f6);
      color: var(--afs-text-icon-secondary, #6b7280);
      
      &:hover {
        background: var(--afs-secondary-selected, #e5e7eb);
      }
    }
  }
}
</style>
