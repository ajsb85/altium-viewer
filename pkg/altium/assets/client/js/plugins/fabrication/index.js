/**
 * Fabrication Engine - Entry Point (Compatible with addModule)
 * 
 * Engine for PCB fabrication view (Gerber/CAM output preview).
 * 
 * NOTE: This file must be loaded AFTER all other modules.
 * These modules register on window.Fabrication namespace.
 */
"use strict";

(function () {
    var CORE = window.__CORE__;
    var APP = window.__APP__;

    // Check if modular components are loaded
    if (!window.Fabrication || !window.Fabrication.FSM) {
        console.error("[Fabrication] FSM not found. Load modules first.");
        return;
    }

    if (!CORE) {
        console.error("[Fabrication] __CORE__ not found.");
        return;
    }

    // Get createModule from APP
    var createModule = APP ? APP.createModule : null;

    if (!createModule) {
        console.warn("[Fabrication] createModule not available.");
        return;
    }

    // Create the module using createModule factory
    var module = createModule({
        type: "Engine",
        description: "Presents fabrication documents engine module",
        create: function (BaseClass, core) {
            // Create engine class that extends the base class
            var Fabrication = window.Fabrication;
            var events = Fabrication.events;

            /**
             * FabricationEngine - extends BaseClass from createModule
             */
            function FabricationEngine(config) {
                // Call base class constructor
                BaseClass.call(this, config);

                this.logger = CORE.createLogger("FabricationEngine");
                this.documents = [];
                this.currentDocumentIndex = 0;

                // Setup FSM with callbacks
                var self = this;
                var fsmCallbacks = {
                    setup: function (c) { return self.set(c); },
                    initialize: function () { return self.initialize(); },
                    loadDocument: function (doc) { return self.loadDocumentInternal(doc); },
                    renderDocument: function (doc) { return self.renderDocumentInternal(doc); }
                };

                this.fsm = new Fabrication.FSM(fsmCallbacks, this.logger);

                // Override emitGlobalEvent to use core.bus
                this.emitGlobalEvent = function () {
                    return false;
                };

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

                // Create canvas control
                this.canvasControl = new Fabrication.CanvasControl();
            }

            // Inherit from BaseClass
            FabricationEngine.prototype = Object.create(BaseClass.prototype);
            FabricationEngine.prototype.constructor = FabricationEngine;

            // Define properties
            Object.defineProperty(FabricationEngine.prototype, "events", {
                get: function () {
                    return Object.values(events);
                }
            });

            Object.defineProperty(FabricationEngine.prototype, "activeDocumentIndex", {
                get: function () {
                    return this.currentDocumentIndex;
                },
                set: function (value) {
                    if (!Number.isInteger(value)) {
                        throw new Error("Argument [value=" + value + "] error.");
                    }
                    if (value < 0 || value >= this.documents.length) {
                        throw new Error("Index was out of range.");
                    }

                    var oldIndex = this.currentDocumentIndex;
                    this.currentDocumentIndex = value;

                    if (oldIndex !== value) {
                        if (oldIndex >= 0 && oldIndex < this.documents.length) {
                            var oldDoc = this.documents[oldIndex];
                            this.emitGlobalEvent(events.documentClose, oldDoc);
                            try {
                                if (oldDoc.clearRender) oldDoc.clearRender();
                            } finally {
                                this.emitGlobalEvent(events.documentClosed, oldDoc);
                            }
                        }
                        if (this.onShowActiveDocument) {
                            this.onShowActiveDocument.apply(this);
                        }
                    }
                }
            });

            Object.defineProperty(FabricationEngine.prototype, "allDocuments", {
                get: function () {
                    return this.documents;
                }
            });

            Object.defineProperty(FabricationEngine.prototype, "activeDocument", {
                get: function () {
                    if (this.activeDocumentIndex < 0 || this.activeDocumentIndex >= this.documents.length) {
                        return undefined;
                    }
                    return this.documents[this.activeDocumentIndex];
                }
            });

            // FSM callback: setup
            FabricationEngine.prototype.set = function (core) {
                var metadata = core.response.fabricationMetadata;
                if (metadata) {
                    var docs = metadata.getDocuments ? metadata.getDocuments() : (metadata.documents || []);
                    this.documents = docs;
                    if (this.documents.length > 0) {
                        this.currentDocumentIndex = 0;
                    }
                }
            };

            // FSM callback: initialize
            FabricationEngine.prototype.initialize = function () {
                var self = this;
                return new Promise(function (resolve) {
                    var graphite = CORE.engines["graphite.engine"];
                    self.graphiteInstance = graphite || null;
                    resolve();
                });
            };

            // FSM callback: load document
            FabricationEngine.prototype.loadDocumentInternal = function (doc) {
                if (doc && doc.load) {
                    return doc.load();
                }
                return Promise.resolve();
            };

            // FSM callback: render document
            FabricationEngine.prototype.renderDocumentInternal = function (doc) {
                var self = this;
                return new Promise(function (resolve, reject) {
                    try {
                        if (!doc) return resolve();
                        var graphite = self.graphiteInstance || CORE.engines["graphite.engine"];
                        if (!graphite) return reject(new Error("Graphite engine not available."));

                        var canvas = self.canvasControl.canvas;
                        var scene = graphite.scene || (graphite.createScene ? graphite.createScene(canvas) : null);

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
            };

            // Override setup from base class
            FabricationEngine.prototype.setup = function (core) {
                this.fsm.setup(core);
                return Promise.resolve();
            };

            // Override show from base class
            FabricationEngine.prototype.show = function (container) {
                var self = this;
                return new Promise(function (resolve, reject) {
                    try {
                        self.canvasControl.attach(container);
                        self.canvasControl.start();

                        self.canvasControl.on("paint", function () {
                            self.onPaint();
                        });

                        self.onShowActiveDocument = function () {
                            return self.showActiveDocumentAsync();
                        };

                        self.fsm.init().then(function () {
                            return self.showActiveDocumentAsync();
                        }).then(resolve).catch(reject);
                    } catch (err) {
                        self.logger.LogError("Show engine error.", err);
                        reject(err);
                    }
                });
            };

            FabricationEngine.prototype.showActiveDocumentAsync = function () {
                var self = this;
                var doc = this.activeDocument;
                if (!doc) return Promise.resolve();

                this.emitGlobalEvent(events.documentShow, doc);

                return this.fsm.loadDocument(doc).then(function () {
                    return self.fsm.renderDocument(doc);
                }).then(function () {
                    self.emitGlobalEvent(events.documentShown, doc, undefined);
                }).catch(function (err) {
                    self.emitGlobalEvent(events.documentShown, doc, err);
                    throw err;
                });
            };

            FabricationEngine.prototype.onPaint = function () {
                var doc = this.activeDocument;
                if (doc && doc.scene) {
                    doc.scene.Render();
                }
            };

            FabricationEngine.prototype.hide = function () {
                var doc = this.activeDocument;
                if (doc && doc.clearRender) doc.clearRender();
                this.canvasControl.stop();
                this.canvasControl.detach();
            };

            FabricationEngine.prototype.showDocument = function (docId, position) {
                // Find and show document by id
            };

            // Return new instance of engine
            return new FabricationEngine({
                name: "Fabrication",
                comment: "",
                dependencies: ["graphite.engine", "fabricationMetadata"]
            });
        }
    });

    // Register with core
    CORE.addModule(module);

    console.log("[Fabrication] Engine registered via addModule - 6 modules");
})();
