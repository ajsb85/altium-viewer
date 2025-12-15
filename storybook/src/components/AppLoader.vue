<template>
  <div class="app-loader" :class="classes">
    <div class="app-loader__content">
      <!-- Icon/Spinner area -->
      <div class="app-loader__icon-wrapper">
        <svg v-if="!hasError" class="app-loader__spinner" viewBox="0 0 50 50">
          <circle
            class="app-loader__spinner-track"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke-width="4"
          />
          <circle
            class="app-loader__spinner-path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke-width="4"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="dashOffset"
          />
        </svg>
        <svg v-else class="app-loader__error-icon" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
          />
        </svg>
      </div>

      <!-- Progress text -->
      <div v-if="text" class="app-loader__text">{{ text }}</div>

      <!-- Progress bar -->
      <div v-if="showProgress" class="app-loader__progress">
        <div class="app-loader__progress-bar" :style="{ width: `${progress}%` }" />
      </div>

      <!-- Slot for custom content -->
      <div v-if="$slots.default" class="app-loader__slot">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

/**
 * AppLoader - Loading indicator with progress
 * Displays a spinner, optional progress bar, and status text
 */
const props = withDefaults(
  defineProps<{
    /** Progress value 0-100 */
    progress?: number;
    /** Whether an error occurred */
    hasError?: boolean;
    /** Custom icon name (future use) */
    icon?: string;
    /** Status text to display */
    text?: string;
    /** Show as overlay over content */
    overlay?: boolean;
  }>(),
  {
    progress: 0,
    hasError: false,
    overlay: false,
  }
);

const circumference = 2 * Math.PI * 20;

const dashOffset = computed(() => {
  if (props.progress >= 100) return 0;
  return circumference - (props.progress / 100) * circumference;
});

const showProgress = computed(() => props.progress > 0 && props.progress < 100);

const classes = computed(() => ({
  'app-loader': true,
  'app-loader--error': props.hasError,
  'app-loader--overlay': props.overlay,
  'app-loader--complete': props.progress >= 100 && !props.hasError,
}));
</script>

<style lang="scss" scoped>
.app-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  min-height: 120px;

  &--overlay {
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.9);
    z-index: 100;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  &__icon-wrapper {
    width: 48px;
    height: 48px;
  }

  &__spinner {
    width: 100%;
    height: 100%;
    animation: rotate 2s linear infinite;
  }

  &__spinner-track {
    stroke: #e5e7eb;
  }

  &__spinner-path {
    stroke: #3b82f6;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.3s ease;
  }

  &--error &__spinner-path {
    stroke: #ef4444;
  }

  &--complete &__spinner-path {
    stroke: #22c55e;
  }

  &__error-icon {
    width: 100%;
    height: 100%;
    color: #ef4444;
  }

  &__text {
    font-size: 14px;
    color: #6b7280;
    text-align: center;
  }

  &--error &__text {
    color: #ef4444;
  }

  &__progress {
    width: 200px;
    height: 4px;
    background: #e5e7eb;
    border-radius: 2px;
    overflow: hidden;
  }

  &__progress-bar {
    height: 100%;
    background: #3b82f6;
    transition: width 0.3s ease;
  }

  &__slot {
    margin-top: 8px;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
