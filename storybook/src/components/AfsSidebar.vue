<template>
  <GridContainer
    class="afs-sidebar-container"
    :class="classes"
    :style="sidebarStyle"
  >
    <!-- Default slot content -->
    <slot />

    <!-- Resize handle -->
    <div
      v-if="resizable"
      class="afs-sidebar-container__resizer"
      @mousedown="handleResizeStart"
    />
  </GridContainer>
</template>

<script lang="ts" setup>
import { computed, ref, watch, onUnmounted } from 'vue';
import GridContainer from './GridContainer.vue';

/**
 * AfsSidebar - Base resizable sidebar container component
 * 
 * Provides a resizable panel with configurable min/max width constraints.
 * Used as the foundation for AppSidebar and other panel components.
 * 
 * @see ViewerComponents.js createAfsSidebar (L110-201)
 * @see scss/components/afs-sidebar.scss
 */
defineOptions({ name: 'AfsSidebar' });

const props = withDefaults(
  defineProps<{
    /** Side of the viewport: 'left' or 'right' */
    side?: 'left' | 'right';
    /** Width preset: 'sm' (280px), 'md' (320px), 'lg' (360px) */
    size?: 'sm' | 'md' | 'lg';
    /** Enable resizing handle */
    resizable?: boolean;
    /** Minimum resize width in pixels */
    minPanelWidth?: number | null;
    /** Maximum resize width in pixels */
    maxPanelWidth?: number | null;
    /** Initial explicit width in pixels (overrides size preset) */
    initialWidth?: number | null;
  }>(),
  {
    side: 'left',
    size: 'md',
    resizable: false,
    minPanelWidth: null,
    maxPanelWidth: null,
    initialWidth: null,
  }
);

const emit = defineEmits<{
  (e: 'size-changed', width: number): void;
}>();

// Internal state
const minWidth = computed(() => props.minPanelWidth || 240);
const maxWidth = computed(() => props.maxPanelWidth || 640);
const width = ref<number | null>(props.initialWidth);
const isResizing = ref(false);

const sidebarStyle = computed(() => 
  width.value ? { width: `${width.value}px` } : undefined
);

const classes = computed(() => [
  `afs-sidebar-container_${props.side}`,
  `afs-sidebar-container_${props.size}`,
  ...(props.resizable ? ['afs-sidebar-container_resizable'] : []),
]);

// Resize watcher - manages event listeners
watch(isResizing, (newValue) => {
  if (newValue) {
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleResizeEnd);
    document.addEventListener('mouseout', handleMouseOutOfWindow);
    document.body.style.pointerEvents = 'none';
    const resizer = document.querySelector('.afs-sidebar-container__resizer') as HTMLElement;
    if (resizer) resizer.style.pointerEvents = 'auto';
  } else {
    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', handleResizeEnd);
    document.removeEventListener('mouseout', handleMouseOutOfWindow);
    document.body.style.pointerEvents = 'auto';
  }
});

function getBEMClass(element: string) {
  return `afs-sidebar-container__${element}`;
}

function handleResizeStart() {
  isResizing.value = true;
}

function handleResizeEnd() {
  isResizing.value = false;
  if (width.value) {
    emit('size-changed', width.value);
  }
}

function handleResize(event: MouseEvent) {
  const pageX = event.pageX;
  const newWidth = props.side === 'right' 
    ? window.innerWidth - pageX 
    : pageX;
  
  if (newWidth >= minWidth.value && newWidth <= maxWidth.value) {
    width.value = newWidth + 2;
  }
}

function handleMouseOutOfWindow(event: MouseEvent) {
  if (event.relatedTarget === null) {
    isResizing.value = false;
  }
}

function setWidth(action: { type: 'add' | 'subtract'; value: number }) {
  const currentWidth = width.value || minWidth.value;
  const delta = action.type === 'add' ? action.value : -action.value;
  const newWidth = currentWidth + delta;
  
  if (newWidth < minWidth.value) {
    width.value = minWidth.value;
  } else if (newWidth > maxWidth.value) {
    width.value = maxWidth.value;
  } else {
    width.value = newWidth;
  }
  handleResizeEnd();
}

// Cleanup on unmount
onUnmounted(() => {
  document.removeEventListener('mousemove', handleResize);
  document.removeEventListener('mouseup', handleResizeEnd);
  document.removeEventListener('mouseout', handleMouseOutOfWindow);
});

// Expose methods for parent components
defineExpose({ setWidth, getBEMClass });
</script>

<style lang="scss">
/* 
 * Styles from production: scss/components/afs-sidebar.scss
 */
.afs-sidebar-container {
  position: relative;
  border-color: var(--afs-border, #e5e7eb);
  background: var(--afs-sidebar, #ffffff);
}

.afs-sidebar-container_sm {
  width: 280px;
}

.afs-sidebar-container_md {
  width: 320px;
}

.afs-sidebar-container_lg {
  width: 360px;
}

.afs-sidebar-container_left {
  border-right-width: 1px;
  border-right-style: solid;
}

.afs-sidebar-container_right {
  border-left-width: 1px;
  border-left-style: solid;
}

.afs-sidebar-container_right .afs-sidebar-container__resizer {
  right: auto;
  left: 0;
}

.afs-sidebar-container__resizer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 5px;
  user-select: none;
  cursor: col-resize;
  z-index: 1;
  
  &:hover {
    background: var(--afs-accent, #3b82f6);
  }
}
</style>
