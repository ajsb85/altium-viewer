<template>
  <div class="download">
    <div class="afs-subheader">
      <div class="afs-typography_title afs-typography afs-subheader__title">Download</div>
    </div>
    <div class="download__content">
      <div
        v-for="option in options"
        :key="option.id"
        class="download__item"
        :class="{ 'is-disabled': option.disabled }"
        @click="!option.disabled && $emit('download', option.id)"
      >
        <AfsIcon :name="option.icon" class="download__icon" />
        <div class="download__info">
          <div class="afs-typography_paragraph afs-typography download__title">
            {{ option.title }}
          </div>
          <div v-if="option.description" class="afs-typography_paragraph afs-typography download__desc">
            {{ option.description }}
          </div>
        </div>
        <AfsIcon name="download-16" class="download__action" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * Download - Download options component
 * @see production example.html
 */
defineOptions({ name: 'Download' });

interface DownloadOption {
  id: string;
  title: string;
  icon: string;
  description?: string;
  disabled?: boolean;
}

withDefaults(
  defineProps<{
    options: DownloadOption[];
  }>(),
  {
    options: () => [],
  }
);

defineEmits<{ (e: 'download', optionId: string): void }>();
</script>

<style lang="scss">
.download {
  &__content {
    padding: 8px;
  }
  
  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover:not(.is-disabled) {
      background: var(--afs-secondary-hover, #48484a);
    }
    
    &.is-disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  
  &__icon {
    font-size: 24px;
    color: var(--afs-text-icon-link, #64d2ff);
  }
  
  &__info {
    flex: 1;
  }
  
  &__title {
    font-size: 13px;
    font-weight: 500;
    color: var(--afs-text-icon-primary, #fff);
  }
  
  &__desc {
    font-size: 11px;
    color: var(--afs-text-icon-hint, #ebebf54d);
    margin-top: 2px;
  }
  
  &__action {
    font-size: 16px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
}
</style>
