<template>
  <div class="compare-layers">
    <div class="compare-layers__header">
      <h4 class="compare-layers__title">Layer Comparison</h4>
    </div>
    <div class="compare-layers__list">
      <div
        v-for="layer in layers"
        :key="layer.id"
        class="compare-layers__item"
        :class="{ 'has-diff': layer.hasDifference }"
      >
        <div
          class="compare-layers__color"
          :style="{ backgroundColor: layer.color }"
        />
        <span class="compare-layers__name">{{ layer.name }}</span>
        <div class="compare-layers__status">
          <span v-if="layer.hasDifference" class="compare-layers__diff-badge">
            {{ layer.diffCount }} changes
          </span>
          <span v-else class="compare-layers__match">Match</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * CompareLayers - Layer difference comparison
 * 
 * @see Compare plugins
 */
defineOptions({ name: 'CompareLayers' });

interface CompareLayer {
  id: string;
  name: string;
  color: string;
  hasDifference: boolean;
  diffCount?: number;
}

withDefaults(
  defineProps<{
    layers?: CompareLayer[];
  }>(),
  {
    layers: () => [],
  }
);
</script>

<style lang="scss">
.compare-layers {
  &__header {
    padding: 8px 12px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__title {
    margin: 0;
    font-size: 12px;
    font-weight: 600;
    color: var(--afs-text-icon-secondary, #6b7280);
  }
  
  &__list {
    padding: 4px 0;
  }
  
  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    
    &.has-diff {
      background: rgba(234, 179, 8, 0.1);
    }
  }
  
  &__color {
    width: 12px;
    height: 12px;
    border-radius: 2px;
  }
  
  &__name {
    flex: 1;
    font-size: 12px;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__status {
    font-size: 11px;
  }
  
  &__diff-badge {
    padding: 2px 6px;
    background: #fef3c7;
    color: #92400e;
    border-radius: 4px;
  }
  
  &__match {
    color: var(--afs-text-icon-hint, #9ca3af);
  }
}
</style>
