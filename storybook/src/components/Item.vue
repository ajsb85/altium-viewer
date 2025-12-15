<template>
  <div class="preview-item-component">
    <LibLazyImage
      class="preview-item-component__img"
      :src="imageSrc"
      :alt="title"
    />
    <div class="preview-item-component__info">
      <AfsIcon v-if="icon" :name="icon" class="preview-item-component__icon" />
      <div class="preview-item-component__text">
        <div class="afs-typography_paragraph afs-typography_ellipsis afs-typography preview-item-component__title">
          {{ title }}
        </div>
        <div v-if="subtitle" class="afs-typography_paragraph afs-typography preview-item-component__subtitle">
          {{ subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LibLazyImage from './LibLazyImage.vue';
import AfsIcon from './AfsIcon.vue';

/**
 * Item - Preview item component (alias for PreviewItem)
 * @see production example.html preview-panel__item
 */
defineOptions({ name: 'Item' });

withDefaults(
  defineProps<{
    title: string;
    subtitle?: string;
    imageSrc?: string;
    icon?: string;
  }>(),
  {
    subtitle: '',
    imageSrc: '',
    icon: '',
  }
);
</script>

<style lang="scss">
.preview-item-component {
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.15s;
  
  &:hover {
    background: var(--afs-secondary-hover, #48484a);
  }
  
  &__img {
    border-radius: 4px;
    margin-bottom: 8px;
  }
  
  &__info {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  
  &__icon {
    flex-shrink: 0;
    font-size: 16px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
    margin-top: 2px;
  }
  
  &__text {
    flex: 1;
    overflow: hidden;
  }
  
  &__title {
    font-size: 12px;
    font-weight: 500;
    color: var(--afs-text-icon-primary, #fff);
  }
  
  &__subtitle {
    font-size: 11px;
    color: var(--afs-text-icon-hint, #ebebf54d);
    margin-top: 2px;
  }
}
</style>
