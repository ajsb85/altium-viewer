<template>
  <div class="objects-panel">
    <!-- Group All Objects toggle -->
    <div class="objects-panel__group-all">
      <label class="objects-panel__checkbox">
        <input 
          type="checkbox" 
          :checked="allObjectsVisible" 
          @change="toggleAllObjects"
        />
        <span class="objects-panel__checkbox-label">{{ allObjectsLabel }}</span>
      </label>
    </div>
    
    <!-- Objects List -->
    <div class="objects-panel__list">
      <div
        v-for="obj in objects"
        :key="obj.id"
        class="objects-panel__item"
        :class="{ 'is-hidden': !obj.isVisible }"
      >
        <label class="objects-panel__checkbox">
          <input 
            type="checkbox" 
            :checked="obj.isVisible"
            @change="toggleObject(obj)"
          />
          <span class="objects-panel__checkbox-label">{{ obj.name }}</span>
        </label>
        
        <button
          type="button"
          class="objects-panel__only-btn"
          title="Show only this object type"
          @click="showOnly(obj)"
        >
          Only
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * ObjectsPanel - Objects visibility panel component
 * 
 * Displays object types (Pads, Tracks, Vias, etc.) with visibility toggles.
 * Part of BoardItemsVisibility plugin.
 * 
 * @see BoardItemsVisibility/components/AppObjectsList.js
 */
defineOptions({ name: 'ObjectsPanel' });

interface ObjectItem {
  id: string | number;
  name: string;
  isVisible: boolean;
}

const props = withDefaults(
  defineProps<{
    /** Array of object items */
    objects: ObjectItem[];
    /** Whether all objects are visible */
    allObjectsVisible?: boolean;
    /** Label for "all objects" toggle */
    allObjectsLabel?: string;
  }>(),
  {
    allObjectsVisible: true,
    allObjectsLabel: 'All Objects',
  }
);

const emit = defineEmits<{
  (e: 'toggleObject', obj: ObjectItem): void;
  (e: 'showOnly', obj: ObjectItem): void;
  (e: 'toggleAllObjects', visible: boolean): void;
}>();

function toggleObject(obj: ObjectItem) {
  emit('toggleObject', obj);
}

function showOnly(obj: ObjectItem) {
  emit('showOnly', obj);
}

function toggleAllObjects(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('toggleAllObjects', target.checked);
}
</script>

<style lang="scss">
.objects-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &__group-all {
    padding: 10px 12px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
    background: var(--afs-group, #f9fafb);
  }
  
  &__list {
    flex: 1;
    overflow-y: auto;
    padding: 4px 0;
  }
  
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 12px;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #f3f4f6);
    }
    
    &.is-hidden {
      opacity: 0.5;
    }
  }
  
  &__checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    
    input[type="checkbox"] {
      width: 14px;
      height: 14px;
      accent-color: var(--afs-accent, #3b82f6);
      cursor: pointer;
    }
  }
  
  &__checkbox-label {
    font-size: 12px;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__only-btn {
    opacity: 0;
    padding: 4px 8px;
    background: none;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    font-size: 10px;
    color: var(--afs-text-icon-secondary, #6b7280);
    transition: all 0.15s;
    
    .objects-panel__item:hover & {
      opacity: 1;
    }
    
    &:hover {
      background: var(--afs-group, #f3f4f6);
      border-color: var(--afs-border, #e5e7eb);
    }
  }
}
</style>
