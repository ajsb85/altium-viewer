/**
 * ViewerStore.js - Vuex Store Module Definition
 * 
 * Provides the store state, getters, mutations, and actions
 * for the Altium Viewer application.
 * 
 * This module defines the store structure but doesn't create it -
 * the actual Vuex store is created elsewhere with these definitions.
 */
var ViewerStore = (function (exports) {
    'use strict';

    // ============================================================================
    // STATE
    // ============================================================================

    /**
     * Initial state factory for the viewer store
     */
    function createInitialState() {
        return {
            // View management
            views: [],
            activeView: null,

            // Plugin management
            globalPlugins: [],
            localPluginsDictionary: {},
            activePlugins: [],

            // UI state
            modals: {},
            sidebar: {
                isOpen: false,
                width: 0
            },

            // Text state
            trimmedText: null
        };
    }

    // ============================================================================
    // GETTERS
    // ============================================================================

    var getters = {
        /**
         * Get filtered local plugins list
         */
        localPlugins: function(state) {
            var result = [];
            Object.keys(state.localPluginsDictionary).forEach(function(key) {
                var plugins = state.localPluginsDictionary[key];
                if (Array.isArray(plugins)) {
                    result = result.concat(plugins);
                }
            });
            return result;
        },

        /**
         * Get global plugins as list
         */
        globalPluginsList: function(state) {
            return state.globalPlugins.filter(function(p) {
                return !p.hidden;
            });
        },

        /**
         * Get views as list
         */
        viewsList: function(state) {
            return state.views.filter(function(v) {
                return v && v.id;
            });
        }
    };

    // ============================================================================
    // MUTATIONS
    // ============================================================================

    var mutations = {
        SET_VIEW: function(state, view) {
            var index = state.views.findIndex(function(v) {
                return v.id === view.id;
            });
            if (index >= 0) {
                state.views[index] = Object.assign({}, state.views[index], view);
            } else {
                state.views.push(view);
            }
        },

        SET_ACTIVE_VIEW: function(state, viewId) {
            state.activeView = viewId;
            state.views.forEach(function(v) {
                v.isActive = v.id === viewId;
            });
        },

        SET_GLOBAL_PLUGIN: function(state, plugin) {
            var index = state.globalPlugins.findIndex(function(p) {
                return p.id === plugin.id;
            });
            if (index >= 0) {
                state.globalPlugins[index] = Object.assign({}, state.globalPlugins[index], plugin);
            } else {
                state.globalPlugins.push(plugin);
            }
        },

        SET_LOCAL_PLUGIN_DICTIONARY: function(state, payload) {
            state.localPluginsDictionary[payload.name] = payload.data;
        },

        SET_ACTIVE_PLUGIN: function(state, pluginId) {
            if (!state.activePlugins.includes(pluginId)) {
                state.activePlugins.push(pluginId);
            }
        },

        REMOVE_ACTIVE_PLUGIN: function(state, pluginId) {
            var index = state.activePlugins.indexOf(pluginId);
            if (index >= 0) {
                state.activePlugins.splice(index, 1);
            }
        },

        SET_MODAL: function(state, modal) {
            if (modal.id) {
                state.modals[modal.id] = modal;
            }
        },

        REMOVE_MODAL: function(state, modalId) {
            delete state.modals[modalId];
        },

        UPDATE_VIEW_INTERFACE: function(state, payload) {
            var view = state.views.find(function(v) {
                return v.id === payload.viewId;
            });
            if (view) {
                Object.assign(view, payload.data);
            }
        },

        UPDATE_GLOBAL_PLUGINS_INTERFACE: function(state, payload) {
            var plugin = state.globalPlugins.find(function(p) {
                return p.id === payload.pluginId;
            });
            if (plugin) {
                Object.assign(plugin, payload.data);
            }
        },

        UPDATE_LOCAL_PLUGINS_INTERFACE: function(state, payload) {
            var plugins = state.localPluginsDictionary[payload.viewId];
            if (plugins) {
                var plugin = plugins.find(function(p) {
                    return p.id === payload.plugin.id;
                });
                if (plugin) {
                    Object.assign(plugin, payload.plugin);
                }
            }
        },

        SET_SIDEBAR: function(state, sidebar) {
            Object.assign(state.sidebar, sidebar);
        },

        SET_TRIMMED_TEXT: function(state, text) {
            state.trimmedText = text;
        }
    };

    // ============================================================================
    // ACTIONS
    // ============================================================================

    var actions = {
        setView: function(context, view) {
            context.commit('SET_VIEW', view);
        },

        setActiveView: function(context, viewId) {
            context.commit('SET_ACTIVE_VIEW', viewId);
        },

        setGlobalPlugin: function(context, plugin) {
            context.commit('SET_GLOBAL_PLUGIN', plugin);
        },

        setLocalPluginDictionary: function(context, payload) {
            context.commit('SET_LOCAL_PLUGIN_DICTIONARY', payload);
        },

        setActivePlugin: function(context, pluginId) {
            context.commit('SET_ACTIVE_PLUGIN', pluginId);
        },

        removeActivePlugin: function(context, pluginId) {
            context.commit('REMOVE_ACTIVE_PLUGIN', pluginId);
        },

        setModal: function(context, modal) {
            context.commit('SET_MODAL', modal);
        },

        removeModal: function(context, modalId) {
            context.commit('REMOVE_MODAL', modalId);
        },

        updateViewInterface: function(context, payload) {
            context.commit('UPDATE_VIEW_INTERFACE', payload);
        },

        updateGlobalPluginsInterface: function(context, payload) {
            context.commit('UPDATE_GLOBAL_PLUGINS_INTERFACE', payload);
        },

        updateLocalPluginsInterface: function(context, payload) {
            context.commit('UPDATE_LOCAL_PLUGINS_INTERFACE', payload);
        }
    };

    // ============================================================================
    // STORE MODULE DEFINITION
    // ============================================================================

    /**
     * Creates a Vuex store module definition
     */
    function createStoreModule() {
        return {
            state: createInitialState,
            getters: getters,
            mutations: mutations,
            actions: actions
        };
    }

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.createInitialState = createInitialState;
    exports.getters = getters;
    exports.mutations = mutations;
    exports.actions = actions;
    exports.createStoreModule = createStoreModule;

    return exports;
}({}));
