<template>
  <div
    class="preview-item preview-panel__item"
    :class="{ 'is-selected': isSelected }"
    @click="$emit('click')"
  >
    <LibLazyImage
      class="preview-item__img"
      :src="imageSrc"
      :alt="title"
      :aspectRatio="68"
      :dataLazyId="lazyId"
    />
    <div class="preview-item__title-wrapper">
      <div v-if="icon" class="preview-item__icon-wrapper">
        <AfsIcon :name="icon" class="preview-item__icon" />
      </div>
      <div class="afs-typography_paragraph afs-typography_ellipsis afs-typography preview-item__text">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import LibLazyImage from './LibLazyImage.vue';
import AfsIcon from './AfsIcon.vue';

/**
 * PreviewItem - Single item in preview panel list
 * 
 * Production CSS (production.css lines 36452-36516):
 * - .preview-item: border-radius, background, cursor
 * - .preview-item.is-selected: box-shadow for selection
 * - .preview-item__img: border styles
 * - .preview-item__title-wrapper: flex layout with padding
 */
defineOptions({ name: 'PreviewItem' });

const props = withDefaults(
  defineProps<{
    /** Display title text */
    title: string;
    /** Image source URL */
    imageSrc?: string;
    /** Optional icon name to show before title */
    icon?: string;
    /** Whether this item is currently selected */
    isSelected?: boolean;
    /** Unique ID for this preview item */
    id?: string;
  }>(),
  {
    imageSrc: '',
    icon: '',
    isSelected: false,
    id: '',
  }
);

defineEmits<{ (e: 'click'): void }>();

// Generate lazy ID similar to production
const lazyId = computed(() => 
  props.id || `preview-${Math.random().toString(36).slice(2, 11)}`
);
</script>

<style lang="scss">
/**
 * Production CSS from production.css lines 36452-36516
 */
.preview-item {
  border-radius: 0.25rem;
  background: var(--afs-group);
  cursor: pointer;
}

body:not(.is-touch) .preview-item:not(.is-selected):hover {
  box-shadow: 0 0 0 1px var(--border-focused, var(--afs-primary-default));
}

.preview-item.is-selected {
  box-shadow: 0 0 0 2px var(--border-focused, var(--afs-primary-default));
}

.preview-item__img {
  border: 0.25rem solid var(--background-views, var(--afs-background));
  border-radius: 0.25rem 0.25rem 0 0;
}

.preview-item__img_placeholder {
  background-color: var(--background-views, var(--afs-background));
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--background-text, var(--afs-text-icon-hint));
  border-color: var(--background-views, var(--afs-background));
}

.preview-item__title-wrapper {
  display: flex;
  align-items: center;
  padding: 0.5rem 1.13rem;
}

.preview-item__icon-wrapper {
  display: flex;
  margin-right: 0.63rem;
}

.preview-item__icon {
  width: 16px;
  height: 16px;
}

.preview-item__text {
  color: var(--color-primary, var(--afs-text-icon-primary));
  line-height: 1.17;
}

// Compare mode states
.preview-item .is-added {
  color: var(--afs-text-positive);
}

.preview-item .is-removed {
  color: var(--afs-text-negative);
}

.preview-item .is-updated {
  color: var(--afs-text-caution);
}

.preview-item .is-unchanged {
  color: var(--afs-text-icon-hint);
}
</style>
