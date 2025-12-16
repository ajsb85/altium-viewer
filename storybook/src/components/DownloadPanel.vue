<template>
  <div
    class="lib-modal lib-modal_type-aside-right lib-modal_resizable lib-modal_size-fullheight lib-modal_type-aside lib-modal_left-border"
    :style="{ width: `${width}px` }"
  >
    <div class="lib-modal__resizer"></div>
    <div class="lib-modal__container afs-box afs-box_border">
      <!-- Header with close button -->
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
            <div class="lib-modal__header-content">{{ title }}</div>
            <div class="lib-modal__header-slot">
              <slot name="header-slot"></slot>
            </div>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="lib-modal__body">
        <div class="download-panel" :id="panelId">
          <!-- Source Files Section -->
          <div v-if="sourceFiles.length > 0" class="download-panel__section">
            <div class="afs-typography_title afs-typography download-panel__title">{{ sourceTitle }}</div>
            <div
              v-for="file in sourceFiles"
              :key="file.name"
              class="output download-panel__output"
            >
              <svg class="icon icon-filled output__icon">
                <use :href="`#svg-sprite-filled--${file.icon}`"></use>
              </svg>
              <span class="afs-typography_paragraph afs-typography output__name">{{ file.name }}</span>
            </div>
          </div>

          <!-- Derived Files Section -->
          <div v-if="derivedFiles.length > 0" class="download-panel__section">
            <div class="afs-typography_title afs-typography download-panel__title">{{ derivedTitle }}</div>
            <div
              v-for="file in derivedFiles"
              :key="file.name"
              class="output download-panel__output"
            >
              <svg class="icon icon-filled output__icon">
                <use :href="`#svg-sprite-filled--${file.icon}`"></use>
              </svg>
              <span class="afs-typography_paragraph afs-typography output__name">{{ file.name }}</span>
            </div>
          </div>

          <!-- Info message -->
          <div v-if="infoMessage" class="download-panel__info">{{ infoMessage }}</div>

          <!-- Action button -->
          <div v-if="actionText" class="download-panel__btn-wrapper">
            <button
              class="download-panel__btn afs-btn afs-btn_radius-tl afs-btn_radius-tr afs-btn_radius-bl afs-btn_radius-br afs-btn_justify-center afs-btn_md afs-btn_wide afs-btn_primary"
              type="button"
              @click="$emit('action')"
            >
              <span class="afs-btn__text">{{ actionText }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * DownloadPanel - Download Side Panel Component
 *
 * Production HTML from download.html
 * Production CSS from:
 * - lib-modal: 38625-38767
 * - download-panel: 33594-33675
 * - output: 33620-33638
 */

defineOptions({ name: 'DownloadPanel' });

export interface DownloadFile {
  name: string;
  icon: string;
}

withDefaults(
  defineProps<{
    /** Panel title */
    title?: string;
    /** Panel width in pixels */
    width?: number;
    /** DOM ID for the panel */
    panelId?: string;
    /** Section title for source files */
    sourceTitle?: string;
    /** List of source files */
    sourceFiles?: DownloadFile[];
    /** Section title for derived files */
    derivedTitle?: string;
    /** List of derived files */
    derivedFiles?: DownloadFile[];
    /** Info message to display */
    infoMessage?: string;
    /** Action button text */
    actionText?: string;
  }>(),
  {
    title: 'Download',
    width: 240,
    panelId: 'DownloadPanel',
    sourceTitle: 'Project Source Files',
    sourceFiles: () => [],
    derivedTitle: 'Derived Files',
    derivedFiles: () => [],
    infoMessage: '',
    actionText: '',
  }
);

defineEmits<{
  (e: 'close'): void;
  (e: 'action'): void;
}>();
</script>

<style lang="scss">
/**
 * Production CSS from production.css
 */

/* download-panel (33594-33675) */
.download-panel {
  padding: 1rem;
}

.download-panel__title {
  color: var(--color-primary, #fff);
  margin-bottom: 1rem;
}

.download-panel__section:not(:last-child) {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--afs-border, rgba(255, 255, 255, 0.1));
}

.download-panel__output:not(:first-child) {
  margin-top: 0.5rem;
}

.download-panel__info {
  margin-bottom: 16px;
  padding: 1rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  color: var(--color-secondary, rgba(255, 255, 255, 0.6));
  background-color: var(--afs-group, rgba(255, 255, 255, 0.05));
}

.download-panel__btn-wrapper {
  display: flex;
}

.download-panel__btn:not(:last-child) {
  margin-right: 8px;
}

/* output (33620-33638) */
.output {
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  font-size: 1rem;
  color: var(--color-secondary, rgba(255, 255, 255, 0.6));
}

.output__name {
  margin-left: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.output__icon {
  opacity: 0.5;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}

/* afs-subheader with icon positioning */
.afs-subheader {
  position: relative;
}

.afs-subheader__icon {
  position: absolute;
  top: 0;
  right: 6px;
  z-index: 1;
}

.afs-subheader__icon ~ .afs-subheader__title {
  padding-right: 38px;
}

/* lib-modal header */
.lib-modal__header {
  display: flex;
}

.lib-modal__header-content {
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.lib-modal__header-slot {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 0 0 auto;
}

/* afs-btn primary variant */
.afs-btn_primary {
  border-color: var(--afs-primary-border, #0a84ff);
  color: var(--afs-text-icon-over-background, #fff);
  background: var(--afs-primary-default, #0a84ff);
}

.afs-btn_primary:hover {
  background: var(--afs-primary-hover, #409cff);
}
</style>
