/**
 * LayoutManager.js
 * 
 * Layout update notifier service for the viewer.
 * Manages window dimensions, header height, sidebar width, and modal layouts.
 * Extracted from ViewerApp.js ($e class).
 */
(function(global) {
    'use strict';

    var ViewerUtils = global.ViewerUtils;
    var defineProperties = ViewerUtils.defineProperties;

    /**
     * LayoutManager class - AppLayoutUpdateNotifier
     * Manages layout updates and emits Layout:update events
     * @param {Object} bus - Event bus for emitting layout updates
     */
    var LayoutManager = (function() {
        function LayoutManager(bus) {
            var self = this;
            
            this.bus = bus;
            this.windowWidth = 0;
            this.windowHeight = 0;
            this.headerHeight = 0;
            this.sidebarWidth = 0;
            this.updated = false;
            this.modals = new Map();
            this.logger = global.__CORE__.createLogger("App:AppLayoutUpdateNotifier");
            
            this.onWindowResize = function() {
                self.windowWidth = window.innerWidth;
                self.windowHeight = window.innerHeight;
                self.updateLayout();
            };
        }

        var proto = [
            {
                key: "initialize",
                value: function() {
                    window.addEventListener("resize", this.onWindowResize);
                    this.onWindowResize();
                }
            },
            {
                key: "setHeaderHeight",
                value: function(height) {
                    if (Number.isFinite(height) && height !== this.headerHeight) {
                        this.headerHeight = height;
                        this.updateLayoutImmediate();
                    }
                }
            },
            {
                key: "setSideBarWidth",
                value: function(width) {
                    if (Number.isFinite(width) && width !== this.sidebarWidth) {
                        global.__APP__.sidebarWidth = width;
                        this.sidebarWidth = width;
                        this.updateLayoutImmediate();
                    }
                }
            },
            {
                key: "addModal",
                value: function(modal) {
                    this.modals.set(modal.id, Object.assign({}, modal));
                    this.updateLayoutImmediate();
                }
            },
            {
                key: "removeModal",
                value: function(modalId) {
                    if (this.modals.delete(modalId)) {
                        this.updateLayoutImmediate();
                    }
                }
            },
            {
                key: "updateModalWidth",
                value: function(modalId, width) {
                    var modal = this.modals.get(modalId);
                    if (modal && modal.width !== width) {
                        modal.width = width;
                        this.updateLayoutImmediate();
                    }
                }
            },
            {
                key: "updateLayoutImmediate",
                value: function() {
                    try {
                        var reduceModal = function(arr, modal, predicate) {
                            if (predicate(modal)) {
                                arr.push({ id: modal.id, offset: modal.width });
                            }
                            return arr;
                        };
                        
                        var modalsArray = Array.from(this.modals.values());
                        
                        var leftModals = modalsArray.reduce(function(acc, modal) {
                            return reduceModal(acc, modal, function(m) {
                                return m.isLeftModal;
                            });
                        }, []);
                        
                        var rightModals = modalsArray.reduce(function(acc, modal) {
                            return reduceModal(acc, modal, function(m) {
                                return m.isRightModal;
                            });
                        }, []);
                        
                        if (leftModals.length < 2 && rightModals.length < 2) {
                            if (this.sidebarWidth > 0) {
                                leftModals.unshift({ id: "Sidebar", offset: this.sidebarWidth });
                            }
                            
                            var layoutData = {
                                width: this.windowWidth,
                                height: this.windowHeight,
                                left: leftModals,
                                right: rightModals,
                                top: this.headerHeight
                                    ? [{ id: "Header", offset: this.headerHeight }]
                                    : [],
                                bottom: []
                            };
                            
                            this.bus.emit("Layout:update", layoutData);
                        }
                        
                        this.updated = true;
                    } catch (e) {
                        this.logger.LogError("Update layout changing error", e);
                    }
                }
            },
            {
                key: "updateLayout",
                value: function() {
                    var self = this;
                    this.updated = false;
                    global.__APP__.utils.debounce(
                        "app:layout:changed",
                        function() {
                            if (!self.updated) {
                                self.updateLayoutImmediate();
                            }
                        },
                        20
                    );
                }
            }
        ];
        
        defineProperties(LayoutManager.prototype, proto);
        Object.defineProperty(LayoutManager, "prototype", { writable: false });
        
        return LayoutManager;
    })();

    // Export
    global.LayoutManager = LayoutManager;

    console.log('[LayoutManager] Loaded');

})(typeof window !== 'undefined' ? window : this);
