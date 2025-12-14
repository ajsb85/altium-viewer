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
    // HELPER FUNCTIONS (can be used standalone)
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

    console.log('[ViewerAppMethods] Loaded with', METHOD_NAMES.length, 'method references');

    return exports;
}({}));
