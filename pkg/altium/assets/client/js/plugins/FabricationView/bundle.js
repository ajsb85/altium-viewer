/**
 * FabricationView Plugin - Events
 * 
 * Event constants for FabricationView plugin communication.
 */
"use strict";

(function (FabricationView) {

    /**
     * Event names for bus communication
     */
    FabricationView.events = {
        shown: "FabricationView:shown",
        hidden: "FabricationView:hidden",
        documentChange: "FabricationView:documentChange",
        documentChanged: "FabricationView:documentChanged",
        layerManagerCreated: "FabricationView:layerManagerCreated",
        activateDocument: "FabricationView:activateDocument",
        updateInterface: "FabricationView:updateInterface",
    };

    /**
     * Document types for analytics
     */
    FabricationView.documentTypes = {
        GERBER: "Gerber",
        ODB: "OdbPlusPlus",
    };

    /**
     * Get analytics event name from document type
     */
    FabricationView.getAnalyticsName = function (doc) {
        if (!doc) return "Fabrication";
        switch (doc.type) {
            case "Gerber":
                return "Gerber";
            case "OdbPlusPlus":
                return "ODB";
            default:
                return "Fabrication";
        }
    };

})(window.FabricationView = window.FabricationView || {});
/**
 * FabricationView Plugin - Meta Info
 * 
 * Metadata and controls configuration for FabricationView plugin.
 */
"use strict";

(function (FabricationView) {
    /**
     * Meta information for plugin registration
     */
    FabricationView.meta = {
        name: "FabricationView",
        dependencies: ["fabrication"],
        order: 2,
    };

    /**
     * Control types supported by this view
     */
    FabricationView.controls = [
        { type: "zoom" },
        { type: "pan" },
        { type: "reset" },
        { type: "layers" },
    ];

    /**
     * Add controls to array
     */
    FabricationView.addControls = function (controlsArray) {
        FabricationView.controls.forEach(function (control) {
            controlsArray.push(control);
        });
    };

    /**
     * Key bindings
     */
    FabricationView.keyBindings = {
        resetRender: [82, "KeyR"],     // R key
        nextLayer: "+",
        prevLayer: "-",
    };

    /**
     * Handle key up events
     */
    FabricationView.handleKeyUp = function (document, event) {
        if (!event) return;

        // Reset render on R key
        if (event.keyCode === 82 || event.code === "KeyR") {
            document.resetRender();
            return;
        }

        // Layer navigation (not with Ctrl)
        if (!event.ctrlKey) {
            if (event.key === "+") {
                document.layerManager.nextOnceLayer();
            } else if (event.key === "-") {
                document.layerManager.prevOnceLayer();
            }
        }
    };

})(window.FabricationView = window.FabricationView || {});
/**
 * FabricationView Plugin - Document Handler
 * 
 * Document lifecycle event handlers.
 */
"use strict";

(function (FabricationView) {

    var events = FabricationView.events;

    /**
     * Error codes from fabrication engine
     */
    FabricationView.ErrorCodes = {
        StoreExpired: "StoreExpired",
        WebGLNotSupported: "WebGLNotSupported",
        WebGLNotSupportedExtension: "WebGLNotSupportedExtension",
    };

    /**
     * Create bound document handlers for a presenter instance
     * @param {Object} presenter - FabricationView presenter instance
     * @returns {Object} Document event handlers
     */
    FabricationView.createDocumentHandler = function (presenter) {
        var self = presenter;

        return {
            /**
             * Activate a document by ID
             * Sets activeDocumentIndex on Fabrication engine
             */
            onActivateDocument: function (docId) {
                try {
                    var index = self.documents.findIndex(function (doc) {
                        return doc.id === docId;
                    });
                    window.__CORE__.engines.Fabrication.activeDocumentIndex = index;
                    return true;
                } catch (err) {
                    self.logger.LogError("Activate document [" + docId + "].", err);
                    return false;
                }
            },

            /**
             * Progress handler - updates loader and preview
             */
            onProgress: function (previewData, message) {
                self.updateLoader("large", "large", message, "render-loader-32");
                self.updatePreview(previewData);
            },

            /**
             * Document show handler - sets display name
             */
            onDocumentShow: function (doc, core) {
                self.setDisplayName(doc, core);
            },

            /**
             * Document close handler - clears state and emits change
             */
            onDocumentClose: function (doc, core) {
                self.shownDocument = null;
                self.documentChanged = true;
                core.bus.emit(events.documentChange, doc);
            },

            /**
             * Document shown handler - main success/error handling
             */
            onDocumentShown: function (doc, error, core) {
                var analytics = window.__APP__.analytics;
                var eventName = self.analyticsEventName;

                // Clear preview
                self.updatePreview(undefined);

                // Dispatch analytics if active
                if (self.active) {
                    analytics.dispatchViewEvent(eventName);
                }

                // Handle error case
                if (error !== undefined) {
                    if (self.active) {
                        core.bus.emit("Document:open-error", {
                            name: eventName,
                            message: error.message,
                            error: error,
                            sendDetails: true
                        });
                    }

                    self.updateLoader("large", "error", error.message);

                    switch (error.code) {
                        case FabricationView.ErrorCodes.StoreExpired:
                            self.updateLoader("small", "error", error.message, "info-16");
                            break;
                        case FabricationView.ErrorCodes.WebGLNotSupported:
                            analytics.dispatchCustomErrorEvent("NotShown.WebGL");
                            break;
                        case FabricationView.ErrorCodes.WebGLNotSupportedExtension:
                            if (error.extensionsList) {
                                error.extensionsList.forEach(function (ext) {
                                    analytics.dispatchCustomErrorEvent("NotShown.WebGLExtension." + ext);
                                });
                            }
                            break;
                    }
                    return;
                }

                // Success case
                self.updateLoader();
                if (!doc) return;

                // Setup keyboard handler
                var keyHandler = function (e) {
                    FabricationView.handleKeyUp(doc, e, self.active);
                };

                window.addEventListener("keyup", keyHandler);
                core.bus.once("Fabrication:documentClose", function () {
                    window.removeEventListener("keyup", keyHandler);
                });

                // Emit events only if document changed
                if (!self.documentChanged) return;

                self.documentChanged = false;
                core.bus.emit(events.layerManagerCreated, doc.layerManager);
                core.bus.emit(events.documentChanged, doc);
                self.shownDocument = doc;
            }
        };
    };

    /**
     * Handle keyboard events for document
     */
    FabricationView.handleKeyUp = function (doc, event, isActive) {
        if (!isActive || !event) return;

        // R key - reset render
        if (event.keyCode === 82 || event.code === "KeyR") {
            doc.resetRender();
            return;
        }

        // +/- layer navigation (without Ctrl)
        if (!event.ctrlKey) {
            if (event.key === "+") {
                doc.layerManager.nextOnceLayer();
            } else if (event.key === "-") {
                doc.layerManager.prevOnceLayer();
            }
        }
    };

})(window.FabricationView = window.FabricationView || {});
/**
 * FabricationView Plugin - Loader & Preview
 * 
 * UI utilities for loader and preview management.
 */
"use strict";

(function (FabricationView) {

    /**
     * Update preview component
     * @param {Object} presenter - Presenter instance with createPreview
     * @param {Object} data - Preview data with .preview URL
     */
    FabricationView.updatePreview = function (presenter, data) {
        try {
            // Cleanup function
            var cleanup = function () {
                if (presenter.previewInfo && presenter.previewInfo.preview) {
                    presenter.previewInfo.preview.destroy();
                }
                presenter.previewInfo = null;
            };

            if (presenter.createPreview && data) {
                var url = data.preview;

                // Skip if same URL
                if (presenter.previewInfo && presenter.previewInfo.url === url) {
                    return;
                }

                cleanup();
                presenter.previewInfo = {
                    preview: presenter.createPreview(url),
                    url: url
                };
            } else {
                cleanup();
            }
        } catch (err) {
            presenter.logger.LogError("Setup preview error.", err);
        }
    };

    /**
     * Update loader component
     * @param {Object} presenter - Presenter instance with createLoader
     * @param {string} size - "small" or "large" (default: "large")
     * @param {string} type - Loader type (e.g., "error", "large")
     * @param {string} message - Loader message
     * @param {string} icon - Icon name (optional)
     */
    FabricationView.updateLoader = function (presenter, size, type, message, icon) {
        size = size || "large";

        // Cleanup existing loader
        if (presenter.loader) {
            presenter.loader.destroy();
            presenter.loader = null;
        }

        // Create new loader if params provided
        if (presenter.createLoader && type !== undefined && message !== undefined) {
            var options = {
                message: message,
                type: type,
                size: size
            };

            if (icon !== undefined) {
                options.icon = icon;
            }

            presenter.loader = presenter.createLoader(options);
        }
    };

})(window.FabricationView = window.FabricationView || {});
/**
 * FabricationView Plugin - Presenter
 * 
 * Main FabricationViewPresenter class with public API.
 */
"use strict";

(function (FabricationView) {

    var events = FabricationView.events;
    var CORE = window.__CORE__;

    /**
     * FabricationViewPresenter - Main view controller
     * @param {boolean} updateDisplayName - Whether to update display name on show
     */
    FabricationView.Presenter = function (updateDisplayName) {
        var self = this;

        // State
        this.active = false;
        this._hidden = true;
        this.shown = false;
        this.documentChanged = true;

        // UI references
        this.div = null;
        this.loader = null;
        this.previewInfo = null;
        this.shownDocument = null;

        // Factory functions (set on activate)
        this.createLoader = null;
        this.createPreview = null;

        // Configuration
        this.updateDisplayName = updateDisplayName;
        this.badges = [];

        // Logger
        this.logger = CORE.createLogger("FabricationView");

        // Meta info for plugin registration
        this.metaInfo = {
            name: "FabricationView",
            displayName: window.__APP__.library.i18n.t("viewer.plugins.FabricationView.meta.displayName"),
            badges: this.badges,
            comment: window.__APP__.library.i18n.t("viewer.plugins.FabricationView.meta.comment"),
            dependencies: ["fabrication"],
            order: 2,
            hasControls: function (controls) {
                FabricationView.addControls(controls);
            }
        };

        // Document handlers (bound to this instance)
        var handlers = FabricationView.createDocumentHandler(this);
        this.onActivateDocument = handlers.onActivateDocument;
        this.onProgress = handlers.onProgress;
        this.onDocumentShow = handlers.onDocumentShow;
        this.onDocumentClose = handlers.onDocumentClose;
        this.onDocumentShown = handlers.onDocumentShown;

        // Engine stubs (overridden in setup)
        this.showEngine = function () {
            throw new Error(window.__APP__.library.i18n.t("viewer.plugins.FabricationView.engineNotDefinedError"));
        };
        this.hideEngine = function () {
            throw new Error(window.__APP__.library.i18n.t("viewer.plugins.FabricationView.engineNotDefinedError"));
        };
    };

    FabricationView.Presenter.prototype = {
        // Getters
        get events() {
            return Object.values(events);
        },

        get hidden() {
            return this._hidden;
        },
        set hidden(value) {
            var was = this._hidden;
            this._hidden = value;
            if (was !== value) {
                CORE.bus.emit(events.updateInterface, { hidden: this.hidden });
            }
        },

        get documents() {
            return CORE.engines.Fabrication.allDocuments;
        },

        get analyticsEventName() {
            return FabricationView.getAnalyticsName(
                CORE.engines.Fabrication ? CORE.engines.Fabrication.activeDocument : null
            );
        },

        // Event listener helpers
        addShownEventListener: function (callback) {
            var self = this;
            var wrapped = function (arg) {
                self.toSafeCallback(callback, arg);
            };
            CORE.bus.on(events.shown, wrapped);
            if (this.shown && this.div) {
                wrapped(this.div);
            }
        },

        addHideEventListener: function (callback) {
            var self = this;
            var wrapped = function () {
                self.toSafeCallback(callback, undefined);
            };
            CORE.bus.on(events.hidden, wrapped);
            if (!this.shown) {
                wrapped();
            }
        },

        addDocumentChangeEventListener: function (callback) {
            var self = this;
            var wrapped = function () {
                self.toSafeCallback(callback, undefined);
            };
            CORE.bus.on(events.documentChange, wrapped);
            if (this.shownDocument) {
                wrapped();
            }
        },

        addDocumentChangedEventListener: function (callback) {
            var self = this;
            var wrapped = function (doc) {
                self.toSafeCallback(callback, doc);
            };
            CORE.bus.on(events.documentChanged, wrapped);
            if (this.shownDocument) {
                wrapped(this.shownDocument);
            }
        },

        // Lifecycle
        setup: function (core) {
            var self = this;
            var engine = core.engines.Fabrication;

            if (engine && engine.allDocuments.length > 0) {
                this.showEngine = function (div) {
                    return engine.show(div);
                };
                this.hideEngine = function () {
                    return engine.hide();
                };

                var bus = core.bus;
                bus.on("Fabrication:progress", this.onProgress);
                bus.on("Fabrication:documentShow", function (doc) {
                    self.onDocumentShow(doc, core);
                });
                bus.on("Fabrication:documentClose", function (doc) {
                    self.onDocumentClose(doc, core);
                });
                bus.on("Fabrication:documentShown", function (doc, err) {
                    self.onDocumentShown(doc, err, core);
                });
                bus.on(events.activateDocument, this.onActivateDocument);

                this.setDisplayName(engine.activeDocument, core);
                this.hidden = false;
            }

            return Promise.resolve();
        },

        activate: function (div) {
            var self = this;

            if (this.active) {
                return Promise.resolve();
            }

            this.logger.LogDebug("Activate view");

            return new Promise(function (resolve, reject) {
                try {
                    self.active = true;
                    self.div = div;
                    self.createLoader = function (opts) {
                        return window.__APP__.loader(div, opts);
                    };
                    self.createPreview = function (url) {
                        return window.__APP__.preview(div, url);
                    };

                    Promise.resolve(self.showEngine(div)).then(function () {
                        if (self.active) {
                            self.shown = true;
                            CORE.bus.emit(events.shown, div);
                        }
                        resolve();
                    }).catch(function (err) {
                        self.logger.LogError("Activate view error.", err);
                        self.updateLoader("large", "error",
                            window.__APP__.library.i18n.t("viewer.plugins.FabricationView.showDocumentError"));
                        resolve();
                    });
                } catch (err) {
                    self.logger.LogError("Activate view error.", err);
                    self.updateLoader("large", "error",
                        window.__APP__.library.i18n.t("viewer.plugins.FabricationView.showDocumentError"));
                    resolve();
                }
            });
        },

        deactivate: function () {
            if (!this.active) return;

            this.logger.LogDebug("Deactivate view");
            try {
                this.active = false;
                this.div = null;
                this.shown = false;
                this.createLoader = null;
                this.createPreview = null;
                this.updateLoader();
                this.hideEngine();
                CORE.bus.emit(events.hidden);
            } catch (err) {
                this.logger.LogError("Deactivate view error.", err);
            }
        },

        // Utilities
        toSafeCallback: function (callback, arg) {
            try {
                if (callback) callback(arg);
            } catch (err) {
                this.logger.LogError("Callback invoke error.", err);
            }
        },

        setDisplayName: function (doc, core) {
            if (doc && this.updateDisplayName && this.updateDisplayName !== "false") {
                var name = doc.type === "OdbPlusPlus" ? "ODB++" : "Gerber";
                core.bus.emit(events.updateInterface, { displayName: name });
            }
        },

        // Delegate to module functions
        updatePreview: function (data) {
            FabricationView.updatePreview(this, data);
        },

        updateLoader: function (size, type, message, icon) {
            FabricationView.updateLoader(this, size, type, message, icon);
        }
    };

    /**
     * Factory function to create a presenter instance
     * @param {boolean} updateDisplayName - Whether to update display name
     * @returns {FabricationView.Presenter}
     */
    FabricationView.create = function (updateDisplayName) {
        return new FabricationView.Presenter(updateDisplayName);
    };

})(window.FabricationView = window.FabricationView || {});
/**
 * FabricationView Plugin - Entry Point (Compatible with addModule)
 * 
 * View module for fabrication/manufacturing data (Gerber, ODB++).
 * 
 * NOTE: This file must be loaded AFTER:
 * - events.js, meta.js, documentHandler.js, loaderPreview.js, presenter.js
 * 
 * These modules register on window.FabricationView namespace.
 */
"use strict";

(function () {
    var h = window.__CORE__;

    // Check if modular components are loaded
    if (!window.FabricationView || !window.FabricationView.Presenter) {
        console.error("[FabricationView] Presenter not found. Load modules first.");
        return;
    }

    // Get update display name setting
    var f = { value: null };
    var d = !h.tryGetAttributeValue(
        "data-fabrication-view-update-display-name",
        f
    ) || "true" === f.value;

    // Register with the app's module system
    h.addModule({
        type: "View",
        description: "Represent fabrication view provider module.",
        create: function () {
            return window.FabricationView.create(d);
        },
    });
})();
