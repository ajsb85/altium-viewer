<template>
  <component
    :is="href ? 'a' : 'button'"
    class="afs-link"
    :class="[
      `is-${variant}`,
      { 'prevent-blur': preventBlur }
    ]"
    :href="href"
    :target="href && external ? '_blank' : undefined"
    :type="href ? undefined : 'button'"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
/**
 * AfsLink - Production Link Component
 * 
 * Production CSS from production.css:12787-12830
 * Styled link with primary, accent, and secondary variants.
 */

defineOptions({ name: 'AfsLink' });

const props = withDefaults(
  defineProps<{
    /**
     * URL to navigate to. If provided, renders an anchor tag.
     * If not provided, renders a button.
     */
    href?: string;
    /**
     * Link visual style variant.
     * @default 'primary'
     */
    variant?: 'primary' | 'accent' | 'secondary' | 'regular-text';
    /**
     * Whether to open the link in a new tab (target="_blank") if href is present.
     * @default true
     */
    external?: boolean;
    /**
     * Whether to prevent the link from losing focus on click (useful for preserving focus in editors).
     * @default false
     */
    preventBlur?: boolean;
  }>(),
  {
    variant: 'primary',
    external: true,
    preventBlur: false,
    // href and preventBlur defaults handled at usage site or implicit
  }
);

const emit = defineEmits<{
  /**
   * Emitted when the link/button is clicked.
   */
  (e: 'click', event: MouseEvent): void;
}>();

function handleClick(event: MouseEvent) {
  emit('click', event);
}
</script>

<style lang="scss">
/**
 * Production CSS from production.css:12787-12830
 */
.afs-link,
.afs-link:hover {
  text-decoration: none;
}

.afs-link {
  background: none;
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  transition: color 0.25s, border-bottom 0.25s;
  border: none;
  padding: 0;
  cursor: pointer;
}

.afs-link.is-primary {
  color: var(--afs-text-icon-link, #0a84ff);
}

.afs-link.is-primary:hover {
  color: var(--afs-text-icon-link-hover, #409cff);
}

.afs-link.is-accent {
  color: var(--afs-text-icon-link-accent, #ff9f0a);
  padding-top: 1px;
  border-bottom: 1px solid var(--afs-text-icon-link-accent-border, rgba(255, 159, 10, 0.3));
}

.afs-link.is-accent:hover {
  color: var(--afs-text-icon-link-accent, #ff9f0a);
  border-bottom: 1px solid var(--afs-text-icon-link-accent, #ff9f0a);
}

.afs-link.is-secondary {
  color: var(--afs-text-icon-link-secondary, rgba(255, 255, 255, 0.6));
}

.afs-link.is-secondary:hover {
  color: var(--afs-text-icon-link-accent, #ff9f0a);
}

.afs-link.is-regular-text {
  color: var(--afs-text-secondary, rgba(255, 255, 255, 0.6));
}

.afs-link.is-regular-text:hover {
  color: var(--afs-text-icon-link, #0a84ff);
}

/* Prevent blur class for within tables */
.afs-link.prevent-blur:focus {
  outline: none;
}
</style>
