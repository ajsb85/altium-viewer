<template>
  <div class="compare-panel">
    <div class="compare-panel__header">
      <h3 class="compare-panel__title">{{ title }}</h3>
      <div class="compare-panel__mode">
        <button
          v-for="mode in modes"
          :key="mode.id"
          type="button"
          class="compare-panel__mode-btn"
          :class="{ 'is-active': activeMode === mode.id }"
          @click="$emit('modeChange', mode.id)"
        >
          {{ mode.label }}
        </button>
      </div>
    </div>
    
    <div class="compare-panel__content">
      <div class="compare-panel__side compare-panel__side--left">
        <div class="compare-panel__label">{{ leftLabel }}</div>
        <slot name="left">
          <div class="compare-panel__placeholder">Select version</div>
        </slot>
      </div>
      
      <div class="compare-panel__divider">
        <div class="compare-panel__divider-line" />
      </div>
      
      <div class="compare-panel__side compare-panel__side--right">
        <div class="compare-panel__label">{{ rightLabel }}</div>
        <slot name="right">
          <div class="compare-panel__placeholder">Select version</div>
        </slot>
      </div>
    </div>
    
    <div v-if="differences.length" class="compare-panel__diff-list">
      <h4 class="compare-panel__diff-title">Differences ({{ differences.length }})</h4>
      <div
        v-for="diff in differences"
        :key="diff.id"
        class="compare-panel__diff-item"
        :class="[`compare-panel__diff-item--${diff.type}`]"
        @click="$emit('selectDiff', diff)"
      >
        <span class="compare-panel__diff-icon">
          {{ diff.type === 'added' ? '+' : diff.type === 'removed' ? '−' : '~' }}
        </span>
        <span class="compare-panel__diff-name">{{ diff.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * ComparePanel - Side-by-side comparison panel
 * 
 * @see Compare plugins
 */
defineOptions({ name: 'ComparePanel' });

interface Mode {
  id: string;
  label: string;
}

interface Difference {
  id: string;
  name: string;
  type: 'added' | 'removed' | 'changed';
}

withDefaults(
  defineProps<{
    /** Panel title */
    title?: string;
    /** Comparison modes available */
    modes?: Mode[];
    /** ID of currently active mode */
    activeMode?: string;
    /** Label for the left side view */
    leftLabel?: string;
    /** Label for the right side view */
    rightLabel?: string;
    /** List of detected differences */
    differences?: Difference[];
  }>(),
  {
    title: 'Compare',
    modes: () => [
      { id: 'overlay', label: 'Overlay' },
      { id: 'sideBySide', label: 'Side by Side' },
      { id: 'diff', label: 'Diff' },
    ],
    activeMode: 'overlay',
    leftLabel: 'Current',
    rightLabel: 'Previous',
    differences: () => [],
  }
);

defineEmits<{
  (e: 'modeChange', mode: string): void;
  (e: 'selectDiff', diff: Difference): void;
}>();
</script>

<style lang="scss">
.compare-panel {
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
  }
  
  &__mode {
    display: flex;
    gap: 4px;
  }
  
  &__mode-btn {
    padding: 4px 8px;
    font-size: 11px;
    background: var(--afs-group, #f3f4f6);
    border: 1px solid var(--afs-border, #e5e7eb);
    border-radius: 4px;
    cursor: pointer;
    
    &.is-active {
      background: var(--afs-accent, #3b82f6);
      border-color: var(--afs-accent, #3b82f6);
      color: white;
    }
  }
  
  &__content {
    display: flex;
    flex: 1;
    min-height: 0;
  }
  
  &__side {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  &__label {
    padding: 8px 12px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    background: var(--afs-group, #f9fafb);
    color: var(--afs-text-icon-hint, #9ca3af);
  }
  
  &__placeholder {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--afs-text-icon-hint, #9ca3af);
    font-size: 13px;
  }
  
  &__divider {
    display: flex;
    align-items: center;
    padding: 0 4px;
  }
  
  &__divider-line {
    width: 1px;
    height: 100%;
    background: var(--afs-border, #e5e7eb);
  }
  
  &__diff-list {
    border-top: 1px solid var(--afs-border, #e5e7eb);
    max-height: 200px;
    overflow-y: auto;
  }
  
  &__diff-title {
    margin: 0;
    padding: 8px 12px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
  
  &__diff-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    font-size: 12px;
    cursor: pointer;
    
    &:hover {
      background: var(--afs-secondary-selected, #f3f4f6);
    }
    
    &--added .compare-panel__diff-icon { color: #16a34a; }
    &--removed .compare-panel__diff-icon { color: #dc2626; }
    &--changed .compare-panel__diff-icon { color: #ca8a04; }
  }
  
  &__diff-icon {
    font-weight: bold;
    font-family: monospace;
  }
  
  &__diff-name {
    color: var(--afs-text-icon-primary, #111827);
  }
}
</style>
