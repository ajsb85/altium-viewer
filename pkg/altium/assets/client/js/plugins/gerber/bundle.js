/**
 * Gerber Engine - Events & Constants
 * 
 * Event names and action types for Gerber state machine.
 */
"use strict";

(function (Gerber) {

    /**
     * Event constants
     */
    Gerber.events = {
        // Document events
        documentShow: "GerberEngine:documentShow",
        documentShown: "GerberEngine:documentShown",
        documentClose: "GerberEngine:documentClose",
        documentClosed: "GerberEngine:documentClosed",

        // Engine events  
        progress: "GerberEngine:progress",
        layerManagerCreated: "GerberEngine:layerManagerCreated",
        didDocumentAttach: "GerberEngine:didDocumentAttach",
        flipped: "GerberEngine:flipped"
    };

    /**
     * FSM action types (PascalCase for Gerber)
     */
    Gerber.ActionType = {
        Setup: "Setup",
        SetupComplete: "SetupComplete",
        Init: "Init",
        InitComplete: "InitComplete",
        Render: "Render",
        RenderComplete: "RenderComplete",
        Show: "Show",
        Error: "Error"
    };

    /**
     * FSM States
     */
    Gerber.State = {
        IDLE: "IDLE",
        SETUP: "SETUP",
        SETUP_COMPLETED: "SETUP_COMPLETED",
        INIT: "INIT",
        INIT_COMPLETED: "INIT_COMPLETED",
        RENDER: "RENDER",
        RENDER_COMPLETED: "RENDER_COMPLETED",
        SHOW: "SHOW",
        CRASHED: "CRASHED"
    };

})(window.Gerber = window.Gerber || {});
/**
 * Gerber Engine - State Machine & FSM
 * 
 * Event emitter and finite state machine for Gerber engine.
 */
"use strict";

(function (Gerber) {

    var CORE = window.__CORE__;
    var ActionType = Gerber.ActionType;
    var State = Gerber.State;

    /**
     * Simple event emitter
     */
    Gerber.EventEmitter = function () {
        this._events = {};
    };

    Gerber.EventEmitter.prototype = {
        on: function (event, callback) {
            if (!this._events[event]) {
                this._events[event] = [];
            }
            this._events[event].push(callback);
            return this;
        },

        once: function (event, callback) {
            var self = this;
            var wrapper = function () {
                self.off(event, wrapper);
                callback.apply(self, arguments);
            };
            this.on(event, wrapper);
            return this;
        },

        off: function (event, callback) {
            if (!this._events[event]) return this;
            if (!callback) {
                delete this._events[event];
            } else {
                var idx = this._events[event].indexOf(callback);
                if (idx > -1) {
                    this._events[event].splice(idx, 1);
                }
            }
            return this;
        },

        emit: function (event) {
            if (!this._events[event]) return;
            var args = Array.prototype.slice.call(arguments, 1);
            var callbacks = this._events[event].slice();
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i].apply(this, args);
            }
        }
    };

    /**
     * Transition helpers
     */
    var transitionShow = {
        where: function (action) { return ["Show" === action.type]; },
        to: State.SHOW
    };

    var transitionError = {
        where: function (action) { return ["Error" === action.type]; },
        to: State.CRASHED,
        error: true
    };

    /**
     * State transition table
     */
    Gerber.StateTransitions = {
        IDLE: [
            { where: function (a) { return ["Setup" === a.type]; }, to: State.SETUP }
        ],
        SETUP: [
            { where: function (a) { return ["SetupComplete" === a.type]; }, to: State.SETUP_COMPLETED },
            transitionError
        ],
        SETUP_COMPLETED: [
            { where: function (a) { return ["Init" === a.type]; }, to: State.INIT },
            transitionError
        ],
        INIT: [
            { where: function (a) { return ["InitComplete" === a.type]; }, to: State.INIT_COMPLETED },
            transitionError
        ],
        INIT_COMPLETED: [
            { where: function (a) { return ["Render" === a.type]; }, to: State.RENDER },
            transitionError
        ],
        RENDER: [
            { where: function (a) { return ["RenderComplete" === a.type]; }, to: State.RENDER_COMPLETED },
            transitionError
        ],
        RENDER_COMPLETED: [transitionShow, transitionError],
        SHOW: [transitionShow, transitionError]
    };

    /**
     * Base State Machine
     */
    Gerber.StateMachine = function (initialState, transitions) {
        Gerber.EventEmitter.call(this);
        this.state = initialState;
        this.prevstate = null;
        this.transitions = transitions;
    };

    Gerber.StateMachine.prototype = Object.create(Gerber.EventEmitter.prototype);
    Gerber.StateMachine.prototype.constructor = Gerber.StateMachine;

    Gerber.StateMachine.prototype.dispatch = function (action) {
        var currentTransitions = this.transitions[this.state];
        if (!currentTransitions) return false;

        for (var i = 0; i < currentTransitions.length; i++) {
            var transition = currentTransitions[i];
            var conditions = transition.where(action);
            var valid = conditions.every(function (c) { return c; });
            if (valid) {
                this.prevstate = this.state;
                this.state = transition.to;
                this.emit("#Transition", action);
                this.emit(this.state, action);
                return true;
            }
        }
        return false;
    };

    /**
     * Gerber FSM - Engine state controller
     */
    Gerber.FSM = function (engine) {
        Gerber.StateMachine.call(this, State.IDLE, Gerber.StateTransitions);

        this.engine = engine;
        this.errorState = null;

        // Bind handlers
        this.onSetup = this.onSetup.bind(this);
        this.onInit = this.onInit.bind(this);
        this.onRender = this.onRender.bind(this);
        this.onShow = this.onShow.bind(this);

        // Setup listeners
        this.on(State.SETUP, this.onSetup);
        this.on(State.INIT, this.onInit);
        this.on(State.RENDER, this.onRender);
        this.on(State.SHOW, this.onShow);
    };

    Gerber.FSM.prototype = Object.create(Gerber.StateMachine.prototype);
    Gerber.FSM.prototype.constructor = Gerber.FSM;

    /**
     * Go to Setup state
     */
    Gerber.FSM.prototype.goToSetup = function (core) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.dispatch({ type: ActionType.Setup, core: core }) || self.state === State.SETUP) {
                self.on(State.SETUP_COMPLETED, function () { resolve(); });
                self.on(State.CRASHED, function (err) {
                    self.errorState = err;
                    reject(self.errorState);
                });
            } else if (self.state === State.CRASHED) {
                reject(self.errorState);
            } else {
                resolve();
            }
        });
    };

    /**
     * Go to Init state
     */
    Gerber.FSM.prototype.goToInit = function (document) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.dispatch({ type: ActionType.Init, document: document }) || self.state === State.INIT) {
                CORE.bus.emit("GerberEngine:beforeDocumentInit", document);
                self.on(State.INIT_COMPLETED, function () {
                    CORE.bus.emit("GerberEngine:afterDocumentInit");
                    resolve();
                });
                self.on(State.CRASHED, function (err) {
                    self.errorState = err;
                    reject(self.errorState);
                });
            } else if (self.state === State.CRASHED) {
                reject(self.errorState);
            } else {
                resolve();
            }
        });
    };

    /**
     * Go to Render state
     */
    Gerber.FSM.prototype.goToRender = function (document) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.dispatch({ type: ActionType.Render, document: document }) || self.state === State.RENDER) {
                CORE.bus.emit("GerberEngine:beforeImportPCB", document);
                self.on(State.RENDER_COMPLETED, function () {
                    CORE.bus.emit("GerberEngine:afterImportPCB", document);
                    resolve();
                });
                self.on(State.CRASHED, function (err) {
                    self.errorState = err;
                    reject(self.errorState);
                });
            } else if (self.state === State.CRASHED) {
                reject(self.errorState);
            } else {
                resolve();
            }
        });
    };

    /**
     * Go to Show state
     */
    Gerber.FSM.prototype.goToShow = function (workspace, renderMode) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.dispatch({ type: ActionType.Show, workspace: workspace, renderMode: renderMode }) || self.state === State.SHOW) {
                resolve();
            } else {
                reject("Cannot show. Wrong state [" + self.state + "]");
            }
        });
    };

    /**
     * Helper for next tick
     */
    Gerber.FSM.prototype.nextTick = function (fn) {
        setTimeout(fn, 1);
    };

    /**
     * Setup handler
     */
    Gerber.FSM.prototype.onSetup = function (action) {
        var self = this;
        try {
            this.engine.doSetup(action.core);
            this.nextTick(function () {
                self.dispatch({ type: ActionType.SetupComplete });
            });
        } catch (err) {
            this.nextTick(function () {
                self.dispatch({ type: ActionType.Error, error: err });
            });
        }
    };

    /**
     * Init handler
     */
    Gerber.FSM.prototype.onInit = function (action) {
        var self = this;
        this.engine.doInit(action.document).then(function () {
            self.dispatch({ type: ActionType.InitComplete });
        }).catch(function (err) {
            self.dispatch({ type: ActionType.Error, error: err });
        });
    };

    /**
     * Render handler
     */
    Gerber.FSM.prototype.onRender = function (action) {
        var self = this;
        try {
            this.engine.doRender(action.document);
            this.nextTick(function () {
                self.dispatch({ type: ActionType.RenderComplete });
            });
        } catch (err) {
            this.nextTick(function () {
                self.dispatch({ type: ActionType.Error, error: err });
            });
        }
    };

    /**
     * Show handler
     */
    Gerber.FSM.prototype.onShow = function (action) {
        var self = this;
        try {
            this.engine.doShow(action.workspace, action.renderMode);
        } catch (err) {
            this.nextTick(function () {
                self.dispatch({ type: ActionType.Error, error: err });
            });
        }
    };

})(window.Gerber = window.Gerber || {});
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
/**
 * Gerber Engine - Entry Point
 * 
 * Registration with addModule for Gerber engine.
 */
"use strict";

(function () {
    var CORE = window.__CORE__;

    // Check if modular components are loaded
    if (!window.Gerber || !window.Gerber.Engine) {
        console.error("[Gerber] Engine not found. Load modules first.");
        return;
    }

    if (!CORE) {
        console.error("[Gerber] __CORE__ not found.");
        return;
    }

    // Module configuration (simple pattern - no createModule needed)
    var moduleConfig = {
        type: "Engine",
        name: "GerberEngine",
        description: "Presents Gerber documents engine module",
        create: function () {
            return new Gerber.Engine();
        }
    };

    // Register with core
    CORE.addModule(moduleConfig);

    console.log("[Gerber] Engine registered via addModule - 4 modules");
})();
