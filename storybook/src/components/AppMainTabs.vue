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
  /**
   * Array of tab items to display.
   * Each item should have `id` and `text` properties.
   */
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
  align-items: stretch;

  &__btn {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    min-width: 3rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-main-tabs, var(--afs-text-icon-secondary, #6b7280));
    transition: background-color var(--transition-duration-default, 0.2s);

    &:hover {
      background: var(--background-tab-secondary_hover, var(--afs-secondary-selected, #f3f4f6));
    }

    &.is-selected {
      background: var(--background-button-secondary_selected, var(--afs-accent, #3b82f6));
      color: var(--afs-text-icon-inverse, #fff);
    }

    &:disabled {
      opacity: 0.5;
      cursor: wait;
    }
  }

  &__text {
    display: flex;
    align-items: center;
    color: inherit;
    text-shadow: var(--text-shadow-main-tabs, none);
    white-space: nowrap;
  }

  &__name {
    max-width: 9.38rem;
    line-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__display-items {
    display: flex;
    margin-top: -0.12rem;
    margin-bottom: -0.12rem;

    .app-main-tabs__icon {
      font-size: 1rem;
    }

    .app-main-tabs__text {
      line-height: 1rem;

      &:not(:first-child) {
        margin-left: 1rem;
      }
    }
  }

  &__icon {
    margin-right: 0.5rem;
    flex-shrink: 0;
  }

  &__badge {
    margin-left: 8px;
    text-transform: capitalize;
  }
}
</style>
