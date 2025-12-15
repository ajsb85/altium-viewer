/**
 * AppMenuManager.js
 * 
 * Manages the AppMenu Vue component - handles opening, closing, and callbacks.
 * Extracted from ViewerApp.js (Jt class).
 */
(function(global) {
    'use strict';

    /**
     * AppMenuManager class - manages the context menu Vue app lifecycle
     * @param {HTMLElement|null} container - Container element (defaults to document.body)
     * @param {Object} data - Initial menu data (items, selectedItem)
     */
    var AppMenuManager = (function() {
        function AppMenuManager(container, data) {
            this.data = data;
            this.closeCallbacks = [];
            this.itemClickCallbacks = [];
            this.active = false;
            this.vueApp = undefined;
            this.vueAppInstance = undefined;
            this.container = (container || document.body).appendChild(
                document.createElement("div")
            );
        }

        /**
         * Open the menu at specified coordinates
         * @param {Object} coords - { x, y } coordinates
         * @param {boolean} destroyOnClose - Whether to destroy Vue app on close
         * @returns {AppMenuManager} this
         */
        AppMenuManager.prototype.open = function(coords, destroyOnClose) {
            var self = this;
            var Vue = window.Vue;
            var AppMenuComponent = window.AppMenuComponent;

            if (!this.vueApp) {
                this.vueApp = Vue.createApp(AppMenuComponent, {
                    onClose: function() {
                        return self.invokeOnClose(!!destroyOnClose);
                    },
                    onItemClick: function(item) {
                        self.itemClickCallbacks.forEach(function(cb) {
                            cb(item);
                        });
                    }
                });
                this.vueAppInstance = this.vueApp.mount(this.container);
            }

            if (this.vueAppInstance) {
                if (this.data) {
                    this.updateVueAppData(this.vueAppInstance, this.data);
                }
                this.vueAppInstance.open(coords);
                this.active = true;
            }

            return this;
        };

        /**
         * Update menu data
         * @param {Object} data - New data
         * @returns {AppMenuManager} this
         */
        AppMenuManager.prototype.update = function(data) {
            this.data = data;
            if (this.active && this.vueAppInstance) {
                this.updateVueAppData(this.vueAppInstance, data);
            }
            return this;
        };

        /**
         * Close the menu
         * @returns {AppMenuManager} this
         */
        AppMenuManager.prototype.close = function() {
            if (this.vueAppInstance) {
                this.vueAppInstance.close();
            }
            return this;
        };

        /**
         * Register close callback
         * @param {Function} callback
         */
        AppMenuManager.prototype.onClose = function(callback) {
            this.closeCallbacks.push(callback);
        };

        /**
         * Register item click callback
         * @param {Function} callback
         */
        AppMenuManager.prototype.onItemClick = function(callback) {
            this.itemClickCallbacks.push(callback);
        };

        /**
         * Clear all callbacks
         */
        AppMenuManager.prototype.clearSubscribtion = function() {
            this.closeCallbacks.length = 0;
            this.itemClickCallbacks.length = 0;
        };

        /**
         * Update Vue app instance data
         * @param {Object} instance - Vue app instance
         * @param {Object} data - Data to update
         */
        AppMenuManager.prototype.updateVueAppData = function(instance, data) {
            if (data.items !== undefined) {
                instance.setData("items", data.items);
            }
            if (data.selectedItem !== undefined) {
                instance.setData("selectedItem", data.selectedItem);
            }
        };

        /**
         * Invoke close callbacks and optionally destroy Vue app
         * @param {boolean} destroy - Whether to destroy the Vue app
         */
        AppMenuManager.prototype.invokeOnClose = function(destroy) {
            var self = this;
            var Vue = window.Vue;

            this.active = false;

            if (destroy) {
                Vue.nextTick(function() {
                    if (self.vueApp) {
                        try {
                            self.clearSubscribtion();
                            self.vueApp.unmount();
                            self.container.remove();
                        } finally {
                            self.vueApp = undefined;
                            self.vueAppInstance = undefined;
                        }
                    }
                });
            }

            this.closeCallbacks.forEach(function(cb) {
                cb();
            });
        };

        return AppMenuManager;
    })();

    // Export
    global.AppMenuManager = AppMenuManager;

    console.log('[AppMenuManager] Loaded');

})(typeof window !== 'undefined' ? window : this);
