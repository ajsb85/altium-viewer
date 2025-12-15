<template>
  <div
    class="lib-modal lib-modal_type-aside-right lib-modal_resizable lib-modal_size-fullheight lib-modal_type-aside lib-modal_left-border"
    :style="{ width: `${width}px` }"
  >
    <div class="lib-modal__resizer" @mousedown="startResize"></div>
    <div class="lib-modal__container afs-box afs-box_border">
      <!-- Header with back and close buttons -->
      <div class="afs-subheader">
        <button
          class="afs-subheader__icon afs-btn-icon afs-btn-icon_radius-tl afs-btn-icon_radius-tr afs-btn-icon_radius-bl afs-btn-icon_radius-br afs-btn-icon_transparent afs-btn-icon_md"
          type="button"
          @click="$emit('close')"
        >
          <svg class="icon icon-cross-16 afs-btn-icon__figure">
            <use href="#svg-sprite--cross-16"></use>
          </svg>
        </button>
        <div class="afs-typography_title afs-typography afs-subheader__title afs-subheader__title_multi-line">
          <div class="lib-modal__header">
            <div class="lib-modal__header-content">
              <button type="button" class="app__back-btn" @click="$emit('back')">
                <svg class="icon icon-utility-chevron-left app__back-btn-icon">
                  <use href="#svg-sprite--utility-chevron-left"></use>
                </svg>
                <div class="app__back-btn-text">{{ title }}</div>
              </button>
            </div>
            <div class="lib-modal__header-slot">
              <slot name="header-slot"></slot>
            </div>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="lib-modal__body">
        <div :id="panelId" class="help">
          <div class="controls">
            <!-- Control sections -->
            <template v-for="(section, sectionIndex) in controlSections" :key="sectionIndex">
              <!-- Divider before section if it has dividerBefore -->
              <div v-if="section.dividerBefore" class="controls__divider"></div>
              
              <div
                v-for="control in section.controls"
                :key="control.label"
                class="control-section"
              >
                <div class="control-section__content">
                  <div class="afs-typography_paragraph afs-typography control-section__title">
                    {{ control.label }}
                  </div>
                </div>
                <div class="control-section__btns">
                  <div
                    v-for="key in control.keys"
                    :key="key"
                    class="control-section__btn"
                  >
                    {{ key }}
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

/**
 * ControlsPanel - Keyboard Controls Panel Component
 *
 * Production HTML from controls panel
 * Production CSS from:
 * - control-section: 34967-35011
 * - controls: 35013-35020
 */

defineOptions({ name: 'ControlsPanel' });

export interface ControlItem {
  label: string;
  keys: string[];
}

export interface ControlSection {
  controls: ControlItem[];
  dividerBefore?: boolean;
}

const props = withDefaults(
  defineProps<{
    title?: string;
    width?: number;
    panelId?: string;
    controlSections?: ControlSection[];
  }>(),
  {
    title: 'Controls',
    width: 240,
    panelId: 'HelpPanel',
    controlSections: () => [
      {
        controls: [
          { label: 'Select', keys: ['LMB'] },
          { label: 'Zoom In/Out', keys: ['Scroll'] },
          { label: 'Pan', keys: ['RMB', 'Drag'] },
          { label: 'Rotate in 3D', keys: ['LMB', 'Drag'] },
        ],
      },
      {
        dividerBefore: true,
        controls: [
          { label: 'Reset View', keys: ['R'] },
          { label: 'Switch to 2D', keys: ['2'] },
          { label: 'Switch to 3D', keys: ['3'] },
          { label: 'Next / Previous Layer', keys: ['+/-'] },
          { label: 'Fold / Unfold in 3D (rigid-flex)', keys: ['5'] },
          { label: 'Flip Board Top / Bottom', keys: ['F'] },
        ],
      },
    ],
  }
);

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'back'): void;
  (e: 'resize', width: number): void;
}>();

// Resize functionality
const isResizing = ref(false);
const startX = ref(0);
const startWidth = ref(props.width);

function startResize(e: MouseEvent) {
  isResizing.value = true;
  startX.value = e.clientX;
  startWidth.value = props.width;
  
  document.addEventListener('mousemove', doResize);
  document.addEventListener('mouseup', stopResize);
}

function doResize(e: MouseEvent) {
  if (!isResizing.value) return;
  
  const diff = startX.value - e.clientX;
  const newWidth = Math.max(200, Math.min(400, startWidth.value + diff));
  emit('resize', newWidth);
}

function stopResize() {
  isResizing.value = false;
  document.removeEventListener('mousemove', doResize);
  document.removeEventListener('mouseup', stopResize);
}
</script>

<style lang="scss">
/**
 * Production CSS from production.css
 */

/* controls (35013-35020) */
.controls {
  padding: 0.5rem 1rem;
}

.controls__divider {
  margin: 0.75rem 0;
  height: 1px;
  background-color: var(--border-primary, rgba(255, 255, 255, 0.1));
}

/* control-section (34967-35011) */
.control-section {
  display: flex;
  align-items: center;
  padding: 4px 0;
}

.control-section__content {
  flex: 1 1 auto;
}

.control-section__btns {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
}

.control-section__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  font-size: 12px;
  padding: 4px;
  color: var(--color-secondary, rgba(255, 255, 255, 0.6));
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  border-radius: 4px;
  min-width: 24px;
  height: 24px;
  border: 1px solid var(--border-primary, rgba(255, 255, 255, 0.1));
}

.control-section__btn:not(:last-child) {
  margin-right: 4px;
}

.control-section__title {
  color: var(--color-secondary, rgba(255, 255, 255, 0.6));
}

/* Back button */
.app__back-btn {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--afs-text-icon-primary, #fff);
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}

.app__back-btn-icon {
  width: 8px;
  height: 8px;
  margin-right: 8px;
  fill: currentColor;
}

.app__back-btn-text {
  font-weight: 500;
}

.app__back-btn:hover {
  color: var(--afs-primary-default, #0a84ff);
}
</style>
