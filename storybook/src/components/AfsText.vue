<template>
  <component :is="componentType" class="afs-typography" :class="[typeClass, textEllipsisClass]">
    <slot :getBEMClass="getBEMClass" />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'paragraph',
    validator: (v: string) => [
      'large title', 'medium title', 'title', 'paragraph',
      'single line', 'hint', 'tooltip', 'group', 'sticker', 'text'
    ].includes(v),
  },
  inline: { type: Boolean, default: false },
  ellipsis: { type: Boolean, default: false },
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
  /* Basic typography styles */
  font-family: inherit;
  color: inherit;
  margin: 0;
  
  &_large-title {
    font-size: 24px;
    font-weight: 700;
  }
  
  &_medium-title {
    font-size: 20px;
    font-weight: 600;
  }
  
  &_title {
    font-size: 16px;
    font-weight: 600;
  }
  
  &_paragraph {
    font-size: 14px;
    line-height: 1.5;
  }
  
  &_single-line {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  &_hint-tooltip {
    font-size: 12px;
    color: #666;
  }
  
  &_ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
