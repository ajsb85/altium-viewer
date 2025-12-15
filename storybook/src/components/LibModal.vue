<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="lib-modal" @click.self="handleBackdropClick">
        <div class="lib-modal__container" :style="containerStyle">
          <div v-if="showHeader" class="lib-modal__header">
            <h2 class="lib-modal__title">{{ title }}</h2>
            <button
              v-if="showClose"
              type="button"
              class="lib-modal__close"
              @click="close"
            >
              <AfsIcon name="close-16" />
            </button>
          </div>
          <div class="lib-modal__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="lib-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * LibModal - Modal dialog component
 * 
 * @see vendors.js LibModal component
 */
defineOptions({ name: 'LibModal' });

const props = withDefaults(
  defineProps<{
    /** Modal visibility (v-model) */
    modelValue: boolean;
    /** Modal title */
    title?: string;
    /** Show header section */
    showHeader?: boolean;
    /** Show close button */
    showClose?: boolean;
    /** Close on backdrop click */
    closeOnBackdrop?: boolean;
    /** Modal width */
    width?: string;
    /** Modal max-height */
    maxHeight?: string;
  }>(),
  {
    title: '',
    showHeader: true,
    showClose: true,
    closeOnBackdrop: true,
    width: '480px',
    maxHeight: '80vh',
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'close'): void;
}>();

const containerStyle = computed(() => ({
  width: props.width,
  maxHeight: props.maxHeight,
}));

function close() {
  emit('update:modelValue', false);
  emit('close');
}

function handleBackdropClick() {
  if (props.closeOnBackdrop) {
    close();
  }
}
</script>

<style lang="scss">
.lib-modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  
  &__container {
    display: flex;
    flex-direction: column;
    background: var(--afs-sidebar, #fff);
    border-radius: 8px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__title {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    background: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: var(--afs-text-icon-secondary, #6b7280);
    transition: all 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #f3f4f6);
      color: var(--afs-text-icon-primary, #111827);
    }
  }
  
  &__body {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
  }
  
  &__footer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding: 16px 20px;
    border-top: 1px solid var(--afs-border, #e5e7eb);
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  
  .lib-modal__container {
    transform: scale(0.95);
  }
}
</style>
