<template>
  <button
    class="app-objects-button"
    :class="{ 'is-active': isActive }"
    type="button"
    @click="$emit('click')"
  >
    <AfsIcon :name="icon" class="app-objects-button__icon" />
    <span class="afs-typography_paragraph afs-typography app-objects-button__text">
      {{ label }}
    </span>
    <span v-if="count !== undefined" class="app-objects-button__count">
      {{ count }}
    </span>
    <AfsIcon name="chevron-down-8" class="app-objects-button__chevron" :class="{ 'is-rotated': isActive }" />
  </button>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * AppObjectsButton - Toggle button for objects panel
 * @see production example.html
 */
defineOptions({ name: 'AppObjectsButton' });

withDefaults(
  defineProps<{
    label?: string;
    icon?: string;
    count?: number;
    isActive?: boolean;
  }>(),
  {
    label: 'Objects',
    icon: 'objects-16',
    count: undefined,
    isActive: false,
  }
);

defineEmits<{ (e: 'click'): void }>();
</script>

<style lang="scss">
.app-objects-button {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 12px;
  background: var(--afs-group, #48484a);
  border: none;
  border-radius: 4px;
  color: var(--afs-text-icon-primary, #fff);
  cursor: pointer;
  transition: background-color 0.15s;
  
  &:hover {
    background: var(--afs-secondary-hover, #636366);
  }
  
  &.is-active {
    background: var(--afs-primary-overlay, #0a84ff33);
  }
  
  &__icon {
    font-size: 16px;
    color: var(--afs-text-icon-secondary, #ebebf5a6);
  }
  
  &__text {
    flex: 1;
    text-align: left;
    font-size: 13px;
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
      transform: rotate(180deg);
    }
  }
}
</style>
