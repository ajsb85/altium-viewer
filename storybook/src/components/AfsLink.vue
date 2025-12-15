<template>
  <a 
    class="afs-link" 
    :class="classes"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';

/**
 * AfsLink - Styled link/anchor component
 * 
 * Provides consistent link styling with optional external link handling.
 * 
 * @see vendors.js AfsLink component
 */
defineOptions({ name: 'AfsLink' });

const props = defineProps({
  href: { type: String, default: '#' },
  external: { type: Boolean, default: false },
  size: { 
    type: String, 
    default: 'md',
    validator: (v: string) => ['sm', 'md', 'lg'].includes(v)
  },
  underline: { type: Boolean, default: true },
});

const classes = computed(() => [
  `afs-link_${props.size}`,
  {
    'afs-link_external': props.external,
    'afs-link_no-underline': !props.underline,
  }
]);
</script>

<style lang="scss">
.afs-link {
  color: var(--afs-accent, #3b82f6);
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s, opacity 0.2s;
  
  &:hover {
    color: var(--afs-accent-hover, #2563eb);
    opacity: 0.9;
  }
  
  &:active {
    opacity: 0.7;
  }
  
  /* Sizes */
  &_sm {
    font-size: 12px;
  }
  
  &_md {
    font-size: 14px;
  }
  
  &_lg {
    font-size: 16px;
  }
  
  /* No underline modifier */
  &_no-underline {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  /* External link indicator */
  &_external::after {
    content: ' ↗';
    font-size: 0.8em;
  }
}
</style>
