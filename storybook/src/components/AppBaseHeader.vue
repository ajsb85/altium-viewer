<template>
  <div class="app-base-header">
    <slot name="left">
      <div class="app-base-header__title">
        <AfsIcon v-if="icon" :name="icon" class="app-base-header__icon" />
        <span class="afs-typography_title afs-typography">{{ title }}</span>
      </div>
    </slot>
    <div class="app-base-header__actions">
      <slot name="actions" />
    </div>
    <button
      v-if="showClose"
      class="app-base-header__close afs-btn-icon afs-btn-icon_transparent afs-btn-icon_md"
      type="button"
      @click="$emit('close')"
    >
      <AfsIcon name="cross-16" />
    </button>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * AppBaseHeader - Base header for panels with title and close
 * @see production example.html
 */
defineOptions({ name: 'AppBaseHeader' });

withDefaults(
  defineProps<{
    /**
     * Header title text.
     */
    title?: string;
    /**
     * Optional icon name to display before title.
     */
    icon?: string;
    /**
     * Whether to show the close button.
     * @default true
     */
    showClose?: boolean;
  }>(),
  {
    title: '',
    icon: '',
    showClose: true,
  }
);

defineEmits<{ (e: 'close'): void }>();
</script>

<style lang="scss">
.app-base-header {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid var(--afs-border, #38383a);
  background: var(--afs-panel, #2c2c2e);
  
  &__title {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
  }
  
  &__icon {
    font-size: 16px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__actions {
    display: flex;
    gap: 4px;
    margin-right: 8px;
  }
  
  &__close {
    margin-left: auto;
  }
}
</style>
