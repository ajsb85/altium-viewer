<template>
  <div class="app-layers-footer">
    <div class="app-layers-footer__controls">
      <button
        type="button"
        class="app-layers-footer__btn"
        :class="{ 'is-active': showAll }"
        @click="$emit('showAll')"
      >
        <AfsIcon name="eye-16" />
        Show All
      </button>
      <button
        type="button"
        class="app-layers-footer__btn"
        @click="$emit('hideAll')"
      >
        <AfsIcon name="eye-off-16" />
        Hide All
      </button>
    </div>
    <div class="app-layers-footer__info">
      <span>{{ visibleCount }}/{{ totalCount }} layers visible</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * AppLayersFooter - Layers panel footer with bulk actions
 */
defineOptions({ name: 'AppLayersFooter' });

withDefaults(
  defineProps<{
    /**
     * Number of currently visible layers.
     * @default 0
     */
    visibleCount?: number;
    /**
     * Total number of layers.
     * @default 0
     */
    totalCount?: number;
    /**
     * Whether the "Show All" state is active.
     * @default true
     */
    showAll?: boolean;
  }>(),
  {
    visibleCount: 0,
    totalCount: 0,
    showAll: true,
  }
);

defineEmits<{
  (e: 'showAll'): void;
  (e: 'hideAll'): void;
}>();
</script>

<style lang="scss">
.app-layers-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-top: 1px solid var(--afs-border, #e5e7eb);
  background: var(--afs-group, #f9fafb);
  
  &__controls {
    display: flex;
    gap: 4px;
  }
  
  &__btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    font-size: 11px;
    background: var(--afs-sidebar, #fff);
    border: 1px solid var(--afs-border, #e5e7eb);
    border-radius: 4px;
    cursor: pointer;
    
    &:hover { background: var(--afs-secondary-selected, #f3f4f6); }
    
    &.is-active {
      background: var(--afs-accent, #3b82f6);
      border-color: var(--afs-accent, #3b82f6);
      color: white;
    }
  }
  
  &__info {
    font-size: 11px;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
}
</style>
