<template>
  <div class="accordion" :class="{ 'is-expanded': isExpanded }">
    <button
      type="button"
      class="accordion__header"
      @click="toggle"
    >
      <span class="accordion__title">
        <slot name="title">{{ title }}</slot>
      </span>
      <AfsIcon 
        :name="isExpanded ? 'chevron-up-12' : 'chevron-down-12'" 
        class="accordion__icon" 
      />
    </button>
    <Transition name="accordion">
      <div v-if="isExpanded" class="accordion__content">
        <div class="accordion__body">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * Accordion - Collapsible content panel
 * 
 * @see vendors.js Accordion component
 */
defineOptions({ name: 'Accordion' });

const props = withDefaults(
  defineProps<{
    /** Panel title */
    title?: string;
    /** Initially expanded */
    defaultExpanded?: boolean;
    /** Controlled expanded state */
    expanded?: boolean;
  }>(),
  {
    title: '',
    defaultExpanded: false,
    expanded: undefined,
  }
);

const emit = defineEmits<{
  (e: 'toggle', isExpanded: boolean): void;
}>();

const isExpanded = ref(props.expanded ?? props.defaultExpanded);

watch(() => props.expanded, (newVal) => {
  if (newVal !== undefined) {
    isExpanded.value = newVal;
  }
});

function toggle() {
  isExpanded.value = !isExpanded.value;
  emit('toggle', isExpanded.value);
}
</script>

<style lang="scss">
.accordion {
  border: 1px solid var(--afs-border, #e5e7eb);
  border-radius: 6px;
  background: var(--afs-sidebar, #fff);
  overflow: hidden;
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 16px;
    background: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #f3f4f6);
    }
  }
  
  &__title {
    font-size: 14px;
    font-weight: 500;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__icon {
    color: var(--afs-text-icon-secondary, #6b7280);
    transition: transform 0.2s;
  }
  
  &.is-expanded &__icon {
    transform: rotate(180deg);
  }
  
  &__content {
    border-top: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__body {
    padding: 16px;
  }
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
