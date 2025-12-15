<template>
  <div
    class="preview-item"
    :class="{ 'is-selected': isSelected }"
    @click="$emit('click')"
  >
    <LibLazyImage
      class="preview-item__img"
      :src="imageSrc"
      :alt="title"
    />
    <div class="preview-item__title-wrapper">
      <AfsIcon v-if="icon" :name="icon" class="preview-item__icon" />
      <div class="afs-typography_paragraph afs-typography_ellipsis afs-typography preview-item__text">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LibLazyImage from './LibLazyImage.vue';
import AfsIcon from './AfsIcon.vue';

/**
 * PreviewItem - Single item in preview panel list
 * @see production example.html preview-panel__item
 */
defineOptions({ name: 'PreviewItem' });

withDefaults(
  defineProps<{
    title: string;
    imageSrc?: string;
    icon?: string;
    isSelected?: boolean;
  }>(),
  {
    imageSrc: '',
    icon: '',
    isSelected: false,
  }
);

defineEmits<{ (e: 'click'): void }>();
</script>

<style lang="scss">
.preview-item {
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.15s;
  
  &:hover {
    background: var(--afs-secondary-hover, #787880);
  }
  
  &.is-selected {
    background: var(--afs-primary-overlay, #0a84ff33);
  }
  
  &__img {
    border-radius: 4px;
    margin-bottom: 8px;
  }
  
  &__title-wrapper {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  
  &__icon {
    flex-shrink: 0;
    font-size: 16px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__text {
    font-size: 12px;
    line-height: 16px;
    color: var(--afs-text-icon-primary, #fff);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
