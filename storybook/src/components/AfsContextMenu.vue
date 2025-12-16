<template>
  <Transition v-bind="bindTransition">
    <div
      v-if="isOpened"
      ref="menuRef"
      class="afs-context-menu afs-context-menu_dropdown"
      :class="classes"
      :style="menuStyle"
    >
      <div class="afs-context-menu__inner">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue';

/**
 * AfsContextMenu - Context menu/dropdown component
 * 
 * Provides a positioned dropdown menu that can be triggered by parent elements.
 * Supports sections, items, and various positioning options.
 * 
 * @see vendors.js AfsContextMenu component
 * @see scss/components/afs-context.scss
 */
defineOptions({ name: 'AfsContextMenu' });

const props = defineProps({
  /** Menu ID for reference/accessibility */
  menuId: { type: String, default: '' },
  /** Show arrow pointer on the menu */
  arrow: { type: Boolean, default: false },
  /** Border radius configuration ('all', 'top', 'bottom', 'none') */
  borderRadius: { 
    type: String, 
    default: 'all',
    validator: (v: string) => ['all', 'top', 'bottom', 'none'].includes(v)
  },
  /** Max height in pixels */
  maxHeight: { type: Number, default: 400 },
  /** Min width in pixels */
  minWidth: { type: Number, default: 180 },
});

const isOpened = ref(false);
const menuRef = ref<HTMLElement | null>(null);

const bindTransition = computed(() => ({
  'enter-from-class': 'afs-context-menu_enter',
  'enter-active-class': 'afs-context-menu_enter-active',
  'leave-from-class': 'afs-context-menu_leave',
  'leave-active-class': 'afs-context-menu_leave-active',
  'leave-to-class': 'afs-context-menu_leave-to',
}));

const classes = computed(() => {
  const result: string[] = [];
  
  if (props.arrow) {
    result.push('afs-context-menu_arrow');
  }
  
  // Border radius
  if (props.borderRadius === 'all' || props.borderRadius === 'top') {
    result.push('afs-context-menu_border-top-left-radius');
    result.push('afs-context-menu_border-top-right-radius');
  }
  if (props.borderRadius === 'all' || props.borderRadius === 'bottom') {
    result.push('afs-context-menu_border-bottom-left-radius');
    result.push('afs-context-menu_border-bottom-right-radius');
  }
  
  return result;
});

const menuStyle = computed(() => ({
  maxHeight: `${props.maxHeight}px`,
  minWidth: `${props.minWidth}px`,
  // Ensure the menu is always reachable if fixed positioned but not manually positioned
  // This is a safety fallback, though parent should control position
}));

// Public methods
function open() {
  isOpened.value = true;
  // Delay adding the listener to avoid the current click from closing it immediately
  setTimeout(() => {
    document.addEventListener('click', handleClickOutside);
  }, 0);
}

function close() {
  isOpened.value = false;
  document.removeEventListener('click', handleClickOutside);
}

function toggle() {
  if (isOpened.value) {
    close();
  } else {
    open();
  }
}

// Click outside handler
function handleClickOutside(event: MouseEvent) {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    close();
  }
}

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

defineExpose({ open, close, toggle, isOpened });
</script>

<style lang="scss">
/* 
 * Styles from production: scss/components/afs-context.scss (simplified)
 */
.afs-context-menu {
  position: fixed;
  z-index: 3000;
  transition: border-color 0.25s, color 0.25s, opacity 0.25s, background-color 0.25s, box-shadow 0.25s;
}

.afs-context-menu_enter-active,
.afs-context-menu_leave-active {
  transition: opacity 0.25s;
}

.afs-context-menu_enter,
.afs-context-menu_leave-to {
  opacity: 0;
}

.afs-context-menu_dropdown {
  border: 1px solid var(--afs-border, #e5e7eb);
  overflow: auto;
  color: var(--afs-text-icon-secondary, #6b7280);
  background: var(--afs-popup, #fff);
  box-shadow: var(--afs-black-drop-shadow-large, 0 10px 40px rgba(0, 0, 0, 0.15));
}

.afs-context-menu_dropdown.afs-context-menu_border-top-left-radius {
  border-top-left-radius: 4px;
}

.afs-context-menu_dropdown.afs-context-menu_border-top-right-radius {
  border-top-right-radius: 4px;
}

.afs-context-menu_dropdown.afs-context-menu_border-bottom-left-radius {
  border-bottom-left-radius: 4px;
}

.afs-context-menu_dropdown.afs-context-menu_border-bottom-right-radius {
  border-bottom-right-radius: 4px;
}

.afs-context-menu__inner {
  overflow: auto;
  max-height: 100%;
}

.afs-context-menu__section {
  padding: 8px 0;
  margin: 0;
  list-style-type: none;
  transition: border-color 0.25s;
}

.afs-context-menu__section:not(:last-child) {
  border-bottom: 1px solid var(--afs-border, #e5e7eb);
}

.afs-context-menu__item {
  position: relative;
  padding: 0;
  margin: 0;
}

.afs-context-menu__item-in {
  display: block;
  padding: 6px 15px;
  width: 100%;
}

.afs-context-menu__item-clickable {
  text-align: left;
  color: inherit;
  background: none;
  font-size: 12px;
  text-decoration: none;
  transition: color 0.25s, background-color 0.25s;
  border: none;
  width: 100%;
  cursor: pointer;
  
  &:not(:disabled):hover {
    color: var(--afs-text-icon-primary, #111827);
    background: var(--afs-secondary-selected, #f3f4f6);
  }
  
  &:disabled {
    color: var(--afs-text-icon-hint, #9ca3af);
    pointer-events: none;
    cursor: not-allowed;
  }
}

.afs-context-menu__item-icon {
  position: absolute;
  top: 6px;
  left: 16px;
  font-size: 16px;
  color: var(--afs-icons, #6b7280);
  transition: color 0.25s;
}

.afs-context-menu__text {
  flex-grow: 1;
}
</style>
