<template>
  <component :is="tag" class="afs-badge" :class="classes" :data-locator="dataLocator">
    <slot />
  </component>
</template>

<script lang="ts">
const BADGE_SIZES = { default: "", xs: "xs", small: "small", middle: "middle" };
const BADGE_TYPES = { default: "", base: "base", pro: "pro", success: "success", alpha: "alpha", new: "new", guest: "guest" };
</script>

<script setup lang="ts">
import { computed } from 'vue';

/**
 * AfsBadge - Badge/chip component for labels and status indicators
 * 
 * Supports multiple sizes and type variants for different use cases.
 * 
 * @see vendors.js AfsBadge component
 * @see scss/components/afs-badge*.scss
 */
defineOptions({ name: 'AfsBadge' });

const props = defineProps({
  /**
   * HTML tag to render.
   * @default 'div'
   */
  tag: { type: String, default: "div" },
  /**
   * Badge size variant.
   * Valid values: '', 'xs', 'small', 'middle'.
   */
  size: {
    type: String,
    default: "",
    validator: (v: string) => Object.values(BADGE_SIZES).includes(v)
  },
  /**
   * Badge style type.
   * Valid values: 'base', 'pro', 'success', 'alpha', 'new', 'guest', ''.
   */
  type: {
    type: String,
    default: "",
    validator: (v: string) => Object.values(BADGE_TYPES).includes(v)
  },
  /**
   * Whether to force uppercase text.
   * @default false
   */
  uppercase: { type: Boolean, default: false },
  /**
   * Border radius application.
   * Can include 'top-left', 'top-right', 'bottom-left', 'bottom-right'.
   * @default "top-left top-right bottom-left bottom-right"
   */
  radius: {
    type: String, 
    default: "top-left top-right bottom-left bottom-right"
  },
  /**
   * Data-locator attribute for automation.
   * @default 'badge'
   */
  dataLocator: { type: String, default: "badge" }
});

const classes = computed(() => {
  const result: string[] = [];
  if (props.type && props.type.length) {
    result.push(`afs-badge_${props.type}`);
  }
  if (props.size && props.size.length) {
    result.push(`afs-badge_${props.size}`);
  }
  
  if (props.radius.includes("top-left")) result.push("afs-badge_radius-tl");
  if (props.radius.includes("top-right")) result.push("afs-badge_radius-tr");
  if (props.radius.includes("bottom-left")) result.push("afs-badge_radius-bl");
  if (props.radius.includes("bottom-right")) result.push("afs-badge_radius-br");

  if (props.uppercase) {
    result.push("afs-badge_uppercase");
  }
  return result;
});
</script>

<style lang="scss">
/* 
 * Styles from production: scss/components/afs-badge*.scss
 */
.afs-badge {
  position: relative;
  padding: 7px 9px;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.08em;
  display: inline-block;
  vertical-align: top;
  background: var(--afs-secondary-selected, #e5e7eb);
  color: var(--afs-text-icon-over-background, #374151);
}

/* Size variants */
.afs-badge_xs {
  padding: 1px 2px;
  font-size: 8px;
  letter-spacing: 0.001em;
}

.afs-badge_small {
  padding: 3px 5px;
  font-size: 9px;
}

.afs-badge_middle {
  padding: 5px 7px;
  font-size: 10px;
}

/* Type variants */
.afs-badge_base {
  background: var(--afs-group, #f3f4f6);
  color: var(--afs-text-icon-secondary, #6b7280);
}

.afs-badge_pro {
  background: var(--afs-additional-pink, #ec4899);
  color: #fff;
}

.afs-badge_success {
  background: var(--afs-success, #10b981);
  color: #fff;
}

.afs-badge_alpha {
  background: var(--afs-warning, #f59e0b);
  color: #fff;
}

.afs-badge_new {
  background: var(--afs-accent, #3b82f6);
  color: #fff;
}

.afs-badge_guest {
  background: var(--afs-text-icon-hint, #9ca3af);
  color: #fff;
}

/* Radius modifiers */
.afs-badge.afs-badge_radius-tl {
  border-top-left-radius: 2px;
}

.afs-badge.afs-badge_radius-tr {
  border-top-right-radius: 2px;
}

.afs-badge.afs-badge_radius-bl {
  border-bottom-left-radius: 2px;
}

.afs-badge.afs-badge_radius-br {
  border-bottom-right-radius: 2px;
}

/* Uppercase modifier */
.afs-badge_uppercase {
  text-transform: uppercase;
}
</style>
