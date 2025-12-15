<template>
  <div class="measurement-section">
    <button class="measurement-section__header" type="button" @click="toggleCollapse">
      <div class="measurement-section__title">
        <span class="afs-typography_paragraph afs-typography">{{ title }}</span>
      </div>
      <AfsIcon 
        name="chevron-down-8" 
        class="measurement-section__chevron"
        :class="{ 'is-rotated': isCollapsed }"
      />
    </button>
    <div v-show="!isCollapsed" class="measurement-section__body">
      <div class="measurement-section__row" v-for="(item, idx) in items" :key="idx">
        <span class="measurement-section__label">{{ item.label }}</span>
        <span class="measurement-section__value">{{ item.value }}</span>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * MeasurementSection - Collapsible section for measurements
 * @see production example.html
 */
defineOptions({ name: 'MeasurementSection' });

interface MeasurementItem {
  label: string;
  value: string;
}

withDefaults(
  defineProps<{
    title: string;
    items?: MeasurementItem[];
  }>(),
  {
    items: () => [],
  }
);

const isCollapsed = ref(false);

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value;
}
</script>

<style lang="scss">
.measurement-section {
  background: var(--afs-group, #48484a);
  border-radius: 4px;
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px 12px;
    background: transparent;
    border: none;
    cursor: pointer;
    
    &:hover {
      background: var(--afs-secondary-hover, #636366);
    }
  }
  
  &__title {
    font-size: 12px;
    font-weight: 500;
    color: var(--afs-text-icon-primary, #fff);
  }
  
  &__chevron {
    font-size: 8px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
    transition: transform 0.15s;
    
    &.is-rotated {
      transform: rotate(-90deg);
    }
  }
  
  &__body {
    padding: 0 12px 12px;
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
