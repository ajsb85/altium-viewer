/**
 * ViewActivator.js
 * 
 * View activation event handler utility.
 * Extracted from ViewerApp.js (En class).
 */
(function(global) {
    'use strict';

    /**
     * ViewActivator class - handles view activation callbacks
     * @param {Object} store - Vuex store instance
     */
    var ViewActivator = (function() {
        function ViewActivator(store) {
            this.store = store;
        }

        /**
         * Subscribe to view activation events
         * @param {Function} callback - Callback function receiving { name, instance }
         */
        ViewActivator.prototype.onViewActivate = function(callback) {
            if (callback) {
                var core = window.__CORE__;
                var activeView = this.store.state.activeView;
                
                // If there's already an active view, call immediately
                if (activeView) {
                    setTimeout(function() {
                        callback({ 
                            name: activeView.name, 
                            instance: core.views[activeView.name] 
                        });
                    });
                }
                
                // Subscribe to future activations
                core.bus.on("View:activate", function(data) {
                    callback(data);
                });
            }
        };

        return ViewActivator;
    })();

    // Export
    global.ViewActivator = ViewActivator;

    console.log('[ViewActivator] Loaded');

})(typeof window !== 'undefined' ? window : this);
