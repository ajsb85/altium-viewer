<template>
  <div class="app-alert" data-v-3abbf864>
    <div class="app-alert__container" data-v-3abbf864>
      <div class="app-alert__figure" data-v-3abbf864>
        <AfsIcon 
          :filled="true" 
          :name="icon" 
          class="app-alert__icon" 
          data-v-3abbf864
        />
      </div>
      <div v-if="$slots.default" class="app-alert__text" data-v-3abbf864>
        <slot />
      </div>
      <div v-if="$slots.meta" class="app-alert__meta" data-v-3abbf864>
        <slot name="meta" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AfsIcon from './AfsIcon.vue';

/**
 * AppAlert - Full-screen alert/notification overlay component
 * 
 * Displays centered error or status messages with an icon.
 * Used for critical notifications that require user attention.
 * 
 * @see ViewerComponents.js createAppAlert (L337-399)
 */
defineOptions({ name: 'AppAlert' });

withDefaults(
  defineProps<{
    /** 
     * Icon name to display (from AfsIcon library).
     * @default 'error-64'
     */
    icon?: string;
  }>(),
  {
    icon: 'error-64',
  }
);
</script>

<style lang="scss">
/* 
 * Styles from production: scss/components/app-alert.scss
 * Uses scoped ID data-v-3abbf864 for specificity matching production
 */
.app-alert[data-v-3abbf864] {
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-app-loader, rgba(0, 0, 0, 0.5));
}

.app-alert__container[data-v-3abbf864] {
  margin: auto;
  padding: 3.38rem 2rem 1.5rem;
  border-radius: 0.25rem;
  width: 100%;
  max-width: 18rem;
  min-height: 13rem;
  background: var(--background-app-loader-container, #fff);
  box-shadow: var(--box-shadow-app-loader-container, 0 4px 20px rgba(0, 0, 0, 0.15));
  text-align: center;
}

.app-alert__figure[data-v-3abbf864] {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 4rem;
  line-height: 1;
  color: var(--afs-text-icon-primary, #dc2626);
}

.app-alert__figure[data-v-3abbf864]:not(:last-child) {
  margin-bottom: 1rem;
}

.app-alert__icon[data-v-3abbf864] {
  font-size: 1em;
}

.app-alert__text[data-v-3abbf864],
.app-alert__meta[data-v-3abbf864] {
  font-size: 0.75rem;
  line-height: 1.333;
  min-width: 14rem;
}

.app-alert__text[data-v-3abbf864]:not(:last-child),
.app-alert__meta[data-v-3abbf864]:not(:last-child) {
  margin-bottom: 0.25rem;
}

.app-alert__meta[data-v-3abbf864] {
  color: var(--color-app-loader-meta, #6b7280);
}
</style>
