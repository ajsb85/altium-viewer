<template>
  <div
    class="lib-modal"
    :class="[
      `lib-modal_type-aside-${position}`,
      `lib-modal_type-aside`,
      { 'lib-modal_resizable': resizable },
      { 'lib-modal_size-fullheight': fullHeight },
      { 'lib-modal_left-border': position === 'right' },
      { 'lib-modal_right-border': position === 'left' }
    ]"
    :style="{ width: `${width}px`, top: `${offsetTop}px`, zIndex }"
    v-show="visible"
  >
    <div v-if="resizable" class="lib-modal__resizer" @mousedown="startResize" />
    <div class="lib-modal__container afs-box afs-box_border">
      <div v-if="showHeader" class="afs-subheader">
        <button
          class="afs-subheader__icon afs-btn-icon afs-btn-icon_transparent afs-btn-icon_md"
          type="button"
          @click="$emit('close')"
        >
          <AfsIcon name="cross-16" />
        </button>
        <div class="afs-typography_title afs-typography afs-subheader__title">
          <div class="lib-modal__header">
            <div class="lib-modal__header-content">{{ title }}</div>
            <div class="lib-modal__header-slot">
              <slot name="header" />
            </div>
          </div>
        </div>
      </div>
      <button
        v-else
        class="lib-modal__close afs-btn-icon afs-btn-icon_transparent afs-btn-icon_md"
        type="button"
        @click="$emit('close')"
      >
        <AfsIcon name="cross-16" />
      </button>
      <div class="lib-modal__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * LibModal - Aside modal panel (slide-in from left or right)
 * @see production example.html
 */
defineOptions({ name: 'LibModal' });

withDefaults(
  defineProps<{
    /** Whether modal is visible */
    visible?: boolean;
    /** Modal title */
    title?: string;
    /** Side position (left/right) */
    position?: 'left' | 'right';
    /** Width in pixels */
    width?: number;
    /** Top position offset in pixels */
    offsetTop?: number;
    /** Enable resize handle */
    resizable?: boolean;
    /** Stretch to full height (minus offset) */
    fullHeight?: boolean;
    /** Show standard header */
    showHeader?: boolean;
    /** Z-index property */
    zIndex?: number;
  }>(),
  {
    visible: true,
    title: '',
    position: 'right',
    width: 240,
    offsetTop: 32,
    resizable: true,
    fullHeight: true,
    showHeader: true,
    zIndex: 100,
  }
);

defineEmits<{
  (e: 'close'): void;
  (e: 'resize', width: number): void;
}>();

const isResizing = ref(false);

function startResize() {
  isResizing.value = true;
  // Resize logic handled by parent
}
</script>

<style lang="scss">
.lib-modal {
  position: fixed;
  display: flex;
  flex-direction: column;
  background: var(--afs-panel, #2c2c2e);
  box-shadow: var(--afs-black-drop-shadow-large);
  
  &_type-aside-left { left: 0; }
  &_type-aside-right { right: 0; }
  &_size-fullheight { height: calc(100% - 32px); }
  
  &_left-border { border-left: 1px solid var(--afs-border, #38383a); }
  &_right-border { border-right: 1px solid var(--afs-border, #38383a); }
  
  &__resizer {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    cursor: ew-resize;
    z-index: 10;
    
    .lib-modal_type-aside-left & { right: 0; }
    .lib-modal_type-aside-right & { left: 0; }
  }
  
  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--afs-panel, #2c2c2e);
  }
  
  &__close {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 5;
  }
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  &__header-content {
    flex: 1;
  }
  
  &__body {
    flex: 1;
    overflow: auto;
  }
}

.afs-subheader {
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid var(--afs-border, #38383a);
  
  &__icon { margin-right: 8px; }
  
  &__title {
    flex: 1;
    font-size: 13px;
    font-weight: 500;
    color: var(--afs-text-icon-primary, #fff);
  }
}
</style>
