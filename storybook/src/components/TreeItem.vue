<template>
  <div class="tree-item" :class="{ 'is-expanded': isExpanded, 'is-selected': isSelected }">
    <div class="tree-item__row" :style="{ paddingLeft: `${depth * 16}px` }" @click="handleClick">
      <button
        v-if="hasChildren"
        type="button"
        class="tree-item__toggle"
        @click.stop="toggle"
      >
        <span class="tree-item__arrow">▶</span>
      </button>
      <div v-else class="tree-item__spacer" />
      
      <AfsIcon v-if="icon" :name="icon" class="tree-item__icon" />
      <span class="tree-item__label">{{ label }}</span>
      <AfsBadge v-if="badge" size="xs">{{ badge }}</AfsBadge>
    </div>
    
    <div v-if="hasChildren && isExpanded" class="tree-item__children">
      <TreeItem
        v-for="child in children"
        :key="child.id"
        v-bind="child"
        :depth="depth + 1"
        :selected-id="selectedId"
        @select="$emit('select', $event)"
        @toggle="$emit('toggle', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import AfsIcon from './AfsIcon.vue';
import AfsBadge from './AfsBadge.vue';

/**
 * TreeItem - Recursive tree item component
 * 
 * @see ViewerApp.js TreeItemOptions
 */
defineOptions({ name: 'TreeItem' });

interface TreeItemData {
  id: string;
  label: string;
  icon?: string;
  badge?: string;
  children?: TreeItemData[];
  expanded?: boolean;
}

const props = withDefaults(
  defineProps<{
    /** Item ID */
    id: string;
    /** Label text */
    label: string;
    /** Icon name */
    icon?: string;
    /** Badge text */
    badge?: string;
    /** Child items */
    children?: TreeItemData[];
    /** Expanded state */
    expanded?: boolean;
    /** Current depth level (internal) */
    depth?: number;
    /** Selected item ID */
    selectedId?: string | null;
  }>(),
  {
    icon: '',
    badge: '',
    children: () => [],
    expanded: false,
    depth: 0,
    selectedId: null,
  }
);

const emit = defineEmits<{
  (e: 'select', id: string): void;
  (e: 'toggle', id: string): void;
}>();

const isExpanded = ref(props.expanded);

const hasChildren = computed(() => props.children && props.children.length > 0);
const isSelected = computed(() => props.selectedId === props.id);

watch(() => props.expanded, (val) => { isExpanded.value = val; });

function toggle() {
  isExpanded.value = !isExpanded.value;
  emit('toggle', props.id);
}

function handleClick() {
  emit('select', props.id);
}
</script>

<style lang="scss">
.tree-item {
  &__row {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #f3f4f6);
    }
  }
  
  &.is-selected > .tree-item__row {
    background: var(--afs-accent, #3b82f6);
    color: white;
    
    .tree-item__icon { color: white; }
  }
  
  &__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  &__arrow {
    font-size: 8px;
    transition: transform 0.15s;
  }
  
  &.is-expanded > .tree-item__row .tree-item__arrow {
    transform: rotate(90deg);
  }
  
  &__spacer {
    width: 16px;
  }
  
  &__icon {
    font-size: 14px;
    color: var(--afs-text-icon-secondary, #6b7280);
  }
  
  &__label {
    flex: 1;
    font-size: 13px;
  }
  
  &__children {
    // Nested items
  }
}
</style>
