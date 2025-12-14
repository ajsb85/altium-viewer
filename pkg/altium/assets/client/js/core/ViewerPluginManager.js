/**
 * ViewerPluginManager.js
 * 
 * Manages plugin initialization, state toggling, and event listeners for the ViewerApp.
 * Extracts plugin-related logic from the main ViewerApp component.
 * 
 * Dependencies: ViewerAppConfig, Ne.Z.bus (global)
 */

var ViewerPluginManager = (function(Config) {
    'use strict';

    /**
     * Toggles the disabled state of modules/plugins based on exclusion rules.
     * 
     * @param {Object} options - Configuration options
     * @param {Function} options.getItems - Function returning the list of items (plugins/views)
     * @param {Function} options.callback - Function to call when state changes for an item
     * @param {boolean} options.disabled - The target disabled state (true/false)
     * @returns {Function} Event handler function accepting data with optional 'exclude' property
     */
    function toggleModulesDisableState(options) {
        var getItems = options.getItems;
        var callback = options.callback;
        var targetDisabledState = options.disabled;

        return function(data) {
            var dataObj = data || {};
            var exclude = dataObj.exclude === undefined ? null : dataObj.exclude;

            // Normalize exclude to array or null
            if (typeof exclude === 'string') {
                exclude = [exclude];
            }
            if (!Array.isArray(exclude)) {
                exclude = null;
            }

            // Iterate items and apply state
            getItems().forEach(function(item) {
                // Skip if excluded
                if (exclude && exclude.includes(item.id)) {
                    return;
                }
                
                // Skip if state already matches
                // Note: !!item.disabled == !!targetDisabledState checks truthiness equality
                if (!!item.disabled === !!targetDisabledState) {
                    return;
                }

                // Skip if hidden
                if (item.hidden) {
                    return;
                }

                // Apply change via callback
                callback(item);
            });
        };
    }

    /**
     * Sets the initial plugin based on application attributes.
     * 
     * @param {Object} coreInitialData - The initial data object containing attributes
     * @param {Object} bus - The event bus instance (Ne.Z.bus)
     */
    function setInitialPlugin(coreInitialData, bus) {
        try {
            var attributes = (coreInitialData && coreInitialData.attributes) ? coreInitialData.attributes : {};
            var activePluginId = attributes["data-active-plugin"];
            
            if (activePluginId && bus) {
                bus.emit(activePluginId + ":enable");
            }
        } catch (e) {
            console.error('[ViewerPluginManager] Error setting initial plugin:', e);
        }
    }

    /**
     * Initializes listeners for global plugin enable/disable events.
     * 
     * @param {Object} app - The ViewerApp Vue instance (context)
     * @param {Object} bus - The event bus instance (Ne.Z.bus)
     */
    function initPluginsListeners(app, bus) {
        if (!bus) {
            console.error('[ViewerPluginManager] Bus not provided to initPluginsListeners');
            return;
        }

        // Subscribe to GlobalPlugins:disable
        bus.on(
            Config.CORE_BUS_EVENTS.GLOBAL_PLUGINS_DISABLE,
            toggleModulesDisableState({
                getItems: function() {
                    return app.globalPlugins;
                },
                disabled: true,
                callback: function(plugin) {
                    return app.updateGlobalPluginsInterface({
                        plugin: plugin,
                        data: { disabled: true }
                    });
                }
            })
        );

        // Subscribe to GlobalPlugins:enable
        bus.on(
            Config.CORE_BUS_EVENTS.GLOBAL_PLUGINS_ENABLE,
            toggleModulesDisableState({
                getItems: function() {
                    return app.globalPlugins;
                },
                disabled: false,
                callback: function(plugin) {
                    return app.updateGlobalPluginsInterface({
                        plugin: plugin,
                        data: { disabled: false }
                    });
                }
            })
        );
    }

    /**
     * Adds listeners for a specific plugin modal events.
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @param {Object} plugin - The plugin object
     * @param {Object} bus - The event bus instance (Ne.Z.bus)
     */
    function addModalListeners(app, plugin, bus) {
        if (!bus) {
            console.error('[ViewerPluginManager] Bus not provided to addModalListeners');
            return;
        }

        // Handle disable event
        bus.on(plugin.events.disable, function() {
            // Notify parent
            app.parentEvents.emit(Config.PARENT_EVENTS.PLUGIN_EVENTS, {
                plugin: plugin.name,
                event: "disable"
            });

            // Close modal if ref exists, otherwise remove active plugin
            if (app.$refs[plugin.name]) {
                app.$refs[plugin.name][0].close();
            } else {
                app.removeActivePlugin(plugin);
            }
        });

        // Handle enable event
        bus.on(plugin.events.enable, function() {
            // Notify parent
            app.parentEvents.emit(Config.PARENT_EVENTS.PLUGIN_EVENTS, {
                plugin: plugin.name,
                event: "enable"
            });

            // Open modal if ref exists, otherwise set active plugin
            if (app.$refs[plugin.name]) {
                app.$refs[plugin.name][0].open();
            } else {
                app.setActivePlugin(plugin);
            }
        });
    }

    console.log('[ViewerPluginManager] Loaded');

    // ============================================================================
    // EXPORTS
    // ============================================================================

    return {
        toggleModulesDisableState: toggleModulesDisableState,
        setInitialPlugin: setInitialPlugin,
        initPluginsListeners: initPluginsListeners,
        addModalListeners: addModalListeners
    };

})(ViewerAppConfig);
