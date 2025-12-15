<template>
  <div class="afs-input">
    <label v-if="label" class="afs-input__label">{{ label }}</label>
    <input
      type="text"
      class="afs-input__control"
      :class="inputClasses"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

/**
 * AfsInput - Production Input Component
 * 
 * Production CSS from production.css:13055-13210
 * Text input with label, validation states, and focus effects.
 */

defineOptions({ name: 'AfsInput' });

const props = withDefaults(
  defineProps<{
    /**
     * Input value (v-model)
     */
    modelValue?: string;
    /**
     * Label text
     */
    label?: string;
    /**
     * Placeholder text
     */
    placeholder?: string;
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
     * Transparent style (no background)
     */
    transparent?: boolean;
    /**
     * Monospace code font
     */
    code?: boolean;
    /**
     * Rounded corners
     */
    rounded?: boolean;
  }>(),
  {
    modelValue: '',
    placeholder: '',
    disabled: false,
    warning: false,
    error: false,
    transparent: false,
    code: false,
    rounded: true,
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const inputClasses = computed(() => [
  {
    'is-disabled': props.disabled,
    'is-warning': props.warning,
    'is-error': props.error,
    'is-transparent': props.transparent,
    'is-code': props.code,
    'afs-input_radius-tl': props.rounded,
    'afs-input_radius-tr': props.rounded,
    'afs-input_radius-bl': props.rounded,
    'afs-input_radius-br': props.rounded,
  },
]);

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<style lang="scss">
/**
 * Production CSS from production.css:13055-13210
 */
.afs-input__label {
  display: block;
  margin-bottom: 8px;
  color: var(--afs-text-icon-secondary, rgba(255, 255, 255, 0.6));
  font-size: 12px;
}

.afs-input__control {
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  -webkit-appearance: none;
  padding: 0 15px;
  border: 1px solid;
  width: 100%;
  height: 32px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  transition: border-color 0.25s, color 0.25s, opacity 0.25s, background-color 0.25s, box-shadow 0.25s;
}

.afs-input__control.is-code {
  font-family: Courier, monospace;
}

.afs-input__control:disabled,
.afs-input__control[disabled],
.afs-input__control.is-disabled {
  opacity: 0.48;
  pointer-events: none;
}

/* Border radius */
.afs-input__control.afs-input_radius-tl { border-top-left-radius: 4px; }
.afs-input__control.afs-input_radius-tr { border-top-right-radius: 4px; }
.afs-input__control.afs-input_radius-bl { border-bottom-left-radius: 4px; }
.afs-input__control.afs-input_radius-br { border-bottom-right-radius: 4px; }

.afs-input__control::placeholder {
  opacity: 1;
  transition: opacity 0.25s;
}

.afs-input__control:focus::placeholder {
  opacity: 0.48;
}

/* Themed input styles */
.afs-input .afs-input__control {
  border-color: var(--afs-secondary-border, rgba(255, 255, 255, 0.1));
  color: var(--afs-text-icon-primary, #fff);
  background: var(--afs-field, rgba(255, 255, 255, 0.08));
  box-shadow: var(--afs-black-inner-shadow, inset 0 1px 2px rgba(0, 0, 0, 0.2));
}

/* Validation states */
.afs-input .afs-input__control.is-warning {
  border-color: var(--afs-warning, #ff9f0a);
}

.afs-input .afs-input__control.is-error {
  border-color: var(--afs-error, #ff453a);
}

/* Focus state */
.afs-input .afs-input__control:not(:disabled):not(.is-disabled):not(.is-transparent):focus {
  border-color: var(--afs-focus, #0a84ff);
  box-shadow: var(--afs-black-inner-shadow-lg, inset 0 1px 3px rgba(0, 0, 0, 0.3));
}

/* Hover state */
.afs-input .afs-input__control:not(:disabled):not(.is-disabled):not(.is-transparent):hover {
  box-shadow: var(--afs-black-inner-shadow-lg, inset 0 1px 3px rgba(0, 0, 0, 0.3));
}

/* Placeholder color */
.afs-input .afs-input__control::placeholder {
  color: var(--afs-text-icon-hint, rgba(255, 255, 255, 0.4));
}

/* Selection */
.afs-input .afs-input__control::selection {
  background-color: var(--afs-filed-highlighted, rgba(10, 132, 255, 0.3));
}

/* Transparent variant */
.afs-input .afs-input__control.is-transparent {
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}
</style>
