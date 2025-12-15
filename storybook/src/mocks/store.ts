/**
 * Store Mock - Storybook version
 * Provides a minimal reactive store for components requiring state
 */
import { reactive, readonly, type DeepReadonly } from 'vue';

export interface StoreState {
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
  theme: 'light' | 'dark';
  sidebarWidth: number;
  activeTabs: string[];
  selectedItems: string[];
}

const initialState: StoreState = {
  isLoading: false,
  hasError: false,
  errorMessage: '',
  theme: 'light',
  sidebarWidth: 280,
  activeTabs: [],
  selectedItems: [],
};

const state = reactive<StoreState>({ ...initialState });

export const store = {
  state: readonly(state) as DeepReadonly<StoreState>,

  setLoading(value: boolean) {
    state.isLoading = value;
  },

  setError(message: string) {
    state.hasError = !!message;
    state.errorMessage = message;
  },

  setTheme(theme: 'light' | 'dark') {
    state.theme = theme;
  },

  setSidebarWidth(width: number) {
    state.sidebarWidth = Math.max(200, Math.min(600, width));
  },

  addTab(tabId: string) {
    if (!state.activeTabs.includes(tabId)) {
      state.activeTabs.push(tabId);
    }
  },

  removeTab(tabId: string) {
    const index = state.activeTabs.indexOf(tabId);
    if (index > -1) {
      state.activeTabs.splice(index, 1);
    }
  },

  selectItem(itemId: string) {
    if (!state.selectedItems.includes(itemId)) {
      state.selectedItems.push(itemId);
    }
  },

  deselectItem(itemId: string) {
    const index = state.selectedItems.indexOf(itemId);
    if (index > -1) {
      state.selectedItems.splice(index, 1);
    }
  },

  reset() {
    Object.assign(state, initialState);
  },
};
