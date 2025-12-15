<template>
  <div class="base-footer">
    <div v-if="showCount" class="base-footer__count">
      <span class="afs-typography_paragraph afs-typography">{{ count }} results</span>
    </div>
    <div class="base-footer__actions">
      <slot name="actions">
        <button 
          v-if="showClear" 
          class="base-footer__btn afs-btn afs-btn_secondary afs-btn_sm"
          type="button"
          @click="$emit('clear')"
        >
          Clear
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * BaseFooter - Footer with count and actions for search/lists
 * @see production example.html
 */
defineOptions({ name: 'BaseFooter' });

withDefaults(
  defineProps<{
    count?: number;
    showCount?: boolean;
    showClear?: boolean;
  }>(),
  {
    count: 0,
    showCount: true,
    showClear: true,
  }
);

defineEmits<{ (e: 'clear'): void }>();
</script>

<style lang="scss">
.base-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px solid var(--afs-border, #38383a);
  background: var(--afs-panel, #2c2c2e);
  
  &__count {
    font-size: 12px;
    color: var(--afs-text-icon-hint, #ebebf54d);
  }
  
  &__actions {
    display: flex;
    gap: 8px;
  }
  
  &__btn {
    font-size: 12px;
  }
}
</style>
