<template>
  <div class="sch-compare">
    <div class="sch-compare__header">
      <div class="sch-compare__title">
        <AfsIcon name="schematic-16" class="sch-compare__icon" />
        <span class="afs-typography_title afs-typography">Schematic Compare</span>
      </div>
      <div class="sch-compare__meta">
        <span class="afs-typography_paragraph afs-typography">{{ changesCount }} changes</span>
      </div>
    </div>
    <div class="sch-compare__content">
      <div class="sch-compare__pane sch-compare__pane--left">
        <div class="sch-compare__pane-header">
          <span class="afs-typography_paragraph afs-typography">{{ leftLabel }}</span>
        </div>
        <div class="sch-compare__canvas">
          <slot name="left">
            <div class="sch-compare__placeholder">
              <AfsIcon name="schematic-16" />
              <span>Left schematic</span>
            </div>
          </slot>
        </div>
      </div>
      <div class="sch-compare__divider" />
      <div class="sch-compare__pane sch-compare__pane--right">
        <div class="sch-compare__pane-header">
          <span class="afs-typography_paragraph afs-typography">{{ rightLabel }}</span>
        </div>
        <div class="sch-compare__canvas">
          <slot name="right">
            <div class="sch-compare__placeholder">
              <AfsIcon name="schematic-16" />
              <span>Right schematic</span>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * SchCompare - Schematic comparison side-by-side view
 * @see production example.html
 */
defineOptions({ name: 'SchCompare' });

withDefaults(
  defineProps<{
    /** Label for lefthand schematic */
    leftLabel?: string;
    /** Label for righthand schematic */
    rightLabel?: string;
    /** Total number of changes */
    changesCount?: number;
  }>(),
  {
    leftLabel: 'Revision A',
    rightLabel: 'Revision B',
    changesCount: 0,
  }
);
</script>

<style lang="scss">
.sch-compare {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--afs-background, #1c1c1e);
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: var(--afs-panel, #2c2c2e);
    border-bottom: 1px solid var(--afs-border, #38383a);
  }
  
  &__title {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  &__icon {
    font-size: 16px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__meta {
    color: var(--afs-text-icon-hint, #ebebf54d);
    font-size: 12px;
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
  
  &__pane-header {
    padding: 8px 12px;
    background: var(--afs-group, #48484a);
    font-size: 12px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 8px;
    color: var(--afs-text-icon-hint, #ebebf54d);
    font-size: 32px;
    
    span { font-size: 12px; }
  }
}
</style>
