<template>
  <div class="tab-panel">
    <div class="tab-panel__tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        class="tab-panel__tab"
        :class="{ 'is-active': tab.id === modelValue }"
        @click="selectTab(tab.id)"
      >
        <span class="tab-panel__tab-text">{{ tab.name }}</span>
        <AfsBadge v-if="tab.badge" size="xs" :type="tab.badgeType || 'base'">
          {{ tab.badge }}
        </AfsBadge>
      </button>
    </div>
    <div class="tab-panel__content">
      <slot :activeTab="modelValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsBadge from './AfsBadge.vue';

/**
 * TabPanel - Tab navigation component for plugin panels
 * 
 * Used by BoardItemsVisibility for switching between Layers and Objects views.
 * 
 * @see BoardItemsVisibility.js TabPanel component
 */
defineOptions({ name: 'TabPanel' });

interface Tab {
  id: string;
  name: string;
  badge?: string | number;
  badgeType?: string;
}

const props = defineProps({
  /**
   * Array of tab definitions.
   * Each item usually contains `id`, `name`, `badge`, `badgeType`.
   */
  tabs: {
    type: Array as () => Tab[],
    required: true
  },
  /**
   * Currently active tab ID (v-model).
   */
  modelValue: {
    type: String,
    required: true
  }
});

const emit = defineEmits<{
  (e: 'update:modelValue', tabId: string): void;
}>();

function selectTab(tabId: string) {
  emit('update:modelValue', tabId);
}
</script>

<style lang="scss">
.tab-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &__tabs {
    display: flex;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
    padding: 0 8px;
  }
  
  &__tab {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 12px;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    color: var(--afs-text-icon-secondary, #6b7280);
    font-size: 12px;
    font-weight: 500;
    transition: color 0.2s, border-color 0.2s;
    
    &:hover {
      color: var(--afs-text-icon-primary, #111827);
    }
    
    &.is-active {
      color: var(--afs-accent, #3b82f6);
      border-bottom-color: var(--afs-accent, #3b82f6);
    }
  }
  
  &__tab-text {
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  &__content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
