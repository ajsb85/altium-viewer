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
        <div :id="panelId" class="help">
          <!-- List sections -->
          <div class="list">
            <!-- First section: Controls & Board Info -->
            <div v-if="menuItems.length > 0" class="list__section">
              <component
                :is="item.href ? 'a' : 'button'"
                v-for="item in menuItems"
                :key="item.label"
                :href="item.href"
                :target="item.href ? '_blank' : undefined"
                type="button"
                class="list__item"
                @click="!item.href && $emit('item-click', item.id)"
              >
                <span class="list__icon">
                  <svg class="icon list__icon-in" :class="`icon-${item.icon}`">
                    <use :href="`#svg-sprite${item.filled ? '-filled' : ''}--${item.icon}`"></use>
                  </svg>
                </span>
                <div class="afs-typography_title afs-typography list__text">{{ item.label }}</div>
              </component>
            </div>

            <!-- Second section: Links -->
            <div v-if="linkItems.length > 0" class="list__section">
              <component
                :is="item.href ? 'a' : 'button'"
                v-for="item in linkItems"
                :key="item.label"
                :href="item.href"
                :target="item.href ? '_blank' : undefined"
                type="button"
                class="list__item"
                @click="!item.href && $emit('item-click', item.id)"
              >
                <span class="list__icon">
                  <svg class="icon icon-filled list__icon-in" :class="`icon-${item.icon}`">
                    <use :href="`#svg-sprite-filled--${item.icon}`"></use>
                  </svg>
                </span>
                <div class="afs-typography_title afs-typography list__text">{{ item.label }}</div>
              </component>
            </div>
          </div>

          <!-- Unit Switcher -->
          <div v-if="showUnitSwitcher" class="app-unit-switcher">
            <div class="app-unit-switcher__in">
              <div class="afs-typography_title afs-typography">Units</div>
              <div class="afs-tabs condensed-y">
                <div
                  v-for="unit in units"
                  :key="unit"
                  class="afs-typography_paragraph afs-typography afs-tabs__item"
                  :class="{ 'is-active': selectedUnit === unit }"
                  @click="$emit('unit-change', unit)"
                >
                  {{ unit }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * HelpPanel - Help/Info Side Panel Component
 *
 * Production HTML from help panel
 * Production CSS from:
 * - list: 34909-34957
 * - afs-tabs: 15076-15104
 */

defineOptions({ name: 'HelpPanel' });

export interface HelpMenuItem {
  id: string;
  label: string;
  icon: string;
  href?: string;
  filled?: boolean;
}

withDefaults(
  defineProps<{
    /** Panel title */
    title?: string;
    /** Panel width in pixels */
    width?: number;
    /** DOM ID for the panel */
    panelId?: string;
    /** List of menu items (internal actions) */
    menuItems?: HelpMenuItem[];
    /** List of link items (external URLs) */
    linkItems?: HelpMenuItem[];
    /** Whether to show the unit switcher */
    showUnitSwitcher?: boolean;
    /** Available units */
    units?: string[];
    /** Currently selected unit */
    selectedUnit?: string;
  }>(),
  {
    title: 'Info',
    width: 240,
    panelId: 'HelpPanel',
    menuItems: () => [
      { id: 'controls', label: 'Controls', icon: 'controls-12' },
      { id: 'board-info', label: 'Board Info', icon: 'board-info-12' },
    ],
    linkItems: () => [
      { id: 'documentation', label: 'Documentation', icon: 'help-12', href: 'https://www.altium.com/documentation/altium-designer/altium-365-viewer' },
      { id: 'about', label: 'About Altium 365 Viewer', icon: 'info-12' },
    ],
    showUnitSwitcher: true,
    units: () => ['mm', 'mil'],
    selectedUnit: 'mm',
  }
);

defineEmits<{
  (e: 'close'): void;
  (e: 'item-click', id: string): void;
  (e: 'unit-change', unit: string): void;
}>();
</script>

<style lang="scss">
/**
 * Production CSS from production.css
 */

/* list (34909-34957) */
.list__section:not(:last-child) {
  margin-bottom: 0.25rem;
}

.list__section:not(:last-child):after {
  content: "";
  display: block;
  margin: 0.25rem 0.94rem 0;
  border-bottom: 1px solid var(--border-primary, rgba(255, 255, 255, 0.1));
}

.list__item {
  display: flex;
  align-items: center;
  padding: 0.25rem 0;
  width: 100%;
  min-height: 2.5rem;
  color: var(--color-primary, #fff);
  background: none;
  text-align: left;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

.list__item:hover {
  background: var(--background-clickable_hover, rgba(255, 255, 255, 0.05));
}

.list__text {
  flex: 1 1 auto;
  padding: 0 1rem 0 0;
  line-height: 1.34;
}

.list__icon {
  flex: 0 0 2.63rem;
  text-align: center;
  font-size: 0;
}

.list__icon-in {
  font-size: 0.75rem;
  width: 12px;
  height: 12px;
  fill: currentColor;
}

/* afs-tabs (15076-15104) */
.afs-tabs {
  display: inline-flex;
}

.afs-tabs__item {
  position: relative;
  cursor: pointer;
  margin-bottom: -2px;
  padding: 7px 0;
  color: var(--afs-text-icon-secondary, rgba(255, 255, 255, 0.6));
  border-bottom: 2px solid transparent;
}

.afs-tabs__item:hover,
.afs-tabs__item.is-active {
  color: var(--afs-text-icon-primary, #fff);
  border-bottom: 2px solid var(--afs-primary-default, #0a84ff);
}

.afs-tabs__item:not(:last-child) {
  margin-right: 32px;
}

.afs-tabs.condensed-y .afs-tabs__item {
  padding: 0;
}

/* app-unit-switcher */
.app-unit-switcher {
  padding: 1rem;
  border-top: 1px solid var(--border-primary, rgba(255, 255, 255, 0.1));
}

.app-unit-switcher__in {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* help container */
.help {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.list {
  flex: 1 1 auto;
}
</style>
