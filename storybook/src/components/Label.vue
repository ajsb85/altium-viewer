<template>
  <label class="lib-label" :class="{ 'is-disabled': disabled }">
    <span v-if="$slots.default" class="lib-label__text afs-typography_paragraph afs-typography">
      <slot />
    </span>
    <span v-else class="lib-label__text afs-typography_paragraph afs-typography">
      {{ text }}
    </span>
  </label>
</template>

<script setup lang="ts">
/**
 * Label - Text label component
 * @see production example.html
 */
defineOptions({ name: 'Label' });

withDefaults(
  defineProps<{
    text?: string;
    disabled?: boolean;
  }>(),
  {
    text: '',
    disabled: false,
  }
);
</script>

<style lang="scss">
.lib-label {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  color: var(--afs-text-icon-secondary, #ebebf5a6);
  
  &.is-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  
  &__text {
    font-weight: 400;
  }
}
</style>
