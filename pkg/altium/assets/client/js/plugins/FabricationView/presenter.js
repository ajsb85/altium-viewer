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
