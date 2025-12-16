<template>
  <div
    class="lib-modal lib-modal_type-aside-right lib-modal_resizable lib-modal_size-fullheight lib-modal_type-aside lib-modal_left-border"
    :style="{ width: `${width}px` }"
  >
    <div class="lib-modal__resizer"></div>
    <div class="lib-modal__container afs-box afs-box_border">
      <!-- Close button -->
      <button
        class="lib-modal__close afs-btn-icon afs-btn-icon_radius-tl afs-btn-icon_radius-tr afs-btn-icon_radius-bl afs-btn-icon_radius-br afs-btn-icon_transparent afs-btn-icon_md"
        type="button"
        @click="$emit('close')"
      >
        <svg class="icon icon-cross-16 afs-btn-icon__figure">
          <use href="#svg-sprite--cross-16"></use>
        </svg>
      </button>

      <div class="lib-modal__body">
        <div id="StandaloneCommentPanel" class="comment-panel">
          <!-- Header -->
          <div class="afs-subheader app-comments-header">
            <div class="afs-typography_title afs-typography afs-subheader__title afs-subheader__title_multi-line">
              <div class="app-comments-header__container">{{ title }}</div>
            </div>
          </div>

          <!-- Thread list -->
          <div class="thread-list thread-align">
            <div v-if="showPlaceholder">
              <div class="placeholder afs-grid-container afs-grid-container_fullscreen afs-grid-container_center-content afs-grid-container_direction-row">
                <div class="afs-grid-container afs-grid-container_direction-row">
                  <div class="afs-content-placeholder">
                    <div class="afs-typography_title afs-typography afs-content-placeholder__title">
                      <svg class="icon icon-comments placeholder__icon">
                        <use href="#svg-sprite--comments"></use>
                      </svg>
                      <div class="placeholder__text">{{ placeholderText }}</div>
                      <div class="placeholder__btns">
                        <button
                          class="afs-btn afs-btn_radius-tl afs-btn_radius-tr afs-btn_radius-bl afs-btn_radius-br afs-btn_justify-center afs-btn_md afs-btn_wide afs-btn_default"
                          type="button"
                          @click="$emit('action')"
                        >
                          <svg class="icon icon-bubble-add-16 afs-btn__icon">
                            <use href="#svg-sprite--bubble-add-16"></use>
                          </svg>
                          <span class="afs-btn__text">{{ actionText }}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <slot v-else></slot>
          </div>

          <!-- Toast container -->
          <div class="comment-toast"></div>

          <!-- Feedback link -->
          <div v-if="feedbackUrl" class="comment-panel__feedback">
            <a class="afs-link is-primary" :href="feedbackUrl" target="_blank">Leave Feedback</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * CommentPanel - Side Panel Component
 *
 * Production HTML from panel.html
 * Production CSS from:
 * - lib-modal: 38625-38767
 * - comment-panel: 39189-39215
 * - afs-subheader: 11050-11086
 * - afs-btn-icon: 10579-10630
 * - afs-grid-container: 9438-9496
 * - afs-content-placeholder: 12716-12785
 */

defineOptions({ name: 'CommentPanel' });

withDefaults(
  defineProps<{
    /** Panel title */
    title?: string;
    /** Panel width in pixels */
    width?: number;
    /** Whether to show placeholder state */
    showPlaceholder?: boolean;
    /** Text to display in placeholder */
    placeholderText?: string;
    /** Text for placeholder action button */
    actionText?: string;
    /** URL for feedback link */
    feedbackUrl?: string;
  }>(),
  {
    title: 'Comments',
    width: 240,
    showPlaceholder: true,
    placeholderText: 'Ask a question, leave a note, assign a task to a teammate, or just draw.',
    actionText: 'Place a Comment',
    feedbackUrl: 'https://surveys.hotjar.com/56ae1381-3d9d-4461-8247-805f7849930a',
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

/* lib-modal (38625-38767) */
.lib-modal {
  position: absolute;
  z-index: 20;
  display: flex;
}

.lib-modal_type-aside {
  top: 0;
  bottom: 0;
  width: 100%;
  flex-direction: column;
}

.lib-modal_type-aside-right {
  right: 0;
}

.lib-modal__container {
  display: flex;
  overflow: hidden;
  flex: 0 1 auto;
  flex-direction: column;
  max-height: 100%;
  border: none;
  background: var(--afs-popup, #1c1c1e);
}

.lib-modal_size-fullheight .lib-modal__container {
  flex-grow: 1;
}

.lib-modal_left-border .lib-modal__container {
  border-left: 1px solid var(--border-primary, rgba(255, 255, 255, 0.1));
}

.lib-modal__body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  overflow: auto;
  height: 100%;
}

.lib-modal__resizer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 5px;
  user-select: none;
  cursor: col-resize;
  z-index: 1;
}

/* afs-btn-icon (10579-10630) */
.afs-btn-icon {
  box-sizing: border-box;
  outline: 0;
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 0;
  background: none;
  font-family: inherit;
  cursor: pointer;
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  width: 32px;
  height: 32px;
  font-size: 0;
  text-decoration: none;
  transition: border-color 0.25s, color 0.25s, opacity 0.25s, background-color 0.25s, box-shadow 0.25s;
}

.afs-btn-icon_radius-tl { border-top-left-radius: 4px; }
.afs-btn-icon_radius-tr { border-top-right-radius: 4px; }
.afs-btn-icon_radius-bl { border-bottom-left-radius: 4px; }
.afs-btn-icon_radius-br { border-bottom-right-radius: 4px; }

.afs-btn-icon_transparent {
  background: transparent;
  border-color: transparent;
}

.afs-btn-icon__figure {
  font-size: 16px;
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.lib-modal__close {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 6px;
  color: var(--afs-text-icon-secondary, rgba(255, 255, 255, 0.6));
  flex: 0 0 auto;
  transition: color 0.25s;
}

.lib-modal__close:hover {
  color: var(--color-primary, #0a84ff);
}

/* afs-subheader (11050-11086) */
.afs-subheader {
  position: relative;
}

.afs-subheader__title {
  padding: 10px 15px 9px;
}

.afs-subheader__title_multi-line {
  word-break: break-word;
}

/* comment-panel (39189-39215) */
.comment-panel {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  overflow: auto;
  height: 100%;
}

.comment-panel__feedback {
  border-top: 1px solid var(--afs-border, rgba(255, 255, 255, 0.1));
  padding: 16px;
}

.comment-toast {
  /* Empty container for toasts */
}

/* thread-list (37566-37579) */
.thread-list {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0 0 16px;
}

.thread-align {
  display: flex;
  align-items: center;
  border-top: none;
}

/* afs-grid-container (9438-9496) */
.afs-grid-container {
  display: flex;
}

.afs-grid-container_fullscreen {
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
}

.afs-grid-container_direction-row {
  flex-direction: row;
}

.afs-grid-container_center-content {
  align-items: center;
  justify-content: center;
}

.afs-grid-container_center-content > * {
  margin: auto;
}

/* afs-content-placeholder (12716-12785) */
.afs-content-placeholder {
  padding: 16px;
  border-radius: 4px;
  text-align: center;
}

.afs-content-placeholder__title {
  transition: color 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--afs-text-icon-primary, #fff);
}

/* Placeholder icon (64x64 comments icon) */
.placeholder__icon {
  width: auto;
  height: 64px;
  margin-bottom: 16px;
  color: var(--afs-text-icon-secondary, rgba(255, 255, 255, 0.4));
  fill: currentColor;
}

.placeholder__text {
  color: var(--afs-text-icon-secondary, rgba(255, 255, 255, 0.6));
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 0;
}

.placeholder__btns {
  margin-top: 16px;
  width: 100%;
}

/* afs-btn in placeholder */
.placeholder__btns .afs-btn {
  box-sizing: border-box;
  padding: 9px 15px;
  min-width: 80px;
}

.afs-btn__icon {
  margin: -2px 8px -2px 0;
  font-size: 16px;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.afs-btn__text {
  display: block;
}

.afs-btn_wide {
  width: 100%;
}

.afs-btn_justify-center {
  justify-content: center;
}

.afs-btn_default {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--afs-secondary-border, rgba(255, 255, 255, 0.1));
  border-radius: 4px;
  color: var(--afs-text-icon-primary, #fff);
  background: var(--afs-secondary-bg, rgba(255, 255, 255, 0.08));
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.25s;
}

.afs-btn_default:hover {
  background: var(--afs-secondary-bg-hover, rgba(255, 255, 255, 0.12));
}
</style>
