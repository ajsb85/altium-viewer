<template>
  <aside class="afs-sidebar" :class="classes" :style="sidebarStyle">
    <!-- Header slot -->
    <div v-if="$slots.header" class="afs-sidebar__header">
      <slot name="header" />
    </div>

    <!-- Main content -->
    <div class="afs-sidebar__content">
      <slot />
    </div>

    <!-- Footer slot -->
    <div v-if="$slots.footer" class="afs-sidebar__footer">
      <slot name="footer" />
    </div>

    <!-- Resize handle -->
    <div
      v-if="resizable"
      class="afs-sidebar__resize-handle"
      :class="{ 'afs-sidebar__resize-handle--active': isResizing }"
      @mousedown="handleResizeStart"
    />
  </aside>
</template>

<script lang="ts" setup>
import { computed, ref, onUnmounted } from 'vue';

/**
 * AfsSidebar - Base sidebar component
 * Provides a resizable sidebar panel with header/footer slots
 */
const props = withDefaults(
  defineProps<{
    /** Initial width in pixels */
    width?: number;
    /** Minimum width when resizing */
    minWidth?: number;
    /** Maximum width when resizing */
    maxWidth?: number;
    /** Enable resize handle */
    resizable?: boolean;
    /** Sidebar position */
    position?: 'left' | 'right';
  }>(),
  {
    width: 280,
    minWidth: 200,
    maxWidth: 600,
    resizable: true,
    position: 'left',
  }
);

const emit = defineEmits<{
  (e: 'resize', width: number): void;
  (e: 'resize-start'): void;
  (e: 'resize-end'): void;
}>();

const currentWidth = ref(props.width);
const isResizing = ref(false);
const startX = ref(0);
const startWidth = ref(0);

const sidebarStyle = computed(() => ({
  width: `${currentWidth.value}px`,
}));

const classes = computed(() => ({
  'afs-sidebar': true,
  [`afs-sidebar--${props.position}`]: true,
  'afs-sidebar--resizing': isResizing.value,
}));

function handleResizeStart(event: MouseEvent) {
  isResizing.value = true;
  startX.value = event.clientX;
  startWidth.value = currentWidth.value;
  emit('resize-start');

  document.addEventListener('mousemove', handleResize);
  document.addEventListener('mouseup', handleResizeEnd);
  document.body.style.cursor = 'col-resize';
  document.body.style.userSelect = 'none';
}

function handleResize(event: MouseEvent) {
  if (!isResizing.value) return;

  const diff = props.position === 'left'
    ? event.clientX - startX.value
    : startX.value - event.clientX;

  const newWidth = Math.max(
    props.minWidth,
    Math.min(props.maxWidth, startWidth.value + diff)
  );

  currentWidth.value = newWidth;
  emit('resize', newWidth);
}

function handleResizeEnd() {
  isResizing.value = false;
  emit('resize-end');

  document.removeEventListener('mousemove', handleResize);
  document.removeEventListener('mouseup', handleResizeEnd);
  document.body.style.cursor = '';
  document.body.style.userSelect = '';
}

onUnmounted(() => {
  document.removeEventListener('mousemove', handleResize);
  document.removeEventListener('mouseup', handleResizeEnd);
});
</script>

<style lang="scss" scoped>
.afs-sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  position: relative;

  &--left {
    border-right: 1px solid #e5e7eb;
  }

  &--right {
    border-left: 1px solid #e5e7eb;
  }

  &--resizing {
    user-select: none;
  }

  &__header {
    flex-shrink: 0;
    padding: 16px;
    border-bottom: 1px solid #e5e7eb;
    font-weight: 600;
  }

  &__content {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
  }

  &__footer {
    flex-shrink: 0;
    padding: 16px;
    border-top: 1px solid #e5e7eb;
  }

  &__resize-handle {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    cursor: col-resize;
    background: transparent;
    transition: background 0.2s;

    .afs-sidebar--left & {
      right: -2px;
    }

    .afs-sidebar--right & {
      left: -2px;
    }

    &:hover,
    &--active {
      background: #3b82f6;
    }
  }
}
</style>
