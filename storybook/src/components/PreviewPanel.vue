<template>
  <div class="preview-panel">
    <div class="preview-panel__header">
      <h3 class="preview-panel__title">{{ title }}</h3>
      <button
        v-if="closable"
        type="button"
        class="preview-panel__close"
        @click="$emit('close')"
      >
        <AfsIcon name="close-16" />
      </button>
    </div>
    
    <div class="preview-panel__content">
      <!-- Preview image/canvas -->
      <div class="preview-panel__preview">
        <div v-if="loading" class="preview-panel__loading">
          <div class="preview-panel__spinner" />
        </div>
        <img
          v-else-if="imageUrl"
          :src="imageUrl"
          :alt="item?.name || 'Preview'"
          class="preview-panel__image"
        />
        <div v-else class="preview-panel__placeholder">
          <AfsIcon name="image-24" />
          <span>No preview</span>
        </div>
      </div>
      
      <!-- Item details -->
      <div v-if="item" class="preview-panel__details">
        <h4 class="preview-panel__item-name">{{ item.name }}</h4>
        <p v-if="item.description" class="preview-panel__item-desc">
          {{ item.description }}
        </p>
        
        <dl v-if="item.properties" class="preview-panel__props">
          <template v-for="(value, key) in item.properties" :key="key">
            <dt class="preview-panel__prop-key">{{ key }}</dt>
            <dd class="preview-panel__prop-value">{{ value }}</dd>
          </template>
        </dl>
      </div>
    </div>
    
    <div v-if="$slots.actions" class="preview-panel__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * PreviewPanel - Component/item preview panel
 * 
 * @see PreviewPanel.js plugin
 */
defineOptions({ name: 'PreviewPanel' });

interface PreviewItem {
  name: string;
  description?: string;
  properties?: Record<string, string | number>;
}

withDefaults(
  defineProps<{
    /** Panel title */
    title?: string;
    /** Preview image URL */
    imageUrl?: string;
    /** Item data */
    item?: PreviewItem | null;
    /** Show loading state */
    loading?: boolean;
    /** Show close button */
    closable?: boolean;
  }>(),
  {
    title: 'Preview',
    imageUrl: '',
    item: null,
    loading: false,
    closable: true,
  }
);

defineEmits<{
  (e: 'close'): void;
}>();
</script>

<style lang="scss">
.preview-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--afs-sidebar, #fff);
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__title {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__close {
    padding: 4px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--afs-text-icon-secondary, #6b7280);
    
    &:hover {
      color: var(--afs-text-icon-primary, #111827);
    }
  }
  
  &__content {
    flex: 1;
    overflow-y: auto;
  }
  
  &__preview {
    position: relative;
    aspect-ratio: 4/3;
    background: var(--afs-group, #f9fafb);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &__loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &__spinner {
    width: 24px;
    height: 24px;
    border: 2px solid var(--afs-border, #e5e7eb);
    border-top-color: var(--afs-accent, #3b82f6);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  &__image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  &__placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: var(--afs-text-icon-hint, #9ca3af);
    font-size: 13px;
  }
  
  &__details {
    padding: 16px;
  }
  
  &__item-name {
    margin: 0 0 4px;
    font-size: 14px;
    font-weight: 600;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__item-desc {
    margin: 0 0 12px;
    font-size: 13px;
    color: var(--afs-text-icon-secondary, #6b7280);
  }
  
  &__props {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 4px 12px;
    margin: 0;
    font-size: 12px;
  }
  
  &__prop-key {
    color: var(--afs-text-icon-hint, #9ca3af);
  }
  
  &__prop-value {
    margin: 0;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__actions {
    padding: 12px 16px;
    border-top: 1px solid var(--afs-border, #e5e7eb);
  }
}
</style>
