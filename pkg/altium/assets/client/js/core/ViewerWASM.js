/**
 * ViewerWASM.js - WASM Loading Coordinator
 * 
 * Coordinates WASM module loading and design processing events.
 * 
 * Requires: ViewerEventBus
 */
var ViewerWASM = (function (exports) {
    'use strict';

    var EVENTS = ViewerEventBus.EVENTS;

    // ============================================================================
    // WASM COORDINATOR
    // ============================================================================

    /**
     * WASMCoordinator - Handles WASM loading lifecycle
     */
    function WASMCoordinator() {
        this.initialized = false;
        this.moduleReady = false;
        this.designReady = false;
        this.designId = null;
        this.error = null;
        this.callbacks = {
            onProgress: null,
            onModuleReady: null,
            onDesignReady: null,
            onError: null,
            onComplete: null
        };
    }

    /**
     * Initialize WASM event listeners
     */
    WASMCoordinator.prototype.initialize = function() {
        var self = this;

        // Progress updates
        ViewerEventBus.on(EVENTS.PROGRESS, function(progress) {
            if (self.callbacks.onProgress) {
                self.callbacks.onProgress(progress);
            }
        });

        // Module setup complete
        ViewerEventBus.on(EVENTS.MODULE_SETUP_COMPLETED, function(data) {
            self.moduleReady = true;
            if (self.callbacks.onModuleReady) {
                self.callbacks.onModuleReady(data);
            }
        });

        // Design ID received
        ViewerEventBus.on(EVENTS.DESIGN_ID, function(id) {
            self.designId = id;
        });

        // Design resolve complete
        ViewerEventBus.on(EVENTS.DESIGN_RESOLVE_COMPLETE, function(data) {
            self.designReady = true;
            if (self.callbacks.onDesignReady) {
                self.callbacks.onDesignReady(data);
            }
        });

        // Error handling
        ViewerEventBus.on(EVENTS.ERROR, function(error) {
            self.error = error;
            if (self.callbacks.onError) {
                self.callbacks.onError(error);
            }
        });

        // Complete
        ViewerEventBus.on(EVENTS.COMPLETE, function(data) {
            if (self.callbacks.onComplete) {
                self.callbacks.onComplete(data);
            }
        });

        // Storage and metadata
        ViewerEventBus.on(EVENTS.STORAGE_RESOLVE_COMPLETE, function(data) {
            console.log('[WASMCoordinator] Storage resolved');
        });

        ViewerEventBus.on(EVENTS.METADATA_RESOLVE_COMPLETE, function(data) {
            console.log('[WASMCoordinator] Metadata resolved');
        });

        // Scene interaction
        ViewerEventBus.on(EVENTS.SCENE_INTERACTED, function(data) {
            // Handle scene interaction if needed
        });

        this.initialized = true;
        console.log('[WASMCoordinator] Initialized');
    };

    /**
     * Set callback handlers
     */
    WASMCoordinator.prototype.setCallbacks = function(callbacks) {
        Object.assign(this.callbacks, callbacks);
    };

    /**
     * Check if WASM module is ready
     */
    WASMCoordinator.prototype.isModuleReady = function() {
        return this.moduleReady;
    };

    /**
     * Check if design is ready
     */
    WASMCoordinator.prototype.isDesignReady = function() {
        return this.designReady;
    };

    /**
     * Get current design ID
     */
    WASMCoordinator.prototype.getDesignId = function() {
        return this.designId;
    };

    /**
     * Get last error
     */
    WASMCoordinator.prototype.getError = function() {
        return this.error;
    };

    /**
     * Reset state
     */
    WASMCoordinator.prototype.reset = function() {
        this.moduleReady = false;
        this.designReady = false;
        this.designId = null;
        this.error = null;
    };

    // ============================================================================
    // FACTORY
    // ============================================================================

    /**
     * Create a WASMCoordinator instance
     */
    function createWASMCoordinator() {
        return new WASMCoordinator();
    }

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.WASMCoordinator = WASMCoordinator;
    exports.createWASMCoordinator = createWASMCoordinator;

    return exports;
}({}));
