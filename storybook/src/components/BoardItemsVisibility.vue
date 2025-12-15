<template>
  <div class="board-items-visibility">
    <TabPanel v-model="activeTab" :tabs="tabs">
      <template #default="{ activeTab }">
        <!-- Layers Panel -->
        <Layers
          v-if="activeTab === 'layers'"
          :layers="layers"
          :layers-views="layersViews"
          :show-view-tabs="showViewTabs"
          @toggle-visibility="handleLayerToggle"
          @show-only="handleLayerShowOnly"
          @select-view="handleViewSelect"
        />
        
        <!-- Objects Panel -->
        <ObjectsPanel
          v-if="activeTab === 'objects'"
          :objects="objects"
          :all-objects-visible="allObjectsVisible"
          :all-objects-label="allObjectsLabel"
          @toggle-object="handleObjectToggle"
          @show-only="handleObjectShowOnly"
          @toggle-all-objects="handleToggleAllObjects"
        />
      </template>
    </TabPanel>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import TabPanel from './TabPanel.vue';
import Layers from './Layers.vue';
import ObjectsPanel from './ObjectsPanel.vue';

/**
 * BoardItemsVisibility - Main layers/objects visibility panel
 * 
 * Combines TabPanel, Layers, and ObjectsPanel into a complete
 * visibility control sidebar for PCB designs.
 * 
 * @see BoardItemsVisibility.js plugin
 */
defineOptions({ name: 'BoardItemsVisibility' });

interface Layer {
  id: string | number;
  name: string;
  color?: string;
  isVisible: boolean;
}

interface ObjectItem {
  id: string | number;
  name: string;
  isVisible: boolean;
}

interface LayersView {
  id: number;
  name: string;
  isActive: boolean;
}

const props = withDefaults(
  defineProps<{
    /** Array of layer items */
    layers?: Layer[];
    /** Array of object items */
    objects?: ObjectItem[];
    /** Array of layer views (top/bottom) */
    layersViews?: LayersView[];
    /** Show tab for layers */
    showLayers?: boolean;
    /** Show tab for objects */
    showObjects?: boolean;
    /** Show view tabs (top/bottom) */
    showViewTabs?: boolean;
    /** Label for "all objects" toggle */
    allObjectsLabel?: string;
  }>(),
  {
    layers: () => [],
    objects: () => [],
    layersViews: () => [
      { id: 1, name: 'Top', isActive: true },
      { id: 2, name: 'Bottom', isActive: false },
    ],
    showLayers: true,
    showObjects: true,
    showViewTabs: true,
    allObjectsLabel: 'All Objects',
  }
);

const emit = defineEmits<{
  (e: 'layerToggle', layer: Layer): void;
  (e: 'layerShowOnly', layer: Layer): void;
  (e: 'objectToggle', obj: ObjectItem): void;
  (e: 'objectShowOnly', obj: ObjectItem): void;
  (e: 'toggleAllObjects', visible: boolean): void;
  (e: 'viewSelect', viewId: number): void;
}>();

const activeTab = ref(props.showLayers ? 'layers' : 'objects');

const tabs = computed(() => {
  const result = [];
  if (props.showLayers) {
    result.push({ id: 'layers', name: 'Layers' });
  }
  if (props.showObjects) {
    result.push({ id: 'objects', name: 'Objects' });
  }
  return result;
});

const allObjectsVisible = computed(() => 
  props.objects.every(obj => obj.isVisible)
);

// Event handlers
function handleLayerToggle(layer: Layer) {
  emit('layerToggle', layer);
}

function handleLayerShowOnly(layer: Layer) {
  emit('layerShowOnly', layer);
}

function handleObjectToggle(obj: ObjectItem) {
  emit('objectToggle', obj);
}

function handleObjectShowOnly(obj: ObjectItem) {
  emit('objectShowOnly', obj);
}

function handleToggleAllObjects(visible: boolean) {
  emit('toggleAllObjects', visible);
}

function handleViewSelect(viewId: number) {
  emit('viewSelect', viewId);
}
</script>

<style lang="scss">
.board-items-visibility {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--afs-sidebar, #fff);
  border: 1px solid var(--afs-border, #e5e7eb);
  border-radius: 4px;
}
</style>
