<template>
  <div class="compare-document">
    <div class="compare-document__header">
      <AfsIcon name="compare-16" class="compare-document__icon" />
      <span class="afs-typography_title afs-typography">{{ title }}</span>
    </div>
    <div class="compare-document__body">
      <div class="compare-document__section" v-for="section in sections" :key="section.id">
        <div class="compare-document__section-header">
          <span class="afs-typography_paragraph afs-typography">{{ section.title }}</span>
          <span 
            class="compare-document__badge" 
            :class="`compare-document__badge--${section.status}`"
          >
            {{ section.status }}
          </span>
        </div>
        <div class="compare-document__section-content">
          <div 
            v-for="change in section.changes" 
            :key="change.id" 
            class="compare-document__change"
            :class="`compare-document__change--${change.type}`"
          >
            <AfsIcon :name="getChangeIcon(change.type)" class="compare-document__change-icon" />
            <span class="afs-typography_paragraph afs-typography">{{ change.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * CompareDocument - Document comparison with change tracking
 * @see production example.html
 */
defineOptions({ name: 'CompareDocument' });

interface Change {
  id: string;
  type: 'added' | 'removed' | 'modified';
  description: string;
}

interface Section {
  id: string;
  title: string;
  status: 'added' | 'removed' | 'modified' | 'unchanged';
  changes: Change[];
}

withDefaults(
  defineProps<{
    /** Document title */
    title?: string;
    /** Array of sections with changes */
    sections: Section[];
  }>(),
  {
    title: 'Document Comparison',
    sections: () => [],
  }
);

function getChangeIcon(type: string): string {
  switch (type) {
    case 'added': return 'plus-16';
    case 'removed': return 'minus-16';
    case 'modified': return 'edit-16';
    default: return 'dot-16';
  }
}
</script>

<style lang="scss">
.compare-document {
  background: var(--afs-panel, #2c2c2e);
  border-radius: 4px;
  overflow: hidden;
  
  &__header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--afs-border, #38383a);
  }
  
  &__icon {
    font-size: 16px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__body {
    padding: 8px;
  }
  
  &__section {
    margin-bottom: 12px;
    
    &:last-child { margin-bottom: 0; }
  }
  
  &__section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    background: var(--afs-group, #48484a);
    border-radius: 4px 4px 0 0;
  }
  
  &__section-content {
    padding: 8px 12px;
    background: var(--afs-background, #1c1c1e);
    border-radius: 0 0 4px 4px;
  }
  
  &__badge {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 2px 6px;
    border-radius: 2px;
    
    &--added { background: var(--afs-success, #30d158); color: #000; }
    &--removed { background: var(--afs-error, #ff453a); color: #fff; }
    &--modified { background: var(--afs-warning, #ffd60a); color: #000; }
    &--unchanged { background: var(--afs-secondary-default, #636366); color: #fff; }
  }
  
  &__change {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 0;
    font-size: 12px;
    
    &--added { color: var(--afs-success, #30d158); }
    &--removed { color: var(--afs-error, #ff453a); }
    &--modified { color: var(--afs-warning, #ffd60a); }
  }
  
  &__change-icon {
    font-size: 12px;
  }
}
</style>
