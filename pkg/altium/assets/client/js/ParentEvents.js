/**
 * ParentEvents.js
 * 
 * Event emitter for parent iframe communication.
 * Extracted from ViewerApp.js (at class).
 */
(function(global) {
    'use strict';

    var ViewerUtils = global.ViewerUtils;
    var getType = ViewerUtils.getType;

    /**
     * ParentEvents class - handles bi-directional communication with parent iframe
     */
    var ParentEvents = (function() {
        function ParentEvents() {
            var self = this;
            this.listeners = {};

            // Listen for messages from parent
            window.addEventListener("message", function(event) {
                var data = event && event.data;
                if (data && data.message && self.listeners[data.message]) {
                    self.listeners[data.message].forEach(function(callback) {
                        callback(data);
                    });
                }
            });
        }

        Object.defineProperty(ParentEvents.prototype, "logger", {
            get: function() {
                return window.__CORE__.createLogger("App:ParentEvents");
            }
        });

        /**
         * Return self for chaining (compatibility)
         */
        ParentEvents.prototype.as = function() {
            return this;
        };

        /**
         * Emit event to parent window
         * @param {string} eventName - Event name
         * @param {...*} args - Event arguments
         */
        ParentEvents.prototype.emit = function(eventName) {
            try {
                if (window.parent !== window) {
                    var data;
                    var packed = false;
                    
                    var serialize = function(obj) {
                        return typeof obj === "object" 
                            ? JSON.parse(JSON.stringify(obj)) 
                            : obj;
                    };

                    // Collect remaining arguments
                    var args = [];
                    for (var i = 1; i < arguments.length; i++) {
                        args.push(arguments[i]);
                    }

                    if (args.length === 1) {
                        data = serialize(args[0]);
                    } else if (args.length > 1) {
                        packed = true;
                        data = args.map(serialize);
                    }

                    var message = {
                        message: eventName,
                        data: data,
                        id: window.__iframeId,
                        packed: packed
                    };

                    window.parent.postMessage(message, "*");
                }
            } catch (e) {
                this.logger.LogError("Emit event error.", e);
            }
            return this;
        };

        /**
         * Subscribe to event once
         * @param {string} eventName - Event name
         * @param {Function} callback - Callback function
         */
        ParentEvents.prototype.once = function(eventName, callback) {
            var self = this;
            this.on(eventName, function handler() {
                callback.apply(void 0, arguments);
                self.off(eventName, handler);
            });
            return this;
        };

        /**
         * Subscribe to event
         * @param {string} eventName - Event name
         * @param {Function} callback - Callback function
         */
        ParentEvents.prototype.on = function(eventName, callback) {
            if (eventName in this.listeners) {
                this.listeners[eventName].push(callback);
            } else {
                this.listeners[eventName] = [callback];
            }
            return this;
        };

        /**
         * Unsubscribe from event
         * @param {string} eventName - Event name
         * @param {Function} callback - Callback function to remove
         */
        ParentEvents.prototype.off = function(eventName, callback) {
            if (eventName in this.listeners) {
                var idx = this.listeners[eventName].indexOf(callback);
                if (idx > -1) {
                    this.listeners[eventName].splice(idx, 1);
                }
            }
            return this;
        };

        return ParentEvents;
    })();

    // Export
    global.ParentEvents = ParentEvents;

    console.log('[ParentEvents] Loaded');

})(typeof window !== 'undefined' ? window : this);
