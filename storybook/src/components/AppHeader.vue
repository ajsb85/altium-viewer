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
  views: {
    type: Array,
    default: () => [],
  },
  globalPlugins: {
    type: Array as () => any[],
    default: () => [],
  },
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
  align-items: center;
  height: 48px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 16px;

  &__left {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__right {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 8px;
  }
  
  &__separator {
      width: 1px;
      height: 24px;
      background-color: #e5e7eb;
      margin: 0 4px;
  }
}
</style>
