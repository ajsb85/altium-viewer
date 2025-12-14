/**
 * Fabrication Engine - Main Engine
 * 
 * Main FabricationEngine class integrated with FSM and CanvasControl.
 */
"use strict";

(function (Fabrication) {

    var CORE = window.__CORE__;
    var APP = window.__APP__;
    var events = Fabrication.events;

    /**
     * Fabrication Engine
     * @param {Object} config - Engine configuration
     */
    Fabrication.Engine = function (config) {
        this.name = config.name || "Fabrication";
        this.comment = config.comment || "";
        this.dependencies = config.dependencies || ["graphite.engine", "fabricationMetadata"];

        this.documents = [];
        this.currentDocumentIndex = 0;
        this.canvasControl = new Fabrication.CanvasControl();
        this.onShowActiveDocument = null;

        this.logger = CORE.createLogger("FabricationEngine");
        this._events = Object.values(events);

        // Setup FSM with callbacks
        var self = this;
        var fsmCallbacks = {
            setup: function (core) { return self.set(core); },
            initialize: function () { return self.initialize(); },
            loadDocument: function (doc) { return self.loadDocumentInternal(doc); },
            renderDocument: function (doc) { return self.renderDocumentInternal(doc); }
        };

        this.fsm = new Fabrication.FSM(fsmCallbacks, this.logger);

        // Setup FSM event handlers
        this.fsm.on("INIT", function () {
            self.emitGlobalEvent(events.progress, null, "Initializing");
        });

        this.fsm.on("LOAD", function (action) {
            if (action.document) {
                var typeName = action.document.typeDisplayName || action.document.type || "Document";
                self.emitGlobalEvent(events.progress, action.document, "Downloading " + typeName);
            }
        });

        this.fsm.on("RENDER", function (action) {
            if (action.document) {
                var typeName = action.document.typeDisplayName || action.document.type || "Document";
                self.emitGlobalEvent(events.progress, action.document, "Rendering " + typeName);
            }
        });
    };

    Fabrication.Engine.prototype = {

        /**
         * Get engine events
         */
        get events() {
            return this._events;
        },

        /**
         * Get active document index
         */
        get activeDocumentIndex() {
            return this.currentDocumentIndex;
        },

        /**
         * Set active document index
         */
        set activeDocumentIndex(value) {
            if (!Number.isInteger(value)) {
                throw new Error("Argument [value=" + value + "] error.");
            }
            if (value < 0 || value >= this.documents.length) {
                throw new Error("Index was out of range. Must be non-negative and less than the size of the collection.");
            }

            var oldIndex = this.currentDocumentIndex;
            this.currentDocumentIndex = value;

            if (oldIndex !== value) {
                // Close old document
                if (oldIndex >= 0 && oldIndex < this.documents.length) {
                    var oldDoc = this.documents[oldIndex];
                    this.emitGlobalEvent(events.documentClose, oldDoc);
                    try {
                        if (oldDoc.clearRender) {
                            oldDoc.clearRender();
                        }
                    } finally {
                        this.emitGlobalEvent(events.documentClosed, oldDoc);
                    }
                }

                // Show new document
                if (this.onShowActiveDocument) {
                    this.onShowActiveDocument.apply(this);
                }
            }
        },

        /**
         * Get all documents
         */
        get allDocuments() {
            return this.documents;
        },

        /**
         * Get active document
         */
        get activeDocument() {
            if (this.activeDocumentIndex < 0 || this.activeDocumentIndex >= this.documents.length) {
                return undefined;
            }
            return this.documents[this.activeDocumentIndex];
        },

        /**
         * Emit event via global bus
         */
        emitGlobalEvent: function (eventName, data, message) {
            if (CORE && CORE.bus) {
                CORE.bus.emit(eventName, data, message);
            }
            return true;
        },

        /**
         * FSM callback: Setup
         */
        set: function (core) {
            // Get documents from metadata
            var metadata = core.response.fabricationMetadata;
            if (metadata) {
                var docs = metadata.getDocuments ? metadata.getDocuments() : (metadata.documents || []);
                this.documents = docs;

                if (this.documents.length > 0) {
                    this.currentDocumentIndex = 0;
                }
            }
        },

        /**
         * FSM callback: Initialize
         */
        initialize: function () {
            var self = this;

            // Load graphite engine
            return new Promise(function (resolve, reject) {
                var graphite = CORE.engines["graphite.engine"];
                if (graphite && graphite.createInstance) {
                    graphite.createInstance().then(function (instance) {
                        self.graphiteInstance = instance;
                        resolve();
                    }).catch(reject);
                } else if (graphite) {
                    self.graphiteInstance = graphite;
                    resolve();
                } else {
                    // Graphite not yet loaded, wait for it
                    self.graphiteInstance = null;
                    resolve();
                }
            });
        },

        /**
         * FSM callback: Load document data
         */
        loadDocumentInternal: function (doc) {
            if (doc && doc.load) {
                return doc.load();
            }
            return Promise.resolve();
        },

        /**
         * FSM callback: Render document
         */
        renderDocumentInternal: function (doc) {
            var self = this;

            return new Promise(function (resolve, reject) {
                try {
                    if (!doc) {
                        return resolve();
                    }

                    // Get graphite instance
                    var graphite = self.graphiteInstance || CORE.engines["graphite.engine"];
                    if (!graphite) {
                        return reject(new Error("Graphite engine not available."));
                    }

                    // Create scene if needed
                    var canvas = self.canvasControl.canvas;
                    var scene = graphite.scene || graphite.createScene(canvas);

                    if (doc.render) {
                        doc.render(scene, function (preview, msg) {
                            self.emitGlobalEvent(events.progress, preview, msg);
                        }).then(resolve).catch(reject);
                    } else {
                        resolve();
                    }
                } catch (err) {
                    reject(err);
                }
            });
        },

        /**
         * Setup engine with core (called by module system)
         */
        setup: function (core) {
            this.fsm.setup(core);
            return Promise.resolve();
        },

        /**
         * Show engine in container (called by view)
         */
        show: function (container) {
            var self = this;

            return new Promise(function (resolve, reject) {
                try {
                    // Attach canvas
                    self.canvasControl.attach(container);
                    self.canvasControl.start();

                    // Setup canvas paint handler
                    self.canvasControl.on("paint", function () {
                        self.onPaint();
                    });

                    // Setup show active document callback
                    self.onShowActiveDocument = function () {
                        return self.showActiveDocumentAsync();
                    };

                    // Initialize then show
                    self.fsm.init().then(function () {
                        return self.showActiveDocumentAsync();
                    }).then(resolve).catch(reject);

                } catch (err) {
                    self.logger.LogError("Show engine error.", err);
                    reject(err);
                }
            });
        },

        /**
         * Show active document async
         */
        showActiveDocumentAsync: function () {
            var self = this;
            var doc = this.activeDocument;

            if (!doc) {
                return Promise.resolve();
            }

            this.emitGlobalEvent(events.documentShow, doc);

            return this.fsm.loadDocument(doc).then(function () {
                return self.fsm.renderDocument(doc);
            }).then(function () {
                self.emitGlobalEvent(events.documentShown, doc, undefined);
            }).catch(function (err) {
                self.emitGlobalEvent(events.documentShown, doc, err);
                throw err;
            });
        },

        /**
         * Paint callback from canvas
         */
        onPaint: function () {
            var doc = this.activeDocument;
            if (doc && doc.scene) {
                doc.scene.Render();
            }
        },

        /**
         * Hide engine
         */
        hide: function () {
            var doc = this.activeDocument;
            if (doc && doc.clearRender) {
                doc.clearRender();
            }
            this.canvasControl.stop();
            this.canvasControl.detach();
        }
    };

    /**
     * Create engine (for addModule integration)
     */
    Fabrication.createEngine = function () {
        return new Fabrication.Engine({
            name: "Fabrication",
            comment: "",
            dependencies: ["graphite.engine", "fabricationMetadata"]
        });
    };

})(window.Fabrication = window.Fabrication || {});
