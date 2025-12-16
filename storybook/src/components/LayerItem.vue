<template>
  <div class="app-layers-panel__layer-row">
    <label
      :data-locator="'checkbox'"
      class="afs-checkbox app-layers-panel__layer-checkbox"
      :class="{ 'is-checked': isChecked, 'is-show': isVisible || isChecked }"
    >
      <input
        type="checkbox"
        class="afs-checkbox__input"
        :checked="isChecked"
        @change="$emit('check', !isChecked)"
      />
      <span class="afs-checkbox__figure">
        <svg class="icon icon-utility-checkmark afs-checkbox__figure-icon">
          <use xlink:href="#svg-sprite--utility-checkmark"></use>
        </svg>
      </span>
    </label>
    <div class="app-layers-panel__layer-item app-layers-panel__has-checkbox">
      <span
        class="app-layers-panel__layer-color"
        :style="{ background: color }"
      />
      <div
        class="afs-typography_paragraph afs-typography_ellipsis afs-typography app-layers-panel__layer-name"
        :class="{ 'is-visible': isVisible }"
      >
        {{ name }}
      </div>
      <div class="app-layers-panel__visibility-btns">
        <button
          class="app-layers-panel__visibility-btn app-layers-panel__visibility-only"
          @click.stop="$emit('only')"
        >
          Only
        </button>
        <button
          class="app-layers-panel__visibility-btn afs-btn-icon afs-btn-icon_transparent afs-btn-icon_md"
          :class="{ 'is-visible': !isVisible }"
          type="button"
          @click.stop="$emit('toggle')"
        >
          <svg class="icon afs-btn-icon__figure" :class="isVisible ? 'icon-eye-16-2' : 'icon-eye-off-16-2'">
            <use :xlink:href="isVisible ? '#svg-sprite--eye-16-2' : '#svg-sprite--eye-off-16-2'"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * LayerItem - Individual layer row in the layers panel
 * 
 * Production HTML structure from BoardItemsVisibility modal.
 * Features: checkbox selection, color swatch, name, Only/visibility buttons.
 * 
 * Production CSS: production.css:32139-32241
 */
defineOptions({ name: 'LayerItem' });

withDefaults(
  defineProps<{
    /** Layer name */
    name: string;
    /** Layer color (CSS color string) */
    color: string;
    /** Visibility state */
    isVisible?: boolean;
    /** Checkbox state */
    isChecked?: boolean;
  }>(),
  {
    isVisible: true,
    isChecked: false,
  }
);

defineEmits<{
  (e: 'toggle'): void;
  (e: 'only'): void;
  (e: 'check', checked: boolean): void;
}>();
</script>

<style lang="scss">
/**
 * Production CSS from production.css:32139-32241
 * Removed [data-v-*] scoped selectors
 */
.app-layers-panel__layer-row {
  position: relative;
  cursor: pointer;
}

.app-layers-panel__layer-row .app-layers-panel__has-checkbox {
  padding-left: 38px;
}

body:not(.is-touch) .app-layers-panel__layer-row:hover .app-layers-panel__layer-item {
  background: var(--background-clickable_hover, rgba(255,255,255,0.05));
}

body:not(.is-touch) .app-layers-panel__layer-row:hover .app-layers-panel__layer-checkbox {
  opacity: 1;
}

body:not(.is-touch) .app-layers-panel__layer-row:hover .app-layers-panel__visibility-btn:not(:hover) {
  opacity: 0.5;
}

.app-layers-panel__layer-checkbox {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 16px;
  height: 16px;
  margin: auto;
  opacity: 0;
  
  &.is-show {
    opacity: 1;
  }
}

.app-layers-panel__layer-item {
  display: flex;
  align-items: center;
  margin-left: -16px;
  padding: 4px 0 4px 30px;
}

.app-layers-panel__layer-name {
  flex: 1;
  opacity: 0.5;
  transition: opacity var(--transition-duration-default, 0.15s);
  font-size: 13px;
  
  &.is-visible {
    opacity: 1;
  }
}

.app-layers-panel__layer-color {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  margin-right: 8px;
  flex-shrink: 0;
  border: 1px solid var(--border-color-modal, rgba(255,255,255,0.1));
}

.app-layers-panel__visibility-btns {
  display: flex;
  margin-left: auto;
  margin-right: 6px;
}

.app-layers-panel__visibility-btn {
  max-width: 24px;
  max-height: 24px;
  font-size: 16px;
  padding: 0;
  opacity: 0;
  color: var(--color-clickable-icon, #999);
  transition: none;
  background: none;
  border: none;
  cursor: pointer;
  
  &.is-visible {
    opacity: 0.5;
  }
}

body:not(.is-touch) .app-layers-panel__visibility-btn:hover {
  opacity: 1;
}

.app-layers-panel__visibility-only {
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  opacity: 0;
  padding: 0 6px;
  max-width: 33px;
  border: none;
  background: none;
  font-size: 11px;
  color: var(--color-clickable-icon, #999);
  cursor: pointer;
}

body:not(.is-touch) .app-layers-panel__visibility-only:hover {
  opacity: 1;
}

// Checkbox styles from production.css:9271-9340
.afs-checkbox {
  display: inline-flex;
  vertical-align: top;
  align-items: flex-start;
  color: var(--afs-text-icon-secondary, #999);
  cursor: pointer;
  user-select: none;
  margin: 0;
  padding: 0;
  border: 0;
}

.afs-checkbox__input {
  display: none;
}

.afs-checkbox__figure {
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border: 1px solid var(--border-color-checkbox, #555);
  border-radius: 2px;
  width: 16px;
  height: 16px;
  background: var(--background-checkbox-secondary, #333);
  transition: border-color 0.25s, background-color 0.25s;
}

.afs-checkbox__figure-icon {
  font-size: 8px;
  opacity: 0;
  transition: opacity 0.25s;
}

.afs-checkbox.is-checked .afs-checkbox__figure {
  background: var(--afs-primary-default, #0a84ff);
  border-color: var(--afs-primary-default, #0a84ff);
}

.afs-checkbox.is-checked .afs-checkbox__figure-icon {
  opacity: 1;
  color: white;
}
</style>
