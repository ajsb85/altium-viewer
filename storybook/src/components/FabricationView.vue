<template>
  <div class="fabrication-view">
    <div class="fabrication-view__header">
      <h3 class="fabrication-view__title">{{ title }}</h3>
    </div>
    <div class="fabrication-view__content">
      <div class="fabrication-view__section" v-for="section in sections" :key="section.id">
        <h4 class="fabrication-view__section-title">{{ section.title }}</h4>
        <dl class="fabrication-view__props">
          <template v-for="prop in section.properties" :key="prop.key">
            <dt class="fabrication-view__prop-key">{{ prop.label }}</dt>
            <dd class="fabrication-view__prop-value">{{ prop.value }}</dd>
          </template>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * FabricationView - Fabrication data display
 * 
 * @see Fabrication.js
 */
defineOptions({ name: 'FabricationView' });

interface Property { key: string; label: string; value: string | number; }
interface Section { id: string; title: string; properties: Property[]; }

withDefaults(
  defineProps<{
    /** View title */
    title?: string;
    /** Data sections */
    sections?: Section[];
  }>(),
  {
    title: 'Fabrication Data',
    sections: () => [],
  }
);
</script>

<style lang="scss">
.fabrication-view {
  background: var(--afs-sidebar, #fff);
  
  &__header {
    padding: 12px 16px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__title {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
  }
  
  &__content {
    padding: 8px 0;
  }
  
  &__section {
    padding: 8px 16px;
    
    &:not(:last-child) {
      border-bottom: 1px solid var(--afs-border, #e5e7eb);
    }
  }
  
  &__section-title {
    margin: 0 0 8px;
    font-size: 12px;
    font-weight: 600;
    color: var(--afs-text-icon-secondary, #6b7280);
  }
  
  &__props {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 12px;
    margin: 0;
    font-size: 12px;
  }
  
  &__prop-key {
    color: var(--afs-text-icon-hint, #9ca3af);
  }
  
  &__prop-value {
    margin: 0;
    text-align: right;
    color: var(--afs-text-icon-primary, #111827);
  }
}
</style>
