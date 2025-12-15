<template>
  <div class="app-board-items-visibility">
    <div class="app-board-items-visibility__header">
      <AppBoardControl
        :viewMode="viewMode"
        :is3D="is3D"
        @update:viewMode="$emit('update:viewMode', $event)"
        @update:is3D="$emit('update:is3D', $event)"
      />
    </div>
    <TabPanel
      :tabs="tabs"
      :modelValue="activeTab"
      @update:modelValue="$emit('update:activeTab', $event)"
    />
    <div class="app-board-items-visibility__content">
      <slot />
    </div>
    <AppLayersFooter
      @showAll="$emit('showAll')"
      @hideAll="$emit('hideAll')"
    />
  </div>
</template>

<script setup lang="ts">
import AppBoardControl from './AppBoardControl.vue';
import TabPanel from './TabPanel.vue';
import AppLayersFooter from './AppLayersFooter.vue';

/**
 * AppBoardItemsVisibility - Main layers/objects visibility panel
 * @see production example.html
 */
defineOptions({ name: 'AppBoardItemsVisibility' });

withDefaults(
  defineProps<{
    viewMode?: 'top' | 'bottom';
    is3D?: boolean;
    activeTab?: string;
    tabs?: { id: string; name: string }[];
  }>(),
  {
    viewMode: 'top',
    is3D: false,
    activeTab: 'layers',
    tabs: () => [
      { id: 'layers', name: 'Layers' },
      { id: 'objects', name: 'Objects' },
    ],
  }
);

defineEmits<{
  (e: 'update:viewMode', mode: 'top' | 'bottom'): void;
  (e: 'update:is3D', is3D: boolean): void;
  (e: 'update:activeTab', tabId: string): void;
  (e: 'showAll'): void;
  (e: 'hideAll'): void;
}>();
</script>

<style lang="scss">
.app-board-items-visibility {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--afs-panel, #2c2c2e);
  
  &__header {
    padding: 8px 12px;
    border-bottom: 1px solid var(--afs-border, #38383a);
  }
  
  &__content {
    flex: 1;
    overflow: auto;
  }
}
</style>
