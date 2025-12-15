<template>
  <div class="help-panel">
    <div class="help-panel__header">
      <h3 class="help-panel__title">{{ title }}</h3>
    </div>
    
    <div class="help-panel__content">
      <!-- Keyboard shortcuts -->
      <section v-if="shortcuts.length" class="help-panel__section">
        <h4 class="help-panel__section-title">Keyboard Shortcuts</h4>
        <div class="help-panel__shortcuts">
          <div
            v-for="shortcut in shortcuts"
            :key="shortcut.key"
            class="help-panel__shortcut"
          >
            <kbd class="help-panel__key">{{ shortcut.key }}</kbd>
            <span class="help-panel__description">{{ shortcut.description }}</span>
          </div>
        </div>
      </section>
      
      <!-- Help links -->
      <section v-if="links.length" class="help-panel__section">
        <h4 class="help-panel__section-title">Resources</h4>
        <div class="help-panel__links">
          <a
            v-for="link in links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener"
            class="help-panel__link"
          >
            <AfsIcon v-if="link.icon" :name="link.icon" />
            <span>{{ link.label }}</span>
            <AfsIcon name="external-12" class="help-panel__link-external" />
          </a>
        </div>
      </section>
      
      <!-- Version info -->
      <section v-if="version" class="help-panel__section help-panel__section--footer">
        <span class="help-panel__version">{{ version }}</span>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import AfsIcon from './AfsIcon.vue';

/**
 * HelpPanel - Help and keyboard shortcuts panel
 * 
 * @see HelpPanel.js plugin
 */
defineOptions({ name: 'HelpPanel' });

interface Shortcut {
  key: string;
  description: string;
}

interface Link {
  label: string;
  url: string;
  icon?: string;
}

withDefaults(
  defineProps<{
    /** Panel title */
    title?: string;
    /** Keyboard shortcuts */
    shortcuts?: Shortcut[];
    /** Help links */
    links?: Link[];
    /** Version string */
    version?: string;
  }>(),
  {
    title: 'Help',
    shortcuts: () => [],
    links: () => [],
    version: '',
  }
);
</script>

<style lang="scss">
.help-panel {
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
    padding: 8px 0;
  }
  
  &__section {
    padding: 12px 16px;
    
    &:not(:last-child) {
      border-bottom: 1px solid var(--afs-border, #e5e7eb);
    }
    
    &--footer {
      text-align: center;
    }
  }
  
  &__section-title {
    margin: 0 0 12px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
  
  &__shortcuts {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  &__shortcut {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  &__key {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    padding: 2px 6px;
    background: var(--afs-group, #f3f4f6);
    border: 1px solid var(--afs-border, #e5e7eb);
    border-radius: 4px;
    font-family: monospace;
    font-size: 11px;
    color: var(--afs-text-icon-primary, #111827);
  }
  
  &__description {
    font-size: 13px;
    color: var(--afs-text-icon-secondary, #6b7280);
  }
  
  &__links {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  
  &__link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 4px;
    font-size: 13px;
    color: var(--afs-accent, #3b82f6);
    text-decoration: none;
    transition: background-color 0.15s;
    
    &:hover {
      background: var(--afs-secondary-selected, #f3f4f6);
    }
  }
  
  &__link-external {
    margin-left: auto;
    opacity: 0.5;
  }
  
  &__version {
    font-size: 11px;
    color: var(--afs-text-icon-hint, #9ca3af);
  }
}
</style>
