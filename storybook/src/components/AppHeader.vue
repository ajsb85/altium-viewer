<template>
  <header class="app-header">
    <div class="app-header__left">
        <slot name="left" />
        <AppMainTabs :items="views" @change="handleViewChange" />
    </div>
    
    <div class="app-header__right">
        <AppHeaderPlugin 
            v-if="localPluginsByType.primary.length" 
            :items="localPluginsByType.primary" 
            is-primary 
            @click="handlePluginClick" 
        />
        
        <div v-if="localPluginsByType.secondary.length" class="app-header__separator"></div>
        
        <AppHeaderPlugin 
            v-if="localPluginsByType.secondary.length" 
            :items="localPluginsByType.secondary" 
            @click="handlePluginClick" 
        />
        
        <div v-if="globalPlugins.length" class="app-header__separator"></div>
        
        <AppHeaderPlugin 
            v-if="globalPlugins.length" 
            :items="globalPlugins" 
            is-global 
            @click="handlePluginClick" 
        />
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AppMainTabs from './AppMainTabs.vue';
import AppHeaderPlugin from './AppHeaderPlugin.vue';

const props = defineProps({
  /**
   * Array of view definitions (e.g. PCB, SCH, BOM) for the main tabs.
   */
  views: {
    type: Array,
    default: () => [],
  },
  /**
   * Array of global plugin definitions to display in the header.
   */
  globalPlugins: {
    type: Array as () => any[],
    default: () => [],
  },
  /**
   * Array of local plugin definitions (specific to current view).
   */
  localPlugins: {
    type: Array as () => any[],
    default: () => [],
  },
});

const emit = defineEmits(['view-change', 'plugin-click']);

const localPluginsByType = computed(() => {
    return props.localPlugins.reduce(
        (acc: any, t: any) => {
            if (t.localType === 'primary') {
                acc.primary.push(t);
            } else {
                acc.secondary.push(t);
            }
            return acc;
        },
        { primary: [], secondary: [] }
    );
});

const handleViewChange = (view: any) => {
    emit('view-change', view);
};

const handlePluginClick = (plugin: any) => {
    emit('plugin-click', plugin);
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  background: var(--afs-toolbar, var(--background-header, #1c1c1e));

  &__left,
  &__right {
    display: flex;
    align-items: stretch;
    flex-basis: 100%;
  }

  &__left {
    justify-content: flex-start;
  }

  &__right {
    justify-content: flex-end;
  }

  &__separator {
    width: 1px;
    height: 2rem;
    background-color: var(--afs-border, var(--border-primary, #3c3c3e));
    margin: auto 0.25rem;
    opacity: 0.5;
  }
}
</style>
