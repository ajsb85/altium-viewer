<template>
  <button
    type="button"
    class="afs-btn"
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <!-- Loader (shown when busy) -->
    <span v-if="loading" class="afs-btn__loader">
      <svg class="afs-loader__icon" viewBox="0 0 16 16">
        <use href="#svg-sprite--loader-16"></use>
      </svg>
    </span>
    
    <!-- Icon -->
    <span v-if="icon" class="afs-btn__icon">
      <svg class="icon" viewBox="0 0 16 16">
        <use :href="`#svg-sprite--${icon}`"></use>
      </svg>
    </span>
    
    <!-- Text -->
    <span class="afs-btn__text">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

/**
 * AfsButton - Production Button Component
 * 
 * Production CSS from production.css:12261-12550
 * Full-featured button with variants, sizes, loading states, and icons.
 */

defineOptions({ name: 'AfsButton' });

const props = withDefaults(
  defineProps<{
    /**
     * Button variant
     */
    variant?: 'default' | 'primary' | 'secondary' | 'transparent' | 'accent';
    /**
     * Button size
     */
    size?: 'default' | 'sm';
    /**
     * Full width button
     */
    wide?: boolean;
    /**
     * Disabled state
     */
    disabled?: boolean;
    /**
     * Loading state (shows spinner)
     */
    loading?: boolean;
    /**
     * Icon name (from SVG sprite)
     */
    icon?: string;
    /**
     * Content justification
     */
    justify?: 'left' | 'center' | 'right' | 'space-between';
    /**
     * Show dropdown arrow
     */
    arrow?: boolean;
    /**
     * Border radius corners
     */
    rounded?: boolean;
  }>(),
  {
    variant: 'default',
    size: 'default',
    wide: false,
    disabled: false,
    loading: false,
    justify: 'center',
    arrow: false,
    rounded: true,
  }
);

defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const buttonClasses = computed(() => [
  `afs-btn_${props.variant}`,
  {
    'afs-btn_sm': props.size === 'sm',
    'afs-btn_wide': props.wide,
    'is-busy': props.loading,
    'is-disabled': props.disabled,
    'afs-btn_arrow': props.arrow,
    [`afs-btn_justify-${props.justify}`]: props.justify !== 'center',
    // Rounded corners
    'afs-btn_radius-tl': props.rounded,
    'afs-btn_radius-tr': props.rounded,
    'afs-btn_radius-bl': props.rounded,
    'afs-btn_radius-br': props.rounded,
  },
]);
</script>

<style lang="scss">
/**
 * Production CSS from production.css:12261-12550
 */
.afs-btn {
  box-sizing: border-box;
  outline: 0;
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 0;
  background: none;
  font-family: inherit;
  cursor: pointer;
  -webkit-appearance: none;
  
  position: relative;
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  overflow: hidden;
  padding: 9px 15px;
  border: 1px solid;
  min-width: 80px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  transition: border-color 0.25s, color 0.25s, opacity 0.25s, background-color 0.25s, box-shadow 0.25s;
}

.afs-btn:disabled,
.afs-btn[disabled],
.afs-btn.is-disabled {
  opacity: 0.48;
  cursor: not-allowed;
  pointer-events: none;
}

/* Border radius */
.afs-btn_radius-tl { border-top-left-radius: 4px; }
.afs-btn_radius-tr { border-top-right-radius: 4px; }
.afs-btn_radius-bl { border-bottom-left-radius: 4px; }
.afs-btn_radius-br { border-bottom-right-radius: 4px; }

/* Sizes */
.afs-btn_sm {
  height: 25px;
  min-width: 60px;
  padding: 4px 8px;
}

.afs-btn_secondary {
  padding: 4px 8px;
  border: none;
}

.afs-btn_wide {
  width: 100%;
}

/* Loading state */
.afs-btn.is-busy .afs-btn__loader { opacity: 1; }
.afs-btn.is-busy .afs-btn__text,
.afs-btn.is-busy .afs-btn__icon { opacity: 0; }

/* Inner elements */
.afs-btn__loader,
.afs-btn__text,
.afs-btn__icon {
  text-decoration: none;
  transition: opacity 0.25s;
}

.afs-btn__loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.afs-btn__loader .afs-loader__icon {
  font-size: 12px;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.afs-btn__icon {
  margin: -2px 8px -2px 0;
  font-size: 16px;
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  
  .icon {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}

.afs-btn__text {
  display: block;
}

/* Justification */
.afs-btn_justify-left { justify-content: flex-start; }
.afs-btn_justify-center { justify-content: center; }
.afs-btn_justify-right { justify-content: flex-end; }
.afs-btn_justify-space-between { justify-content: space-between; }

/* Arrow */
.afs-btn_arrow::after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 3px 0 3px 4px;
  border-color: transparent transparent transparent currentColor;
  right: 16px;
  transform: rotate(90deg);
}

/* Default/Secondary variant */
.afs-btn_default,
.afs-btn_secondary {
  color: var(--afs-text-icon-primary, #fff);
  background: var(--afs-secondary-bg, rgba(255, 255, 255, 0.08));
  border-color: var(--afs-secondary-border, rgba(255, 255, 255, 0.1));
}

.afs-btn_default:hover,
.afs-btn_secondary:hover {
  background: var(--afs-secondary-bg-hover, rgba(255, 255, 255, 0.12));
}

.afs-btn_default:active,
.afs-btn_secondary:active {
  background: var(--afs-secondary-bg-pressed, rgba(255, 255, 255, 0.16));
}

.afs-btn_default:focus,
.afs-btn_secondary:focus {
  border-color: var(--afs-focus, #0a84ff);
}

/* Primary variant */
.afs-btn_primary {
  color: var(--afs-text-on-accent, #fff);
  background: var(--afs-primary-default, #0a84ff);
  border-color: transparent;
}

.afs-btn_primary:hover {
  background: var(--afs-primary-hover, #409cff);
}

.afs-btn_primary:active {
  background: var(--afs-primary-down, #0066cc);
}

.afs-btn_primary:focus {
  border-color: var(--afs-focus, #fff);
}

/* Transparent variant */
.afs-btn_transparent {
  color: var(--afs-text-icon-secondary, rgba(255, 255, 255, 0.6));
  background: transparent;
  border-color: transparent;
}

.afs-btn_transparent:hover {
  color: var(--afs-text-icon-primary, #fff);
  background: var(--afs-clickable-bg-hover, rgba(255, 255, 255, 0.08));
}

.afs-btn_transparent:active {
  background: var(--afs-clickable-bg-pressed, rgba(255, 255, 255, 0.12));
}

/* Accent variant */
.afs-btn_accent {
  color: var(--afs-text-on-accent, #fff);
  background: var(--afs-accent-default, #ff9f0a);
  border-color: transparent;
}

.afs-btn_accent:hover {
  background: var(--afs-accent-hover, #ffb340);
}

.afs-btn_accent:active {
  background: var(--afs-accent-down, #e68a00);
}
</style>
