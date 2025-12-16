<template>
  <div class="lib-table" :class="{ 'has-hover': hasHover }">
    <!-- Header -->
    <div v-if="columns.length" class="lib-table__header">
      <div class="lib-table__row">
        <component
          v-for="col in columns"
          :key="col.key"
          :is="col.sortable ? 'button' : 'div'"
          :type="col.sortable ? 'button' : undefined"
          class="lib-table__col"
          :class="[
            col.sortable ? 'lib-table__col_sort' : '',
            col.align ? `lib-table__col_text-align-${col.align}` : '',
            sortKey === col.key ? (sortDir === 'asc' ? 'is-asc' : 'is-desc') : ''
          ]"
          :style="getColStyle(col)"
          @click="col.sortable ? handleSort(col.key) : undefined"
        >
          <span class="lib-table__heading">{{ col.label }}</span>
          <span v-if="col.sortable" class="lib-table__sort-icon"></span>
        </component>
      </div>
    </div>

    <!-- Body -->
    <div class="lib-table__body">
      <div
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="lib-table__row"
        :class="{ 'is-focused': focusedRow === rowIndex }"
        @click="$emit('row-click', row, rowIndex)"
      >
        <slot name="row" :row="row" :index="rowIndex" :columns="columns">
          <div
            v-for="col in columns"
            :key="col.key"
            class="lib-table__col"
            :class="col.align ? `lib-table__col_text-align-${col.align}` : ''"
          :style="getColStyle(col)"
          >
            <slot :name="`cell-${col.key}`" :value="row[col.key]" :row="row">
              {{ row[col.key] }}
            </slot>
          </div>
        </slot>
      </div>
    </div>

    <!-- Footer -->
    <div v-if="$slots.footer" class="lib-table__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * LibTable - Production Table Component
 * 
 * Production CSS from production.css:38813-38970
 * Flexbox-based table with sortable columns, hover states, and custom scrollbars.
 */
import { ref } from 'vue';

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
  flex?: string;
  align?: 'left' | 'right' | 'center';
  sortable?: boolean;
}

defineOptions({ name: 'LibTable' });

const props = withDefaults(
  defineProps<{
    /** Column definitions */
    columns: TableColumn[];
    /** Data rows */
    rows: Record<string, any>[];
    /** Enable hover effect on rows */
    hasHover?: boolean;
    /** Initial sort column key */
    defaultSortKey?: string;
    /** Initial sort direction */
    defaultSortDir?: 'asc' | 'desc';
  }>(),
  {
    hasHover: true,
    defaultSortDir: 'asc',
  }
);

const emit = defineEmits<{
  (e: 'sort', key: string, dir: 'asc' | 'desc'): void;
  (e: 'row-click', row: Record<string, any>, index: number): void;
}>();

const sortKey = ref(props.defaultSortKey || '');
const sortDir = ref<'asc' | 'desc'>(props.defaultSortDir);
const focusedRow = ref<number | null>(null);

function getColStyle(col: TableColumn) {
  const styles: Record<string, string> = {};
  
  if (col.flex) {
    styles.flex = col.flex;
  } else if (col.width) {
    styles.flex = `0 0 ${col.width}`;
  } else {
    styles.flex = '1 1 auto';
  }
  
  return styles;
}

function handleSort(key: string) {
  if (sortKey.value === key) {
    sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortDir.value = 'asc';
  }
  emit('sort', sortKey.value, sortDir.value);
}
</script>

<style lang="scss">
/**
 * Production CSS from production.css:38813-38970
 */
.lib-table {
  display: flex;
  flex-direction: column;
  font-size: 0.69rem;
  line-height: 1.37;
}

.lib-table.has-hover .lib-table__body .lib-table__row.is-focused {
  background: var(--background-control);
}

.lib-table.has-hover .lib-table__body .lib-table__row:focus-within {
  background: var(--background-control);
}

.lib-table.has-hover .lib-table__body .lib-table__row:hover {
  background: var(--background-control);
}

.lib-table__header,
.lib-table__footer {
  flex: 0 0 auto;
}

.lib-table__header:not(:last-child) {
  border-bottom: 1px solid var(--border-primary);
}

.lib-table__footer {
  background: var(--background-control);
}

.lib-table__footer:not(:first-child) {
  border-top: 1px solid var(--border-color-control);
}

.lib-table__footer .lib-table__col {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.lib-table__body {
  flex: 1 1 auto;
  overflow: auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.88rem;
    height: 0.88rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.75rem;
    border: 0.25rem solid transparent;
    background-clip: padding-box;
    background-color: var(--scrollbar-thumb, rgba(255, 255, 255, 0.2));
  }
}

.lib-table__row {
  display: flex;
}

.lib-table__col {
  flex: 0 1 auto;
  padding: 0.25rem 0.5rem 0.32rem;
  min-width: 0;
  color: inherit;
  background: none;
  font-size: inherit;
  font-weight: inherit;
  text-align: inherit;
  border: none;
  cursor: default;

  &:first-child {
    padding-left: 1rem;
  }

  &:last-child {
    padding-right: 1rem;
  }
}

.lib-table__col_text-align-left {
  text-align: left;
}

.lib-table__col_text-align-right {
  text-align: right;
}

.lib-table__col_text-align-center {
  text-align: center;
}

.lib-table__col_sort {
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: var(--background-clickable_hover, rgba(255, 255, 255, 0.05));
  }

  &.is-asc,
  &.is-desc {
    background: var(--background-button-secondary, rgba(255, 255, 255, 0.08));
  }

  &.is-asc .lib-table__sort-icon::before {
    color: var(--color-primary, #0a84ff);
  }

  &.is-desc .lib-table__sort-icon::after {
    color: var(--color-primary, #0a84ff);
  }
}

.lib-table__heading {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.lib-table__sort-icon {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.5rem;
  width: 6px;
  height: 10px;

  &::before,
  &::after {
    content: "";
    display: block;
    color: var(--color-secondary, rgba(255, 255, 255, 0.4));
  }

  &::before {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 3px 4px 3px;
    border-color: transparent transparent currentColor transparent;
  }

  &::after {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 3px 0 3px;
    border-color: currentColor transparent transparent transparent;
  }
}
</style>
