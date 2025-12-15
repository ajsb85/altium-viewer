<template>
  <div class="app-alert" :class="classes" role="alert">
    <!-- Icon -->
    <div class="app-alert__icon">
      <svg v-if="type === 'info'" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
      <svg v-else-if="type === 'success'" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <svg v-else-if="type === 'warning'" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
      </svg>
      <svg v-else-if="type === 'error'" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
    </div>

    <!-- Content -->
    <div class="app-alert__content">
      <div v-if="title" class="app-alert__title">{{ title }}</div>
      <div v-if="message" class="app-alert__message">{{ message }}</div>
      <div v-if="$slots.default" class="app-alert__slot">
        <slot />
      </div>
    </div>

    <!-- Actions -->
    <div v-if="$slots.actions" class="app-alert__actions">
      <slot name="actions" />
    </div>

    <!-- Dismiss button -->
    <button
      v-if="dismissible"
      class="app-alert__dismiss"
      aria-label="Dismiss alert"
      @click="handleDismiss"
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

/**
 * AppAlert - Alert/notification display component
 * Shows contextual feedback messages to users
 */
const props = withDefaults(
  defineProps<{
    /** Alert type determines styling */
    type?: 'info' | 'success' | 'warning' | 'error';
    /** Alert title (optional) */
    title?: string;
    /** Alert message body */
    message?: string;
    /** Allow user to dismiss the alert */
    dismissible?: boolean;
  }>(),
  {
    type: 'info',
    dismissible: false,
  }
);

const emit = defineEmits<{
  (e: 'dismiss'): void;
}>();

const classes = computed(() => ({
  'app-alert': true,
  [`app-alert--${props.type}`]: true,
}));

function handleDismiss() {
  emit('dismiss');
}
</script>

<style lang="scss" scoped>
.app-alert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid;
  
  &--info {
    background: #eff6ff;
    border-color: #bfdbfe;
    color: #1e40af;
  }
  
  &--success {
    background: #f0fdf4;
    border-color: #bbf7d0;
    color: #166534;
  }
  
  &--warning {
    background: #fffbeb;
    border-color: #fde68a;
    color: #92400e;
  }
  
  &--error {
    background: #fef2f2;
    border-color: #fecaca;
    color: #991b1b;
  }

  &__icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    
    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    flex: 1;
    min-width: 0;
  }

  &__title {
    font-weight: 600;
    margin-bottom: 4px;
  }

  &__message {
    font-size: 14px;
    opacity: 0.9;
  }

  &__slot {
    margin-top: 8px;
  }

  &__actions {
    display: flex;
    gap: 8px;
    margin-left: auto;
  }

  &__dismiss {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 1;
    }
    
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
