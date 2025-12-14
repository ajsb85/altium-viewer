/**
 * ViewerPluginManager.js - Plugin Lifecycle Manager
 * 
 * Manages global and local plugin registration, enable/disable, and state.
 * 
 * Requires: ViewerEventBus, ViewerStore
 */
var ViewerPluginManager = (function (exports) {
    'use strict';

    var EVENTS = ViewerEventBus.EVENTS;

    // ============================================================================
    // PLUGIN MANAGER
    // ============================================================================

    /**
     * PluginManager - Handles plugin lifecycle
     */
    function PluginManager(store) {
        this.store = store;
        this.initialized = false;
    }

    /**
     * Initialize plugin event listeners
     */
    PluginManager.prototype.initialize = function() {
        var self = this;

        // Listen for global plugin events
        ViewerEventBus.on(EVENTS.GLOBAL_PLUGINS_ENABLE, function(data) {
            if (data && data.id) {
                self.enablePlugin(data.id);
            }
        });

        ViewerEventBus.on(EVENTS.GLOBAL_PLUGINS_DISABLE, function(data) {
            if (data && data.id) {
                self.disablePlugin(data.id);
            }
        });

        // Listen for local plugin events
        ViewerEventBus.on(EVENTS.LOCAL_PLUGINS_ENABLE, function(data) {
            if (data && data.id) {
                self.enablePlugin(data.id);
            }
        });

        ViewerEventBus.on(EVENTS.LOCAL_PLUGINS_DISABLE, function(data) {
            if (data && data.id) {
                self.disablePlugin(data.id);
            }
        });

        this.initialized = true;
        console.log('[PluginManager] Initialized');
    };

    /**
     * Register a global plugin
     */
    PluginManager.prototype.registerGlobalPlugin = function(plugin) {
        if (this.store && this.store.dispatch) {
            this.store.dispatch('setGlobalPlugin', plugin);
        }
    };

    /**
     * Register local plugins for a view
     */
    PluginManager.prototype.registerLocalPlugins = function(viewId, plugins) {
        if (this.store && this.store.dispatch) {
            this.store.dispatch('setLocalPluginDictionary', {
                name: viewId,
                data: plugins
            });
        }
    };

    /**
     * Enable a plugin
     */
    PluginManager.prototype.enablePlugin = function(pluginId) {
        if (this.store && this.store.dispatch) {
            this.store.dispatch('setActivePlugin', pluginId);
        }
        // Emit specific plugin enable event
        ViewerEventBus.emit(pluginId + ":enable");
    };

    /**
     * Disable a plugin
     */
    PluginManager.prototype.disablePlugin = function(pluginId) {
        if (this.store && this.store.dispatch) {
            this.store.dispatch('removeActivePlugin', pluginId);
        }
        // Emit specific plugin disable event
        ViewerEventBus.emit(pluginId + ":disable");
    };

    /**
     * Get active plugins
     */
    PluginManager.prototype.getActivePlugins = function() {
        if (this.store && this.store.state) {
            return this.store.state.activePlugins || [];
        }
        return [];
    };

    /**
     * Check if a plugin is active
     */
    PluginManager.prototype.isPluginActive = function(pluginId) {
        return this.getActivePlugins().indexOf(pluginId) >= 0;
    };

    /**
     * Update plugin interface data
     */
    PluginManager.prototype.updatePluginInterface = function(type, payload) {
        if (this.store && this.store.dispatch) {
            if (type === 'global') {
                this.store.dispatch('updateGlobalPluginsInterface', payload);
            } else if (type === 'local') {
                this.store.dispatch('updateLocalPluginsInterface', payload);
            }
        }
    };

    // ============================================================================
    // FACTORY
    // ============================================================================

    /**
     * Create a PluginManager instance
     */
    function createPluginManager(store) {
        return new PluginManager(store);
    }

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.PluginManager = PluginManager;
    exports.createPluginManager = createPluginManager;

    return exports;
}({}));
