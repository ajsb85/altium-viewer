/**
 * ViewerViewManager.js - View Lifecycle Manager
 * 
 * Manages view registration, activation, and switching.
 * 
 * Requires: ViewerEventBus, ViewerStore
 */
var ViewerViewManager = (function (exports) {
    'use strict';

    var EVENTS = ViewerEventBus.EVENTS;

    // ============================================================================
    // VIEW MANAGER
    // ============================================================================

    /**
     * ViewManager - Handles view lifecycle
     */
    function ViewManager(store) {
        this.store = store;
        this.initialized = false;
    }

    /**
     * Initialize view event listeners
     */
    ViewManager.prototype.initialize = function() {
        var self = this;

        // Listen for view set requests
        ViewerEventBus.on(EVENTS.VIEW_SET, function(viewId) {
            self.activateView(viewId);
        });

        // Listen for view get requests
        ViewerEventBus.on(EVENTS.VIEW_GET, function(container) {
            container.current = self.getActiveView();
        });

        this.initialized = true;
        console.log('[ViewManager] Initialized');
    };

    /**
     * Register a new view
     */
    ViewManager.prototype.registerView = function(view) {
        if (this.store && this.store.dispatch) {
            this.store.dispatch('setView', view);
        }
    };

    /**
     * Activate a view by ID
     */
    ViewManager.prototype.activateView = function(viewId) {
        var currentView = this.getActiveView();
        
        // Deactivate current view
        if (currentView && currentView !== viewId) {
            ViewerEventBus.emit(EVENTS.VIEW_DEACTIVATE, currentView);
        }

        // Set new active view
        if (this.store && this.store.dispatch) {
            this.store.dispatch('setActiveView', viewId);
        }

        // Emit activation
        ViewerEventBus.emit(EVENTS.VIEW_ACTIVATE, viewId);
    };

    /**
     * Get current active view ID
     */
    ViewManager.prototype.getActiveView = function() {
        if (this.store && this.store.state) {
            return this.store.state.activeView;
        }
        return null;
    };

    /**
     * Get all views list
     */
    ViewManager.prototype.getViewsList = function() {
        if (this.store && this.store.getters) {
            return this.store.getters.viewsList || [];
        }
        return [];
    };

    /**
     * Update view padding
     */
    ViewManager.prototype.updateViewPadding = function(padding) {
        ViewerEventBus.emit(EVENTS.VIEWS_UPDATE_PADDING, padding);
    };

    /**
     * Enable/disable views
     */
    ViewManager.prototype.setViewsEnabled = function(enabled) {
        ViewerEventBus.emit(enabled ? EVENTS.VIEWS_ENABLE : EVENTS.VIEWS_DISABLE);
    };

    // ============================================================================
    // FACTORY
    // ============================================================================

    /**
     * Create a ViewManager instance
     */
    function createViewManager(store) {
        return new ViewManager(store);
    }

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.ViewManager = ViewManager;
    exports.createViewManager = createViewManager;

    return exports;
}({}));
