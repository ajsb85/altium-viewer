<template>
  <component
    :is="as"
    class="afs-typography"
    :class="[
      `afs-typography_${variant}`,
      { 'afs-typography_ellipsis': ellipsis }
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
/**
 * AfsTypography - Production Typography Component
 * 
 * Production CSS from production.css:8224-8284
 * Provides consistent typography styles across the application.
 */

defineOptions({ name: 'AfsTypography' });

withDefaults(
  defineProps<{
    /**
     * Typography variant
     */
    variant?: 
      | 'large-title'
      | 'medium-title'
      | 'title'
      | 'paragraph'
      | 'single-line'
      | 'hint-tooltip'
      | 'group'
      | 'sticker'
      | 'text';
    /**
     * HTML element to render
     */
    as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'a' | 'label';
    /**
     * Apply text ellipsis overflow
     */
    ellipsis?: boolean;
  }>(),
  {
    variant: 'text',
    as: 'span',
    ellipsis: false,
  }
);
</script>

<style lang="scss">
/**
 * Production CSS from production.css:8224-8284
 */
span.afs-typography,
a.afs-typography {
  display: inline-block;
  max-width: 100%;
}

.afs-typography_large-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.afs-typography_medium-title {
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
}

.afs-typography_title {
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

.afs-typography_paragraph,
.afs-typography_single-line {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.afs-typography_hint-tooltip {
  font-size: 11px;
  font-weight: 400;
  line-height: 12px;
}

.afs-typography_group {
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}

.afs-typography_sticker {
  font-size: 8px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}

.afs-typography_text {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.afs-typography_ellipsis {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
