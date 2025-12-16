<template>
  <div class="app-mode-switcher">
    <button
      v-for="mode in modes"
      :key="mode.id"
      type="button"
      class="app-mode-switcher__btn"
      :class="{ 'is-active': activeMode === mode.id }"
      :title="mode.tooltip"
      @click="$emit('change', mode.id)"
    >
      <AfsIcon v-if="mode.icon" :name="mode.icon" />
      <span v-if="showLabels" class="app-mode-switcher__label">{{ mode.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * AppModeSwitcher - Mode/tool toggle buttons
 */
defineOptions({ name: 'AppModeSwitcher' });

interface Mode {
  id: string;
  label: string;
  icon?: string;
  tooltip?: string;
}

withDefaults(
  defineProps<{
    /**
     * Array of mode definitions to display.
     */
    modes?: Mode[];
    /**
     * ID of the currently active mode.
     */
    activeMode?: string;
    /**
     * Whether to show text labels alongside icons.
     * @default false
     */
    showLabels?: boolean;
  }>(),
  {
    modes: () => [],
    activeMode: '',
    showLabels: false,
  }
);

defineEmits<{ (e: 'change', modeId: string): void }>();
</script>

<style lang="scss">
.app-mode-switcher {
  display: inline-flex;
  gap: 2px;
  padding: 2px;
  background: var(--afs-group, #f3f4f6);
  border-radius: 6px;
  
  &__btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 10px;
    background: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: var(--afs-text-icon-secondary, #6b7280);
    transition: all 0.15s;
    
    &:hover { color: var(--afs-text-icon-primary, #111827); }
    
    &.is-active {
      background: var(--afs-sidebar, #fff);
      color: var(--afs-accent, #3b82f6);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }
  }
  
  &__label {
    font-size: 12px;
    font-weight: 500;
  }
}
</style>
