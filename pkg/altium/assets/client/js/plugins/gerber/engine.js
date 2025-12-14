/**
 * Gerber Engine - Main Engine Class
 * 
 * GerberEngine for rendering Gerber/CAM files.
 */
"use strict";

(function (Gerber) {

    var CORE = window.__CORE__;
    var APP = window.__APP__;
    var events = Gerber.events;
    var State = Gerber.State;

    /**
     * Gerber Engine
     */
    Gerber.Engine = function () {
        var self = this;

        this.currentDocumentIndex = 0;
        this.documents = [];
        this.logger = CORE.createLogger("GerberEngine");
        this.engineFsm = new Gerber.FSM(this);
        this.needInitialAllZoomToFit = true;
        this.metadata = null;
        this.canvasControl = null;
        this.pcbRenderer = null;
        this.layerManager_ = null;

        // FSM state logging
        var states = [State.SETUP, State.SETUP_COMPLETED, State.INIT, State.INIT_COMPLETED,
        State.RENDER, State.RENDER_COMPLETED, State.SHOW, State.CRASHED];
        states.forEach(function (state) {
            self.engineFsm.on(state, function (action) {
                if (state === State.CRASHED) {
                    var errMsg = action && action.error ? action.error.message || action.error : "Unknown";
                    self.logger.LogDebug(self.engineFsm.state + " with error " + errMsg);
                } else if (state === State.SHOW && action) {
                    self.logger.LogDebug(self.engineFsm.state + " for render mode " + action.renderMode);
                } else {
                    self.logger.LogDebug(self.engineFsm.state);
                }
            });
        });
    };

    /**
     * Get engine name
     */
    Object.defineProperty(Gerber.Engine.prototype, "name", {
        get: function () { return "GerberEngine"; }
    });

    /**
     * Get active document index
     */
    Object.defineProperty(Gerber.Engine.prototype, "activeDocumentIndex", {
        get: function () { return this.currentDocumentIndex; },
        set: function (value) {
            if (!Number.isInteger(value)) {
                throw new Error("Argument [value=" + value + "] error.");
            }
            if (value < 0 || value >= this.documents.length) {
                throw new Error("Index was out of range.");
            }
            this.currentDocumentIndex = value;
        }
    });

    /**
     * Get all documents
     */
    Object.defineProperty(Gerber.Engine.prototype, "allDocuments", {
        get: function () { return this.documents; }
    });

    /**
     * Get active document
     */
    Object.defineProperty(Gerber.Engine.prototype, "activeDocument", {
        get: function () {
            if (!this.documents || this.documents.length === 0) return null;
            var idx = this.currentDocumentIndex > this.documents.length ? 0 : this.currentDocumentIndex;
            return this.documents[idx];
        }
    });

    /**
     * Get layer manager
     */
    Object.defineProperty(Gerber.Engine.prototype, "layerManager", {
        get: function () { return this.layerManager_; }
    });

    /**
     * Setup engine
     */
    Gerber.Engine.prototype.setup = function (core) {
        return this.engineFsm.goToSetup(core);
    };

    /**
     * Initialize first document
     */
    Gerber.Engine.prototype.init = function () {
        var self = this;
        var doc = this.documents[0];

        return this.engineFsm.goToInit(doc).then(function () {
            return self.engineFsm.goToRender(doc);
        });
    };

    /**
     * Show view in workspace
     */
    Gerber.Engine.prototype.showView = function (workspace, renderMode) {
        var self = this;

        return this.engineFsm.goToShow(workspace, renderMode).then(function () {
            if (self.needInitialAllZoomToFit && self.pcbRenderer) {
                self.needInitialAllZoomToFit = false;
                self.pcbRenderer.allZoomToFit();
            }
        });
    };

    /**
     * Hide view
     */
    Gerber.Engine.prototype.hideView = function () {
        if (this.canvasControl && this.canvasControl.peformanceMonitor) {
            this.canvasControl.peformanceMonitor.stopFpsMeter();
        }
    };

    /**
     * Reset view to fit
     */
    Gerber.Engine.prototype.resetView = function () {
        if (this.pcbRenderer) {
            this.pcbRenderer.zoomToFit();
            if (this.canvasControl) {
                this.canvasControl.invalidate();
            }
        }
    };

    /**
     * FSM callback: doSetup
     */
    Gerber.Engine.prototype.doSetup = function (core) {
        var response = core.response;
        this.metadata = response.metadata;

        // Get canvas control from core
        if (CORE.engines && CORE.engines["gerberCanvasControl"]) {
            this.canvasControl = CORE.engines["gerberCanvasControl"];
        }

        // Get documents from metadata
        if (response.gerberMetadata) {
            var docs = response.gerberMetadata.getDocuments ?
                response.gerberMetadata.getDocuments() :
                (response.gerberMetadata.documents || []);
            this.addDocuments(docs);
        }
    };

    /**
     * FSM callback: doInit
     */
    Gerber.Engine.prototype.doInit = function (document) {
        var self = this;
        this.logger.LogDebug("Load document: " + (document ? document.url : "null"));

        // Check storage expiry
        var storage = CORE.response && CORE.response.storage;
        if (storage && storage.isExpired) {
            return Promise.reject(new Error("Store expired."));
        }

        return new Promise(function (resolve, reject) {
            if (!document || !document.url) {
                return resolve();
            }

            fetch(document.url, { method: "GET" })
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error("Fetch failed: " + response.status);
                    }
                    return response.arrayBuffer();
                })
                .then(function (buffer) {
                    document.renderData = buffer;
                    resolve();
                })
                .catch(function (err) {
                    self.logger.LogError("Load document error.", err);
                    reject(err);
                });
        });
    };

    /**
     * FSM callback: doRender
     */
    Gerber.Engine.prototype.doRender = function (document) {
        try {
            if (this.canvasControl && this.canvasControl.createRenderer) {
                this.pcbRenderer = this.canvasControl.createRenderer(document.id);
            }

            if (this.canvasControl && this.canvasControl.loadData && document.renderData) {
                var projectType = this.metadata ? this.metadata.projectTypeName : null;
                this.canvasControl.loadData(document.renderData, projectType);
            }

            CORE.bus.emit(events.didDocumentAttach, document.id);
        } catch (err) {
            var errMsg = typeof err === "string" ? err :
                "Error " + err.name + ": " + err.message + "\n" + err.stack;
            this.logger.LogError(errMsg);
            throw new Error("Render document error.");
        }
    };

    /**
     * FSM callback: doShow
     */
    Gerber.Engine.prototype.doShow = function (workspace, renderMode) {
        if (!this.canvasControl) return;

        var containerId = this.canvasControl.getContainerId();
        var container = document.getElementById(containerId);

        if (!container) {
            throw new Error("Paint has not found.");
        }

        workspace.appendChild(container);

        if (this.pcbRenderer) {
            this.pcbRenderer.renderMode = renderMode;
        }

        this.canvasControl.onResize();
        this.canvasControl.invalidate();

        if (this.canvasControl.peformanceMonitor) {
            this.canvasControl.peformanceMonitor.startFpsMeter(1000);
        }
    };

    /**
     * Load a document
     */
    Gerber.Engine.prototype.loadDocument = function (document) {
        return this.doInit(document);
    };

    /**
     * Add documents
     */
    Gerber.Engine.prototype.addDocuments = function (docs) {
        var self = this;
        if (!docs) return;

        docs.filter(function (doc) {
            return !self.documents.find(function (d) { return d === doc; });
        }).forEach(function (doc) {
            self.documents.push(doc);
        });
    };

})(window.Gerber = window.Gerber || {});
