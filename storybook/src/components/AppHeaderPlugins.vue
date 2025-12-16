<template>
  <div class="app-header-plugins">
    <button
      v-for="plugin in plugins"
      :key="plugin.id"
      :id="`${plugin.id}-control`"
      type="button"
      class="app-header-plugins__btn"
      :class="{
        'is-selected': plugin.isActive,
        'app-header-plugins__btn_local': plugin.isLocal,
        'prevent-modal-close': plugin.preventClose
      }"
      @click="$emit('click', plugin.id)"
    >
      <AfsIcon :name="plugin.icon" class="app-header-plugins__icon" />
      <div v-if="plugin.label" class="afs-typography_paragraph afs-typography app-header-plugins__text">
        {{ plugin.label }}
      </div>
      <AfsIcon v-if="plugin.hasDropdown" name="chevron-down-8" class="app-header-plugins__dropdown-icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * AppHeaderPlugins - Plugin buttons container in header
 * @see production example.html app-header-plugins
 */
defineOptions({ name: 'AppHeaderPlugins' });

interface Plugin {
  id: string;
  icon: string;
  label?: string;
  isActive?: boolean;
  isLocal?: boolean;
  hasDropdown?: boolean;
  preventClose?: boolean;
}

withDefaults(
  defineProps<{
    /**
     * Array of plugin definitions to display.
     */
    plugins: Plugin[];
  }>(),
  {
    plugins: () => [],
  }
);

defineEmits<{ (e: 'click', pluginId: string): void }>();
</script>

<style lang="scss">
.app-header-plugins {
  display: flex;
  align-items: center;
  
  &__btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 10px;
    background: transparent;
    border: none;
    border-radius: 4px;
    color: var(--afs-text-icon-primary, #fff);
    cursor: pointer;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-hover, #48484a);
    }
    
    &.is-selected {
      background: var(--afs-primary-overlay, #0a84ff33);
    }
    
    &_local {
      // Local plugin styling
    }
  }
  
  &__icon {
    font-size: 16px;
  }
  
  &__text {
    font-size: 12px;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  &__dropdown-icon {
    font-size: 8px;
    margin-left: 4px;
    transition: transform 0.15s;
    
    &.is-active {
      transform: rotate(180deg);
    }
  }
}
</style>
