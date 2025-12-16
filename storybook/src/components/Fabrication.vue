<template>
  <div class="fabrication">
    <div class="afs-subheader fabrication__header">
      <AfsIcon name="fabrication-16" class="fabrication__icon" />
      <span class="afs-typography_title afs-typography">Fabrication</span>
    </div>
    <div class="fabrication__content">
      <div class="fabrication__section" v-for="section in sections" :key="section.id">
        <div class="fabrication__section-header">
          <span class="afs-typography_paragraph afs-typography">{{ section.title }}</span>
        </div>
        <div class="fabrication__section-body">
          <div 
            class="fabrication__row" 
            v-for="item in section.items" 
            :key="item.label"
          >
            <span class="fabrication__label">{{ item.label }}</span>
            <span class="fabrication__value">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * Fabrication - Fabrication data display component
 * @see production example.html
 */
defineOptions({ name: 'Fabrication' });

interface FabricationItem {
  label: string;
  value: string;
}

interface FabricationSection {
  id: string;
  title: string;
  items: FabricationItem[];
}

withDefaults(
  defineProps<{
    /** Sections of fabrication data */
    sections: FabricationSection[];
  }>(),
  {
    sections: () => [],
  }
);
</script>

<style lang="scss">
.fabrication {
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
  
  &__content {
    padding: 8px;
  }
  
  &__section {
    margin-bottom: 8px;
    
    &:last-child { margin-bottom: 0; }
  }
  
  &__section-header {
    padding: 8px 12px;
    background: var(--afs-group, #48484a);
    border-radius: 4px 4px 0 0;
    font-size: 12px;
    font-weight: 500;
    color: var(--afs-text-icon-primary, #fff);
  }
  
  &__section-body {
    padding: 8px 12px;
    background: var(--afs-background, #1c1c1e);
    border-radius: 0 0 4px 4px;
  }
  
  &__row {
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
    font-size: 12px;
    
    &:not(:last-child) {
      border-bottom: 1px solid var(--afs-border, #38383a);
    }
  }
  
  &__label {
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__value {
    color: var(--afs-text-icon-primary, #fff);
    font-family: monospace;
  }
}
</style>
