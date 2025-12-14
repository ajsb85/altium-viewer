/**
 * ViewerAppMethods.js - Vue Component Methods Module
 * 
 * Contains the extracted method implementations for the main App Vue component.
 * These methods are used as a mixin and should be called with the correct `this` context.
 * 
 * Original location: ViewerApp.js lines 2033-2965
 * 
 * Dependencies:
 * - window.__CORE__ (Ne.Z equivalent)
 * - window.__APP__
 * - ViewerAppConfig
 */
var ViewerAppMethods = (function (exports) {
    'use strict';

    // ============================================================================
    // METHOD NAME CONSTANTS (for reference)
    // ============================================================================
    
    /**
     * List of all extracted method names
     */
    var METHOD_NAMES = [
        'initCommon',
        'initUnits', 
        'initCore',
        'initOnSceneInteracted',
        'filterViewsByStr',
        'filterViewByStr',
        'setInitialView',
        'setDefaultView',
        'setFilteredView',
        'onDesignProcessing',
        'setLoaderMessage',
        'onSetupError',
        'onSetupDesignId',
        'onModuleSetup',
        'onSetupReadyToView',
        'setInitialPlugin',
        'onSetupComplete',
        'initLogoVisibilityListeners',
        'initViewsListeners',
        'initPluginsListeners',
        'toggleModulesDisableState',
        'addModalListeners',
        'changeView',
        'initOnDocumentShown',
        'onViewChange',
        'onPluginClick',
        'onBackButtonClick',
        'initOnUpdateInterface',
        'captureError',
        'handleKey',
        'onDocumentOpenError',
        'onDesignResolveComplete',
        'onNewDesignReady',
        'getErrorContent',
        'getErrorDetails',
        'initAnalytics',
        'onLinkClick',
        'onSidebarUpdated',
        'onHeaderUpdated',
        'checkWebGl2',
        'setLoader'
    ];

    // ============================================================================
    // CORE EVENT NAMES
    // ============================================================================
    
    /**
     * Core bus events to register during initCore
     */
    var CORE_EVENTS = [
        'View:activate',
        'View:deactivate',
        'Views:update',
        'Views:disable',
        'Views:enable',
        'Views:updatePadding',
        'GlobalPlugins:disable',
        'GlobalPlugins:enable',
        'LocalPlugins:disable',
        'LocalPlugins:enable',
        'Logo:show',
        'Logo:hide',
        'Modal:panelWidth',
        'View:set',
        'Document:open-error',
        'Layout:update'
    ];

    // ============================================================================
    // HELPER FUNCTIONS (Internal)
    // ============================================================================

    /**
     * Safe JSON parse helper (replaces F from webpack)
     * @param {string} str - String to parse
     * @returns {Object|null} Parsed object or null
     */
    function safeJsonParse(str) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return null;
        }
    }

    /**
     * Generate UUID helper (replaces R from webpack)
     * @returns {string} UUID
     */
    function generateUuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // ============================================================================
    // HELPER FUNCTIONS (Exported)
    // ============================================================================

    /**
     * Parse loader message string (replaces G from webpack)
     * @param {string} msg - Message string, potentially containing JSON
     * @returns {Array|string} Parsed message structure
     */
    function parseLoaderMessage(msg) {
        if (!msg) return "";
        var parts = msg.split("%");
        if (parts.length <= 1) return msg;

        return parts.map(function(part) {
            return part.startsWith("{")
                ? Object.assign({}, safeJsonParse(part), { id: generateUuid() })
                : { id: generateUuid(), text: part };
        });
    }

    /**
     * Get WebGL Debug Info (replaces k from webpack)
     * @returns {Object|null} WebGL info
     */
    function getWebGlInfo() {
        var canvas = document.createElement("canvas");
        var gl = canvas.getContext("webgl");
        if (gl) {
            var debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
            return {
                vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
                renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
            };
        }
        return null;
    }

    /**
     * Get Memory Usage Info (replaces S from webpack)
     * @returns {Object|null} Memory info
     */
    function getMemoryInfo() {
        return (window.performance && window.performance.memory) || null;
    }

    // ============================================================================
    // METHODS
    // ============================================================================

    /**
     * Filter views by comma-separated string
     * @param {Array} views - Array of view objects
     * @param {string} filterStr - Comma-separated view names
     * @returns {Array} Filtered views
     */
    function filterViewsByStr(views, filterStr) {
        var names = (filterStr || '')
            .split(',')
            .map(function(e) { return e.trim().toLowerCase(); })
            .filter(function(e) { return e; });
        
        if (!names.length) return views;
        
        var filtered = views.filter(function(view) {
            var displayName = (view.metaInfo && view.metaInfo.displayName) || view.text || '';
            var name = view.metaInfo && view.metaInfo.name || '';
            return names.indexOf(displayName.toLowerCase()) >= 0 || 
                   names.indexOf(name.toLowerCase()) >= 0;
        });
        
        return filtered.length ? filtered : views;
    }

    /**
     * Check if a single view matches filter string
     * @param {Object} view - View object
     * @param {string} filterStr - Comma-separated view names
     * @returns {boolean}
     */
    function filterViewByStr(view, filterStr) {
        var names = (filterStr || '')
            .split(',')
            .map(function(e) { return e.trim().toLowerCase(); })
            .filter(function(e) { return e; });
        
        if (!names.length) return true;
        
        var displayName = (view.metaInfo && view.metaInfo.displayName) || view.text || '';
        var name = view.metaInfo && view.metaInfo.name || '';
        
        return names.indexOf(displayName.toLowerCase()) >= 0 || 
               names.indexOf(name.toLowerCase()) >= 0;
    }

    /**
     * Get error details from an error object
     * @param {Object|Error} error - Error object
     * @returns {Object} Error details
     */
    function getErrorDetails(error) {
        var innerError = error && error.innerError;
        return {
            isManaged: (error && error.isManaged) || (innerError && innerError.isManaged),
            skipMonitoring: (error && error.skipMonitoring) || (innerError && innerError.skipMonitoring)
        };
    }

    /**
     * Get error content string from an error object
     * @param {Object|Error} error - Error object
     * @returns {string} Error content
     */
    function getErrorContent(error) {
        var innerError = error && error.innerError;
        var innerStr = '';
        
        if (innerError) {
            if (innerError instanceof Error) {
                innerStr = '\nInner ' + innerError.name + ': ' + innerError.message + '\n' + innerError.stack;
            } else {
                innerStr = '\nInner Error: ' + innerError;
            }
        }
        
        return (error ? error.toString() : '') + innerStr;
    }

    /**
     * Create a toggle modules disable state handler
     * @param {Object} config - Configuration object
     * @returns {Function} Handler function
     */
    function createToggleModulesDisableState(config) {
        var getItems = config.getItems;
        var callback = config.callback;
        var disabled = config.disabled;
        
        return function(options) {
            options = options || {};
            var exclude = options.exclude || null;
            
            if (typeof exclude === 'string') exclude = [exclude];
            if (!Array.isArray(exclude)) exclude = null;
            
            getItems().forEach(function(item) {
                if (exclude && exclude.indexOf(item.id) >= 0) return;
                if (!!item.disabled === !!disabled) return;
                if (item.hidden) return;
                callback(item);
            });
        };
    }

    /**
     * Check WebGL2 support and dispatch analytics event
     */
    function checkWebGl2Support() {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('webgl2');
        
        if (context) {
            return 'On';
        } else if (typeof WebGL2RenderingContext !== 'undefined') {
            return 'Off';
        } else {
            return 'None';
        }
    }

    /**
     * Format key event for parent emission
     * @param {KeyboardEvent} event - Keyboard event
     * @returns {Object} Formatted key data
     */
    function formatKeyEvent(event) {
        return {
            key: event.key,
            code: event.code,
            altKey: event.altKey,
            ctrlKey: event.ctrlKey,
            shiftKey: event.shiftKey,
            metaKey: event.metaKey
        };
    }

    /**
     * Set loader state
     * @param {Object} app - Vue instance
     * @param {string} status - 'error' or other status
     * @param {string} messageId - I18n key or message
     * @param {string} icon - Icon name
     * @param {string} meta - Metadata string
     */
    function setLoader(app, status, messageId, icon, meta) {
        app.isLoadingFailed = "error" === status;
        var parsedMsg = parseLoaderMessage(messageId);
        
        app.loaderMessage = parsedMsg || app.$t(ViewerAppConfig.I18N_KEYS.INITIALIZING);
        app.loaderMeta = meta;
        app.loaderIcon = icon;
    }

    /**
     * Set loader message with optional timeout
     * @param {Object} app - Vue instance
     * @param {string} message - Message text
     * @param {boolean} isError - Is error state
     * @param {string} icon - Icon name
     */
    function setLoaderMessage(app, message, isError, icon) {
        icon = (arguments.length > 3 && void 0 !== arguments[3]) ? arguments[3] : "";
        
        var mainMessage = (app.isCompare && !isError) ? "Comparison in progress" : message;
        var metaMessage = (app.isAfsCompare && !isError)
            ? "You can wait or close the page. We will email you when completed."
            : (app.isCompare && !isError)
                ? "It will take a few moments"
                : "";
        
        if (app.isCompare && !app.isAfsCompare && !isError) {
            setTimeout(function() {
                app.loaderMessage = "Comparison is still in progress";
                app.loaderMeta = "It will take longer than expected";
                app.isLoaderPrimary = false;
            }, 30000);
        }
        
        app.hasLoaderIcon = !app.isCompare || (app.isCompare && isError);
        app.isLoading = true;
        app.isLoadingFailed = isError;
        
        var parsedMain = parseLoaderMessage(mainMessage);
        
        app.loaderMessage = parsedMain || app.$t(ViewerAppConfig.I18N_KEYS.INITIALIZING);
        app.loaderMeta = metaMessage;
        app.loaderIcon = icon;
    }

    /**
     * Capture error and report to analytics
     * @param {Object} app - Vue instance
     * @param {Object|string} error - Error object or message
     * @param {string} location - Error location/context
     * @param {boolean} force - Force report
     */
    function captureError(app, error, location, force) {
        location = (arguments.length > 2 && void 0 !== arguments[2]) ? arguments[2] : "";
        force = (arguments.length > 3 && void 0 !== arguments[3]) && arguments[3];
        
        var details = getErrorDetails(error);
        
        if (!details.skipMonitoring) {
            if (window.__APP__ && window.__APP__.appMonitoring) {
                var content = getErrorContent(error);
                var tags = {
                    analytics_error: window.__APP__.analytics.getErrorEventName(location),
                    unload_page_signal: app.unloadPageSignal,
                };
                
                if ((error && error.sendDetails) || force) {
                    var webglInfo = getWebGlInfo();
                    var memoryInfo = getMemoryInfo();
                    
                    Object.assign(tags, {
                        webgl_vendor: webglInfo ? webglInfo.vendor : undefined,
                        webgl_renderer: webglInfo ? webglInfo.renderer : undefined,
                        document_size: error ? error.dataSize : undefined,
                    });
                    
                    if (memoryInfo) {
                        Object.assign(tags, {
                            js_heap_size_limit: memoryInfo.jsHeapSizeLimit,
                            total_js_heap_size: memoryInfo.totalJSHeapSize,
                            used_js_heap_size: memoryInfo.usedJSHeapSize,
                        });
                    }
                }
                
                if (details.isManaged) {
                    tags.is_managed_error = true;
                }
                
                window.__APP__.appMonitoring.capture(content, { tags: tags });
            }
            
            if (!app.unloadPageSignal && !details.isManaged && window.__APP__.analytics) {
                window.__APP__.analytics.dispatchErrorEvent(location);
            }
        }
    }


    /**
     * Initialize Core and register event listeners
     * @param {Object} app - Vue instance
     * @param {Object} core - Core instance (Ne.Z)
     * @param {Object} config - ViewerAppConfig
     */
    function initAppCore(app, core, config) {
        core.bus.registerEvent("View:activate");
        core.bus.registerEvent("View:deactivate");
        core.bus.registerEvent("Views:update");
        core.bus.registerEvent("Views:disable");
        core.bus.registerEvent("Views:enable");
        core.bus.registerEvent("Views:updatePadding");
        core.bus.registerEvent("GlobalPlugins:disable");
        core.bus.registerEvent("GlobalPlugins:enable");
        core.bus.registerEvent("LocalPlugins:disable");
        core.bus.registerEvent("LocalPlugins:enable");
        core.bus.registerEvent("Logo:show");
        core.bus.registerEvent("Logo:hide");
        core.bus.registerEvent("Modal:panelWidth");
        core.bus.registerEvent("View:set");
        core.bus.registerEvent("Document:open-error");
        core.bus.registerEvent("Layout:update");
        
        // Init listeners
        if (app.initViewsListeners) app.initViewsListeners(); 
        if (app.initPluginsListeners) app.initPluginsListeners();
        initLogoVisibilityListeners(app, core);
        
        core.bus.on("designResolveFirstStatus", function (t) {
            return app.parentEvents.emit(config.PARENT_EVENTS.SOURCE_STATUS, t);
        });
        
        core.bus.on("progress", function(e, t) { onDesignProcessing(app, e, t); });
        core.bus.on("designId", function(e) { onSetupDesignId(app, config, e); });
        core.bus.on("error", function(e) { onSetupError(app, config, e); });
        core.bus.on("moduleSetupCompleted", function(e, t) { onModuleSetup(app, core, e, t); });
        core.bus.on("view", function() { onSetupReadyToView(app); });
        core.bus.on("complete", function() { onSetupComplete(app, core, config); });
        
        core.bus.on("unAuthorized", function (t) {
            app.parentEvents.emit(config.PARENT_EVENTS.VIEWER_UNAUTHORIZED);
        });
        
        core.bus.on("Document:open-error", function(e) { app.onDocumentOpenError(e); });
        
        core.bus.on("designResolveComplete", function(e) {
             if (e && e.activeVersion) {
                 app.parentEvents.emit(config.PARENT_EVENTS.GENERATING_NEW_VERSION, e.activeVersion);
             }
        });
        
        core.bus.on("newDesignVersionReady", function() { app.parentEvents.emit(config.PARENT_EVENTS.GENERATED_NEW_VERSION); });
        core.bus.on("newDesignVersionError", function() { app.parentEvents.emit(config.PARENT_EVENTS.GENERATED_NEW_VERSION); });
        
        core.bus.on("View:get", function (t) {
            t.current = app.activeView;
        });
        
        core.bus.on("Layout:update", function (t) {
            app.parentEvents.emit(config.PARENT_EVENTS.APP_LAYOUT_CHANGED, t);
        });
    }

    function initLogoVisibilityListeners(app, core) {
        core.bus.on("Logo:show", function () { app.isLogoVisible = true; });
        core.bus.on("Logo:hide", function () { app.isLogoVisible = false; });
    }

    function onDesignProcessing(app, message, isError) {
        app.isDesignProcessed = false;
        setLoaderMessage(app, message, isError);
    }

    function onSetupDesignId(app, config, id) {
        app.parentEvents.emit(config.PARENT_EVENTS.DESIGN_LOADED, { designId: id });
    }

    function onSetupError(app, config, e) {
        var msg, inner;
        if (!e || e.isEmptySource || e.isSourceHasNotExists) {
             app.parentEvents.emit(config.PARENT_EVENTS.DOCUMENTS_LOADED, {});
        } else {
             captureError(app, e);
             app.parentEvents.emit(config.PARENT_EVENTS.DESIGN_DATA_LOADED, {
                 error: e
             });
        }
        
        msg = (e && e.innerError && e.innerError.message) || (e && e.message) || e || "Error occurred. Please refresh the page or try a bit later.";
        inner = (e && e.innerError);
        
        setLoaderMessage(app, msg, true, (inner && inner.isManaged) ? "info-16" : "");
    }

    function onModuleSetup(app, core, type, module) {
         try {
             if (type === "View") {
                 var view = ViewerViewManager.setFilteredView(app, module);
                 if (view) {
                     ViewerPluginManager.setupViewListeners(app, view, core.bus);
                 }
             } else if (type === "Plugin") {
                 if (module.metaInfo.owner) {
                     ViewerPluginManager.setupLocalPlugin(app, module, core.bus);
                 } else {
                     ViewerPluginManager.setupGlobalPlugin(app, module, core.bus);
                 }
             }
         } catch (err) {
             console.error("[ViewerAppMethods] Module setup error:", type, err);
         }
    }

    function onSetupReadyToView(app) {
        if (window.__CORE__ && window.__CORE__.useFastView) {
            app.isLoading = false;
            setTimeout(function() {
                ViewerViewManager.setInitialView(app, window.__CORE__);
            }, 0);
        }
    }

    function setInitialPlugin(coreInitialData, bus) {
        ViewerPluginManager.setInitialPlugin(coreInitialData, bus);
    }


    function onSetupComplete(app, core, config) {
        var resp = core.response;
        var meta = resp && resp.metadata;
        var storage = resp && resp.storage;
        var cam = meta && meta.camtastic && meta.camtastic[0];
        
        if (app.isLoading) {
             app.isLoading = false;
             setTimeout(function() {
                 ViewerViewManager.setInitialView(app, core);
             }, 0);
        } else {
             ViewerPluginManager.setInitialPlugin(app.coreInitialData, core.bus);
        }
        
        app.parentEvents.emit(config.PARENT_EVENTS.DESIGN_DATA_LOADED, {
            projectTypeName: meta ? meta.projectTypeName : undefined,
            camtasticSourceKind: cam ? cam.sourceKind : null,
            files: storage ? storage.files : undefined
        });
    }

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.METHOD_NAMES = METHOD_NAMES;
    exports.CORE_EVENTS = CORE_EVENTS;
    
    // Helper functions
    exports.filterViewsByStr = filterViewsByStr;
    exports.filterViewByStr = filterViewByStr;
    exports.getErrorDetails = getErrorDetails;
    exports.getErrorContent = getErrorContent;
    exports.createToggleModulesDisableState = createToggleModulesDisableState;
    exports.checkWebGl2Support = checkWebGl2Support;
    exports.formatKeyEvent = formatKeyEvent;

    // Phase 2 Exports (Tier 3 Methods)
    exports.parseLoaderMessage = parseLoaderMessage;
    exports.getWebGlInfo = getWebGlInfo;
    exports.getMemoryInfo = getMemoryInfo;
    exports.setLoader = setLoader;
    exports.setLoaderMessage = setLoaderMessage;
    exports.captureError = captureError;

    // Phase 3 Exports (Tier 4 Methods)
    exports.initAppCore = initAppCore;
    exports.onDesignProcessing = onDesignProcessing;
    exports.onSetupDesignId = onSetupDesignId;
    exports.onSetupError = onSetupError;
    exports.onModuleSetup = onModuleSetup;
    exports.onSetupReadyToView = onSetupReadyToView;
    exports.setInitialPlugin = setInitialPlugin;
    exports.onSetupComplete = onSetupComplete;
    exports.initLogoVisibilityListeners = initLogoVisibilityListeners;

    console.log('[ViewerAppMethods] Loaded with', METHOD_NAMES.length, 'method references');

    return exports;
}({}));
