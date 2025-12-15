<template>
  <Transition v-bind="bindTransition">
    <div class="app-loader" :class="classes" data-v-30d447e2>
      <div class="app-loader__container" data-v-30d447e2>
        <div class="app-loader__figure" data-v-30d447e2>
          <!-- Spinner progress (hidden when error) -->
          <div v-if="!hasError" class="app-loader__progress" data-v-30d447e2 />
          <!-- Icon (shown when hasIcon is true) -->
          <AfsIcon
            v-if="hasIcon"
            :filled="hasError"
            :name="computedIcon"
            class="app-loader__icon"
            :class="{ 'is-error': hasError }"
            data-v-30d447e2
          />
        </div>
        <!-- Text slot -->
        <div
          v-if="$slots.default"
          class="app-loader__text"
          :class="{ 'is-processing': !hasError }"
          data-v-30d447e2
        >
          <slot />
        </div>
        <!-- Meta slot -->
        <div v-if="$slots.meta" class="app-loader__meta" data-v-30d447e2>
          <slot name="meta" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * AppLoader - Loading indicator with progress spinner
 * 
 * Full-screen overlay loader with animated spinner, optional icon,
 * and text/meta slots for status messages.
 * 
 * @see ViewerComponents.js createAppLoader (L401-553)
 * @see scss/components/app-loader.scss
 */
defineOptions({ name: 'AppLoader' });

const props = withDefaults(
  defineProps<{
    /** Whether an error state should be displayed */
    hasError?: boolean;
    /** Whether to show an icon in the loader */
    hasIcon?: boolean;
    /** Semi-transparent background overlay */
    backgroundAlpha?: boolean;
    /** Icon name (default: file-upload-32, error: error-64) */
    icon?: string;
    /** Size variant: 'small' | 'medium' | 'large' */
    size?: 'small' | 'medium' | 'large';
    /** Primary (default) or secondary styling */
    primary?: boolean;
  }>(),
  {
    hasError: false,
    hasIcon: false,
    backgroundAlpha: false,
    icon: 'file-upload-32',
    size: 'large',
    primary: true,
  }
);

/** Transition binding object for Vue Transition component */
const bindTransition = computed(() => ({
  'enter-class': 'app-loader_enter',
  'enter-active-class': 'app-loader_enter-active',
  'enter-to-class': 'app-loader_enter-to',
  'leave-class': 'app-loader_leave',
  'leave-active-class': 'app-loader_leave-active',
  'leave-to-class': 'app-loader_leave-to',
}));

/** Icon to show in error state */
const errorIcon = computed(() => 
  props.icon && props.icon !== 'file-upload-32' ? props.icon : 'error-64'
);

/** Final computed icon based on error state */
const computedIcon = computed(() => 
  props.hasError ? errorIcon.value : props.icon
);

/** CSS classes based on props */
const classes = computed(() => [
  {
    'is-secondary': !props.primary,
    'app-loader_background-alpha': props.backgroundAlpha,
  },
  `app-loader_${props.size}`,
]);
</script>

<style lang="scss">
/* 
 * Styles from production: scss/components/app-loader.scss
 * Uses scoped ID data-v-30d447e2 for specificity matching production
 */
.app-loader[data-v-30d447e2] {
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

.app-loader.is-secondary .app-loader__progress[data-v-30d447e2] {
  border: 2px solid var(--afs-additional-pink, #ec4899);
  border-top-color: var(--border-color-app-loader-progress, transparent);
  transform: rotate(0deg);
  animation: appLoading-30d447e2 1s infinite linear;
}

.app-loader.app-loader_enter-active[data-v-30d447e2],
.app-loader.app-loader_leave-active[data-v-30d447e2] {
  transition-property: opacity, visibility;
  transition-duration: 0.3s;
}

.app-loader.app-loader_enter[data-v-30d447e2],
.app-loader.app-loader_leave-to[data-v-30d447e2] {
  opacity: 0;
  visibility: hidden;
}

.app-loader__container[data-v-30d447e2] {
  margin: auto;
  padding: 3.38rem 2rem 1.5rem;
  border-radius: 0.25rem;
  width: 100%;
  max-width: 18rem;
  min-height: 13rem;
  background: var(--background-app-loader-container, #fff);
  box-shadow: var(--box-shadow-app-loader-container, 0 4px 20px rgba(0, 0, 0, 0.15));
  text-align: center;
  border: 1px solid var(--border-primary, #e5e7eb);
}

.app-loader__figure[data-v-30d447e2] {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 1em;
  height: 1em;
  font-size: 4rem;
  line-height: 1;
}

.app-loader__figure[data-v-30d447e2]:not(:last-child) {
  margin-bottom: 1rem;
}

.app-loader__progress[data-v-30d447e2] {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -0.5em 0 0 -0.5em;
  border: 2px solid var(--border-color-app-loader-progress_active, #3b82f6);
  border-top-color: var(--border-color-app-loader-progress, transparent);
  border-radius: 50%;
  width: 1em;
  height: 1em;
  transform: rotate(0deg);
  animation: appLoading-30d447e2 1s infinite linear;
}

.app-loader__icon[data-v-30d447e2] {
  color: var(--color-app-loader-icon, #6b7280);
  font-size: 2rem;
}

.app-loader__icon.is-error[data-v-30d447e2] {
  font-size: 1em;
}

.app-loader__text[data-v-30d447e2],
.app-loader__meta[data-v-30d447e2] {
  font-size: 0.75rem;
  line-height: 1.333;
  min-width: 14rem;
}

.app-loader__text[data-v-30d447e2]:not(:last-child),
.app-loader__meta[data-v-30d447e2]:not(:last-child) {
  margin-bottom: 0.25rem;
}

.app-loader__text[data-v-30d447e2] {
  color: var(--color-secondary, #6b7280);
}

.app-loader__text.is-processing[data-v-30d447e2]::after {
  content: '';
  display: inline-block;
  vertical-align: top;
  width: 0;
  text-align: left;
  white-space: nowrap;
  animation: dots-30d447e2 steps(1, end) 1.5s infinite;
}

.app-loader__meta[data-v-30d447e2] {
  color: var(--color-app-loader-meta, #9ca3af);
}

/* Size variants */
.app-loader_small[data-v-30d447e2] .app-loader__figure {
  font-size: 2rem;
}

.app-loader_medium[data-v-30d447e2] .app-loader__figure {
  font-size: 3rem;
}

.app-loader_large[data-v-30d447e2] .app-loader__figure {
  font-size: 4rem;
}

.app-loader_background-alpha[data-v-30d447e2] {
  background: var(--background-app-loader-alpha, rgba(0, 0, 0, 0.3));
}

@keyframes appLoading-30d447e2 {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes dots-30d447e2 {
  0%, 20% { content: '.'; }
  40% { content: '..'; }
  60%, 100% { content: '...'; }
}
</style>
