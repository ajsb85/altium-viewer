<template>
  <button type="button" class="app-object-panel__btn" @click="$emit('toggle')">
    <svg class="icon icon-filled app-object-panel__btn-picture" :class="`icon-${icon}`">
      <use :xlink:href="`#svg-sprite-filled--icon-${icon}`"></use>
    </svg>
    <div class="afs-typography_paragraph afs-typography_ellipsis afs-typography app-object-panel__object-name">
      {{ name }}
    </div>
    <div class="app-object-panel__btn-visibility">
      <span class="app-object-panel__btn-only" @click.stop="$emit('only')">Only</span>
      <svg class="icon app-object-panel__btn-icon" :class="isVisible ? 'icon-eye-16-2' : 'icon-eye-off-16-2'">
        <use :xlink:href="isVisible ? '#svg-sprite--eye-16-2' : '#svg-sprite--eye-off-16-2'"></use>
      </svg>
    </div>
  </button>
</template>

<script setup lang="ts">
/**
 * ObjectItem - PCB object type row in visibility panel
 * 
 * Production HTML structure from app-object-panel.
 * Shows object type with icon, name, Only/visibility buttons.
 * 
 * Production CSS: app-object-panel__btn from production.css
 */
defineOptions({ name: 'ObjectItem' });

withDefaults(
  defineProps<{
    name: string;
    icon: string;
    isVisible?: boolean;
  }>(),
  {
    isVisible: true,
  }
);

defineEmits<{
  (e: 'toggle'): void;
  (e: 'only'): void;
}>();
</script>

<style lang="scss">
/**
 * Production CSS for app-object-panel__btn
 * Extracted from production.css
 */
.app-object-panel__btn {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px 8px 6px 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-primary, #fff);
  font-size: 13px;
  text-align: left;
  transition: background-color var(--transition-duration-default, 0.15s);
  
  &:hover {
    background: var(--background-clickable_hover, rgba(255, 255, 255, 0.05));
    
    .app-object-panel__btn-only {
      opacity: 0.5;
    }
    
    .app-object-panel__btn-icon {
      opacity: 0.5;
    }
  }
}

.app-object-panel__btn-picture {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  flex-shrink: 0;
  color: var(--afs-text-icon-secondary, #999);
}

.app-object-panel__object-name {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.app-object-panel__btn-visibility {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.app-object-panel__btn-only {
  opacity: 0;
  padding: 0 6px;
  font-size: 11px;
  color: var(--color-clickable-icon, #999);
  cursor: pointer;
  transition: opacity var(--transition-duration-default, 0.15s);
  
  &:hover {
    opacity: 1 !important;
  }
}

.app-object-panel__btn-icon {
  width: 16px;
  height: 16px;
  opacity: 0;
  color: var(--color-clickable-icon, #999);
  transition: opacity var(--transition-duration-default, 0.15s);
  
  &:hover {
    opacity: 1 !important;
  }
}

.app-object-panel__btn:hover .app-object-panel__btn-only,
.app-object-panel__btn:hover .app-object-panel__btn-icon {
  opacity: 0.5;
}
</style>
