<template>
  <AfsSidebar
    class="app-sidebar"
    :class="classes"
    :size="size"
    :resizable="resizable"
  >
    <AfsText v-if="hasSlot('title')" class="app-sidebar__title">
      <slot name="title" />
    </AfsText>
    
    <AfsText v-if="hasSlot('subTitle')" class="app-sidebar__sub-title">
      <slot name="subTitle" />
      <span v-if="metaInfo.subTitleAdditionalText" class="app-sidebar__sub-title-additional-text">
        {{ metaInfo.subTitleAdditionalText }}
      </span>
    </AfsText>
    
    <div class="app-sidebar__content">
      <slot />
    </div>
  </AfsSidebar>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import AfsSidebar from './AfsSidebar.vue';
import AfsText from './AfsText.vue';

const props = defineProps({
  /**
   * Meta information for the sidebar (e.g. title, subtitle).
   */
  metaInfo: {
    type: Object,
    default: () => ({}),
  },
  /**
   * Sidebar size variant.
   * @default 'sm'
   */
  size: {
    type: String,
    default: 'sm',
  },
  /**
   * Whether the sidebar is resizable.
   * @default false
   */
  resizable: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether the sidebar should flex to fill available space.
   * @default false
   */
  flex: {
    type: Boolean,
    default: false,
  },
});

const slots = useSlots();

const classes = computed(() => ({
  [`app-sidebar_${props.size}`]: !!props.size,
  'is-flex': props.flex,
}));

// Use slots object directly to check presence
// In Vue 3 setup, useSlots() returns a reactive object
const hasSlot = (name: string) => !!slots[name];
</script>

<style lang="scss" scoped>
.app-sidebar {
  display: flex;
  flex-direction: column;
  background-color: var(--afs-sidebar, var(--afs-panel, #2c2c2e));
  
  &_sm { width: 240px; }
  &_md { width: 320px; }
  &_lg { width: 400px; }
  
  &.is-flex {
    flex: 1;
    width: auto;
  }
  
  &__title {
    color: var(--color-control-secondary, var(--afs-text-icon-secondary, #9ca3af));
    height: 2rem;
    line-height: 2rem;
    padding: 0 1rem;
    font-weight: 500;
    font-size: 0.63rem;
  }
  
  &__sub-title {
    color: var(--afs-color-primary, var(--afs-text-icon-primary, #e5e7eb));
    line-height: 1.5rem;
    padding: 0.75rem 1rem;
    font-weight: 500;
    font-size: 0.88rem;
    border-bottom: 1px solid var(--afs-primary-border, var(--afs-border, #3c3c3e));
  }
  
  &__sub-title-additional-text {
    color: var(--global-text-base-tertiary, var(--afs-text-icon-hint, #6b7280));
    margin-left: 0.25rem;
  }
  
  &__content {
    flex: 1;
    overflow-y: auto;
  }

  // Custom scrollbar for webkit browsers  
  ::-webkit-scrollbar {
    width: 20px;
  }
  
  ::-webkit-scrollbar-thumb {
    border: 8px solid transparent;
    background-clip: padding-box;
    min-height: 40px;
  }
}
</style>
