<template>
  <div class="app-menu" v-if="isVisible" :style="menuStyle" ref="menuRef">
    <div
      v-for="item in items"
      :key="item.id"
      class="app-menu__item"
      :class="{ 'is-disabled': item.disabled, 'is-separator': item.separator }"
      @click="handleItemClick(item)"
    >
      <template v-if="!item.separator">
        <AfsIcon v-if="item.icon" :name="item.icon" class="app-menu__icon" />
        <span class="app-menu__label">{{ item.label }}</span>
        <span v-if="item.shortcut" class="app-menu__shortcut">{{ item.shortcut }}</span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * AppMenu - Context menu component
 * 
 * @see ViewerApp.js AppMenuOptions
 */
defineOptions({ name: 'AppMenu' });

interface MenuItem {
  id: string;
  label?: string;
  icon?: string;
  shortcut?: string;
  disabled?: boolean;
  separator?: boolean;
}

const props = withDefaults(
  defineProps<{
    items?: MenuItem[];
    isVisible?: boolean;
    x?: number;
    y?: number;
  }>(),
  {
    items: () => [],
    isVisible: false,
    x: 0,
    y: 0,
  }
);

const emit = defineEmits<{
  (e: 'select', item: MenuItem): void;
  (e: 'close'): void;
}>();

const menuRef = ref<HTMLElement | null>(null);

const menuStyle = computed(() => ({
  left: `${props.x}px`,
  top: `${props.y}px`,
}));

function handleItemClick(item: MenuItem) {
  if (item.disabled || item.separator) return;
  emit('select', item);
  emit('close');
}

function handleClickOutside(event: MouseEvent) {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    emit('close');
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style lang="scss">
.app-menu {
  position: fixed;
  z-index: 1000;
  min-width: 160px;
  padding: 4px 0;
  background: var(--afs-sidebar, #fff);
  border: 1px solid var(--afs-border, #e5e7eb);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    font-size: 13px;
    cursor: pointer;
    
    &:hover:not(.is-disabled):not(.is-separator) {
      background: var(--afs-accent, #3b82f6);
      color: white;
      
      .app-menu__icon { color: white; }
      .app-menu__shortcut { color: rgba(255, 255, 255, 0.7); }
    }
    
    &.is-disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    &.is-separator {
      height: 1px;
      padding: 0;
      margin: 4px 8px;
      background: var(--afs-border, #e5e7eb);
    }
  }
  
  &__icon {
    font-size: 14px;
    color: var(--afs-text-icon-secondary, #6b7280);
  }
  
  &__label {
    flex: 1;
  }
  
  &__shortcut {
    font-size: 11px;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
}
</style>
