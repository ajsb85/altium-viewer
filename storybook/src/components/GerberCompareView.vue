<template>
  <div class="gerber-compare-view">
    <div class="gerber-compare-view__header">
      <AfsIcon name="compare-16" class="gerber-compare-view__icon" />
      <span class="afs-typography_title afs-typography">Gerber Compare</span>
      <span class="gerber-compare-view__meta">{{ differencesCount }} differences</span>
    </div>
    <div class="gerber-compare-view__content">
      <div class="gerber-compare-view__pane">
        <div class="gerber-compare-view__pane-label">{{ leftLabel }}</div>
        <div class="gerber-compare-view__canvas gerber-compare-view__canvas--left">
          <slot name="left">
            <div class="gerber-compare-view__placeholder" style="background: rgba(255,0,0,0.1);">
              <span>Left Gerber</span>
            </div>
          </slot>
        </div>
      </div>
      <div class="gerber-compare-view__divider" />
      <div class="gerber-compare-view__pane">
        <div class="gerber-compare-view__pane-label">{{ rightLabel }}</div>
        <div class="gerber-compare-view__canvas gerber-compare-view__canvas--right">
          <slot name="right">
            <div class="gerber-compare-view__placeholder" style="background: rgba(0,255,0,0.1);">
              <span>Right Gerber</span>
            </div>
          </slot>
        </div>
      </div>
    </div>
    <div class="gerber-compare-view__legend">
      <div class="gerber-compare-view__legend-item">
        <span class="gerber-compare-view__legend-color" style="background: #ff4444;" />
        <span>Removed</span>
      </div>
      <div class="gerber-compare-view__legend-item">
        <span class="gerber-compare-view__legend-color" style="background: #44ff44;" />
        <span>Added</span>
      </div>
      <div class="gerber-compare-view__legend-item">
        <span class="gerber-compare-view__legend-color" style="background: #4444ff;" />
        <span>Modified</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * GerberCompareView - Side-by-side Gerber comparison
 * @see production example.html
 */
defineOptions({ name: 'GerberCompareView' });

withDefaults(
  defineProps<{
    /** Label for left view */
    leftLabel?: string;
    /** Label for right view */
    rightLabel?: string;
    /** Total count of differences found */
    differencesCount?: number;
  }>(),
  {
    leftLabel: 'Before',
    rightLabel: 'After',
    differencesCount: 0,
  }
);
</script>

<style lang="scss">
.gerber-compare-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--afs-background, #1c1c1e);
  
  &__header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    background: var(--afs-panel, #2c2c2e);
    border-bottom: 1px solid var(--afs-border, #38383a);
  }
  
  &__icon {
    font-size: 16px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__meta {
    margin-left: auto;
    font-size: 12px;
    color: var(--afs-text-icon-hint, #ebebf54d);
  }
  
  &__content {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  
  &__pane {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  &__pane-label {
    padding: 6px 12px;
    font-size: 11px;
    font-weight: 500;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
    background: var(--afs-group, #48484a);
    text-align: center;
  }
  
  &__canvas {
    flex: 1;
    overflow: auto;
  }
  
  &__divider {
    width: 1px;
    background: var(--afs-border, #38383a);
  }
  
  &__placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--afs-text-icon-hint, #ebebf54d);
    font-size: 13px;
  }
  
  &__legend {
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 8px 16px;
    background: var(--afs-panel, #2c2c2e);
    border-top: 1px solid var(--afs-border, #38383a);
  }
  
  &__legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__legend-color {
    width: 12px;
    height: 12px;
    border-radius: 2px;
  }
}
</style>
