<template>
  <div class="app-header-plugins">
    <button
      v-for="item in filteredItems"
      :id="`${item.id}-control`"
      :key="item.id"
      type="button"
      class="app-header-plugins__btn"
      :class="{
        'is-selected': item.isActive && !item.disableActiveBtnState,
        'app-header-plugins__btn_local': !isGlobal && !isPrimary,
        'prevent-modal-close': item.preventModalClose,
      }"
      :disabled="item.disabled"
      @click="handleButtonClick($event, item)"
    >
      <AfsIcon
        v-if="item.icon"
        key="icon"
        :name="item.icon"
        :filled="item.iconFilled"
        class="app-header-plugins__icon"
      />
      <AfsText v-if="item.text" key="text" class="app-header-plugins__text">
        {{ item.text }}
      </AfsText>
      <AfsIcon
        v-if="item.dropdown"
        key="dropdown"
        name="chevron-down-8"
        class="app-header-plugins__dropdown-icon"
        :class="{ 'is-active': item.isActive }"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AfsText from './AfsText.vue';
import AfsIcon from './AfsIcon.vue';

const props = defineProps({
  items: {
    type: Array as () => any[],
    default: () => [],
    validator: (e: any[]) => {
      return !e.length || e.every((item) => (item.hasOwnProperty("text") || item.hasOwnProperty("icon")) && item.hasOwnProperty("id"));
    },
  },
  isGlobal: { type: Boolean, default: false },
  isPrimary: { type: Boolean, default: false },
});

const emit = defineEmits(['click']);

const filteredItems = computed(() => {
    // Original code filters by 'hasButton'. Assuming items passed here are meant to be displayed.
    // If 'hasButton' is strictly required we should check if data includes it.
    // For safety, let's filter only if property exists or default to true for this simplified version
    return props.items.filter(e => e.hasButton !== false);
});

const handleButtonClick = (event: Event, item: any) => {
    if (!item.modalTarget) {
        event.preventDefault();
        emit('click', item);
    }
    // Logic for modalTarget would go here if we had the directive/logic
};
</script>

<style lang="scss" scoped>
.app-header-plugins {
    display: flex;
    align-items: center;
    height: 100%;

    &__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        padding: 0 8px;
        margin: 0 4px;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #4b5563;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            background-color: #f3f4f6;
            color: #111827;
        }

        &.is-selected {
            background-color: #ebf5ff;
            color: #2563eb;
            border-color: #bfdbfe;
        }

        &_local {
            // styles for local/secondary plugins
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    &__icon {
        width: 16px;
        height: 16px;
    }

    &__text {
        margin: 0 4px;
        font-size: 13px;
    }

    &__dropdown-icon {
        margin-left: 2px;
        width: 12px;
        height: 12px;
    }
}
</style>
