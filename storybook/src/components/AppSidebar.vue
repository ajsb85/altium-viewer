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
  metaInfo: {
    type: Object,
    default: () => ({}),
  },
  size: {
    type: String,
    default: 'sm',
  },
  resizable: {
    type: Boolean,
    default: false,
  },
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
  background-color: #f9fafb;
  border-right: 1px solid #e5e7eb;
  
  &_sm { width: 240px; }
  &_md { width: 320px; }
  &_lg { width: 400px; }
  
  &.is-flex {
    flex: 1;
    width: auto;
  }
  
  &__title {
    font-size: 18px;
    font-weight: 600;
    padding: 16px 16px 8px 16px;
    color: #111827;
  }
  
  &__sub-title {
    font-size: 14px;
    color: #6b7280;
    padding: 0 16px 16px 16px;
    border-bottom: 1px solid #e5e7eb;
  }
  
  &__sub-title-additional-text {
    margin-left: 8px;
    font-size: 12px;
    background-color: #e5e7eb;
    padding: 2px 6px;
    border-radius: 4px;
  }
  
  &__content {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
  }
}
</style>
