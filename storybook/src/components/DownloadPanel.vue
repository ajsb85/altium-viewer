<template>
  <div class="download-panel">
    <div class="download-panel__header">
      <h3 class="download-panel__title">{{ title }}</h3>
    </div>
    
    <div class="download-panel__content">
      <!-- Output files list -->
      <div v-if="outputs.length" class="download-panel__section">
        <h4 class="download-panel__section-title">Output Files</h4>
        <div
          v-for="output in outputs"
          :key="output.id"
          class="download-panel__item"
        >
          <label class="download-panel__checkbox">
            <input 
              type="checkbox" 
              :checked="output.isActive"
              @change="toggleOutput(output)"
            />
            <span class="download-panel__item-name">{{ output.name }}</span>
          </label>
          <span v-if="output.size" class="download-panel__item-size">
            {{ formatSize(output.size) }}
          </span>
        </div>
      </div>
      
      <!-- 3D Model download -->
      <div v-if="threeD" class="download-panel__section">
        <h4 class="download-panel__section-title">3D Model</h4>
        <div class="download-panel__item">
          <label class="download-panel__checkbox">
            <input 
              type="checkbox" 
              :checked="threeD.isActive"
              @change="toggleThreeD"
            />
            <span class="download-panel__item-name">{{ threeD.name }}</span>
          </label>
          <span v-if="threeD.size" class="download-panel__item-size">
            {{ formatSize(threeD.size) }}
          </span>
        </div>
      </div>
      
      <!-- Original file download -->
      <div v-if="originalFile" class="download-panel__section">
        <h4 class="download-panel__section-title">Original File</h4>
        <div class="download-panel__item">
          <label class="download-panel__checkbox">
            <input 
              type="checkbox" 
              :checked="originalFile.isActive"
              @change="toggleOriginal"
            />
            <span class="download-panel__item-name">{{ originalFile.name }}</span>
          </label>
          <span v-if="originalFile.size" class="download-panel__item-size">
            {{ formatSize(originalFile.size) }}
          </span>
        </div>
      </div>
      
      <!-- Error message -->
      <div v-if="error" class="download-panel__error">
        <AfsIcon name="error-16" />
        <span>{{ error }}</span>
      </div>
    </div>
    
    <div class="download-panel__footer">
      <button
        type="button"
        class="download-panel__btn"
        :disabled="!hasSelectedItems || isDownloading"
        @click="handleDownload"
      >
        <AfsIcon v-if="isDownloading" name="loading-16" class="download-panel__btn-icon is-spinning" />
        <AfsIcon v-else name="download-16" class="download-panel__btn-icon" />
        <span>{{ isDownloading ? 'Downloading...' : 'Download' }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AfsIcon from './AfsIcon.vue';

/**
 * DownloadPanel - Download options panel for design files
 * 
 * Displays available output formats, 3D model, and original file
 * for download selection.
 * 
 * @see Download.js plugin
 */
defineOptions({ name: 'DownloadPanel' });

interface DownloadItem {
  id: string;
  name: string;
  fileUrl?: string;
  size?: number;
  isActive: boolean;
}

const props = withDefaults(
  defineProps<{
    /** Panel title */
    title?: string;
    /** Output file options */
    outputs?: DownloadItem[];
    /** 3D model download option */
    threeD?: DownloadItem | null;
    /** Original file download option */
    originalFile?: DownloadItem | null;
    /** Error message to display */
    error?: string;
    /** Download in progress */
    isDownloading?: boolean;
  }>(),
  {
    title: 'Download',
    outputs: () => [],
    threeD: null,
    originalFile: null,
    error: '',
    isDownloading: false,
  }
);

const emit = defineEmits<{
  (e: 'toggleOutput', output: DownloadItem): void;
  (e: 'toggleThreeD'): void;
  (e: 'toggleOriginal'): void;
  (e: 'download'): void;
}>();

const hasSelectedItems = computed(() => {
  const activeOutputs = props.outputs.some(o => o.isActive);
  const active3D = props.threeD?.isActive ?? false;
  const activeOriginal = props.originalFile?.isActive ?? false;
  return activeOutputs || active3D || activeOriginal;
});

function toggleOutput(output: DownloadItem) {
  emit('toggleOutput', output);
}

function toggleThreeD() {
  emit('toggleThreeD');
}

function toggleOriginal() {
  emit('toggleOriginal');
}

function handleDownload() {
  emit('download');
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
</script>

<style lang="scss">
.download-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--afs-sidebar, #fff);
  
  &__header {
    padding: 12px 16px;
    border-bottom: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__title {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__content {
    flex: 1;
    overflow-y: auto;
    padding: 8px 0;
  }
  
  &__section {
    padding: 8px 16px;
    
    &:not(:last-child) {
      border-bottom: 1px solid var(--afs-border, #e5e7eb);
    }
  }
  
  &__section-title {
    margin: 0 0 8px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
  
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0;
  }
  
  &__checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    
    input[type="checkbox"] {
      width: 14px;
      height: 14px;
      accent-color: var(--afs-accent, #3b82f6);
      cursor: pointer;
    }
  }
  
  &__item-name {
    font-size: 13px;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__item-size {
    font-size: 11px;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
  
  &__error {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    margin: 8px 16px;
    background: var(--afs-error-bg, #fef2f2);
    border-radius: 4px;
    color: var(--afs-error, #dc2626);
    font-size: 12px;
  }
  
  &__footer {
    padding: 12px 16px;
    border-top: 1px solid var(--afs-border, #e5e7eb);
  }
  
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 10px 16px;
    background: var(--afs-accent, #3b82f6);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover:not(:disabled) {
      background: var(--afs-accent-hover, #2563eb);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  
  &__btn-icon {
    font-size: 16px;
    
    &.is-spinning {
      animation: spin 1s linear infinite;
    }
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
