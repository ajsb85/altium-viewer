<template>
  <div class="app-board-control">
    <div class="app-board-control__group">
      <button
        class="app-board-control__btn afs-btn-icon afs-btn-icon_transparent afs-btn-icon_md"
        :class="{ 'is-selected': viewMode === 'top' }"
        type="button"
        @click="$emit('update:viewMode', 'top')"
      >
        <AfsIcon name="viewer-pcb-topside-16" />
      </button>
      <button
        class="app-board-control__btn afs-btn-icon afs-btn-icon_transparent afs-btn-icon_md"
        :class="{ 'is-selected': viewMode === 'bottom' }"
        type="button"
        @click="$emit('update:viewMode', 'bottom')"
      >
        <AfsIcon name="viewer-pcb-bottomside-16" />
      </button>
    </div>
    <div class="app-board-control__divider" />
    <div class="app-board-control__group">
      <button
        class="app-board-control__btn afs-btn-icon afs-btn-icon_transparent afs-btn-icon_md"
        :class="{ 'is-selected': is3D }"
        type="button"
        @click="$emit('update:is3D', !is3D)"
      >
        <AfsIcon name="viewer-3d-16" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * AppBoardControl - PCB view mode controls (top/bottom/3D)
 * @see production example.html
 */
defineOptions({ name: 'AppBoardControl' });

withDefaults(
  defineProps<{
    /**
     * Current PCB view mode.
     * @values 'top', 'bottom'
     */
    viewMode?: 'top' | 'bottom';
    /**
     * Whether 3D mode is active.
     */
    is3D?: boolean;
  }>(),
  {
    viewMode: 'top',
    is3D: false,
  }
);

defineEmits<{
  (e: 'update:viewMode', mode: 'top' | 'bottom'): void;
  (e: 'update:is3D', is3D: boolean): void;
}>();
</script>

<style lang="scss">
.app-board-control {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background: var(--afs-panel, #2c2c2e);
  border-radius: 4px;
  border: 1px solid var(--afs-border, #38383a);
  
  &__group {
    display: flex;
    gap: 2px;
  }
  
  &__divider {
    width: 1px;
    height: 24px;
    background: var(--afs-border, #38383a);
  }
  
  &__btn {
    &.is-selected {
      background: var(--afs-primary-overlay, #0a84ff33);
      color: var(--afs-text-icon-link, #64d2ff);
    }
  }
}
</style>
