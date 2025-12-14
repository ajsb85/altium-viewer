/**
 * ViewerDesignResolver.js
 * 
 * Mock-friendly wrapper for the DesignResolver state machine from vendors.js
 * This module provides a clean interface for design resolution operations
 * 
 * Dependencies: vendors.js DesignResolver class (webpack module)
 */

var ViewerDesignResolver = (function(exports) {
    'use strict';

    // ============================================================================
    // CONSTANTS
    // ============================================================================

    /**
     * DesignResolver states
     */
    var STATES = {
        IDLE: 'IDLE',
        PENDING: 'PENDING',
        PROGRESS: 'PROGRESS',
        PARTIAL_COMPLETED: 'PARTIAL_COMPLETED',
        COMPLETED: 'Completed',
        ERROR: 'Error'
    };

    /**
     * Status codes from backend
     */
    var STATUS = {
        COMPLETED: 'Completed',
        PENDING: 'Pending',
        PROGRESS: 'InProgress',
        ERROR: 'Error',
        PARTIAL: 'PartialCompleted'
    };

    /**
     * Known fault codes
     */
    var FAULT_CODES = {
        EMPTY_SOURCE: 256,
        SOURCE_NOT_EXISTS: 257,
        UNKNOWN: 0
    };

    // ============================================================================
    // INTERNAL REFERENCE
    // ============================================================================

    /**
     * Reference to the internal webpack DesignResolver instance
     * This gets populated when the viewer initializes
     */
    var _internalResolver = null;

    // ============================================================================
    // WRAPPER CLASS
    // ============================================================================

    /**
     * DesignResolverWrapper
     * Provides a clean, testable interface over the webpack DesignResolver
     */
    function DesignResolverWrapper() {
        this._listeners = {
            pending: [],
            progress: [],
            completed: [],
            error: [],
            partialCompleted: []
        };
        this._state = STATES.IDLE;
    }

    /**
     * Initialize the resolver with domain and headers
     * @param {string} domain - API domain
     * @param {Object} headers - API headers
     * @param {Object} options - Additional options
     * @returns {DesignResolverWrapper}
     */
    DesignResolverWrapper.prototype.init = function(domain, headers, options) {
        console.log('[ViewerDesignResolver] Initializing with domain:', domain);
        
        if (_internalResolver && typeof _internalResolver.init === 'function') {
            _internalResolver.init(domain, headers, options);
        }
        
        this._domain = domain;
        this._headers = headers;
        this._options = options;
        
        return this;
    };

    /**
     * Get current state
     * @returns {string}
     */
    DesignResolverWrapper.prototype.getState = function() {
        if (_internalResolver && _internalResolver.state) {
            return _internalResolver.state;
        }
        return this._state;
    };

    /**
     * Add event listener
     * @param {string} event - Event name (pending, progress, completed, error, partialCompleted)
     * @param {Function} callback - Callback function
     * @returns {DesignResolverWrapper}
     */
    DesignResolverWrapper.prototype.on = function(event, callback) {
        var eventName = event.toLowerCase();
        if (this._listeners[eventName]) {
            this._listeners[eventName].push(callback);
        }
        return this;
    };

    /**
     * Remove event listener
     * @param {string} event - Event name
     * @param {Function} callback - Callback function to remove
     * @returns {DesignResolverWrapper}
     */
    DesignResolverWrapper.prototype.off = function(event, callback) {
        var eventName = event.toLowerCase();
        if (this._listeners[eventName]) {
            this._listeners[eventName] = this._listeners[eventName].filter(function(cb) {
                return cb !== callback;
            });
        }
        return this;
    };

    /**
     * Emit event to listeners
     * @param {string} event - Event name
     * @param {*} data - Event data
     */
    DesignResolverWrapper.prototype._emit = function(event, data) {
        var eventName = event.toLowerCase();
        if (this._listeners[eventName]) {
            this._listeners[eventName].forEach(function(callback) {
                try {
                    callback(data);
                } catch (e) {
                    console.error('[ViewerDesignResolver] Error in listener:', e);
                }
            });
        }
    };

    /**
     * Fetch source status for a design
     * @param {string} designId - Design ID to check status
     * @returns {Promise<Object>}
     */
    DesignResolverWrapper.prototype.fetchSourceStatus = function(designId) {
        var self = this;
        
        if (_internalResolver && typeof _internalResolver.fetchSourceStatus === 'function') {
            return _internalResolver.fetchSourceStatus(designId);
        }
        
        // Fallback implementation
        return fetch(this._domain + '/api/widget/status/' + designId, {
            method: 'POST',
            headers: this._headers
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            self._handleResponse(data);
            return data;
        });
    };

    /**
     * Handle response and update state
     * @param {Object} response - Response data
     */
    DesignResolverWrapper.prototype._handleResponse = function(response) {
        if (!response || !response.status) {
            this._emit('error', { message: 'Invalid response' });
            return;
        }

        var status = response.status;
        this._state = status;

        switch (status) {
            case STATUS.COMPLETED:
                this._emit('completed', response);
                break;
            case STATUS.PENDING:
                this._emit('pending', response);
                break;
            case STATUS.PROGRESS:
                this._emit('progress', response);
                break;
            case STATUS.PARTIAL:
                this._emit('partialCompleted', response);
                break;
            case STATUS.ERROR:
                this._emit('error', response);
                break;
        }
    };

    /**
     * Check if a fault code indicates empty source
     * @param {number} faultCode - Fault code from response
     * @returns {boolean}
     */
    DesignResolverWrapper.prototype.isEmptySource = function(faultCode) {
        return faultCode === FAULT_CODES.EMPTY_SOURCE;
    };

    /**
     * Check if a fault code indicates source doesn't exist
     * @param {number} faultCode - Fault code from response
     * @returns {boolean}
     */
    DesignResolverWrapper.prototype.isSourceNotExists = function(faultCode) {
        return faultCode === FAULT_CODES.SOURCE_NOT_EXISTS;
    };

    /**
     * Set the internal webpack resolver reference
     * Called during viewer initialization
     * @param {Object} resolver - The webpack DesignResolver instance
     */
    DesignResolverWrapper.prototype.setInternalResolver = function(resolver) {
        _internalResolver = resolver;
        console.log('[ViewerDesignResolver] Internal resolver set');
    };

    /**
     * Get the internal webpack resolver
     * @returns {Object|null}
     */
    DesignResolverWrapper.prototype.getInternalResolver = function() {
        return _internalResolver;
    };

    // ============================================================================
    // FACTORY FUNCTION
    // ============================================================================

    /**
     * Create a new DesignResolver wrapper instance
     * @param {boolean} [forceNew=false] - Create a new instance even if one exists
     * @returns {DesignResolverWrapper}
     */
    var _defaultInstance = null;

    function createDesignResolver(forceNew) {
        if (forceNew) {
            return new DesignResolverWrapper();
        }
        
        if (!_defaultInstance) {
            _defaultInstance = new DesignResolverWrapper();
        }
        
        return _defaultInstance;
    }

    // ============================================================================
    // MOCK HELPERS (for testing)
    // ============================================================================

    /**
     * Create a mock resolver for testing
     * @param {Object} options - Mock options
     * @returns {DesignResolverWrapper}
     */
    function createMockResolver(options) {
        options = options || {};
        
        var mockResolver = new DesignResolverWrapper();
        
        // Override methods for testing
        mockResolver.fetchSourceStatus = function(designId) {
            return Promise.resolve(options.mockResponse || {
                status: STATUS.COMPLETED,
                designId: designId
            });
        };
        
        return mockResolver;
    }

    // ============================================================================
    // HOOK MECHANISM
    // ============================================================================

    /**
     * List of init callbacks to be called when DesignResolver.init() is invoked
     */
    var _initCallbacks = [];

    /**
     * Register a callback to be called when DesignResolver initializes
     * @param {Function} callback - Callback function(domain, apiHeaders, options)
     */
    function onInit(callback) {
        if (typeof callback === 'function') {
            _initCallbacks.push(callback);
        }
    }

    /**
     * Patch the internal resolver's init method to trigger our callbacks
     * This should be called after setInternalResolver()
     * @param {Object} resolver - The DesignResolver instance to patch
     */
    function patchResolverInit(resolver) {
        if (!resolver || typeof resolver.init !== 'function') {
            console.warn('[ViewerDesignResolver] Cannot patch resolver - invalid resolver');
            return;
        }

        var originalInit = resolver.init.bind(resolver);
        
        resolver.init = function(domain, apiHeaders, options) {
            console.log('[ViewerDesignResolver] Intercepted init:', domain);
            
            // Call our callbacks first
            _initCallbacks.forEach(function(cb) {
                try {
                    cb(domain, apiHeaders, options);
                } catch (e) {
                    console.error('[ViewerDesignResolver] Error in init callback:', e);
                }
            });
            
            // Store reference
            _internalResolver = resolver;
            
            // Notify wrapper instance
            if (_defaultInstance) {
                _defaultInstance._domain = domain;
                _defaultInstance._headers = apiHeaders;
                _defaultInstance._options = options;
            }
            
            // Call original
            return originalInit(domain, apiHeaders, options);
        };
        
        console.log('[ViewerDesignResolver] Patched resolver init method');
        return resolver;
    }

    /**
     * Patch the resolverProvider.createDesignResolver to intercept new instances
     * @param {Object} core - The __CORE__ object containing resolverProvider
     * @returns {boolean} Success status
     */
    function patchResolverProvider(core) {
        if (!core) {
            core = window.__CORE__;
        }
        
        if (!core || !core.resolverProvider) {
            console.warn('[ViewerDesignResolver] Cannot patch - resolverProvider not found');
            return false;
        }
        
        var provider = core.resolverProvider;
        var originalCreate = provider.createDesignResolver;
        
        if (!originalCreate) {
            console.warn('[ViewerDesignResolver] Cannot patch - createDesignResolver not found');
            return false;
        }
        
        // Patch the factory function
        provider.createDesignResolver = function(forceNew) {
            console.log('[ViewerDesignResolver] Intercepted createDesignResolver call');
            
            // Create the original resolver
            var resolver = originalCreate.call(provider, forceNew);
            
            // Patch its init method
            patchResolverInit(resolver);
            
            // Store reference
            _internalResolver = resolver;
            if (_defaultInstance) {
                _defaultInstance.setInternalResolver(resolver);
            }
            
            return resolver;
        };
        
        console.log('[ViewerDesignResolver] Patched resolverProvider.createDesignResolver');
        return true;
    }

    /**
     * Auto-patch when __CORE__ becomes available
     * Polls until __CORE__ is ready, then patches
     * @param {number} maxAttempts - Maximum number of attempts (default: 50)
     * @param {number} intervalMs - Interval between attempts in ms (default: 100)
     */
    function autoPatch(maxAttempts, intervalMs) {
        maxAttempts = maxAttempts || 50;
        intervalMs = intervalMs || 100;
        
        var attempts = 0;
        
        function tryPatch() {
            attempts++;
            
            if (window.__CORE__ && window.__CORE__.resolverProvider) {
                patchResolverProvider(window.__CORE__);
                return;
            }
            
            if (attempts < maxAttempts) {
                setTimeout(tryPatch, intervalMs);
            } else {
                console.warn('[ViewerDesignResolver] Auto-patch timeout - __CORE__ not available');
            }
        }
        
        tryPatch();
    }

    // ============================================================================
    // EXPORTS
    // ============================================================================

    exports.STATES = STATES;
    exports.STATUS = STATUS;
    exports.FAULT_CODES = FAULT_CODES;
    exports.DesignResolverWrapper = DesignResolverWrapper;
    exports.createDesignResolver = createDesignResolver;
    exports.createMockResolver = createMockResolver;
    
    // Convenience method to get the default instance
    exports.getInstance = function() {
        return createDesignResolver(false);
    };
    
    // Hook mechanism
    exports.onInit = onInit;
    exports.patchResolverInit = patchResolverInit;
    exports.patchResolverProvider = patchResolverProvider;
    exports.autoPatch = autoPatch;

    console.log('[ViewerDesignResolver] Loaded');

    return exports;
}({}));
