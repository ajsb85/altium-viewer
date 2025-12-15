<template>
  <div class="result-section" :class="{ 'is-collapsed': isCollapsed }">
    <button class="result-section__header" type="button" @click="toggleCollapse">
      <div class="result-section__title">
        <AfsIcon :name="icon" class="result-section__icon" />
        <span class="afs-typography_paragraph afs-typography result-section__title-text">
          {{ title }}
        </span>
        <span class="result-section__count">{{ count }}</span>
      </div>
      <AfsIcon 
        name="chevron-down-8" 
        class="result-section__chevron"
        :class="{ 'is-rotated': isCollapsed }"
      />
    </button>
    <div v-show="!isCollapsed" class="result-section__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * ResultSection - Collapsible section for search results
 * @see production example.html
 */
defineOptions({ name: 'ResultSection' });

withDefaults(
  defineProps<{
    title: string;
    count?: number;
    icon?: string;
    defaultCollapsed?: boolean;
  }>(),
  {
    count: 0,
    icon: 'folder-16',
    defaultCollapsed: false,
  }
);

const isCollapsed = ref(false);

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value;
}
</script>

<style lang="scss">
.result-section {
  border-bottom: 1px solid var(--afs-border, #38383a);
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 16px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-hover, #48484a);
    }
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
  
  &__title-text {
    font-size: 13px;
    font-weight: 500;
    color: var(--afs-text-icon-primary, #fff);
  }
  
  &__count {
    font-size: 12px;
    color: var(--afs-text-icon-hint, #ebebf54d);
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
    padding: 0 16px 12px;
  }
}
</style>
