<template>
  <label
    class="afs-checkbox"
    :class="checkboxClasses"
    @click.prevent="handleClick"
  >
    <input
      type="checkbox"
      class="afs-checkbox__input"
      :checked="modelValue"
      :disabled="disabled"
    />
    <span class="afs-checkbox__figure">
      <!-- Checkmark icon -->
      <svg v-if="!indeterminate" class="afs-checkbox__figure-icon" viewBox="0 0 8 6">
        <path fill="currentColor" d="M7.7.3c.4.4.4 1 0 1.4L3.4 6c-.4.4-1 .4-1.4 0L.3 4.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1 1L6.3.3c.4-.4 1-.4 1.4 0z"/>
      </svg>
      <!-- Indeterminate square -->
      <span v-else class="afs-checkbox__figure-square"></span>
    </span>
    <span v-if="$slots.default" class="afs-checkbox__text">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';

/**
 * AfsCheckbox - Production Checkbox Component
 * 
 * Production CSS from production.css:9271-9430
 * Checkbox with label, validation states, and indeterminate mode.
 */

defineOptions({ name: 'AfsCheckbox' });

const props = withDefaults(
  defineProps<{
    /**
     * Checked state (v-model)
     */
    modelValue?: boolean;
    /**
     * Disabled state
     */
    disabled?: boolean;
    /**
     * Warning validation state
     */
    warning?: boolean;
    /**
     * Error validation state
     */
    error?: boolean;
    /**
     * Indeterminate state (shows horizontal bar)
     */
    indeterminate?: boolean;
  }>(),
  {
    modelValue: false,
    disabled: false,
    warning: false,
    error: false,
    indeterminate: false,
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}>();

const checkboxClasses = computed(() => [
  {
    'is-checked': props.modelValue,
    'is-disabled': props.disabled,
    'is-warning': props.warning,
    'is-error': props.error,
  },
]);

function handleClick() {
  if (!props.disabled) {
    const newValue = !props.modelValue;
    emit('update:modelValue', newValue);
    emit('change', newValue);
  }
}
</script>

<style lang="scss">
/**
 * Production CSS from production.css:9271-9430
 */
.afs-checkbox {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  display: inline-flex;
  vertical-align: top;
  align-items: flex-start;
  color: var(--afs-text-icon-secondary, rgba(255, 255, 255, 0.6));
  cursor: pointer;
  user-select: none;
}

.afs-checkbox:disabled,
.afs-checkbox[disabled],
.afs-checkbox.is-disabled {
  opacity: 0.48;
  cursor: not-allowed;
}

.afs-checkbox.is-checked .afs-checkbox__figure-icon,
.afs-checkbox.is-checked .afs-checkbox__figure-square {
  opacity: 1;
}

.afs-checkbox__input {
  display: none;
}

.afs-checkbox__figure {
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border: 1px solid;
  border-radius: 2px;
  width: 16px;
  height: 16px;
  transition: border-color 0.25s, background-color 0.25s, box-shadow 0.25s;
  border-color: var(--afs-secondary-border, rgba(255, 255, 255, 0.1));
  box-shadow: var(--afs-white-inner-shadow-small, inset 0 1px 1px rgba(255, 255, 255, 0.05));
  background: var(--afs-secondary-default, rgba(255, 255, 255, 0.08));
}

.afs-checkbox__figure-icon,
.afs-checkbox__figure-square {
  opacity: 0;
}

.afs-checkbox__figure-icon {
  font-size: 8px;
  width: 8px;
  height: 6px;
  transition: color 0.25s, opacity 0.25s;
  color: var(--afs-text-icon-over-background, #fff);
}

.afs-checkbox__figure-square {
  width: 8px;
  height: 2px;
  transition: opacity 0.25s, background-color 0.25s;
  background: var(--afs-text-icon-over-background, #fff);
}

.afs-checkbox__text {
  flex: 1 1 auto;
  align-self: center;
  padding-left: 8px;
  max-width: 99%;
  color: var(--afs-text-icon-primary, #fff);
  font-size: 12px;
}

/* Validation states */
.afs-checkbox.is-warning .afs-checkbox__figure {
  border-color: var(--afs-warning, #ff9f0a);
}

.afs-checkbox.is-error .afs-checkbox__figure {
  border-color: var(--afs-error, #ff453a);
}

/* Focus state */
.afs-checkbox:not(.is-disabled):focus .afs-checkbox__figure,
.afs-checkbox:not(.is-disabled):focus-within .afs-checkbox__figure {
  border-color: var(--afs-focus, #0a84ff);
}

/* Active state */
.afs-checkbox:not(.is-disabled):active .afs-checkbox__figure {
  border-color: var(--afs-primary-border, #0a84ff);
  box-shadow: var(--afs-black-inner-shadow, inset 0 1px 2px rgba(0, 0, 0, 0.2));
}

/* Unchecked hover */
.afs-checkbox:not(.is-disabled):not(.is-checked):hover .afs-checkbox__figure {
  background: var(--afs-secondary-hover, rgba(255, 255, 255, 0.12));
}

/* Unchecked active */
.afs-checkbox:not(.is-disabled):not(.is-checked):active .afs-checkbox__figure {
  background: var(--afs-secondary-down, rgba(255, 255, 255, 0.16));
}

/* Checked hover */
.afs-checkbox:not(.is-disabled).is-checked:hover .afs-checkbox__figure {
  background: var(--afs-primary-hover, #409cff);
}

/* Checked active */
.afs-checkbox:not(.is-disabled).is-checked:active .afs-checkbox__figure {
  background: var(--afs-primary-down, #0066cc);
}

/* Checked state */
.afs-checkbox.is-checked .afs-checkbox__figure {
  border-color: var(--afs-primary-border, #0a84ff);
  background: var(--afs-primary-selected, #0a84ff);
}
</style>
