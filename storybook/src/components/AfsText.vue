<template>
  <component :is="componentType" class="afs-typography" :class="[typeClass, textEllipsisClass]">
    <slot :getBEMClass="getBEMClass" />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  /**
   * The typography style type.
   * Valid values: 'large title', 'medium title', 'title', 'paragraph', 'single line', 'hint', 'tooltip', 'group', 'sticker', 'text'.
   */
  type: {
    type: String,
    default: 'paragraph',
    validator: (v: string) => [
      'large title', 'medium title', 'title', 'paragraph',
      'single line', 'hint', 'tooltip', 'group', 'sticker', 'text'
    ].includes(v),
  },
  /**
   * Whether to render as an inline element (span) instead of block (div).
   */
  inline: { type: Boolean, default: false },
  /**
   * Whether to truncate text with an ellipsis if it overflows.
   * Automatically enabled for 'single line' type.
   */
  ellipsis: { type: Boolean, default: false },
  /**
   * Custom HTML tag to use for the component.
   * If not provided, defaults to 'div' (or 'span' if inline is true).
   */
  tag: { type: String, default: '' },
});

const checkType = computed(() => ({
  isLargeTitle: props.type === "large title",
  isMediumTitle: props.type === "medium title",
  isTitle: props.type === "title",
  isParagraph: props.type === "paragraph",
  isSingleLine: props.type === "single line",
  isHint: props.type === "hint",
  isTooltip: props.type === "tooltip",
  isGroup: props.type === "group",
  isSticker: props.type === "sticker",
  isText: props.type === "text",
}));

const textEllipsisClass = computed(() => ({
  "afs-typography_ellipsis": checkType.value.isSingleLine || props.ellipsis,
}));

const typeClass = computed(() => {
  const e = checkType.value;
  const t = "afs-typography_";
  return e.isLargeTitle ? t + "large-title"
    : e.isMediumTitle ? t + "medium-title"
    : e.isTitle ? t + "title"
    : e.isSingleLine ? t + "single-line"
    : e.isHint || e.isTooltip ? t + "hint-tooltip"
    : e.isGroup ? t + "group"
    : e.isSticker ? t + "sticker"
    : e.isText ? t + "text"
    : t + "paragraph";
});

const componentType = computed(() => {
  return props.tag ? props.tag : props.inline ? "span" : "div";
});

const getBEMClass = (e: string) => {
    return `afs-typography__${e}`;
};
</script>

<style lang="scss" scoped>
.afs-typography {
  /* Base typography - inherits color from parent */
  font-family: inherit;
  color: var(--afs-text-icon-primary, inherit);
  margin: 0;
  
  &_large-title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  
  &_medium-title {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
  }
  
  &_title {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }
  
  &_paragraph,
  &_single-line {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  
  &_hint-tooltip {
    font-size: 11px;
    font-weight: 400;
    line-height: 12px;
    color: var(--afs-text-icon-hint, #6b7280);
  }
  
  &_group {
    font-size: 10px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
    color: var(--afs-text-icon-secondary, #9ca3af);
  }
  
  &_sticker {
    font-size: 8px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.08rem;
  }
  
  &_text {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  
  &_ellipsis {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

/* Inline typography */
span.afs-typography,
a.afs-typography {
  display: inline-block;
  max-width: 100%;
}
</style>
