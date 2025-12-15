<template>
  <div class="base-result" :class="{ 'is-selected': isSelected }" @click="$emit('click')">
    <AfsIcon v-if="icon" :name="icon" class="base-result__icon" />
    <div class="base-result__content">
      <span class="base-result__title" v-html="highlightedTitle" />
      <span v-if="subtitle" class="base-result__subtitle">{{ subtitle }}</span>
    </div>
    <AfsBadge v-if="badge" size="xs" :type="badgeType">{{ badge }}</AfsBadge>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AfsIcon from './AfsIcon.vue';
import AfsBadge from './AfsBadge.vue';

/**
 * BaseResult - Single search result item
 */
defineOptions({ name: 'BaseResult' });

const props = withDefaults(
  defineProps<{
    title: string;
    subtitle?: string;
    icon?: string;
    badge?: string;
    badgeType?: 'primary' | 'success' | 'warning' | 'error';
    isSelected?: boolean;
    highlightQuery?: string;
  }>(),
  {
    subtitle: '',
    icon: '',
    badge: '',
    badgeType: 'primary',
    isSelected: false,
    highlightQuery: '',
  }
);

defineEmits<{ (e: 'click'): void }>();

const highlightedTitle = computed(() => {
  if (!props.highlightQuery) return props.title;
  const regex = new RegExp(`(${props.highlightQuery})`, 'gi');
  return props.title.replace(regex, '<mark>$1</mark>');
});
</script>

<style lang="scss">
.base-result {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.15s;
  
  &:hover { background: var(--afs-secondary-selected, #f3f4f6); }
  
  &.is-selected {
    background: var(--afs-accent, #3b82f6);
    .base-result__title, .base-result__subtitle, .base-result__icon { color: white; }
  }
  
  &__icon {
    flex-shrink: 0;
    color: var(--afs-text-icon-secondary, #6b7280);
  }
  
  &__content {
    flex: 1;
    min-width: 0;
  }
  
  &__title {
    display: block;
    font-size: 13px;
    color: var(--afs-text-icon-primary, #111827);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    mark {
      background: #fef08a;
      color: inherit;
      padding: 0 2px;
      border-radius: 2px;
    }
  }
  
  &__subtitle {
    display: block;
    font-size: 11px;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
}
</style>
