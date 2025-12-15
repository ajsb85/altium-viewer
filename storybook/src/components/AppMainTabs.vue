<template>
  <div v-if="hasTabs" class="app-main-tabs">
    <button
      v-for="item in items"
      :key="item.id"
      type="button"
      class="app-main-tabs__btn"
      :class="{
        'is-selected': item.isActive && !item.disableActiveBtnState,
        'app-main-tabs__btn-icon': item.icon,
      }"
      :style="{ minWidth: item.buttonMinWidth ? `${item.buttonMinWidth}px` : null }"
      :disabled="item.disabled"
      @click.prevent="onClick(item)"
    >
      <div v-if="item.displayItems" class="app-main-tabs__display-items">
        <AfsText
          v-for="(displayItem, index) in item.displayItems"
          :key="displayItem.text + index"
          type="title"
          class="app-main-tabs__text"
        >
          <AfsIcon
            v-if="displayItem.icon"
            class="app-main-tabs__icon"
            :name="displayItem.icon"
            filled
          />
          <span>{{ displayItem.text }}</span>
        </AfsText>
      </div>

      <AfsText v-else type="title" class="app-main-tabs__text">
        <AfsIcon
          v-if="item.icon"
          class="app-main-tabs__icon"
          :name="item.icon"
          filled
        />
        <span>{{ item.text }}</span>
        <AfsBadge
          v-if="item.beta"
          size="xs"
          type="base"
          :uppercase="true"
          class="app-main-tabs__badge"
        >
          {{ item.betaText ? item.betaText : "beta" }}
        </AfsBadge>
      </AfsText>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AfsText from './AfsText.vue';
import AfsIcon from './AfsIcon.vue';
import AfsBadge from './AfsBadge.vue';
// import AfsContextMenu from './AfsContextMenu.vue'; // Not using context menu logic yet in this simplified version

const props = defineProps({
  items: {
    type: Array as () => any[],
    default: () => [],
    validator: (e: any[]) => {
      return !e.length || e.every((item) => item.hasOwnProperty("text") && item.hasOwnProperty("id"));
    },
  },
});

const emit = defineEmits(['change']);

const hasTabs = computed(() => props.items.length > 0);

const onClick = (item: any) => {
  emit('change', item);
};
</script>

<style lang="scss" scoped>
.app-main-tabs {
  display: flex;
  height: 100%;
  border-bottom: 1px solid #e5e7eb;

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    height: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    color: #6b7280;
    transition: all 0.2s;
    position: relative;

    &:hover {
      color: #111827;
      background-color: #f9fafb;
    }

    &.is-selected {
      color: #3b82f6;
      border-bottom-color: #3b82f6;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__text {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__icon {
    flex-shrink: 0;
  }
  
  &__badge {
    margin-left: 8px;
  }
}
</style>
