/**
 * ViewerEventBus.js - Event Bus Wrapper
 * 
 * Provides a typed wrapper around window.__CORE__.bus (Ne.Z.bus)
 * with centralized event definitions and debugging support.
 * 
 * Requires: window.__CORE__.bus to be available
 */
var ViewerEventBus = (function (exports) {
    'use strict';

    // ============================================================================
    // EVENT CONSTANTS
    // ============================================================================

    /**
     * All registered event types used in the application
     */
    var EVENTS = {
        // View events
        VIEW_ACTIVATE: "View:activate",
        VIEW_DEACTIVATE: "View:deactivate",
        VIEW_SET: "View:set",
        VIEW_GET: "View:get",
        VIEWS_UPDATE: "Views:update",
        VIEWS_DISABLE: "Views:disable",
        VIEWS_ENABLE: "Views:enable",
        VIEWS_UPDATE_PADDING: "Views:updatePadding",

        // Plugin events
        GLOBAL_PLUGINS_DISABLE: "GlobalPlugins:disable",
        GLOBAL_PLUGINS_ENABLE: "GlobalPlugins:enable",
        LOCAL_PLUGINS_DISABLE: "LocalPlugins:disable",
        LOCAL_PLUGINS_ENABLE: "LocalPlugins:enable",

        // Layout events
        LAYOUT_UPDATE: "Layout:update",
        MODAL_PANEL_WIDTH: "Modal:panelWidth",

        // Logo events
        LOGO_SHOW: "Logo:show",
        LOGO_HIDE: "Logo:hide",

        // Design lifecycle events
        DESIGN_RESOLVE_FIRST_STATUS: "designResolveFirstStatus",
        DESIGN_RESOLVE_COMPLETE: "designResolveComplete",
        DESIGN_ID: "designId",
        NEW_DESIGN_VERSION_READY: "newDesignVersionReady",
        NEW_DESIGN_VERSION_ERROR: "newDesignVersionError",

        // Processing events
        PROGRESS: "progress",
        ERROR: "error",
        COMPLETE: "complete",
        UNAUTHORIZED: "unAuthorized",

        // Module events
        MODULE_SETUP_COMPLETED: "moduleSetupCompleted",

        // Storage/Metadata events
        STORAGE_RESOLVE_COMPLETE: "storageResolveComplete",
        METADATA_RESOLVE_COMPLETE: "metadataResolveComplete",

        // Document events
        DOCUMENT_OPEN_ERROR: "Document:open-error",

        // Scene events
        SCENE_INTERACTED: "sceneInteracted"
    };

    // ============================================================================
    // BUS WRAPPER
    // ============================================================================

    /**
     * Get the underlying bus instance
     */
    function getBus() {
        if (window.__CORE__ && window.__CORE__.bus) {
            return window.__CORE__.bus;
        }
        console.warn('[ViewerEventBus] window.__CORE__.bus not available');
        return null;
    }

    /**
     * Emit an event with data
     * @param {string} event - Event name from EVENTS or custom string
     * @param {*} data - Event payload
     */
    function emit(event, data) {
        var bus = getBus();
        if (bus) {
            bus.emit(event, data);
        }
    }

    /**
     * Subscribe to an event
     * @param {string} event - Event name
     * @param {Function} handler - Event handler
     */
    function on(event, handler) {
        var bus = getBus();
        if (bus) {
            bus.on(event, handler);
        }
    }

    /**
     * Unsubscribe from an event
     * @param {string} event - Event name
     * @param {Function} handler - Event handler to remove
     */
    function off(event, handler) {
        var bus = getBus();
        if (bus && bus.off) {
            bus.off(event, handler);
        }
    }

    /**
     * Register a new event type
     * @param {string} event - Event name to register
     */
    function registerEvent(event) {
        var bus = getBus();
        if (bus && bus.registerEvent) {
            bus.registerEvent(event);
        }
    }

    /**
     * Register all standard viewer events
     */
    function registerAllEvents() {
        Object.values(EVENTS).forEach(function(event) {
            registerEvent(event);
        });
        console.log('[ViewerEventBus] Registered', Object.keys(EVENTS).length, 'events');
    }

    /**
     * Create a scoped emitter for a specific namespace
     * @param {string} namespace - Namespace prefix (e.g., "MyPlugin")
     * @returns {Object} Scoped emit/on/off functions
     */
    function createNamespacedBus(namespace) {
        return {
            emit: function(event, data) {
                emit(namespace + ":" + event, data);
            },
            on: function(event, handler) {
                on(namespace + ":" + event, handler);
            },
            off: function(event, handler) {
                off(namespace + ":" + event, handler);
            }
        };
    }

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.EVENTS = EVENTS;
    exports.emit = emit;
    exports.on = on;
    exports.off = off;
    exports.registerEvent = registerEvent;
    exports.registerAllEvents = registerAllEvents;
    exports.createNamespacedBus = createNamespacedBus;
    exports.getBus = getBus;

    return exports;
}({}));
