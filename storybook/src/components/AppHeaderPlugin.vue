<template>
  <button
    type="button"
    class="app-header-plugin"
    :class="{ 'is-active': isActive }"
    :title="tooltip"
    @click="$emit('click')"
  >
    <AfsIcon :name="icon" />
    <span v-if="label" class="app-header-plugin__label">{{ label }}</span>
    <AfsBadge v-if="badge" size="xs" class="app-header-plugin__badge">{{ badge }}</AfsBadge>
  </button>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';
import AfsBadge from './AfsBadge.vue';

/**
 * AppHeaderPlugin - Plugin button in header
 * 
 * @see ViewerComponents.js
 */
defineOptions({ name: 'AppHeaderPlugin' });

withDefaults(
  defineProps<{
    icon: string;
    label?: string;
    tooltip?: string;
    badge?: string;
    isActive?: boolean;
  }>(),
  {
    label: '',
    tooltip: '',
    badge: '',
    isActive: false,
  }
);

defineEmits<{ (e: 'click'): void }>();
</script>

<style lang="scss">
.app-header-plugin {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  color: var(--afs-text-icon-secondary, #6b7280);
  transition: all 0.15s;
  
  &:hover {
    background: var(--afs-secondary-selected, #f3f4f6);
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &.is-active {
    background: var(--afs-accent, #3b82f6);
    border-color: var(--afs-accent, #3b82f6);
    color: white;
  }
  
  &__label {
    font-size: 12px;
    font-weight: 500;
  }
  
  &__badge {
    margin-left: 2px;
  }
}
</style>
