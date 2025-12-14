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

    /**
     * Sets up listeners for a View module.
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @param {Object} view - The view object
     * @param {Object} bus - The event bus instance (Ne.Z.bus)
     */
    function setupViewListeners(app, view, bus) {
        if (!view || !bus) return;
        
        var viewName = view.name;
        
        // Subscribe to updateInteface events from the view
        bus.on(view.events.updateInterface, function(data) {
            return app.updateViewInterface({ view: view, data: data });
        });
        
        // Subscribe to LocalPlugins:disable
        bus.on(
            Config.CORE_BUS_EVENTS.LOCAL_PLUGINS_DISABLE,
            toggleModulesDisableState({
                getItems: function() {
                    return app.localPluginsDictionary[viewName];
                },
                disabled: true,
                callback: function(plugin) {
                    return app.updateLocalPluginsInterface({
                        name: viewName,
                        plugin: plugin,
                        data: { disabled: true }
                    });
                }
            })
        );
        
        // Subscribe to LocalPlugins:enable
        bus.on(
            Config.CORE_BUS_EVENTS.LOCAL_PLUGINS_ENABLE,
            toggleModulesDisableState({
                getItems: function() {
                    return app.localPluginsDictionary[viewName];
                },
                disabled: false,
                callback: function(plugin) {
                    return app.updateLocalPluginsInterface({
                        name: viewName,
                        plugin: plugin,
                        data: { disabled: false }
                    });
                }
            })
        );
    }

    /**
     * Sets up a local plugin (associated with a specific view context).
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @param {Object} pluginData - The plugin data/metadata
     * @param {Object} bus - The event bus instance (Ne.Z.bus)
     */
    function setupLocalPlugin(app, pluginData, bus) {
        if (!pluginData.metaInfo || !pluginData.metaInfo.owner) return;
        
        pluginData.metaInfo.owner.split(",").forEach(function(ownerName) {
            var viewName = ownerName.trim();
            
            // Register in dictionary
            app.setLocalPluginDictionary({ name: viewName, data: pluginData });
            
            // Find the instantiated plugin object
            var plugin = app.localPluginsDictionary[viewName].find(function(p) {
                return p.id === pluginData.metaInfo.name;
            });
            
            if (plugin) {
                addModalListeners(app, plugin, bus);
                
                // Subscribe to updateInterface
                bus.on(plugin.events.updateInterface, function(data) {
                    return app.updateLocalPluginsInterface({
                        name: viewName,
                        plugin: plugin,
                        data: data
                    });
                });
            }
        });
    }

    /**
     * Sets up a global plugin (available across all views).
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @param {Object} pluginData - The plugin data/metadata
     * @param {Object} bus - The event bus instance (Ne.Z.bus)
     */
    function setupGlobalPlugin(app, pluginData, bus) {
        // Register global plugin
        app.setGlobalPlugin(pluginData);
        
        // Find the instantiated plugin object
        var plugin = app.globalPlugins.find(function(p) {
            return p.id === pluginData.metaInfo.name;
        });
        
        if (plugin) {
            addModalListeners(app, plugin, bus);
            
            // Subscribe to updateInterface
            bus.on(plugin.events.updateInterface, function(data) {
                return app.updateGlobalPluginsInterface({
                    plugin: plugin,
                    data: data
                });
            });
        }
    }

    /**
     * Handles a plugin click event.
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @param {Object} plugin - The plugin object
     */
    function handlePluginClick(app, plugin) {
        if (plugin.isActive) {
            app.removeActivePlugin(plugin);
        } else {
            app.setActivePlugin(plugin);
        }
    }

    /**
     * Creates event listeners for a modal to interact with the app layout.
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @param {Object} modal - The modal object
     * @param {Object} bus - The event bus instance (Ne.Z.bus)
     * @returns {Object} Listeners object for the modal
     */
     function createModalListeners(app, modal, bus) {
        return {
            open: function(n) {
                app.setActivePlugin(modal.module);
                app.appLayoutUpdateNotifier.addModal(n);
                app.layoutChanged = true;
            },
            close: function() {
                return app.appLayoutUpdateNotifier.removeModal(modal.id);
            },
            closed: function() {
                app.removeActivePlugin(modal.module);
                app.layoutChanged = true;
            },
            resized: function(n) {
                app.appLayoutUpdateNotifier.updateModalWidth(modal.id, n);
                if (n && bus) {
                    bus.emit("Modal:panelWidth", {
                        id: app.id,
                        width: n
                    });
                }
            }
        };
    }

    /**
     * Handles changes to the views list, ensuring correct view activation and event emission.
     * 
     * @param {Object} app - The ViewerApp Vue instance
     * @param {Array} viewsList - The new list of views
     * @param {Object} bus - The event bus instance (Ne.Z.bus)
     */
    function handleViewsListChange(app, viewsList, bus) {
        var hasActiveHidden = viewsList.some(function(v) {
            return v.hidden && v.isActive;
        });

        if (hasActiveHidden) {
            var firstVisible = app.views.find(function(v) {
                return !v.hidden;
            });
            if (firstVisible) {
                app.changeView(firstVisible);
            }
        } else if (
            viewsList.some(function(v) { return v.isActive; }) || 
            viewsList.every(function(v) { return v.hidden; })
        ) {
            if (bus) {
                bus.emit("Views:update", viewsList.map(function(v) {
                    // Create a shallow copy to match qe({}, e) behavior if needed, 
                    // though map creates a new array, the objects inside might need cloning if modified downstream.
                    // For now, simple object spread or assign equivalent.
                    return Object.assign({}, v); 
                }));
            }

            var previousLength = app.presentViews ? app.presentViews.length : 0;
            var newPresentList = viewsList.reduce(function(acc, t) {
                if (t && !t.hidden) {
                    acc.push({ id: t.id, name: t.text });
                }
                return acc;
            }, []);

            app.presentViews = newPresentList.length ? newPresentList.map(function(e) {
                return e.name;
            }) : [];

            if (previousLength !== app.presentViews.length) {
                app.parentEvents.emit("viewer:set-present-views", app.presentViews);
                app.parentEvents.emit("viewer:set-present-list-views", newPresentList);
            }
        }
    }

    // ============================================================================
    // EXPORTS
    // ============================================================================

    return {
        toggleModulesDisableState: toggleModulesDisableState,
        setInitialPlugin: setInitialPlugin,
        initPluginsListeners: initPluginsListeners,
        addModalListeners: addModalListeners,
        setupViewListeners: setupViewListeners,
        setupLocalPlugin: setupLocalPlugin,
        setupGlobalPlugin: setupGlobalPlugin,
        handlePluginClick: handlePluginClick,
        createModalListeners: createModalListeners,
        handleViewsListChange: handleViewsListChange
    };

})(ViewerAppConfig);
